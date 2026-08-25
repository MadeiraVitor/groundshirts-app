import { createFileRoute } from "@tanstack/react-router";
import { FaQuoteRight } from "react-icons/fa";
import bannerAbout from "../../../assets/images/banner-about.png";
import modelHistory from "../../../assets/images/model-history.png";

export const Route = createFileRoute("/_app/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="grow flex flex-col items-center w-full max-w-container-max mx-auto pt-20 px-1.25 lg:px-margin-desktop">
      {/* <!-- Hero Section --> */}
      <section className="w-full relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-90"
            src={bannerAbout}
          />
          <div className="absolute inset-0 bg-linear-to-b from-surface/20 to-surface/90"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop mt-20">
          <h1 className="font-headline-xl text-headline-xl md:text-[80px] md:leading-22 text-primary tracking-tighter uppercase">
            ESSÊNCIA URBANA
          </h1>
        </div>
      </section>
      {/* <!-- Nossa História Section --> */}
      <section className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 md:col-start-2 flex flex-col gap-6">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Nossa História
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Nascida da pulsação de concreto da cidade, a GROUNDSHIRTS é mais do
            que vestuário; é um reflexo do ambiente urbano moderno. Começamos
            com uma convicção simples: a de que os itens essenciais do dia a dia
            devem possuir a mesma integridade estrutural e a mesma estética
            limpa da arquitetura que nos cerca.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Nossa jornada começou nas ruas, observando a intersecção entre a
            utilidade bruta e o minimalismo refinado. Buscamos conexão em meio
            ao caos, oferecendo um uniforme para o criativo conectado que
            transita com fluidez pela metrópole.
          </p>
        </div>
        <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-0 relative">
          <div className="aspect-4/5 bg-surface-container-low overflow-hidden rounded-sm relative">
            <img className="w-full h-full object-cover" src={modelHistory} />
            <div className="absolute inset-0 ring-1 ring-inset ring-outline-variant/30"></div>
          </div>
        </div>
      </section>
      {/* <!-- Qualidade Sem Compromisso Section --> */}
      <section className="w-full bg-surface-container-low py-24 md:py-32">
        <div className="max-w-container-max px-margin-mobile md:px-margin-desktop mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
              Qualidade Sem Compromisso
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Desenvolvemos nossas peças para resistir ao atrito da vida urbana,
              priorizando materiais e métodos que respeitam tanto quem as veste
              quanto o meio ambiente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* <!-- Feature 1 --> */}
            <div className="flex flex-col gap-6 p-8 bg-surface border border-outline-variant/50 hover:shadow-sm transition-shadow duration-300 group">
              <span className="text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                Tecido
              </span>
              <div>
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-3">
                  Acabamento Premium
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Construído com algodão de alta densidade e moagem
                  personalizada para um drapeamento estruturado e durabilidade
                  duradoura.
                </p>
              </div>
            </div>
            {/* <!-- Feature 2 --> */}
            <div className="flex flex-col gap-6 p-8 bg-surface border border-outline-variant/50 hover:shadow-sm transition-shadow duration-300 group">
              <span className="text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                Ecológico
              </span>
              <div>
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-3">
                  Processo Sustentável
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Utilizamos tintas de baixo impacto e práticas de fabricação
                  éticas para minimizar nosso impacto no planeta.
                </p>
              </div>
            </div>
            {/* <!-- Feature 3 --> */}
            <div className="flex flex-col gap-6 p-8 bg-surface border border-outline-variant/50 hover:shadow-sm transition-shadow duration-300 group">
              <span className="text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                Design
              </span>
              <div>
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-3">
                  Linhas Modernas
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Adaptado com precisão para oferecer linhas limpas e uma
                  silhueta moderna e oversized que comanda a presença.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Manifesto Section --> */}
      <section className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop py-32 md:py-48 flex items-center justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center gap-8">
          <FaQuoteRight className="text-primary/30 text-6xl" />
          <h2 className="font-headline-xl text-headline-xl md:text-[56px] md:leading-[64px] text-primary tracking-tighter">
            Menos ruído. Mais foco. Eleve o estilo do dia a dia.
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4"></div>
        </div>
      </section>
    </main>
  );
}
