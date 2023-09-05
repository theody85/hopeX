import React from "react";

const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <div className="md:mx-0 lg:mx-auto lg:px-8 lg:pb-8 w-full lg:pt-20" id={id}>
      {children}
    </div>
  );
};

export default Section;
