import { FaArrowRight } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-surface-container-highest w-full py-16 border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* <!-- Brand --> */}
        <div className="flex flex-col space-y-4">
          <span className="font-headline-lg text-headline-lg font-black text-on-surface">
            GROUNDSHIRTS
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Definindo o streetwear moderno com precisão minimalista.
          </p>
        </div>
        {/* <!-- Links 1 --> */}
        <div className="flex flex-col space-y-3 md:ml-25">
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:underline decoration-1 underline-offset-4 transition-all"
            href="#"
          >
            MASCULINO
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:underline decoration-1 underline-offset-4 transition-all"
            href="#"
          >
            FEMININO
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:underline decoration-1 underline-offset-4 transition-all"
            href="#"
          >
            INFANTIL
          </a>
        </div>
        {/* <!-- Links 2 --> */}
        <div className="flex flex-col space-y-3 md:ml-10">
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:underline decoration-1 underline-offset-4 transition-all"
            href="#"
          >
            LOJAS
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:underline decoration-1 underline-offset-4 transition-all"
            href="#"
          >
            SOBRE
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary hover:underline decoration-1 underline-offset-4 transition-all"
            href="#"
          >
            POLÍTICA DE PRIVACIDADE
          </a>
        </div>
        {/* <!-- Newsletter --> */}
        <div className="flex flex-col space-y-4">
          <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase tracking-widest">
            Inscreva-se na nossa newsletter
          </span>
          <div className="flex border-b border-outline">
            <input
              className="bg-transparent border-none focus:ring-0 w-full font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 p-0 pb-2"
              placeholder="Digite seu email"
              type="email"
            />
            <button className="text-primary hover:opacity-70 pb-2 cursor-pointer">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 mt-12 pt-8 border-t border-outline/20">
          <p className="font-body-md text-body-md text-on-surface-variant text-center">
            © 2026 GROUNDSHIRTS. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
};
