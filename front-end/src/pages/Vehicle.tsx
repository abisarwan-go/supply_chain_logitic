import { useState } from "react";
import {
  Truck,
  Plus,
  Search,
  Filter,
  MapPin,
  Clock,
  Users,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
  Fuel,
  Wrench,
  Navigation,
  AlertTriangle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export default function Vehicle() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showAddForm, setShowAddForm] = useState(false);

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "idle", label: "Idle" },
    { value: "maintenance", label: "Maintenance" },
    { value: "offline", label: "Offline" },
  ];

  const mockVehicles = [
    {
      id: "V-001",
      name: "Delivery Truck 1",
      type: "Box Truck",
      licensePlate: "NY-12345",
      status: "active",
      driver: "John Smith",
      location: "Downtown",
      fuelLevel: 85,
      mileage: 125000,
      lastMaintenance: "2024-01-15",
      nextMaintenance: "2024-04-15",
      currentRoute: "Route A",
      eta: "15 min",
      phone: "+1 (555) 123-4567",
      capacity: "5000 lbs",
      year: 2020,
      make: "Ford",
      model: "E-350",
    },
    {
      id: "V-002",
      name: "Delivery Truck 2",
      type: "Refrigerated Truck",
      licensePlate: "NY-67890",
      status: "idle",
      driver: "Sarah Johnson",
      location: "Warehouse",
      fuelLevel: 45,
      mileage: 98000,
      lastMaintenance: "2024-02-01",
      nextMaintenance: "2024-05-01",
      currentRoute: "None",
      eta: "N/A",
      phone: "+1 (555) 234-5678",
      capacity: "8000 lbs",
      year: 2021,
      make: "Chevrolet",
      model: "Express 3500",
    },
    {
      id: "V-003",
      name: "Delivery Truck 3",
      type: "Flatbed Truck",
      licensePlate: "NY-11111",
      status: "maintenance",
      driver: "Mike Davis",
      location: "Service Center",
      fuelLevel: 20,
      mileage: 150000,
      lastMaintenance: "2024-03-10",
      nextMaintenance: "2024-03-25",
      currentRoute: "None",
      eta: "N/A",
      phone: "+1 (555) 345-6789",
      capacity: "10000 lbs",
      year: 2019,
      make: "GMC",
      model: "Sierra 3500",
    },
    {
      id: "V-004",
      name: "Delivery Truck 4",
      type: "Box Truck",
      licensePlate: "NY-22222",
      status: "active",
      driver: "Lisa Wilson",
      location: "Suburbs",
      fuelLevel: 70,
      mileage: 75000,
      lastMaintenance: "2024-01-30",
      nextMaintenance: "2024-04-30",
      currentRoute: "Route B",
      eta: "32 min",
      phone: "+1 (555) 456-7890",
      capacity: "5000 lbs",
      year: 2022,
      make: "Ford",
      model: "E-350",
    },
    {
      id: "V-005",
      name: "Delivery Truck 5",
      type: "Van",
      licensePlate: "NY-33333",
      status: "offline",
      driver: "Tom Brown",
      location: "Garage",
      fuelLevel: 0,
      mileage: 200000,
      lastMaintenance: "2024-02-15",
      nextMaintenance: "2024-05-15",
      currentRoute: "None",
      eta: "N/A",
      phone: "+1 (555) 567-8901",
      capacity: "3000 lbs",
      year: 2018,
      make: "Mercedes",
      model: "Sprinter",
    },
  ];

  const filteredVehicles = mockVehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.licensePlate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || vehicle.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "idle":
        return "bg-yellow-500";
      case "maintenance":
        return "bg-orange-500";
      case "offline":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active";
      case "idle":
        return "Idle";
      case "maintenance":
        return "Maintenance";
      case "offline":
        return "Offline";
      default:
        return status;
    }
  };

  const getFuelColor = (level: number) => {
    if (level > 70) return "text-green-500";
    if (level > 30) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Vehicles</h1>
          <p className="text-muted-foreground">
            Manage and track all delivery vehicles
          </p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-blue-500" />
            <h3 className="font-semibold">Total Vehicles</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">{mockVehicles.length}</p>
          <p className="text-sm text-muted-foreground">In fleet</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold">Active Vehicles</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">
            {mockVehicles.filter((v) => v.status === "active").length}
          </p>
          <p className="text-sm text-muted-foreground">On delivery</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-orange-500" />
            <h3 className="font-semibold">In Maintenance</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">
            {mockVehicles.filter((v) => v.status === "maintenance").length}
          </p>
          <p className="text-sm text-muted-foreground">Service required</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-500" />
            <h3 className="font-semibold">Drivers</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">5</p>
          <p className="text-sm text-muted-foreground">Assigned drivers</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search vehicles, drivers, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Vehicles Table */}
      <div className="rounded-lg border bg-card">
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold">
            Vehicles ({filteredVehicles.length})
          </h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{vehicle.name}</h3>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(
                          vehicle.status
                        )} text-white`}
                      >
                        {getStatusText(vehicle.status)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {vehicle.licensePlate} • {vehicle.type}
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-muted-foreground">
                        Driver: {vehicle.driver}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Location: {vehicle.location}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ETA: {vehicle.eta}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1">
                        <Fuel
                          className={`h-3 w-3 ${getFuelColor(
                            vehicle.fuelLevel
                          )}`}
                        />
                        <span className="text-xs text-muted-foreground">
                          {vehicle.fuelLevel}%
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {vehicle.mileage.toLocaleString()} miles
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Capacity: {vehicle.capacity}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Maintenance Alerts */}
      <div className="rounded-lg border bg-card">
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Maintenance Alerts
          </h2>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {mockVehicles
              .filter(
                (v) =>
                  v.status === "maintenance" ||
                  new Date(v.nextMaintenance) <
                    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
              )
              .map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex items-center justify-between p-3 rounded-md border border-orange-200 bg-orange-50"
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                    <div>
                      <p className="font-medium text-sm">{vehicle.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {vehicle.status === "maintenance"
                          ? "Currently in maintenance"
                          : `Maintenance due: ${vehicle.nextMaintenance}`}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Schedule Service
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Add Vehicle Form (Modal-like) */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Add New Vehicle</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAddForm(false)}
              >
                ×
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Vehicle Name</label>
                <Input placeholder="Enter vehicle name" />
              </div>
              <div>
                <label className="text-sm font-medium">License Plate</label>
                <Input placeholder="Enter license plate" />
              </div>
              <div>
                <label className="text-sm font-medium">Vehicle Type</label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Box Truck</option>
                  <option>Refrigerated Truck</option>
                  <option>Flatbed Truck</option>
                  <option>Van</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Make</label>
                <Input placeholder="Enter vehicle make" />
              </div>
              <div>
                <label className="text-sm font-medium">Model</label>
                <Input placeholder="Enter vehicle model" />
              </div>
              <div>
                <label className="text-sm font-medium">Year</label>
                <Input type="number" placeholder="Enter year" />
              </div>
              <div>
                <label className="text-sm font-medium">Capacity</label>
                <Input placeholder="e.g., 5000 lbs" />
              </div>
              <div>
                <label className="text-sm font-medium">Assigned Driver</label>
                <Input placeholder="Enter driver name" />
              </div>
              <div className="flex gap-2 pt-4">
                <Button
                  className="flex-1"
                  onClick={() => setShowAddForm(false)}
                >
                  Add Vehicle
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
