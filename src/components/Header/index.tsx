import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h1 className="font-headline-lg text-headline-lg font-black tracking-tighter text-on-surface">
          GROUNDSHIRTS
        </h1>
        <nav className="hidden lg:flex space-x-8">
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300"
            href="#"
          >
            MASCULINO
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300"
            href="#"
          >
            FEMININO
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300"
            href="#"
          >
            INFANTIL
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300"
            href="#"
          >
            LOJAS
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors hover:opacity-70 duration-300"
            href="#"
          >
            SOBRE
          </a>
        </nav>

        <div className="flex items-center space-x-6 text-primary">
          <button className="hover:opacity-70 transition-opacity duration-300 active:scale-95 cursor-pointer">
            <span>
              <FaRegUser />
            </span>
          </button>
          <button className="hover:opacity-70 transition-opacity duration-300 active:scale-95 cursor-pointer">
            <span className="text-xl">
              <MdOutlineShoppingBag />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
