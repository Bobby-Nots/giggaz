"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { useToast } from "@/hooks/use-toast"
import {
  Wallet,
  TrendingUp,
  Download,
  CreditCard,
  Smartphone,
  Gift,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function WalletPage() {
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [withdrawMethod, setWithdrawMethod] = useState("")
  const [isWithdrawing, setIsWithdrawing] = useState(false)
  const { toast } = useToast()

  const walletData = {
    balance: 125.5,
    pending: 45.0,
    totalEarned: 1250.0,
    referralEarnings: 50.0,
    bonuses: 25.0,
  }

  const transactions = [
    {
      id: "1",
      type: "earning",
      description: "Data Entry Task Completed",
      amount: 25.0,
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: "2",
      type: "withdrawal",
      description: "PayPal Withdrawal",
      amount: -50.0,
      date: "2024-01-14",
      status: "completed",
    },
    {
      id: "3",
      type: "bonus",
      description: "Daily Challenge Bonus",
      amount: 5.0,
      date: "2024-01-13",
      status: "completed",
    },
    {
      id: "4",
      type: "referral",
      description: "Referral Bonus - John Doe",
      amount: 10.0,
      date: "2024-01-12",
      status: "completed",
    },
    {
      id: "5",
      type: "earning",
      description: "Survey Completion",
      amount: 8.0,
      date: "2024-01-11",
      status: "pending",
    },
  ]

  const handleWithdraw = async () => {
    if (!withdrawAmount || !withdrawMethod) {
      toast({
        title: "Error",
        description: "Please enter amount and select withdrawal method.",
        variant: "destructive",
      })
      return
    }

    const amount = Number.parseFloat(withdrawAmount)
    if (amount > walletData.balance) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough balance for this withdrawal.",
        variant: "destructive",
      })
      return
    }

    setIsWithdrawing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsWithdrawing(false)
    toast({
      title: "Withdrawal Requested",
      description: `$${amount} withdrawal request has been submitted. You'll receive it within 1-3 business days.`,
    })

    setWithdrawAmount("")
    setWithdrawMethod("")
  }

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "earning":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "withdrawal":
        return <Download className="h-4 w-4 text-red-500" />
      case "bonus":
        return <Gift className="h-4 w-4 text-purple-500" />
      case "referral":
        return <Users className="h-4 w-4 text-blue-500" />
      default:
        return <DollarSign className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "failed":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userRole="worker" isLoggedIn={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Wallet & Earnings</h1>
          <p className="text-gray-600">Manage your earnings and withdraw your money</p>
        </div>

        {/* Wallet Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-primary to-accent text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium opacity-90">Available Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${walletData.balance}</div>
              <p className="text-sm opacity-75 mt-1">Ready to withdraw</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${walletData.pending}</div>
              <p className="text-xs text-muted-foreground">Processing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${walletData.totalEarned}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bonuses</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${walletData.bonuses}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Withdrawal Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="mr-2 h-5 w-5" />
                  Withdraw Money
                </CardTitle>
                <CardDescription>Transfer your earnings to your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="amount">Amount to Withdraw</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    max={walletData.balance}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Available: ${walletData.balance}</p>
                </div>

                <div>
                  <Label htmlFor="method">Withdrawal Method</Label>
                  <Select value={withdrawMethod} onValueChange={setWithdrawMethod}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paypal">
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          PayPal
                        </div>
                      </SelectItem>
                      <SelectItem value="mobile-money">
                        <div className="flex items-center">
                          <Smartphone className="mr-2 h-4 w-4" />
                          Mobile Money
                        </div>
                      </SelectItem>
                      <SelectItem value="bank">
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Bank Transfer
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleWithdraw}
                  disabled={isWithdrawing || !withdrawAmount || !withdrawMethod}
                  className="w-full"
                >
                  {isWithdrawing ? "Processing..." : "Request Withdrawal"}
                </Button>

                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Minimum withdrawal: $10</p>
                  <p>• Processing time: 1-3 business days</p>
                  <p>• No withdrawal fees</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>💡 Earning Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Complete daily challenges for bonus rewards</li>
                  <li>• Refer friends to earn $10 per successful signup</li>
                  <li>• Maintain high ratings for premium gig access</li>
                  <li>• Check for quick-pay gigs daily</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Transaction History */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="space-y-4">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="all">All Transactions</TabsTrigger>
                  <TabsTrigger value="earnings">Earnings</TabsTrigger>
                  <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
                  <TabsTrigger value="bonuses">Bonuses</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>Your complete earning and withdrawal history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            {getTransactionIcon(transaction.type)}
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-sm text-muted-foreground">{transaction.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <p
                                className={`font-semibold ${
                                  transaction.amount > 0 ? "text-green-600" : "text-red-600"
                                }`}
                              >
                                {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount)}
                              </p>
                            </div>
                            {getStatusIcon(transaction.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="earnings">
                <Card>
                  <CardHeader>
                    <CardTitle>Earnings History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions
                        .filter((t) => t.type === "earning")
                        .map((transaction) => (
                          <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              {getTransactionIcon(transaction.type)}
                              <div>
                                <p className="font-medium">{transaction.description}</p>
                                <p className="text-sm text-muted-foreground">{transaction.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <p className="font-semibold text-green-600">+${transaction.amount}</p>
                              {getStatusIcon(transaction.status)}
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="withdrawals">
                <Card>
                  <CardHeader>
                    <CardTitle>Withdrawal History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions
                        .filter((t) => t.type === "withdrawal")
                        .map((transaction) => (
                          <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              {getTransactionIcon(transaction.type)}
                              <div>
                                <p className="font-medium">{transaction.description}</p>
                                <p className="text-sm text-muted-foreground">{transaction.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <p className="font-semibold text-red-600">${Math.abs(transaction.amount)}</p>
                              {getStatusIcon(transaction.status)}
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bonuses">
                <Card>
                  <CardHeader>
                    <CardTitle>Bonus & Referral Earnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions
                        .filter((t) => t.type === "bonus" || t.type === "referral")
                        .map((transaction) => (
                          <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              {getTransactionIcon(transaction.type)}
                              <div>
                                <p className="font-medium">{transaction.description}</p>
                                <p className="text-sm text-muted-foreground">{transaction.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <p className="font-semibold text-green-600">+${transaction.amount}</p>
                              {getStatusIcon(transaction.status)}
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
