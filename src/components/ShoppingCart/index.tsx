import { useContext, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatCurrency } from "../../utils/format-currency";
import { CartContext } from "../../contexts/CartContext";

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const { cart, removeItemFromCart, increment, decrement } =
    useContext(CartContext);

  return (
    <>
      <button
        className="cursor-pointer text-xl"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <MdOutlineShoppingBag />
      </button>

      <div
        className={`${cartIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0`}
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <div
          className={`${cartIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-106`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full max-w-106 h-full bg-surface shadow-2xl flex flex-col transition-transform duration-300">
            {/* <!-- Header --> */}
            <header className="flex items-center justify-between p-6 border-b border-outline-variant">
              <div className="flex items-center space-x-2">
                <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-tighter">
                  CARRINHO
                </h2>
                <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-4 py-0.5 rounded-full">
                  {cart.length}
                </span>
              </div>
              <button
                className="hover:opacity-70 transition-opacity cursor-pointer"
                onClick={() => setCartIsOpen(!cartIsOpen)}
              >
                X
              </button>
            </header>
            {/* <!-- Cart Items --> */}

            <ul className="overflow-y-auto scrollbar-hide">
              {cart.map((product) => (
                <li key={product.id}>
                  <div className="grow overflow-y-auto p-4 space-y-6">
                    <div className="flex space-x-4">
                      <div className="w-24 h-32 bg-surface-container-low rounded-lg overflow-hidden shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="grow flex flex-col">
                        <div className="flex justify-between items-start">
                          <h3 className="font-body-lg font-bold text-on-surface leading-tight">
                            {product.name}
                          </h3>
                          <button
                            className="text-on-surface-variant hover:text-error transition-colors cursor-pointer"
                            onClick={() => removeItemFromCart(product.id)}
                          >
                            <FaRegTrashAlt />
                          </button>
                        </div>
                        <p className="font-body-md text-on-surface-variant mt-1">
                          {product.color}
                        </p>
                        <div className="mt-auto flex justify-between items-center">
                          <div className="flex items-center border border-outline-variant rounded-full px-3 py-1 space-x-4">
                            <button
                              className="text-on-surface-variant hover:text-primary cursor-pointer"
                              onClick={() => decrement(product)}
                            >
                              -
                            </button>
                            <span className="font-label-sm">
                              {product.quantity}
                            </span>
                            <button
                              className="text-on-surface-variant hover:text-primary cursor-pointer"
                              onClick={() => increment(product)}
                            >
                              +
                            </button>
                          </div>
                          <span className="font-body-lg font-bold text-primary ml-1.5">
                            {formatCurrency(product.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* <!-- Summary Section --> */}
            <footer className="p-6 bg-surface-container-low border-t border-outline-variant space-y-4">
              <div className="relative">
                <input
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-label-sm uppercase tracking-widest focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                  placeholder="CUPOM DE DESCONTO"
                  type="text"
                />
              </div>
              <button className="w-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest py-4 rounded-full hover:opacity-90 transition-all active:scale-[0.98] shadow-lg cursor-pointer">
                FINALIZAR COMPRA
              </button>
              <button
                className="w-full text-center font-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest cursor-pointer"
                onClick={() => setCartIsOpen(!cartIsOpen)}
              >
                Continuar Comprando
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
