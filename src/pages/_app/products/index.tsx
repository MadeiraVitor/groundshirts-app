import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "../../../components/ProductList";
import { products } from "../../../mocks/products";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-container-max mx-auto px-1.25 md:px-margin-desktop">
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-surface-container-low"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiAQaSBd05VaHu7qSDWV4PZ53sKrK_uUnUe7dkNdUHxsmRlNgZw5KuLHqFA1XdgAetpS6wdHMFvbCcjNMgTEm2_K9zNLXOWTDpl4fola1K3jWWpdJW2pa-DF380TcdoLp-DTwD4AJ2Li9-FD9tA3FyDCiS3KMePiO8bSlRzAXKahBIKGWL9tAkuBkuHLV7uO_LbXbfMH7tvakLXWPT1g1OYK0hn-UxpvQsLI3hipWqfYe0GqUbvhtf')",
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

      <ProductList products={products} />
    </div>
  );
}
