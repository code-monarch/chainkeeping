import { Card, CardContent } from "@chainkeeping/ui"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import TotalAssetsStatsCardIcon from "../atoms/total-assets-stats-card-icon";

type PortfolioStats = {
    costBasis: string;
    marketValue: string;
    unrealizedGain: number;
}

interface IPortfolioStatsProps {
    stats: PortfolioStats
}

const stats = [
    {
        icon:
    }
]

export const PortfolioStats = ({ stats }: IPortfolioStatsProps) => {
    const gainIsPositive = stats.unrealizedGain > 0

    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
                <CardContent className="p-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3 pb-2 border-b">
                            <span><TotalAssetsStatsCardIcon /></span>
                            <p className="text-sm text-muted-foreground">Total Assets <span className="text-foreground font-medium">(Cost Basis)</span></p>
                        </div>
                        <h3 className="text-2xl font-bold">${stats.costBasis.toLocaleString()}</h3>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-muted-foreground">Total Assets <span className="text-foreground font-medium">(Market Value)</span></p>
                        <h3 className="text-2xl font-bold">${stats.marketValue.toLocaleString()}</h3>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-muted-foreground">Unrealized Gain/Loss</p>
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            ${Math.abs(stats.unrealizedGain).toLocaleString()}
                            {gainIsPositive ? (
                                <ArrowUpRight className="w-4 h-4 text-green-500" />
                            ) : (
                                <ArrowDownRight className="w-4 h-4 text-red-500" />
                            )}
                        </h3>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

