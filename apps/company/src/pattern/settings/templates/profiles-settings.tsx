"use client"

import { useParams, usePathname, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormItem, FormLabel, FormMessage, Button, Card, CardContent, FormField } from "@chainkeeping/ui"
import LocationSelector from "../organisms/locator-selector"
import { ProfileFormSection } from "../organisms/profile-form-section"
import { ProfileSettingsFormData, profileSettingsSchema } from "@/pattern/types"

export default function ProfileSettings() {
	const { push } = useRouter()
	const pathname = usePathname()

	const form = useForm<ProfileSettingsFormData>({
		resolver: zodResolver(profileSettingsSchema),
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			country: "",
			state: "",
			nin: "",
			registrationId: "",
		},
	})

	const {
		handleSubmit,
		formState: { isDirty },
		setValue,
	} = form

	const onSubmit = (data: ProfileSettingsFormData) => {
		console.log("Submitted:", data)
		push(`${pathname}?additional-info=true`)
	}

	const basicInfoFields = [
		{
			name: "firstName" as const,
			label: "First Name",
			placeholder: "First name",
			autoComplete: "given-name",
		},
		{
			name: "lastName" as const,
			label: "Last Name",
			placeholder: "Last name",
			autoComplete: "family-name",
		},
		{
			name: "email" as const,
			label: "Email Address",
			placeholder: "johndoe@mail.com",
			type: "email",
			autoComplete: "email",
		},
		{
			name: "phoneNumber" as const,
			label: "Phone Number",
			placeholder: "+1234567890",
			type: "tel",
			autoComplete: "tel",
		},
	]

	const otherInfoFields = [
		{
			name: "nin" as const,
			label: "National Identity Number (NIN)",
			placeholder: "0123456789",
		},
		{
			name: "registrationId" as const,
			label: "Registration ID",
			placeholder: "TW0000001",
		},
	]

	return (
		<div className="w-full min-h-screen">
			<Card className="max-w-[850px] bg-white">
				<CardContent className="p-6">
					<Form {...form}>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							<ProfileFormSection title="BASIC INFORMATION" fields={basicInfoFields} form={form} />

							<FormField
								control={form.control}
								name="country"
								render={({ field }) => (
									<FormItem className="w-full flex flex-col gap-2">
										<FormLabel>Country</FormLabel>
										<LocationSelector
											onCountryChange={(country) => {
												setValue("country", country?.name || "")
											}}
											onStateChange={(state) => {
												setValue("state", state?.name || "")
											}}
										/>
										<FormMessage />
									</FormItem>
								)}
							/>

							<ProfileFormSection title="OTHER INFORMATION" fields={otherInfoFields} form={form} />

							<div className="flex flex-col gap-4">
								<Button type="submit" disabled={!isDirty} className="w-full bg-primary">
									Save Changes
								</Button>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	)
}

