import { useState } from "react";
import {
  Package,
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
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export default function PickUpPoint() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showAddForm, setShowAddForm] = useState(false);

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "maintenance", label: "Maintenance" },
  ];

  const mockPickupPoints = [
    {
      id: "PP-001",
      name: "Downtown Hub",
      address: "123 Main Street, Downtown",
      city: "New York",
      status: "active",
      packages: 45,
      capacity: 100,
      lastActivity: "2 hours ago",
      manager: "John Smith",
      phone: "+1 (555) 123-4567",
      hours: "24/7",
      coordinates: { lat: 40.7128, lng: -74.006 },
    },
    {
      id: "PP-002",
      name: "Mall Location",
      address: "456 Shopping Avenue, Midtown",
      city: "New York",
      status: "active",
      packages: 23,
      capacity: 75,
      lastActivity: "1 hour ago",
      manager: "Sarah Johnson",
      phone: "+1 (555) 234-5678",
      hours: "8AM-10PM",
      coordinates: { lat: 40.7589, lng: -73.9851 },
    },
    {
      id: "PP-003",
      name: "University Center",
      address: "789 Campus Drive, University District",
      city: "New York",
      status: "active",
      packages: 67,
      capacity: 150,
      lastActivity: "30 minutes ago",
      manager: "Mike Davis",
      phone: "+1 (555) 345-6789",
      hours: "7AM-11PM",
      coordinates: { lat: 40.7505, lng: -73.9934 },
    },
    {
      id: "PP-004",
      name: "Airport Terminal",
      address: "321 Airport Boulevard, JFK Airport",
      city: "New York",
      status: "maintenance",
      packages: 12,
      capacity: 200,
      lastActivity: "1 day ago",
      manager: "Lisa Wilson",
      phone: "+1 (555) 456-7890",
      hours: "24/7",
      coordinates: { lat: 40.6413, lng: -73.7781 },
    },
    {
      id: "PP-005",
      name: "Suburban Center",
      address: "654 Suburban Road, Queens",
      city: "New York",
      status: "inactive",
      packages: 0,
      capacity: 50,
      lastActivity: "1 week ago",
      manager: "Tom Brown",
      phone: "+1 (555) 567-8901",
      hours: "9AM-6PM",
      coordinates: { lat: 40.7282, lng: -73.7949 },
    },
  ];

  const filteredPoints = mockPickupPoints.filter((point) => {
    const matchesSearch =
      point.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      point.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      point.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || point.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "inactive":
        return "bg-gray-500";
      case "maintenance":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active";
      case "inactive":
        return "Inactive";
      case "maintenance":
        return "Maintenance";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Pick-up Points</h1>
          <p className="text-muted-foreground">
            Manage and monitor all pick-up point locations
          </p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Pick-up Point
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-500" />
            <h3 className="font-semibold">Total Points</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">{mockPickupPoints.length}</p>
          <p className="text-sm text-muted-foreground">Across all locations</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold">Active Points</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">
            {mockPickupPoints.filter((p) => p.status === "active").length}
          </p>
          <p className="text-sm text-muted-foreground">Currently operational</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500" />
            <h3 className="font-semibold">Total Packages</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">
            {mockPickupPoints.reduce((sum, p) => sum + p.packages, 0)}
          </p>
          <p className="text-sm text-muted-foreground">Currently stored</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-500" />
            <h3 className="font-semibold">Staff Members</h3>
          </div>
          <p className="mt-2 text-3xl font-bold">24</p>
          <p className="text-sm text-muted-foreground">Across all locations</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search pick-up points..."
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

      {/* Pick-up Points Table */}
      <div className="rounded-lg border bg-card">
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold">
            Pick-up Points ({filteredPoints.length})
          </h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {filteredPoints.map((point) => (
              <div
                key={point.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{point.name}</h3>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(
                          point.status
                        )} text-white`}
                      >
                        {getStatusText(point.status)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {point.address}
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {point.packages} packages
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Capacity: {point.capacity}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Last activity: {point.lastActivity}
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

      {/* Add Pick-up Point Form (Modal-like) */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Add New Pick-up Point</h2>
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
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Enter pick-up point name" />
              </div>
              <div>
                <label className="text-sm font-medium">Address</label>
                <Input placeholder="Enter full address" />
              </div>
              <div>
                <label className="text-sm font-medium">City</label>
                <Input placeholder="Enter city" />
              </div>
              <div>
                <label className="text-sm font-medium">Capacity</label>
                <Input type="number" placeholder="Enter capacity" />
              </div>
              <div>
                <label className="text-sm font-medium">Manager</label>
                <Input placeholder="Enter manager name" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <Input placeholder="Enter phone number" />
              </div>
              <div>
                <label className="text-sm font-medium">Operating Hours</label>
                <Input placeholder="e.g., 8AM-10PM or 24/7" />
              </div>
              <div className="flex gap-2 pt-4">
                <Button
                  className="flex-1"
                  onClick={() => setShowAddForm(false)}
                >
                  Add Pick-up Point
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
