import { PortfolioStats } from "../organisms/portfolio-stats"
import { Button } from "@chainkeeping/ui"
import { PortfolioStats } from "../organisms/portfolio-stats"


const mockStats = {
    costBasis: 40453456,
    marketValue: 36068765,
    unrealizedGain: 6343087,
}

const mockAssets = [
    { symbol: "USDT", balance: "86,453,000", value: "86,453,000" },
    { symbol: "USDC", balance: "7,905.67", value: "5,450,908" },
    { symbol: "MATIC", balance: "2,678.9850", value: "4,748,432" },
    { symbol: "BTC", balance: "0.087043", value: "4,086,323" },
]

const mockTransactions = [
    {
        id: "1",
        date: "Feb 16, 2023",
        type: "Trade",
        platform: "Binance",
        amount: "-300,067",
        currency: "USDT",
        status: "Completed",
    },
    // Add more mock transactions as needed
]

export default function DashboardPageTemp() {
    return (
        <div className="container mx-auto py-6 space-y-8">
            <PortfolioStats stats={mockStats} />

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Recent transactions</h2>
                        <Button variant="link">View all</Button>
                    </div>
                    <TransactionsTable transactions={mockTransactions} />
                </div>

                <div className="space-y-6">
                    <PortfolioHoldings assets={mockAssets} />

                    <div className="p-6 border rounded-lg bg-white space-y-4">
                        <div className="flex items-start gap-4">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SselQBk5n3jDqaLG7BCPs7MKEODC7r.png"
                                alt="Connect to practitioner"
                                className="w-16 h-16"
                            />
                            <div>
                                <h3 className="font-semibold">Connect to a practitioner</h3>
                                <p className="text-sm text-muted-foreground">
                                    Securely share tax information with certified practitioners near you.
                                </p>
                            </div>
                        </div>
                        <Button className="w-full">Connect now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

