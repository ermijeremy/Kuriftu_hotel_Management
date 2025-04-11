"use client"

import { useState } from "react"
import { Copy, Share2, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReferPage() {
  const [copied, setCopied] = useState(false)
  const referralCode = "KFT-JOHN123"
  const referralLink = `https://kurifturesorts.com/refer?code=${referralCode}`

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Mock referral history
  const referrals = [
    {
      name: "Sarah Gudeta",
      email: "sarah.j@example.com",
      status: "Completed",
      date: "2024-02-15",
      points: 200,
    },
    {
      name: "Natnael Chen",
      email: "m.chen@example.com",
      status: "Pending",
      date: "2024-03-20",
      points: 0,
    },
  ]

  return (
    <main className="min-h-screen bg-[#f8e0c0] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/profile" className="inline-flex items-center text-[#8B4513] hover:underline mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Profile
          </Link>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold text-[#8B4513] mb-2">Refer Friends & Earn Rewards</h1>
            <p className="text-[#5D4037] mb-6">
              Share your referral code with friends and earn 200 points for each successful booking
            </p>

            <div className="bg-[#EDDCBE] p-6 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-semibold text-[#8B4513]">Your Referral Code</h2>
                  <p className="text-sm text-[#5D4037]">Share this code with your friends</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#8B4513]" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    value={referralCode}
                    readOnly
                    className="bg-white border-none text-center font-bold text-lg text-[#8B4513]"
                  />
                </div>
                <Button
                  className="bg-[#8B4513] hover:bg-[#6D4C41] text-white"
                  onClick={() => copyToClipboard(referralCode)}
                >
                  {copied ? "Copied!" : "Copy Code"}
                  <Copy className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold text-[#8B4513] mb-4">Share Your Referral Link</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input value={referralLink} readOnly className="bg-gray-100 border-none" />
                </div>
                <Button
                  className="bg-[#8B4513] hover:bg-[#6D4C41] text-white"
                  onClick={() => copyToClipboard(referralLink)}
                >
                  {copied ? "Copied!" : "Copy Link"}
                  <Copy className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button className="bg-[#3b5998] hover:bg-[#344e86] text-white">
                <Share2 className="mr-2 h-4 w-4" />
                Facebook
              </Button>
              <Button className="bg-[#1da1f2] hover:bg-[#0d95e8] text-white">
                <Share2 className="mr-2 h-4 w-4" />
                Twitter
              </Button>
              <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                <Share2 className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <Tabs defaultValue="how-it-works">
              <TabsList className="bg-[#EDDCBE] w-full mb-6">
                <TabsTrigger value="how-it-works" className="flex-1 data-[state=active]:bg-white">
                  How It Works
                </TabsTrigger>
                <TabsTrigger value="referral-history" className="flex-1 data-[state=active]:bg-white">
                  Referral History
                </TabsTrigger>
              </TabsList>

              <TabsContent value="how-it-works">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#EDDCBE] flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-[#8B4513]">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#8B4513] mb-1">Share Your Code</h3>
                      <p className="text-[#5D4037]">Share your unique referral code or link with friends and family</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#EDDCBE] flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-[#8B4513]">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#8B4513] mb-1">Friend Books a Stay</h3>
                      <p className="text-[#5D4037]">
                        Your friend uses your referral code when booking a stay at any Kuriftu Resort & Spa location
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#EDDCBE] flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-[#8B4513]">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#8B4513] mb-1">Earn Rewards</h3>
                      <p className="text-[#5D4037]">
                        You earn 200 points for each successful referral after your friend completes their stay
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#EDDCBE] p-4 rounded-lg mt-6">
                    <h3 className="font-semibold text-[#8B4513] mb-2">Referral Program Terms</h3>
                    <ul className="text-sm text-[#5D4037] space-y-2">
                      <li>• Points are awarded after your friend completes their stay</li>
                      <li>• Minimum 2-night stay required for referral to qualify</li>
                      <li>• Your friend also receives 100 bonus points on their first stay</li>
                      <li>• There is no limit to how many friends you can refer</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="referral-history">
                {referrals.length > 0 ? (
                  <div className="space-y-4">
                    {referrals.map((referral, index) => (
                      <Card key={index} className="overflow-hidden border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-[#8B4513]">{referral.name}</h3>
                              <p className="text-sm text-[#5D4037]">{referral.email}</p>
                              <div className="flex items-center mt-2">
                                <span className="text-xs text-gray-500 mr-2">
                                  {new Date(referral.date).toLocaleDateString()}
                                </span>
                                <span
                                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                    referral.status === "Completed"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {referral.status}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              {referral.status === "Completed" ? (
                                <div className="font-bold text-green-600">+{referral.points} points</div>
                              ) : (
                                <div className="text-sm text-yellow-600">Pending</div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="font-semibold text-[#8B4513] mb-2">No Referrals Yet</h3>
                    <p className="text-[#5D4037] mb-4">
                      You haven't referred anyone yet. Share your code to start earning points!
                    </p>
                    <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white">Invite Friends</Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}
