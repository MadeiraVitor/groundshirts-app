import modelo from "../../assets/images/modelo.jpg";
import camisaPreta from "../../assets/images/camisa-preta.jpg";
import camisaBranca from "../../assets/images/camisa-branca.jpg";
import { FiTruck } from "react-icons/fi";
import { Link } from "@tanstack/react-router";

export const Gallery = () => {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-200">
        {/* <!-- Large Left Banner --> */}
        <div className="md:col-span-7 relative rounded-2xl overflow-hidden group">
          <img
            className="w-full h-full object-cover image-hover-zoom"
            alt="Homem com camisa cinza"
            src={modelo}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div>
              <h3 className="font-headline-lg text-headline-lg text-white font-bold mb-2">
                Urban Canvas
              </h3>
              <p className="font-body-md text-body-md text-white/80 max-w-sm">
                Explore nossos lançamentos mais recentes, criados para as ruas.
              </p>
            </div>
            <Link to="/products" className="bg-white text-black font-label-sm text-label-sm uppercase tracking-widest py-3 px-6 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">
              Ver Coleção
            </Link>
          </div>
        </div>
        {/* <!-- Right Side --> */}
        <div className="md:col-span-5 grid grid-rows-2 gap-gutter">
          {/* <!-- Top Right --> */}
          <div className="relative rounded-2xl overflow-hidden bg-surface-container-low p-8 flex items-center justify-center group">
            <img
              className="absolute inset-0 w-full h-full object-contain p-12 image-hover-zoom mix-blend-multiply"
              alt="Camisa preta com estampa"
              src={camisaPreta}
            />
          </div>
          {/* <!-- Bottom Right Grid --> */}
          <div className="grid grid-cols-2 gap-gutter">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                className="w-full h-full object-cover image-hover-zoom"
                alt="Camisa branca"
                src={camisaBranca}
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-primary-container p-6 flex flex-col justify-between text-on-primary-container">
              <FiTruck className="text-4xl" />
              <div>
                <h4 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">
                  Frete Grátis
                </h4>
                <p className="font-body-md text-body-md opacity-80">
                  Em todos os pedidos acima de R$ 150.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
