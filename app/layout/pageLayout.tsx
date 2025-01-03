import React, { JSX } from "react";
import Footer from "./footer";
import Header from "./header";

const PageLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <Header
        position="relative"
        textColor="text-primary-800"
        textColorHover="text-primary-600"
      />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
