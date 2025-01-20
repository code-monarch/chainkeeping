"use client";
import ActivityLogs from "@/pattern/practitioner/templates/activity-logs";
import React from "react";

const ActivityLog = () => {
	return (
		<div className='w-full min-h-screen max-sm:mt-14 h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<ActivityLogs />
		</div>
	);
};

export default ActivityLog;
