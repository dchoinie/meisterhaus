import React, { JSX } from "react";
import Container from "../custom_components/container";
import NavItem from "../custom_components/navItem";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Rooms",
    href: "/rooms",
  },
  {
    label: "Amenities",
    href: "/amenities",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = (): JSX.Element => {
  return (
    <div className="relative z-50">
      <Container>
        <div className="flex justify-between py-6">
          <div className="flex gap-16">
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
          </div>
          <div className="flex">
            <Button
              variant="default"
              className="bg-primary-500 text-white font-cinzel-decorative"
            >
              Book Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
