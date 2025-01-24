import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Asset } from "@/types/finance"

interface PortfolioHoldingsProps {
    assets: Asset[]
}

export function PortfolioHoldings({ assets }: PortfolioHoldingsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top Holdings</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {assets.map((asset) => (
                        <div key={asset.symbol} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={`/tokens/${asset.symbol.toLowerCase()}.svg`} alt={asset.symbol} className="w-6 h-6" />
                                <div>
                                    <p className="font-medium">{asset.symbol}</p>
                                    <p className="text-sm text-muted-foreground">{asset.balance}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-medium">${asset.value}</p>
                                {asset.change && (
                                    <p className={`text-sm ${asset.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                                        {asset.change}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

