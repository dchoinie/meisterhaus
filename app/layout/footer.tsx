import React, { JSX } from "react";
import Container from "../custom_components/container";
import { navItems } from "./header";
import NavItem from "../custom_components/navItem";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = (): JSX.Element => {
  return (
    <div className="bg-primary-500 py-12">
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex gap-12">
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
          </div>
          <div className="flex gap-12 my-6 text-primary-100">
            <Facebook />
            <Instagram />
            <Twitter />
            <Linkedin />
          </div>
          <div className="text-primary-100">
            <p>
              © {new Date().getFullYear()} Meisterhaus B & B. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
