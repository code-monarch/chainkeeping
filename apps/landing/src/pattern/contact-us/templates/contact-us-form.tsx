'use client'

import { SOCIALS } from '@/lib/routes'
import MapPinIcon from '@/pattern/common/atoms/map-pin-icon'
import { Button, Card, CardContent, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from '@chainkeeping/ui'
import { Facebook, Linkedin } from 'lucide-react'

export default function ContactForm() {
    return (
        <div className="w-full lg:w-[701px] min-h-[442px] h-fit mx-auto space-y-[32px]">
            <Card className='card-shadow'>
                <CardContent>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm">
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="yourmail@gmail.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="source" className="text-sm">
                                    How did you hear about us?
                                </label>
                                <Select>
                                    <SelectTrigger className="h-[48px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="social">Social Media</SelectItem>
                                        <SelectItem value="friend">Friend</SelectItem>
                                        <SelectItem value="search">Search Engine</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm">
                                    First Name
                                </label>
                                <Input
                                    id="firstName"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm">
                                    Last Name
                                </label>
                                <Input
                                    id="lastName"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="inquiry" className="text-sm">
                                Your inquiry / Feedback
                            </label>
                            <Textarea
                                id="inquiry"
                                placeholder="Your text here..."
                                className="min-h-[96px]"
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button>
                                Submit
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <div className="w-full h-[80px] flex justify-center gap-4">
                <a
                    href={SOCIALS.facebook}
                    className="w-full h-full flex items-center justify-center gap-2 text-sm text-gray-600 p-6 border rounded-[8px]"
                >
                    <Facebook />
                    Facebook
                </a>
                <a
                    href={SOCIALS.linkedIn}
                    className="w-full h-full flex items-center justify-center gap-2 text-sm text-gray-600 p-6 border rounded-[8px]"
                >
                    <Linkedin />
                    LinkedIn
                </a>
            </div>

            <div className="h-[80px] w-full flex justify-center items-center gap-2 text-sm text-gray-600 border rounded-[8px]">
                <MapPinIcon />
                <p>No. 3, Rabat Street, off Herbert Macaulay way, Wuse Zone 6, Abuja, Nigeria</p>
            </div>
        </div>
    )
}

