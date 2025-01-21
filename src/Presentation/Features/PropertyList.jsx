import React, { useEffect } from "react";
import usePropertyStore from "../../Infrastructure/Store/propertyStore";
import { useProperty } from "../Hooks/useProperty";
import { PropertyBox } from "../Common/PropertyBox";
import { useInView } from "react-intersection-observer";
import { SearchButton } from "../Common/SearchButton";
import { filter } from "lodash";
export const PropertyList = () => {
  const { properties, getProperties, getPropertyFilter, loading, error } =
    useProperty();
  const { filters, setFilters } = usePropertyStore();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px", // Reducimos el margen
    triggerOnce: false, // Aseguramos que se pueda triggear múltiples veces
    skip: properties.items.length === 0, // Saltamos la observación si no hay items
  });

  useEffect(() => {
    if (filters.pageNumber === 1) {
      getPropertyFilter(filters);
    }
  }, [filters]);

  // Efecto para manejar cambios en filtros
  useEffect(() => {
    if (filters.pageNumber > 1) {
      getPropertyFilter(filters);
    }
  }, [filters]);

  // Manejar scroll infinito
  useEffect(() => {
    if (
      inView &&
      !loading &&
      properties.hasNextPage &&
      properties.items.length > 0 && // Aseguramos que ya hay items cargados
      filters.pageNumber < properties.totalPages
    ) {
      setFilters((prev) => ({
        ...prev,
        pageNumber: prev.pageNumber + 1,
      }));
    }
  }, [inView, properties.hasNextPage]);

  if (error) {
    return <div>Error al cargar las propiedades</div>;
  }

  return (
    <>
      {properties.items.length === 0 && (
        <div className="text-center">No hay datos a mostrar</div>
      )}
      <div className="container mx-auto h-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          {properties.items?.map((property) => (
            <PropertyBox key={property.propertyId} property={property} />
          ))}
        </div>
        {/* Elemento observador */}
        {properties.hasNextPage && (
          <div ref={ref} className="h-10 flex items-center justify-center">
            {loading && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <p>Cargando más propiedades...</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
