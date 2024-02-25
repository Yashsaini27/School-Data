import React from "react";

const sizeClasses = {
  txtInterSemiBold18Gray900: "font-inter font-semibold",
  txtInterMedium18: "font-inter font-medium",
  txtInterSemiBold24Gray900: "font-inter font-semibold",
  txtInterSemiBold16Gray50001: "font-inter font-semibold",
  txtInterMedium18Blue900: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium17: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
