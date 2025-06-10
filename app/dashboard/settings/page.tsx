import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Bell, Mail, Smartphone, Trash2, Key } from "lucide-react"
import { ApiKeyManager } from "@/components/api-key-manager"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-muted-foreground text-lg">Manage your account settings and preferences.</p>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="glass-effect border border-border/50">
            <TabsTrigger
              value="account"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground"
            >
              Billing
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="api"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground"
            >
              <Key className="h-4 w-4 mr-2" />
              API
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-6">
            <Card className="futuristic-card">
              <CardHeader>
                <CardTitle className="text-xl">Profile</CardTitle>
                <CardDescription>Update your personal information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" defaultValue="John" className="glass-effect border-border/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" defaultValue="Doe" className="glass-effect border-border/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john@example.com"
                    className="glass-effect border-border/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="Acme Inc" className="glass-effect border-border/50" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Save changes
                </Button>
              </CardFooter>
            </Card>

            <Card className="futuristic-card">
              <CardHeader>
                <CardTitle className="text-xl">Password</CardTitle>
                <CardDescription>Change your password.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current password</Label>
                  <Input id="current-password" type="password" className="glass-effect border-border/50" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New password</Label>
                    <Input id="new-password" type="password" className="glass-effect border-border/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm password</Label>
                    <Input id="confirm-password" type="password" className="glass-effect border-border/50" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Update password
                </Button>
              </CardFooter>
            </Card>

            <Card className="futuristic-card border-destructive/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-destructive">Danger Zone</CardTitle>
                    <CardDescription>Irreversible and destructive actions.</CardDescription>
                  </div>
                  <Badge variant="destructive" className="bg-gradient-to-r from-destructive to-destructive/80">
                    Danger
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-destructive/20 bg-gradient-to-r from-destructive/5 to-destructive/10 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Delete Account</h4>
                      <p className="text-sm text-muted-foreground">
                        Permanently delete your account and all of your data.
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="bg-gradient-to-r from-destructive to-destructive/80"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card className="futuristic-card">
              <CardHeader>
                <CardTitle className="text-xl">Subscription</CardTitle>
                <CardDescription>Manage your subscription and billing information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border border-border/50 bg-gradient-to-r from-primary/5 to-primary/10 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Professional Plan</h4>
                      <p className="text-sm text-muted-foreground">$7.00 per month</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600">Active</Badge>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Next billing date</span>
                      <span className="font-medium">June 1, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment method</span>
                      <span className="flex items-center font-medium">
                        <CreditCard className="mr-1 h-3 w-3" /> •••• 4242
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button variant="outline" className="glass-effect">
                    Change Plan
                  </Button>
                  <Button variant="outline" className="glass-effect">
                    Update Payment Method
                  </Button>
                  <Button variant="outline" className="text-destructive hover:text-destructive glass-effect">
                    Cancel Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="futuristic-card">
              <CardHeader>
                <CardTitle className="text-xl">Billing History</CardTitle>
                <CardDescription>View your recent invoices.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 text-sm font-medium">
                    <div>Date</div>
                    <div>Amount</div>
                    <div className="text-right">Status</div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-3 items-center text-sm">
                    <div>May 1, 2025</div>
                    <div>$7.00</div>
                    <div className="flex justify-end">
                      <Badge
                        variant="outline"
                        className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200"
                      >
                        Paid
                      </Badge>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-3 items-center text-sm">
                    <div>Apr 1, 2025</div>
                    <div>$7.00</div>
                    <div className="flex justify-end">
                      <Badge
                        variant="outline"
                        className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200"
                      >
                        Paid
                      </Badge>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-3 items-center text-sm">
                    <div>Mar 1, 2025</div>
                    <div>$7.00</div>
                    <div className="flex justify-end">
                      <Badge
                        variant="outline"
                        className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200"
                      >
                        Paid
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="glass-effect">
                  Download All Invoices
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="futuristic-card">
              <CardHeader>
                <CardTitle className="text-xl">Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <Label htmlFor="email-notifications" className="font-normal">
                        Email Notifications
                      </Label>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4" />
                      <Label htmlFor="push-notifications" className="font-normal">
                        Push Notifications
                      </Label>
                    </div>
                    <Switch id="push-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4" />
                      <Label htmlFor="sms-notifications" className="font-normal">
                        SMS Notifications
                      </Label>
                    </div>
                    <Switch id="sms-notifications" />
                  </div>
                </div>
                <Separator />
                <div className="space-y-6">
                  <h4 className="text-sm font-medium">Notification Types</h4>
                  <div className="grid gap-6">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="bot-activity" className="font-normal">
                        Bot Activity
                      </Label>
                      <Switch id="bot-activity" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="billing-updates" className="font-normal">
                        Billing Updates
                      </Label>
                      <Switch id="billing-updates" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="new-features" className="font-normal">
                        New Features
                      </Label>
                      <Switch id="new-features" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketing" className="font-normal">
                        Marketing & Promotions
                      </Label>
                      <Switch id="marketing" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Save preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <ApiKeyManager />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
