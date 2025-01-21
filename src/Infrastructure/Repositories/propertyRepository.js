import { httpClient } from "../Api/httpClient";

export const propertyRepository = {
  getProperties: async () => {
    const response = await httpClient.get("/Property");
    return response.data;
  },
  getPropertyById: async (id) => {
    const response = await httpClient.get(`/Property/${id}`);
    return response.data;
  },
  getPropertiesByFilters: async (filters) => {
    const response = await httpClient.get("/Property/filter", {
      params: filters,
    });
    return response.data;
  },
  createProperty: async (property) => {
    const response = await httpClient.post("/Property", property);
    return response.data;
  },
  updateProperty: async (id, property) => {
    const response = await httpClient.put(`/Property/${id}`, property);
    return response.data;
  },
  deleteProperty: async (id) => {
    const response = await httpClient.delete(`/Property/${id}`);
    return response.data;
  },
};
