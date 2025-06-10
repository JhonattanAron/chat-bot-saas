import Link from "next/link";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bot,
  MessageSquare,
  Users,
  BarChart3,
  ArrowUpRight,
  PlusCircle,
  AlertCircle,
  Zap,
} from "lucide-react";
import { TokenCounterGlobal } from "@/components/token-counter-global";

export default function DashboardPage() {
  // Token usage data
  const tokenUsage = {
    input: 1250,
    output: 890,
    maxTokens: 10000,
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your chatbots.
            </p>
          </div>
          <Link href="/dashboard/bots/create">
            <Button className="gap-1">
              <PlusCircle className="h-4 w-4" />
              Create Bot
            </Button>
          </Link>
        </div>

        {/* Token Usage Card */}
        <Card className="futuristic-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Token Usage
            </CardTitle>
            <CardDescription>
              Monitor your token consumption and limits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TokenCounterGlobal
              inputTokens={tokenUsage.input}
              outputTokens={tokenUsage.output}
              maxTokens={tokenUsage.maxTokens}
            />
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="futuristic-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Bots
                  </CardTitle>
                  <Bot className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">
                    +2 from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="futuristic-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Messages
                  </CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,350</div>
                  <p className="text-xs text-muted-foreground">
                    +180 from last week
                  </p>
                </CardContent>
              </Card>
              <Card className="futuristic-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="futuristic-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Conversion Rate
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.3%</div>
                  <p className="text-xs text-muted-foreground">
                    +5.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 futuristic-card">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your chatbots' activity over the last 30 days.
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Activity chart will appear here
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3 futuristic-card">
                <CardHeader>
                  <CardTitle>Your Bots</CardTitle>
                  <CardDescription>
                    Status of your active chatbots.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium">Support Bot</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          Online
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium">Sales Bot</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          Online
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        <span className="text-sm font-medium">
                          WhatsApp Bot
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          Maintenance
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <span className="text-sm font-medium">Product Bot</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          Offline
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent
            value="analytics"
            className="h-[400px] flex items-center justify-center"
          >
            <div className="text-center">
              <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Detailed analytics will appear here.
              </p>
            </div>
          </TabsContent>
          <TabsContent
            value="reports"
            className="h-[400px] flex items-center justify-center"
          >
            <div className="text-center">
              <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">Reports</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your custom reports will appear here.
              </p>
            </div>
          </TabsContent>
          <TabsContent
            value="notifications"
            className="h-[400px] flex items-center justify-center"
          >
            <div className="text-center">
              <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">Notifications</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You have no new notifications.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
