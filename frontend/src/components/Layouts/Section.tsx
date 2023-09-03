import React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:mx-0 lg:mx-auto lg:px-8 lg:pb-8 w-full lg:pt-28">
      {children}
    </div>
  );
};

export default Section;
