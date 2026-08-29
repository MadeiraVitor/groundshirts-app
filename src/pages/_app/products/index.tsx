import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "../../../components/ProductList";
import { products } from "../../../mocks/products";
import bannerProducts from "../../../assets/images/banner-products.jpg";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-container-max mx-auto pt-20 px-1.25 md:px-margin-desktop">
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-surface-container-low"
          style={{
            backgroundImage: `url('${bannerProducts}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-4">
            Groundshirts
          </p>
          <h1 className="font-headline-xl text-headline-xl text-on-surface font-black">
            The Essential Collection
          </h1>
        </div>
      </section>

      {products.length === 0 ? (
        <div className="text-center">
          <p className="font-body-md text-body-md font-bold text-on-surface/70 my-30">
            Nenhum produto encontrado.
          </p>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
