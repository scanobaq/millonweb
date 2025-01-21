import React from "react";

export const PropertyBox = ({ property }) => {
  return (
    <>
      <div
        key={property.propertyId}
        className="grid border border-primary-50 rounded-[20px] bg-slate-50 w-full"
      >
        <div className="flex items-center justify-center rounded-[20px] h-[300px] w-full row-span-3">
          <img
            src={property.propertyImagePath}
            alt="Product Image"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <div className="grid items-center row-span-2 p-5">
          <div className="text-primary-900 w-full col-span-2 font-bold">
            {property.name} - {property.codeInternal}
          </div>
          <div className="text-primary-900 w-full col-span-2">
            Price: {property.price}
          </div>
        </div>
      </div>
    </>
  );
};
