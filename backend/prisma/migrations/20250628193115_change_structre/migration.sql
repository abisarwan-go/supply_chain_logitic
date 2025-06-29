-- AlterEnum
ALTER TYPE "ShipmentStatus" ADD VALUE 'ASSIGNED';

-- AlterTable
ALTER TABLE "Shipment" ADD COLUMN     "vehicleId" TEXT;

-- CreateTable
CREATE TABLE "ActiveVehicleAssignment" (
    "id" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "shipmentId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActiveVehicleAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActiveVehicleAssignment_vehicleId_key" ON "ActiveVehicleAssignment"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveVehicleAssignment_shipmentId_key" ON "ActiveVehicleAssignment"("shipmentId");

-- AddForeignKey
ALTER TABLE "ActiveVehicleAssignment" ADD CONSTRAINT "ActiveVehicleAssignment_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveVehicleAssignment" ADD CONSTRAINT "ActiveVehicleAssignment_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
