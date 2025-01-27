import React, { useMemo, useState } from "react";
import {
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	flexRender,
	Table,
	ColumnDef,
} from "@tanstack/react-table";
import {
	Button,
	Checkbox,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@chainkeeping/ui";
import SortIcon from "@/pattern/transaction/atoms/sort-icon";
import PrevIcon from "@/pattern/transaction/atoms/prev-icon";
import NextIcon from "@/pattern/transaction/atoms/next-icon";
import ExportIcon from "@/pattern/transaction/atoms/export-icon";
import BinanceIcon from "@/pattern/common/atoms/crypto-platforms/binance-icon";
import MetamaskAccountIcon from "../atoms/metamask-account-icon";
import AvalancheAccountIcon from "../atoms/avalanche-account-icon";
import CoinbaseAccountIcon from "../atoms/coinbase-account-icon";
import SearchInput from "@/pattern/transaction/molecules/search-input";

interface Transaction {
	id: string | number;
	dateTime: {
		date: string;
		time: string;
	};
	label: {
		title: string;
		icon?: React.ReactNode;
	};
	account: string;
	accountIcon?: React.ReactNode;
	outFrom: {
		amount: string;
		details: string;
		icon?: React.ReactNode;
	};
	inTo: {
		amount: string;
		details: string;
		icon?: React.ReactNode;
	};
	profitLoss: string;
}

interface UnresolvedTransactionsTableProps {
	data: Transaction[];
}

const AssetsHoldingsTable: React.FC<UnresolvedTransactionsTableProps> = ({
	data,
}) => {
	const [selectedRows, setSelectedRows] = useState<
		Record<string | number, boolean>
	>({});

	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [search, setSearch] = useState("");

	const toggleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	// Handle individual checkbox change
	const handleCheckboxChange = (
		rowId: string | number,
		checked: string | boolean
	) => {
		setSelectedRows((prev: { [x: string]: any }) => ({
			...prev,
			[rowId]: !prev[rowId],
		}));
	};

	// Handle select/deselect all rows
	const handleSelectAll = (
		isChecked: boolean,
		rows: { id: string | number }[]
	) => {
		const newSelectedRows: Record<string | number, boolean> = {};
		rows.forEach((row) => {
			newSelectedRows[row.id] = isChecked;
		});
		setSelectedRows(isChecked ? newSelectedRows : {});
	};

	const filteredData = useMemo(() => {
		let filtered = data;

		// Filter by Year

		// Search Filter
		if (search) {
			filtered = filtered.filter((item) => {
				return (
					item.label.title.toLowerCase().includes(search.toLowerCase()) ||
					item.account.toLowerCase().includes(search.toLowerCase()) ||
					item.dateTime.date.includes(search)
				);
			});
		}

		console.log("Filtered Data:", filtered);
		return filtered;
	}, [data, search]);

	// Define columns
	const columns = React.useMemo(
		() => [
			{
				id: "select",
				header: ({ table }: { table: Table<Transaction> }) => (
					<Checkbox
						checked={table
							.getRowModel()
							.rows.every(
								(row: { id: string | number }) => selectedRows[row.id]
							)}
						indeterminate={
							!table
								.getRowModel()
								.rows.every(
									(row: { id: string | number }) => selectedRows[row.id]
								) &&
							table
								.getRowModel()
								.rows.some(
									(row: { id: string | number }) => selectedRows[row.id]
								)
						}
						onCheckedChange={(checked) => {
							handleSelectAll(checked, table.getRowModel().rows);
						}}
					/>
				),
				cell: ({ row }) => (
					<Checkbox
						checked={!!selectedRows[row.id]}
						onCheckedChange={(checked) => handleCheckboxChange(row.id, checked)}
					/>
				),
			},

			{
				header: "Asset",
				accessorKey: "assets",
				cell: (info: any) => (
					<div className='flex'>
						<div className='text-grey-600 text-sm flex items-center gap-1 w-auto '>
							{info.getValue().icon}
							<span>{info.getValue().title}</span>
						</div>
					</div>
				),
			},
			{
				header: "Amount",
				accessorKey: "amount",
				cell: (info: any) => (
					<div className='flex items-center gap-2'>
						<span className='text-sm text-[#222222]'>{info.getValue()}</span>
					</div>
				),
			},

			{
				header: "Change 24h",
				accessorKey: "change_24h",
				cell: (info: any) => (
					<div className='flex'>
						<div className='text-sm flex gap-1 items-center border border-border px-2 py-1 rounded-full'>
							<span
								className={`h-2 w-2 flex rounded-full ${
									info.getValue().startsWith("-")
										? "bg-destructive"
										: "bg-[#27AE60] h-2 w-2 "
								}`}
							></span>
							{info.getValue()}
						</div>
					</div>
				),
			},
			{
				header: "Change 30d",
				accessorKey: "change_30d",
				cell: (info: any) => (
					<div className='flex'>
						<div className='text-sm flex gap-1 items-center border border-border px-2 py-1 rounded-full'>
							<span
								className={`h-2 w-2 flex rounded-full ${
									info.getValue().startsWith("-")
										? "bg-destructive"
										: "bg-[#27AE60] h-2 w-2 "
								}`}
							></span>
							{info.getValue()}
						</div>
					</div>
				),
			},
			{
				header: "Change 1yr",
				accessorKey: "change_1year",
				cell: (info: any) => (
					<div className='flex'>
						<div className='text-sm flex gap-1 items-center border border-border px-2 py-1 rounded-full'>
							<span
								className={`h-2 w-2 flex rounded-full ${
									info.getValue().startsWith("-")
										? "bg-destructive"
										: "bg-[#27AE60] h-2 w-2 "
								}`}
							></span>
							{info.getValue()}
						</div>
					</div>
				),
			},
		],
		[selectedRows]
	);

	// Use React Table instance
	const table = useReactTable({
		data: filteredData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<div>
			<div className='flex justify-between mb-10'>
				<div className='flex gap-3 '>
					<div className='lg:w-[300px]'>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder='Binance' />
							</SelectTrigger>

							<SelectContent>
								<SearchInput
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									placeholder='Search...'
								/>
								<SelectItem value='all-transactions'>
									<div className='flex gap-2 items-center'>
										<BinanceIcon /> Binance
									</div>
								</SelectItem>
								<SelectItem value='trade'>
									<div className='flex gap-2 items-center'>
										<BinanceIcon /> Binance 2
									</div>
								</SelectItem>
								<SelectItem value='deposit'>
									<div className='flex gap-2 items-center'>
										<MetamaskAccountIcon /> Metamask
									</div>
								</SelectItem>
								<SelectItem value='withdrawal'>
									<div className='flex gap-2 items-center'>
										<AvalancheAccountIcon /> Avalancher C-Chain
									</div>
								</SelectItem>
								<SelectItem value='airdrop'>
									<div className='flex gap-2 items-center'>
										<CoinbaseAccountIcon /> Coinbase
									</div>
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className='flex gap-3'>
					<Button variant='default' size='md' className='text-base px-2 gap-2'>
						<ExportIcon />
						Export
					</Button>
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full table-fixed border border-[red] shadow-md rounded-lg overflow-hidden'>
					<thead className='bg-[#F5F8FA]'>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th
										key={header.id}
										className={`text-left whitespace-nowrap px-6 py-3 border-b border-gray-300 text-sm font-semibold ${
											header.column.columnDef.headerClassName || ""
										}`}
									>
										<div className='flex w-full items-center gap-1'>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
													)}
											{header.column.id !== "actions" &&
												header.column.id !== "select" && <SortIcon />}
										</div>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								className='bg-[#ffffff] whitespace-nowrap hover:bg-gray-50 transition duration-150'
							>
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className='px-6 py-4 border-b border-gray-300 text-sm text-grey-600'
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>

				{/* Pagination */}
				<div className='flex justify-between items-center py-4'>
					<span>
						Showing page {table.getState().pagination.pageIndex + 1} of{" "}
						{table.getPageCount()}
					</span>
					<div className='flex items-center gap-1'>
						{/* Previous Page Button */}
						<button
							className='px-3 py-1 text-grey-400 flex gap-1 items-center rounded disabled:opacity-50'
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							<PrevIcon />
							Prev
						</button>

						{/* Page Numbers */}
						{table.getPageOptions().map((pageIndex) => (
							<button
								key={pageIndex}
								className={`h-6 text-sm w-6 rounded-full ${
									pageIndex === table.getState().pagination.pageIndex
										? "bg-[#D82E2E] text-white"
										: "bg-transparent text-gray-800"
								}`}
								onClick={() => table.setPageIndex(pageIndex)}
							>
								{pageIndex + 1}
							</button>
						))}

						{/* Next Page Button */}
						<button
							className='px-3 py-1 text-grey-400 flex gap-1 items-center rounded disabled:opacity-50'
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							Next
							<NextIcon />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssetsHoldingsTable;
