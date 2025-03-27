"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bell, Settings, User, LogOut, ChevronDown } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function UserProfileMenu() {
  const [profileOpen, setProfileOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("account")
  const router = useRouter()

  const handleLogout = () => {
    // In a real app, this would clear authentication tokens
    router.push("/")
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        className="p-2 text-white hover:text-[#64ffda] transition-colors rounded-full hover:bg-white/5"
        onClick={() => setNotificationsOpen(true)}
      >
        <Bell className="h-5 w-5" />
      </button>
      <button
        className="p-2 text-white hover:text-[#64ffda] transition-colors rounded-full hover:bg-white/5"
        onClick={() => setSettingsOpen(true)}
      >
        <Settings className="h-5 w-5" />
      </button>
      <div className="relative group">
        <button
          className="flex items-center space-x-2 py-2 px-3 text-white hover:text-[#64ffda] transition-colors rounded-full hover:bg-white/5"
          onClick={() => setProfileOpen(true)}
        >
          <div className="w-8 h-8 rounded-full bg-[#64ffda]/20 flex items-center justify-center text-[#64ffda]">
            <User className="h-4 w-4" />
          </div>
          <span className="hidden md:inline">John Doe</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        <div className="absolute right-0 top-full mt-1 w-48 bg-[#112240] border border-[#64ffda]/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
          <button
            onClick={() => setProfileOpen(true)}
            className="block w-full text-left px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
          >
            Profile
          </button>
          <button
            onClick={() => setSettingsOpen(true)}
            className="block w-full text-left px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
          >
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm flex items-center"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Profile Dialog */}
      <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
        <DialogContent className="bg-[#112240] border-[#64ffda]/10 text-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>User Profile</DialogTitle>
            <DialogDescription className="text-white/70">View and edit your profile information</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center py-4">
            <div className="w-24 h-24 rounded-full bg-[#64ffda]/20 flex items-center justify-center text-[#64ffda] mb-4">
              <User className="h-12 w-12" />
            </div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-white/70">john.doe@example.com</p>
            <p className="text-[#64ffda] mt-1">Basic Plan</p>
          </div>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="john.doe@example.com"
                className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                defaultValue="(123) 456-7890"
                className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="farmName">Farm Name</Label>
              <Input
                id="farmName"
                defaultValue="Doe Family Farms"
                className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setProfileOpen(false)}
              className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setProfileOpen(false)
                // In a real app, this would save the profile changes
                alert("Profile updated successfully!")
              }}
              className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="bg-[#112240] border-[#64ffda]/10 text-white sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription className="text-white/70">
              Manage your account settings and preferences
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-4 bg-[#0a192f]/50">
              <TabsTrigger
                value="account"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Account
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="appearance"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Appearance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
                />
              </div>

              <div className="pt-4 border-t border-[#64ffda]/10">
                <h3 className="text-lg font-medium mb-2">Subscription</h3>
                <p className="text-white/70 mb-4">
                  You are currently on the <span className="text-[#64ffda] font-medium">Basic Plan</span>
                </p>
                <Link href="/checkout?plan=upgrade">
                  <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Upgrade Plan</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-white/70">Receive email updates about your account</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weather Alerts</Label>
                    <p className="text-sm text-white/70">Get notified about important weather changes</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Field Alerts</Label>
                    <p className="text-sm text-white/70">Receive alerts about field conditions</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Updates</Label>
                    <p className="text-sm text-white/70">Receive news about new features and offers</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-white/70">Use dark theme throughout the application</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label>Text Size</Label>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                    >
                      Small
                    </Button>
                    <Button variant="outline" size="sm" className="border-[#64ffda] bg-[#64ffda]/10 text-[#64ffda]">
                      Medium
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                    >
                      Large
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Date Format</Label>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="border-[#64ffda] bg-[#64ffda]/10 text-[#64ffda]">
                      MM/DD/YYYY
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                    >
                      DD/MM/YYYY
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                    >
                      YYYY-MM-DD
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Units</Label>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="border-[#64ffda] bg-[#64ffda]/10 text-[#64ffda]">
                      Imperial
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                    >
                      Metric
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setSettingsOpen(false)}
              className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setSettingsOpen(false)
                // In a real app, this would save the settings
                alert("Settings saved successfully!")
              }}
              className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Notifications Dialog */}
      <Dialog open={notificationsOpen} onOpenChange={setNotificationsOpen}>
        <DialogContent className="bg-[#112240] border-[#64ffda]/10 text-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription className="text-white/70">View your recent notifications</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 max-h-[400px] overflow-y-auto py-4">
            <div className="p-3 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-[#64ffda]">Weather Alert</h3>
                <span className="text-xs text-white/70">Today, 10:30 AM</span>
              </div>
              <p className="text-sm text-white/80">Heavy rain expected in your area in the next 24 hours.</p>
            </div>

            <div className="p-3 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-yellow-400">Field Alert</h3>
                <span className="text-xs text-white/70">Yesterday, 2:15 PM</span>
              </div>
              <p className="text-sm text-white/80">Soil moisture in North Field is below optimal levels.</p>
            </div>

            <div className="p-3 border border-green-500/20 bg-green-500/10 rounded-md">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-green-400">System Update</h3>
                <span className="text-xs text-white/70">Sep 15, 2023</span>
              </div>
              <p className="text-sm text-white/80">New features have been added to your analytics dashboard.</p>
            </div>

            <div className="p-3 border border-blue-500/20 bg-blue-500/10 rounded-md">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-blue-400">Subscription</h3>
                <span className="text-xs text-white/70">Sep 10, 2023</span>
              </div>
              <p className="text-sm text-white/80">Your subscription will renew in 15 days. Click to manage.</p>
            </div>

            <div className="p-3 border border-purple-500/20 bg-purple-500/10 rounded-md">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-purple-400">New Feature</h3>
                <span className="text-xs text-white/70">Sep 5, 2023</span>
              </div>
              <p className="text-sm text-white/80">Try our new soil health analysis tool for better crop management.</p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
              Mark All as Read
            </Button>
            <Button
              onClick={() => setNotificationsOpen(false)}
              className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

