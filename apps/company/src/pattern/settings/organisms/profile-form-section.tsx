import { ProfileSettingsFormData } from "@/pattern/types"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Input } from "@chainkeeping/ui"
import type { UseFormReturn } from "react-hook-form"



interface ProfileFormSectionProps {
    title: string
    fields: Array<{
        name: keyof ProfileSettingsFormData
        label: string
        placeholder: string
        type?: string
        autoComplete?: string
    }>
    form: UseFormReturn<ProfileSettingsFormData>
}

export function ProfileFormSection({ title, fields, form }: ProfileFormSectionProps) {
    return (
        <>
            <div className="h-fit lg:h-[30px] flex items-start justify-start pb-2">
                <h2 className="text-base font-bold font-sen text-grey-300">{title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {fields.map((field) => (
                    <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name}
                        render={({ field: formField }) => (
                            <FormItem className="w-full grid gap-2">
                                <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                                <FormControl>
                                    <Input
                                        id={field.name}
                                        placeholder={field.placeholder}
                                        type={field.type || "text"}
                                        autoComplete={field.autoComplete}
                                        {...formField}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
            </div>
        </>
    )
}

