import { createFileRoute } from "@tanstack/react-router";
import { FaArrowRight } from "react-icons/fa";
import bannerStores from "../../../assets/images/banner-stores.jpg";
import lojaSp from "../../../assets/images/loja-sp.png";
import mapaSp from "../../../assets/images/mapa-sp.png";
import lojaCuritiba from "../../../assets/images/loja-curitiba.png";
import mapaCuritiba from "../../../assets/images/mapa-curitiba.png";

export const Route = createFileRoute("/_app/our-stores/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="grow flex flex-col max-w-container-max mx-auto pt-20 px-1.25 md:px-margin-desktop">
      {/* <!-- Hero Section --> */}
      <section className="relative w-full h-[40vh] min-h-75 md:h-[50vh] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
        {/* <!-- Background Image --> */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 scale-105 transition-transform duration-[10s] ease-out hover:scale-100"
          style={{
            backgroundImage: `url('${bannerStores}')`,
          }}
        ></div>
        {/* <!-- Content overlay --> */}
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop flex flex-col items-center">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-7">
            LOJAS
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-center">
            Descubra nossos espaços físicos. Minimalismo arquitêtonico projetado
            para a cultura urbana conectada.
          </p>
        </div>
        {/* <!-- Subtle gradient fade to content --> */}
        <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-background to-transparent"></div>
      </section>
      {/* <!-- Locations Grid --> */}
      <section className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter lg:gap-16">
          {/* <!-- Store Card 1 --> */}
          <div className="flex flex-col group border border-outline-variant/30 rounded-lg overflow-hidden bg-surface-container-lowest hover:border-primary/30 transition-colors duration-300">
            <div className="w-full h-64 md:h-80 relative overflow-hidden bg-surface-container">
              <img
                alt="Interior loja São Paulo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={lojaSp}
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-primary/10 text-primary font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
                  Matriz
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col md:flex-row gap-8 justify-between">
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                    São Paulo
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Rua Oscar Freire, 1024
                    <br />
                    Jardins, SP 01426-000
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                    Horário
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface">
                    Seg - Sáb: 10:00 - 20:00
                    <br />
                    Dom: 12:00 - 18:00
                  </p>
                </div>
                <button className="flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest hover:opacity-70 transition-opacity mt-4 group/btn cursor-pointer">
                  <span>Obter Rotas</span>
                  <FaArrowRight className="text-[18px] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              {/* <!-- Map Placeholder --> */}
              <div className="w-full md:w-48 h-48 bg-surface-container rounded-lg overflow-hidden border border-outline-variant/20 shrink-0 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  style={{
                    backgroundImage: `url('${mapaSp}')`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* <!-- Store Card 2 --> */}
          <div className="flex flex-col group border border-outline-variant/30 rounded-lg overflow-hidden bg-surface-container-lowest hover:border-primary/30 transition-colors duration-300">
            <div className="w-full h-64 md:h-80 relative overflow-hidden bg-surface-container">
              <img
                alt="Loja Curitiba Exterior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={lojaCuritiba}
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-surface-variant/50 text-on-surface-variant font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
                  Filial
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col md:flex-row gap-8 justify-between">
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                    Curitiba
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Av. do Batel, 1868 - L4
                    <br />
                    Batel, PR 80420-090
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                    Horário
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface">
                    Seg - Sáb: 10:00 - 22:00
                    <br />
                    Dom: 14:00 - 20:00
                  </p>
                </div>
                <button className="flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-widest hover:opacity-70 transition-opacity mt-4 group/btn cursor-pointer">
                  <span>Obter Rotas</span>
                  <FaArrowRight className="text-[18px] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              {/* <!-- Map Placeholder --> */}
              <div className="w-full md:w-48 h-48 bg-surface-container rounded-lg overflow-hidden border border-outline-variant/20 shrink-0 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  style={{
                    backgroundImage: `url('${mapaCuritiba}')`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
