import React from "react";
import FileIcon from "../atoms/doc-icon";

const SelectFileWidget = () => {
	return (
		<div className='flex w-full bg-[#F5F8FA] p-2 rounded-[6px]'>
			<div className='border text-xs flex gap-1 items-center justify-center border-dashed rounded p-2 w-full'>
				<FileIcon />
				<p className='font-bold'>
					Select File{" "}
					<span className='text-grey-400'>
						(supports .jpg, .png, .pdf. files up to 20MB)
					</span>
				</p>
			</div>
		</div>
	);
};

export default SelectFileWidget;
