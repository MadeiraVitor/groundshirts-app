import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import type { NavLink } from "../Header";
import { Link } from "@tanstack/react-router";
import { FaRegUser } from "react-icons/fa";

interface MenuMobileProps {
  navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="cursor-pointer text-2xl"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <IoMdMenu />
      </button>

      <div
        className={`${menuIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0 z-30`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <div
          className={`${menuIsOpen ? "translate-x-0" : "-translate-x-full"} absolute top-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-full`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full bg-surface shadow-2xl flex flex-col transition-transform duration-300">
            {/* <!-- Header --> */}
            <header className="flex justify-between items-center h-20 px-margin-mobile border-b border-outline-variant/30">
              <div className="font-headline-lg-mobile text-headline-lg-mobile font-black tracking-tighter text-on-surface">
                GROUNDSHIRTS
              </div>
              <button className="p-2 -mr-2 text-on-surface-variant hover:text-primary transition-colors active:scale-95">
                <IoMdClose
                  className="cursor-pointer text-2xl"
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                />
              </button>
            </header>

            {/* <!-- Menu Items --> */}
            <ul className="flex-1 flex flex-col px-margin-mobile py-8 gap-6 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  to={link.href}
                  key={link.name}
                  className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface hover:text-primary transition-colors py-2 border-b border-transparent hover:border-primary w-fit"
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/our-stores"
                className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface hover:text-primary transition-colors py-2 border-b border-transparent hover:border-primary w-fit"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                LOJAS
              </Link>
              <Link
                to="/about"
                className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface hover:text-primary transition-colors py-2 border-b border-transparent hover:border-primary w-fit"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                SOBRE
              </Link>
            </ul>

            {/* <!-- Footer --> */}
            <footer className="px-margin-mobile pb-12 pt-6 border-t border-outline-variant/30">
              <Link
                to="/signin"
                className="flex items-center justify-center gap-4 py-4 px-6 bg-primary text-on-primary rounded-DEFAULT hover:opacity-90 active:scale-95 transition-all"
              >
                <FaRegUser />
                <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                  Fazer login
                </span>
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
