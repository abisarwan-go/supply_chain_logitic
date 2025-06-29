import { Configuration } from "./openapi/configuration";
import { AppApi, OperationApi } from "./openapi/api";
import type {
  CreatePickUpPointRequestDto,
  CreateVehicleRequestDto,
  AllPickUpPointResponseDto,
  CreatePickUpPointResponseDto,
  CreateVehicleResponseDto,
} from "./openapi/models";

const openAPIConfiguration = new Configuration({
  basePath: "http://localhost:3000",

  baseOptions: {
    withCredentials: true,
  },
});

// OpenAPI clients
export const apiClientOpenAPI = {
  app: new AppApi(openAPIConfiguration),
  operation: new OperationApi(openAPIConfiguration),
};

export const allPickUpPointAPI = async (): Promise<
  AllPickUpPointResponseDto[]
> => {
  const response = await apiClientOpenAPI.operation.allPickUpPoint();
  return response.data;
};

export const createPickUpPointAPI = async (
  body: CreatePickUpPointRequestDto
): Promise<CreatePickUpPointResponseDto> => {
  const response = await apiClientOpenAPI.operation.createPickUpPoint(body);
  return response.data;
};

export const createVehicleAPI = async (
  body: CreateVehicleRequestDto
): Promise<CreateVehicleResponseDto> => {
  const response = await apiClientOpenAPI.operation.createVehicle(body);
  return response.data;
};
