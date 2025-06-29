import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const AllPickUpPointResponseDto = z
  .object({
    id: z.string(),
    name: z.string(),
    address: z.string(),
    city: z.string(),
    zipCode: z.string(),
    country: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const CreatePickUpPointRequestDto = z
  .object({
    name: z.string().min(3),
    address: z.string().min(3),
    city: z.string().min(3),
    zipCode: z.string().min(3),
    country: z.string().min(3),
    latitude: z.number(),
    longitude: z.number(),
  })
  .passthrough();
const CreatePickUpPointResponseDto = z
  .object({ message: z.string(), success: z.boolean() })
  .passthrough();
const CreateVehicleRequestDto = z
  .object({
    type: z.enum(['CAR', 'TRUCK']),
    name: z.string().min(3),
    pricePerKm: z.number().gte(0),
    pricePerHour: z.number().gte(0),
    capacityInKg: z.number().gte(0),
    capacityInM3: z.number().gte(0),
    available: z.boolean(),
  })
  .passthrough();
const CreateVehicleResponseDto = z
  .object({ message: z.string(), success: z.boolean() })
  .passthrough();
const AllVehiclesResponseDto = z
  .object({
    id: z.string(),
    name: z.string(),
    type: z.object({}).partial().passthrough(),
    pricePerKm: z.number(),
    pricePerHour: z.number(),
    capacityInKg: z.number(),
    capacityInM3: z.number(),
    available: z.boolean(),
  })
  .passthrough();

export const schemas = {
  AllPickUpPointResponseDto,
  CreatePickUpPointRequestDto,
  CreatePickUpPointResponseDto,
  CreateVehicleRequestDto,
  CreateVehicleResponseDto,
  AllVehiclesResponseDto,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/',
    alias: 'getHello',
    requestFormat: 'json',
    response: z.string(),
  },
  {
    method: 'get',
    path: '/operation/all-pick-up-point',
    alias: 'allPickUpPoint',
    requestFormat: 'json',
    response: z.array(AllPickUpPointResponseDto),
  },
  {
    method: 'get',
    path: '/operation/all-vehicles',
    alias: 'allVehicles',
    requestFormat: 'json',
    response: z.array(AllVehiclesResponseDto),
  },
  {
    method: 'post',
    path: '/operation/create-pick-up-point',
    alias: 'createPickUpPoint',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CreatePickUpPointRequestDto,
      },
    ],
    response: CreatePickUpPointResponseDto,
  },
  {
    method: 'post',
    path: '/operation/create-vehicle',
    alias: 'createVehicle',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: CreateVehicleRequestDto,
      },
    ],
    response: CreateVehicleResponseDto,
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
