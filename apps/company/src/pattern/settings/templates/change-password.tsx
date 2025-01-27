"use client"

import React from "react"
import { useRouter } from "next/navigation"
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	SubmitButton,
} from "@chainkeeping/ui"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import PasswordInput from "@/pattern/accounts/molecules/password-input"
import { ChangePasswordFormData, changePasswordSchema } from "@/pattern/types"

const ChangePasswordSettings = () => {
	const { push } = useRouter()

	const form = useForm<ChangePasswordFormData>({
		resolver: zodResolver(changePasswordSchema),
		mode: "onChange",
		defaultValues: {
			oldPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
	})

	const {
		handleSubmit,
		formState: { errors, isDirty },
		control,
	} = form

	const onSubmit = (data: ChangePasswordFormData) => {
		console.log("Submitted: ", data)
		// Here you would typically call an API to change the password
		// For now, we'll just simulate a successful change
		push("/settings?password-changed=true")
	}

	return (
		<div className="w-full flex pt-24 flex-col items-center px-[18px] pb-[144px]">
			<Card className="bg-white w-full max-w-[454px] flex flex-col p-6 rounded-[8px] shadow-md border-none">
				<CardHeader className="h-fit lg:h-[30px] flex items-start justify-start pb-2">
					<CardTitle className="text-base font-bold font-sen text-grey-300">CHANGE PASSWORD</CardTitle>
				</CardHeader>
				<CardContent className="w-full h-full flex flex-col !mt-0">
					<Form {...form}>
						<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
							<FormField
								control={control}
								name="oldPassword"
								render={({ field }) => (
									<FormItem className="w-full grid gap-2">
										<FormLabel htmlFor="oldPassword">Old Password</FormLabel>
										<FormControl>
											<PasswordInput
												id="oldPassword"
												placeholder="Enter your current password"
												autoComplete="current-password"
												error={errors.oldPassword}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={control}
								name="newPassword"
								render={({ field }) => (
									<FormItem className="w-full grid gap-2">
										<FormLabel htmlFor="newPassword">New Password</FormLabel>
										<FormControl>
											<PasswordInput
												id="newPassword"
												placeholder="At least 8 characters long"
												autoComplete="new-password"
												error={errors.newPassword}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem className="w-full grid gap-2">
										<FormLabel htmlFor="confirmPassword">Confirm New Password</FormLabel>
										<FormControl>
											<PasswordInput
												id="confirmPassword"
												placeholder="Confirm your new password"
												autoComplete="new-password"
												error={errors.confirmPassword}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<SubmitButton
								size="sm"
								type="submit"
								disabled={!isDirty}
								className="bg-destructive text-base font-medium mt-[8px]"
							>
								Save
							</SubmitButton>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}

export default ChangePasswordSettings

