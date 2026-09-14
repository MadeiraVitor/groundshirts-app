import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "../../../components/ProductList";
import bannerProducts from "../../../assets/images/banner-products.jpg";
import { useEffect, useRef, useState } from "react";
import type { Product } from "../../../interfaces/product";
import { getProducts } from "../../../services/productService";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const hasFetchedInitialProducts = useRef(false);

  useEffect(() => {
    if (hasFetchedInitialProducts.current) return;
    hasFetchedInitialProducts.current = true;

    loadMore();
  }, []);

  async function loadMore() {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const response = await getProducts({ page });

      setProducts((prev) => [...prev, ...response.data]);

      if (response.data.length < response.limit) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-container-max mx-auto pt-20 px-1.25 md:px-margin-desktop flex flex-col mb-6">
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

      {loading && products.length === 0 ? (
        <div className="flex justify-center items-center min-h-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-container"></div>
        </div>
      ) : products.length === 0 ? (
        <p className="text-center font-body-md text-body-md font-bold text-on-surface/70 my-30">
          Nenhum produto encontrado.
        </p>
      ) : (
        <>
          <ProductList products={products} />

          {hasMore && (
            <button
              className="bg-primary-container py-3.5 px-7 rounded-xl cursor-pointer mx-auto text-white disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={loadMore}
              disabled={loading}
            >
              {loading ? "Carregando..." : "Carregar Mais"}
            </button>
          )}
        </>
      )}
    </div>
  );
}
