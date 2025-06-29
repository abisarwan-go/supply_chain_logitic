import { useState } from "react";
import {
  MapPin,
  Truck,
  Package,
  Search,
  Filter,
  Layers,
  Navigation,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export default function Map() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "all", label: "All", icon: Layers },
    { id: "vehicles", label: "Vehicles", icon: Truck },
    { id: "pickup", label: "Pick-up Points", icon: Package },
    { id: "routes", label: "Routes", icon: Navigation },
  ];

  const mockVehicles = [
    {
      id: "V-001",
      name: "Delivery Truck 1",
      status: "active",
      location: "Downtown",
      driver: "John Smith",
      eta: "15 min",
    },
    {
      id: "V-002",
      name: "Delivery Truck 2",
      status: "idle",
      location: "Warehouse",
      driver: "Sarah Johnson",
      eta: "N/A",
    },
    {
      id: "V-003",
      name: "Delivery Truck 3",
      status: "maintenance",
      location: "Service Center",
      driver: "Mike Davis",
      eta: "N/A",
    },
    {
      id: "V-004",
      name: "Delivery Truck 4",
      status: "active",
      location: "Suburbs",
      driver: "Lisa Wilson",
      eta: "32 min",
    },
  ];

  const mockPickupPoints = [
    {
      id: "PP-001",
      name: "Downtown Hub",
      address: "123 Main St",
      status: "active",
      packages: 45,
    },
    {
      id: "PP-002",
      name: "Mall Location",
      address: "456 Shopping Ave",
      status: "active",
      packages: 23,
    },
    {
      id: "PP-003",
      name: "University Center",
      address: "789 Campus Dr",
      status: "active",
      packages: 67,
    },
    {
      id: "PP-004",
      name: "Airport Terminal",
      address: "321 Airport Blvd",
      status: "maintenance",
      packages: 12,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search locations, vehicles, or routes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Layers className="h-4 w-4 mr-2" />
            Layers
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {filters.map((filter) => {
          const Icon = filter.icon;
          return (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
            >
              <Icon className="h-4 w-4 mr-2" />
              {filter.label}
            </Button>
          );
        })}
      </div>

      {/* Map Container */}
      <div className="relative h-96 rounded-lg border bg-muted/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Map integration would be implemented here with a mapping service
              like Google Maps or Mapbox
            </p>
            <div className="flex gap-2 justify-center">
              <div className="flex items-center gap-1 text-xs">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>Vehicles</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Pick-up Points</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                <span>Routes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mock Map Markers */}
        <div className="absolute top-8 left-8">
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-2">
            <Truck className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-medium">V-001</span>
          </div>
        </div>
        <div className="absolute top-16 right-16">
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-2">
            <Package className="h-4 w-4 text-green-500" />
            <span className="text-xs font-medium">PP-001</span>
          </div>
        </div>
        <div className="absolute bottom-16 left-16">
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-2">
            <Navigation className="h-4 w-4 text-orange-500" />
            <span className="text-xs font-medium">Route A</span>
          </div>
        </div>
      </div>

      {/* Data Panels */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Vehicles Panel */}
        <div className="rounded-lg border bg-card">
          <div className="border-b p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Active Vehicles
              </h2>
              <span className="text-sm text-muted-foreground">
                {mockVehicles.length} vehicles
              </span>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {mockVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex items-center justify-between p-3 rounded-md border hover:bg-accent"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        vehicle.status === "active"
                          ? "bg-green-500"
                          : vehicle.status === "idle"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <div>
                      <p className="font-medium text-sm">{vehicle.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {vehicle.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {vehicle.driver}
                    </p>
                    <p className="text-xs font-medium">{vehicle.eta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pick-up Points Panel */}
        <div className="rounded-lg border bg-card">
          <div className="border-b p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Package className="h-5 w-5" />
                Pick-up Points
              </h2>
              <span className="text-sm text-muted-foreground">
                {mockPickupPoints.length} locations
              </span>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {mockPickupPoints.map((point) => (
                <div
                  key={point.id}
                  className="flex items-center justify-between p-3 rounded-md border hover:bg-accent"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        point.status === "active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <div>
                      <p className="font-medium text-sm">{point.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {point.address}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {point.packages} packages
                    </p>
                    <p className="text-xs font-medium capitalize">
                      {point.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Route Information */}
      <div className="rounded-lg border bg-card">
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Navigation className="h-5 w-5" />
            Route Overview
          </h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 p-3 rounded-md border">
              <Clock className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Average Delivery Time</p>
                <p className="text-lg font-bold">2.3 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-md border">
              <Truck className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm font-medium">Active Routes</p>
                <p className="text-lg font-bold">12</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-md border">
              <Users className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Drivers Available</p>
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
