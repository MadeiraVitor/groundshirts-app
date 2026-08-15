import camisaBranca from "../../assets/images/camisa-branca.jpg";
import camisaPreta from "../../assets/images/camisa-preta.jpg";
import camisaVerde from "../../assets/images/camisa-verde.jpg";
import camisaCinza from "../../assets/images/camisa-cinza.jpg";

export const Categories = () => {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter text-white">
        {/* <!-- Categoria 1 --> */}
        <a
          className="group block relative h-96 rounded-xl overflow-hidden bg-surface-container-low cursor-pointer"
          href="#"
        >
          <img
            className="absolute inset-0 w-full h-full object-cover image-hover-zoom object-[center_top]"
            src={camisaBranca}
            alt="Camisa Branca"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="px-6 py-2 rounded-full bg-transparent border border-white hover:bg-white/10 transition-colors duration-300 ease-in-out backdrop-blur-sm font-label-sm text-label-sm uppercase tracking-widest font-bold cursor-pointer">
              Novidades
            </button>
          </div>
        </a>
        {/* <!-- Categoria 2 --> */}
        <a
          className="group block relative h-96 rounded-xl overflow-hidden bg-surface-container-low cursor-pointer"
          href="#"
        >
          <img
            className="absolute inset-0 w-full h-full object-cover image-hover-zoom object-[center_top]"
            src={camisaPreta}
            alt="Camisa Preta"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="px-6 py-2 rounded-full bg-transparent border border-white hover:bg-white/10 transition-colors duration-300 ease-in-out backdrop-blur-sm font-label-sm text-label-sm uppercase tracking-widest font-bold cursor-pointer">
              Estampadas
            </button>
          </div>
        </a>
        {/* <!-- Categoria 3 --> */}
        <a
          className="group block relative h-96 rounded-xl overflow-hidden bg-surface-container-low cursor-pointer"
          href="#"
        >
          <img
            className="absolute inset-0 w-full h-full object-cover image-hover-zoom object-[center_top]"
            src={camisaVerde}
            alt="Camisa Verde"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="px-6 py-2 rounded-full bg-transparent border border-white hover:bg-white/10 transition-colors duration-300 ease-in-out backdrop-blur-sm font-label-sm text-label-sm uppercase tracking-widest font-bold cursor-pointer">
              Basicas
            </button>
          </div>
        </a>
        {/* <!-- Categoria 4 --> */}
        <a
          className="group block relative h-96 rounded-xl overflow-hidden bg-surface-container-low cursor-pointer"
          href="#"
        >
          <img
            className="absolute inset-0 w-full h-full object-cover image-hover-zoom object-[center_top]"
            src={camisaCinza}
            alt="Camisa Cinza"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="px-6 py-2 rounded-full bg-transparent border border-white hover:bg-white/10 transition-colors duration-300 ease-in-out backdrop-blur-sm font-label-sm text-label-sm uppercase tracking-widest font-bold cursor-pointer">
              Oversized
            </button>
          </div>
        </a>
      </div>
    </section>
  );
};
