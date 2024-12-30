import Link from "next/link";
import React from "react";

const NavItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <div className="text-primary-100 hover:text-white font-cinzel-decorative">
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default NavItem;
