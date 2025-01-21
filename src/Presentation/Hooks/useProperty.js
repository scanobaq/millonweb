import { useState } from "react";
import { propertyRepository } from "../../Infrastructure/Repositories/propertyRepository";

export const useProperty = () => {
  const [properties, setProperties] = useState({ items: [], totalCount: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const getProperties = async () => {
  //   setLoading(true);
  //   try {
  //     const properties = await propertyRepository.getProperties();
  //     setProperties(properties);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const getPropertyFilter = async (filters) => {
    setLoading(true);
    try {
      const response = await propertyRepository.getPropertiesByFilters(filters);

      if (filters.pageNumber === 1) {
        setProperties(response);
      } else {
        setProperties((prev) => ({
          ...response, // Mantener toda la metadata actualizada
          items: [...prev.items, ...response.items], // Concatenar los nuevos items
        }));
      }

      console.log("Response:", response);
      console.log("Updated Properties:", properties);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { properties, getPropertyFilter, loading, error };
};
