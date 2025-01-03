import React, { JSX } from "react";
import Container from "../custom_components/container";
import NavItem, { NavItemProps } from "../custom_components/navItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NavItemPosition = "absolute" | "relative" | "fixed";

interface NavItemProp {
  position: NavItemPosition;
  textColor?: string;
  textColorHover?: string;
}

export const navItems = [
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

const Header = ({
  position,
  textColor,
  textColorHover,
}: NavItemProp): JSX.Element => {
  return (
    <div className={`top-0 left-0 w-full z-50 ${position}`}>
      <Container>
        <div className="flex justify-between py-6">
          <div className="flex gap-16">
            {navItems.map((item: NavItemProps) => (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                textColor={textColor}
                textColorHover={textColorHover}
              />
            ))}
          </div>
          <div className="flex">
            <Button
              variant="default"
              className="bg-primary-500 text-white font-cinzel-decorative"
              asChild
            >
              <Link href="/book">Request Booking</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
