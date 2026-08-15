import Banner from "../../assets/images/banner.png";

export const Hero = () => {
  return (
    <section className="relative h-128 rounded-2xl mt-27 md:px-margin-desktop max-w-container-max mx-auto md:h-160">
      <img
        className="w-full h-full object-cover rounded-2xl"
        src={Banner}
        alt="Banner"
      />

      <div className="absolute inset-0 flex items-end px-4 pb-4 md:bottom-0 md:justify-end md:items-center md:px-26 md:pb-15">
        <div className="text-white flex w-full flex-col items-center md:w-auto md:items-end md:text-end">
          <h2 className="lg:text-[64px] md:text-[40px] text-2xl font-bold font-headline-lg">
            STREET STYLE DEFINED
          </h2>
          <h3 className="text-body-lg font-body-md max-w-99.75 mb-8 text-center md:text-right">
            Eleve a sua presença com a nossa mais recente coleção de moda urbana
            premium
          </h3>

          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:gap-4">
            <button className="w-full py-4 px-8 bg-transparent border border-white font-label-sm text-label-sm tracking-widest rounded-full hover:bg-white/10 transition-colors duration-300 ease-in-out backdrop-blur-sm cursor-pointer md:w-auto">
              VER MODELOS
            </button>
            <button className="w-full bg-primary-container text-on-primary-container font-label-sm text-label-sm tracking-widest py-4 px-8 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out cursor-pointer md:w-auto">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
