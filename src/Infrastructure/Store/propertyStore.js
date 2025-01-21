import { create } from "zustand";

const usePropertyStore = create((set) => ({
  filters: {
    searchTerm: "",
    name: "",
    address: "",
    minPrice: null,
    maxPrice: null,
    pageNumber: 1,
    pageSize: 10,
    sortBy: "",
    isDescending: false,
  },

  setFilters: (newFilters) => {
    set((state) => ({
      filters: {
        ...state.filters,
        ...(typeof newFilters === "function"
          ? newFilters(state.filters)
          : newFilters),
      },
    }));
  },

  resetFilters: () => {
    set({
      filters: {
        searchTerm: "",
        name: "",
        address: "",
        minPrice: null,
        maxPrice: null,
        pageNumber: 1,
        pageSize: 10,
        sortBy: "",
        isDescending: false,
      },
    });
  },
}));

export default usePropertyStore;
