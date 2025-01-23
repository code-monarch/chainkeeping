import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@chainkeeping/ui"

interface BlogCardProps {
    title: string
    author: string
    date: string
    categories: string[]
    image: string
    slug: string
}

export function BlogCard({
    title,
    author,
    date,
    categories,
    image,
    slug,
}: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[16/9] relative">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <CardContent className="p-4">
                    <div className="flex gap-2 mb-2">
                        {categories.map((category) => (
                            <span
                                key={category}
                                className="text-xs font-medium text-gray-500 hover:text-primary"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                        {title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{author}</span>
                        <span>•</span>
                        <time dateTime={date}>{date}</time>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

