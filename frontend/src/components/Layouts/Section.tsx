import React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:mx-0 lg:mx-auto lg:px-8 lg:py-4 w-full">{children}</div>
  );
};

export default Section;
