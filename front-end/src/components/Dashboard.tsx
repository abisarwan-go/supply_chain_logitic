import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./ui/sidebar";
import {
  Home,
  Package,
  Truck,
  MapPin,
  Settings,
  BarChart3,
  Users,
  Bell,
} from "lucide-react";
import Map from "../pages/Map";
import PickUpPoint from "../pages/PickUpPoint";
import Vehicle from "../pages/Vehicle";

export function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardHome />;
      case "map":
        return <Map />;
      case "pickup":
        return <PickUpPoint />;
      case "vehicles":
        return <Vehicle />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b border-border/40">
          <div className="flex items-center gap-2 px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Package className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold">Supply Chain</h1>
              <p className="text-xs text-muted-foreground">
                Logistics Dashboard
              </p>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActivePage("dashboard")}
                    isActive={activePage === "dashboard"}
                    tooltip="Dashboard"
                  >
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActivePage("map")}
                    isActive={activePage === "map"}
                    tooltip="Map View"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Map View</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActivePage("pickup")}
                    isActive={activePage === "pickup"}
                    tooltip="Pick-up Points"
                  >
                    <Package className="h-4 w-4" />
                    <span>Pick-up Points</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActivePage("vehicles")}
                    isActive={activePage === "vehicles"}
                    tooltip="Vehicles"
                  >
                    <Truck className="h-4 w-4" />
                    <span>Vehicles</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Analytics</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Reports">
                    <BarChart3 className="h-4 w-4" />
                    <span>Reports</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Team">
                    <Users className="h-4 w-4" />
                    <span>Team</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-t border-border/40">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Notifications">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/40 px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-2 px-4">
            <h1 className="text-lg font-semibold">
              {activePage === "dashboard" && "Dashboard"}
              {activePage === "map" && "Map View"}
              {activePage === "pickup" && "Pick-up Points"}
              {activePage === "vehicles" && "Vehicles"}
            </h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {renderContent()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-blue-500" />
            <h3 className="font-semibold">Active Vehicles</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">24</p>
          <p className="text-sm text-muted-foreground">+2 from yesterday</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold">Pick-up Points</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">156</p>
          <p className="text-sm text-muted-foreground">+5 this week</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-orange-500" />
            <h3 className="font-semibold">Active Routes</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">12</p>
          <p className="text-sm text-muted-foreground">3 pending</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-purple-500" />
            <h3 className="font-semibold">Deliveries Today</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">89</p>
          <p className="text-sm text-muted-foreground">92% completion rate</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border bg-card">
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Vehicle #V-001 completed delivery
                </p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  New pick-up point added in Downtown
                </p>
                <p className="text-xs text-muted-foreground">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Route optimization completed
                </p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Maintenance scheduled for Vehicle #V-015
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Quick Actions</h3>
          <div className="space-y-3">
            <button className="flex w-full items-center gap-3 rounded-md border p-3 text-left hover:bg-accent">
              <Package className="h-4 w-4" />
              <span>Add Pick-up Point</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-md border p-3 text-left hover:bg-accent">
              <Truck className="h-4 w-4" />
              <span>Register Vehicle</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-md border p-3 text-left hover:bg-accent">
              <MapPin className="h-4 w-4" />
              <span>Create Route</span>
            </button>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">API Status</span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Database</span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">GPS Tracking</span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Notifications</span>
              <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
