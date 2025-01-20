import { useEffect, useState } from 'react'
import SearchInput from '@/pattern/common/molecules/search-input'
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@chainkeeping/ui';
import { BlogCard } from '../organisms/blog-card';

const articles = [
    {
        title: "2023 Review of Tax compliance for the digital economy",
        author: "Hakeem Morirah",
        date: "July 15, 2023",
        categories: ["Guide", "Compliance"],
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TnYZ3quWynLdtc29Fsr3nSDUB2GfQ3.png",
        slug: "tax-compliance-2023",
    },
    {
        title: "Bitcoin skyrockets as regulatory framework, SEC approves ETF",
        author: "Hakeem Morirah",
        date: "July 15, 2023",
        categories: ["News", "Bitcoin"],
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TnYZ3quWynLdtc29Fsr3nSDUB2GfQ3.png",
        slug: "bitcoin-sec-etf",
    },
    {
        title: "Tax guide: Are my airdropped meme coins taxed too?",
        author: "Hakeem Morirah",
        date: "July 15, 2023",
        categories: ["Guide", "Tax"],
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TnYZ3quWynLdtc29Fsr3nSDUB2GfQ3.png",
        slug: "meme-coins-tax-guide",
    },
    // Duplicate articles for demo purposes
    {
        title: "2023 Review of Tax compliance for the digital economy",
        author: "Hakeem Morirah",
        date: "July 15, 2023",
        categories: ["Guide", "Compliance"],
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TnYZ3quWynLdtc29Fsr3nSDUB2GfQ3.png",
        slug: "tax-compliance-2023-2",
    },
    {
        title: "Bitcoin skyrockets as regulatory framework, SEC approves ETF",
        author: "Hakeem Morirah",
        date: "July 15, 2023",
        categories: ["News", "Bitcoin"],
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TnYZ3quWynLdtc29Fsr3nSDUB2GfQ3.png",
        slug: "bitcoin-sec-etf-2",
    },
    {
        title: "Tax guide: Are my airdropped meme coins taxed too?",
        author: "Hakeem Morirah",
        date: "July 15, 2023",
        categories: ["Guide", "Tax"],
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TnYZ3quWynLdtc29Fsr3nSDUB2GfQ3.png",
        slug: "meme-coins-tax-guide-2",
    },
]

const BlogTemp = () => {
    const { replace } = useRouter(); // Use replace instead of push
    const [search, setSearch] = useState<string>('');
    const [debouncedSearch, setDebouncedSearch] = useState<string>('');

    // Debounce effect to update the debouncedSearch state
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 2000);

        return () => {
            clearTimeout(handler); // Clear timeout if search changes
        };
    }, [search]);

    // Update the query parameter when debouncedSearch changes
    useEffect(() => {
        const url = new URL(window.location.href);
        if (debouncedSearch.trim()) {
            url.searchParams.set('search', debouncedSearch);
        } else {
            url.searchParams.delete('search');
        }
        replace(url.toString()); // Use replace to prevent scroll-to-top
    }, [debouncedSearch, replace]);
    return (
        <div className='w-full h-full flex flex-col justify-center items-start gap-y-12 px-[18px] lg:container mx-auto'>
            <div className='w-full h-[56px] flex flex-col lg:flex-row items-start lg:items-center lg:justify-start gap-6'>
                <div className='w-full max-w-[792px] flex flex-col lg:flex-row items-start lg:items-center lg:justify-start gap-6'>
                    <SearchInput
                        className="h-[56px]"
                        placeholder="Search terms..."
                        value={search}
                        onChange={(e) => setSearch(e?.target?.value)}
                    />
                    <Select>
                        <SelectTrigger className="h-[56px]">
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <BlogCard key={article.slug} {...article} />
                ))}
            </div>
        </div>
    )
}

export default BlogTemp