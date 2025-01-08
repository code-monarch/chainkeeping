import React, { useState } from "react";
import { Button, Checkbox } from "@chainkeeping/ui";
import { RxCaretSort } from "react-icons/rx";
import { BiSolidSortAlt } from "react-icons/bi";
import SortIcon from "../atoms/sort-icon";
import CopyIcon from "../atoms/copy-icon";
import Modal from "../molecules/modal-compoent";
import SuccesIcon from "../atoms/success-icon";

type SortOrder = "asc" | "desc" | null;
type Tax = {
	id: string;
	tax: string;
	assessmentPeriod: string;
	assessmentNumber: string;
	rrr: string;
	dueDate: string;
	dueTime: string;
	action: string;
};

const TaxesDueTable = () => {
	const [sortColumn, setSortColumn] = useState<string | null>(null);
	const [sortOrder, setSortOrder] = useState<SortOrder>(null);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchText, setSearchText] = useState("");

	const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

	const [orders, setOrders] = useState<Tax[]>([
		{
			id: "1",
			tax: "Capital Gains Tax - CGT",
			assessmentPeriod: "Dec 31, 2023",
			assessmentNumber: "#01234567",
			rrr: "-",
			dueDate: "Jun 30, 2023",
			dueTime: "04:29 PM",
			action: "Process",
		},
		{
			id: "2",
			tax: "Pay As You Earn - PAYE",
			assessmentPeriod: "FEB 28, 2023",
			assessmentNumber: "#01234567",
			rrr: "-",
			dueDate: "Apr 10, 2023",
			dueTime: "04:29 PM",
			action: "Process",
		},
		{
			id: "3",
			tax: "Personal Income Tax - PIT",
			assessmentPeriod: "DEC 31, 2023",
			assessmentNumber: "#01234567",
			rrr: "0123-5678-9012",
			dueDate: "Jun 30, 2023",
			dueTime: "04:29 PM",
			action: "Processed",
		},
		{
			id: "4",
			tax: "Value Added Tax - VAT",
			assessmentPeriod: "FEB 28, 2023",
			assessmentNumber: "#01234567",
			rrr: "0123-5678-9012",
			dueDate: "Jun 30, 2023",
			dueTime: "04:29 PM",
			action: "Processed",
		},
	]);

	const toggleSort = (column: keyof Tax) => {
		const isAscending = sortColumn === column && sortOrder === "asc";
		setSortOrder(isAscending ? "desc" : "asc");
		setSortColumn(column); // Now correctly typed to accept `string`

		const sortedOrders = [...orders].sort((a, b) => {
			if (a[column] < b[column]) return isAscending ? 1 : -1;
			if (a[column] > b[column]) return isAscending ? -1 : 1;
			return 0;
		});

		setOrders(sortedOrders); // Ensure `setOrders` is also correctly typed
	};

	const filteredOrders = orders.filter((order: any) =>
		Object.values(order).some((value) => {
			if (typeof value === "string" || typeof value === "number") {
				return value
					.toString()
					.toLowerCase()
					.includes(searchText.toLowerCase());
			}
			return false;
		})
	);

	const indexOfLastRow = currentPage * rowsPerPage;
	const indexOfFirstRow = indexOfLastRow - rowsPerPage;
	const currentRows = filteredOrders.slice(indexOfFirstRow, indexOfLastRow);

	const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);

	const changePage = (page: number) => {
		if (page > 0 && page <= totalPages) setCurrentPage(page);
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text).then(
			() => alert("RRR copied to clipboard!"),
			(err) => console.error("Failed to copy RRR: ", err)
		);
	};

	return (
		<div className='w-full overflow-x-auto border rounded-lg'>
			<table className='w-full min-w-[1000px] border-separate border-spacing-0 text-left rounded-lg'>
				<thead>
					<tr className='bg-[#F5F8FA] rounded-lg overflow-hidden'>
						<th className='cursor-pointer whitespace-nowrap p-4 text-sm '>
							<p className='flex items-center gap-2'>
								<Checkbox className='text-lg' />
							</p>
						</th>

						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("tax")}
						>
							<p className='flex items-center gap-2'>
								Tax <SortIcon />
							</p>
						</th>
						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("assessmentPeriod")}
						>
							<p className='flex items-center gap-2'>
								Assessment Period <SortIcon />
							</p>
						</th>
						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("assessmentNumber")}
						>
							<p className='flex items-center gap-2'>
								Assessment Number <SortIcon />
							</p>
						</th>
						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("rrr")}
						>
							<p className='flex items-center gap-2'>
								RRR <SortIcon />
							</p>
						</th>
						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("dueDate")}
						>
							<p className='flex items-center gap-2'>
								Due Date <SortIcon />
							</p>
						</th>
						<th
							className='cursor-pointer whitespace-nowrap  p-4 text-sm'
							onClick={() => toggleSort("action")}
						>
							<p className='flex items-center gap-2'>
								Action <SortIcon />
							</p>
						</th>
					</tr>
				</thead>
				<tbody>
					{currentRows.map((order: Tax) => (
						<tr key={order.id} className='bg-white'>
							<td className='whitespace-nowrap border-b px-4 py-2 text-sm'>
								<div className='flex items-center gap-2'>
									<Checkbox className='text-lg' />
								</div>
							</td>

							<td className='whitespace-nowrap border-b px-4 py-2 text-sm'>
								<div className='flex items-center gap-2'>{order.tax}</div>
							</td>
							<td className='whitespace-nowrap border-b px-4 py-3 text-sm'>
								<div className='flex items-center gap-2'>
									{order.assessmentPeriod}
								</div>
							</td>

							<td className='whitespace-nowrap border-b px-4 py-1 text-sm'>
								<div className='flex items-center gap-2 pr-4'>
									{order.assessmentNumber}
								</div>
							</td>
							<td className='whitespace-nowrap border-b px-4 py-1 text-sm'>
								<div
									className='flex items-center gap-2 pr-4 cursor-pointer'
									onClick={() => handleCopy(order.rrr)}
								>
									{order.rrr}
									{order.action === "Processed" && <CopyIcon />}
								</div>
							</td>
							<td className='whitespace-nowrap border-b px-4 py-1 text-sm'>
								<div className='flex flex-col items-start pr-4'>
									<p>{order.dueDate}</p>
									<p className='text-[10px] text-[#64748B]'>{order.dueTime}</p>
								</div>
							</td>
							<td className='whitespace-nowrap border-b px-4 py-3 text-sm'>
								<Button
									variant={
										order.action === "Processed"
											? "primaryOutline"
											: "secondaryOutline"
									}
									size='sm'
									onClick={openModal}
									style={
										order.action === "Processed" ? { color: "#64748B" } : {}
									}
									disabled={order.action === "Processed"} // Disable if action is "Processed"
								>
									{order.action}
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<div className='p-4 flex flex-col gap-7 items-center'>
					<SuccesIcon />

					<p className='text-[#64748B] text-sm text-center'>
						Tax <span className='text-[#202B3C]'>#01234567</span> has been been
						processed successfully, copy the RRR number below and proceed to
						pay.
					</p>
					<div className='flex w-full rounded-lg border border-dashed py-4 px-3 justify-between items-center'>
						<p className='text-sm text-[#4F627D]'>0123-5678-9012</p>
						<CopyIcon />
					</div>
					<Button onClick={closeModal} className='w-full'>
						Ok, got it
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default TaxesDueTable;
