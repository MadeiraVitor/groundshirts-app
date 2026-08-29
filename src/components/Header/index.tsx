import { Link } from "@tanstack/react-router";
import { FaRegUser } from "react-icons/fa";
import { ShoppingCart } from "../ShoppingCart";
import { MenuMobile } from "../MenuMobile";

export interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "MASCULINO", href: "/products/category/masculino" },
  { name: "FEMININO", href: "/products/category/feminino" },
  { name: "INFANTIL", href: "/products/category/infantil" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="lg:hidden h-6">
          <MenuMobile navLinks={navLinks} />
        </div>

        <Link to="/">
          <h1 className="font-headline-lg text-headline-lg font-black tracking-tighter text-on-surface">
            GROUNDSHIRTS
          </h1>
        </Link>
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/our-stores"
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300"
          >
            LOJAS
          </Link>
          <Link
            to="/about"
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300"
          >
            SOBRE
          </Link>
        </nav>

        <div className="flex items-center space-x-6 text-primary">
          <button className="hover:opacity-70 transition-opacity duration-300 active:scale-95 cursor-pointer hidden lg:flex">
            <span>
              <FaRegUser />
            </span>
          </button>

          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};
