import React from "react";
import usePropertyStore from "../../Infrastructure/Store/propertyStore";

export const Filters = ({ isOpen, onClose }) => {
  const { setFilters, resetFilters, filters } = usePropertyStore();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const filters = Object.fromEntries(formData.entries());

    setFilters((prev) => ({
      ...prev,
      name: filters.name,
      minPrice: filters.priceMin,
      maxPrice: filters.priceMax,
      pageNumber: 1,
    }));
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="searchName" className="text-sm font-medium">
              Search Name
            </label>
            <input
              type="text"
              id="searchName"
              className="border p-2"
              name="name"
              placeholder="Search by name..."
              defaultValue={filters.name}
            />
            <label htmlFor="searchName" className="text-sm font-medium">
              Search Price Min
            </label>
            <input
              type="text"
              id="searchPriceMin"
              className="border p-2"
              name="priceMin"
              placeholder="Search by price min..."
              defaultValue={filters.minPrice}
            />
            <label htmlFor="searchName" className="text-sm font-medium">
              Search Price Max
            </label>
            <input
              type="text"
              id="searchPriceMax"
              className="border p-2"
              name="priceMax"
              placeholder="Search by price max..."
              defaultValue={filters.maxPrice}
            />
            <div className="flex gap-2">
              <button
                className="bg-blue-500 text-white p-2 rounded-md w-full"
                type="submit"
              >
                Search
              </button>
              <button
                className="bg-red-400 text-white p-2 rounded-md w-[50%]"
                type="button"
                onClick={resetFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
