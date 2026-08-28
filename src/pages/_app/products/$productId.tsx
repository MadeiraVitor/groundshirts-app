import { createFileRoute, Link } from "@tanstack/react-router";
import { useContext, useState } from "react";
import { products } from "../../../mocks/products";
import { formatCurrency } from "../../../utils/format-currency";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CartContext } from "../../../contexts/CartContext";
import { CepForm } from "../../../components/CepForm";

export const Route = createFileRoute("/_app/products/$productId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { addProductIntoCart } = useContext(CartContext);
  const { productId } = Route.useParams();
  const [selectedSize, setSelectedSize] = useState("M");

  const filteredProduct = products.find(
    (product) => product.id === Number(productId),
  );

  if (!filteredProduct) return;

  const originalPrice = filteredProduct?.price ?? 0;
  const discountPrice = originalPrice * 0.9;
  const inInstallmentsPrice = originalPrice / 6;

  return (
    <section className="max-w-container-max mx-auto pt-30 px-1.25 md:px-margin-desktop mb-12">
      <nav className="uppercase font-label-sm text-[12px] mb-6">
        <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> /{" "}
        <span className="font-semibold">{filteredProduct?.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* <!-- Product Image --> */}
        <div className="md:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-outline-variant/30 flex items-center justify-center p-6">
          <img
            className="w-full h-auto object-contain max-h-[70vh] rounded-xl"
            src={filteredProduct?.image}
            alt={filteredProduct?.name}
          />
        </div>
        {/* <!-- Product Details --> */}
        <div className="md:col-span-5 flex flex-col pt-4 md:pt-0">
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface font-bold tracking-tight mb-2">
            {filteredProduct?.name}
          </h1>
          <p className="font-body-md text-[16px] text-on-surface-variant mb-6">
            Cor:{" "}
            <span className="text-on-surface font-medium">
              {filteredProduct?.color}
            </span>
          </p>
          {/* <!-- Pricing --> */}
          <div className="mb-6 border-b border-outline-variant/30 pb-6">
            <p className="font-body-md text-[16px] text-on-surface-variant line-through mb-1">
              {formatCurrency(originalPrice)}
            </p>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                {formatCurrency(discountPrice)} no PIX
              </span>
            </div>
            <p className="font-label-sm text-[12px] text-primary mb-2">
              Você economiza: (-10%)
            </p>
            <p className="font-body-md text-[16px] text-on-surface-variant">
              ou <strong>6x de {formatCurrency(inInstallmentsPrice)}</strong>
            </p>
          </div>
          {/* <!-- Description --> */}
          <p className="font-body-md text-[16px] text-on-surface-variant mb-8 leading-relaxed">
            {filteredProduct?.description}
          </p>
          {/* <!-- Size Selector --> */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <label className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface font-bold">
                Tamanho
              </label>
              <a
                className="font-label-sm text-[12px] text-on-surface-variant underline hover:text-primary transition-colors"
                href="#"
              >
                Guia de Medidas
              </a>
            </div>
            <div className="flex gap-3">
              {["P", "M", "G", "GG"].map((size) => {
                const isSelected = selectedSize === size;

                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full border flex items-center justify-center font-body-md text-[16px] transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "border-primary bg-primary text-on-primary shadow-sm"
                        : "border-outline-variant/50 text-on-surface hover:border-primary hover:text-primary"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
          {/* <!-- Shipping Calculator --> */}
          <div className="mb-8">
            <label className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface font-bold mb-3 block">
              Calcular o prazo de entrega
            </label>

            <CepForm />
          </div>
          {/* <!-- Primary CTA --> */}
          <button
            className="w-full bg-primary-container text-on-primary-container font-label-sm text-[12px] uppercase tracking-widest font-bold py-5 rounded hover:opacity-90 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => addProductIntoCart(filteredProduct)}
          >
            <span className="text-xl">
              <MdOutlineShoppingBag />
            </span>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>
  );
}
