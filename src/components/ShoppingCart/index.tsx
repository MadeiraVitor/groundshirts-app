import { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

import StreetOversizedBold from "../../assets/images/street-oversized-bold.png";
import StreetBasicEco from "../../assets/images/street-basic-eco.png";
import StreetFleece from "../../assets/images/street-fleece.png";
import StreetRegataSlip from "../../assets/images/street-regata-slip.png";
import StreetImpermeavelTech from "../../assets/images/street-impermeavel-tech.png";
import { formatCurrency } from "../../utils/format-currency";

const productsInCart = [
  {
    id: 1,
    name: "Produto 1",
    color: "Preto",
    image: StreetOversizedBold,
    price: 35,
    quantity: 5,
  },
  {
    id: 2,
    name: "Produto 2",
    color: "Marrom",
    image: StreetBasicEco,
    price: 75,
    quantity: 2,
  },
  {
    id: 3,
    name: "Produto 3",
    color: "Bodô",
    image: StreetFleece,
    price: 85,
    quantity: 4,
  },
  {
    id: 4,
    name: "Produto 4",
    color: "Cinza",
    image: StreetRegataSlip,
    price: 135,
    quantity: 6,
  },
  {
    id: 5,
    name: "Produto 5",
    color: "Preto",
    image: StreetImpermeavelTech,
    price: 15,
    quantity: 2,
  },
  {
    id: 1,
    name: "Produto 1",
    color: "Preto",
    image: StreetOversizedBold,
    price: 35,
    quantity: 5,
  },
  {
    id: 2,
    name: "Produto 2",
    color: "Marrom",
    image: StreetBasicEco,
    price: 75,
    quantity: 2,
  },
  {
    id: 3,
    name: "Produto 3",
    color: "Bodô",
    image: StreetFleece,
    price: 85,
    quantity: 4,
  },
  {
    id: 4,
    name: "Produto 4",
    color: "Cinza",
    image: StreetRegataSlip,
    price: 135,
    quantity: 6,
  },
  {
    id: 5,
    name: "Produto 5",
    color: "Preto",
    image: StreetImpermeavelTech,
    price: 15,
    quantity: 2,
  },
];

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

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
                  {productsInCart.length}
                </span>
              </div>
              <button className="hover:opacity-70 transition-opacity cursor-pointer" onClick={() => setCartIsOpen(!cartIsOpen)}>X</button>
            </header>
            {/* <!-- Cart Items --> */}

            <ul className="overflow-y-auto scrollbar-hide">
              {productsInCart.map((product) => (
                <li key={product.id}>
                  <div className="grow overflow-y-auto p-6 space-y-6">
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
                          <button className="text-on-surface-variant hover:text-error transition-colors cursor-pointer">
                            <FaRegTrashAlt />
                          </button>
                        </div>
                        <p className="font-body-md text-on-surface-variant mt-1">
                          {product.color}
                        </p>
                        <div className="mt-auto flex justify-between items-center">
                          <div className="flex items-center border border-outline-variant rounded-full px-3 py-1 space-x-4">
                            <button className="text-on-surface-variant hover:text-primary cursor-pointer">
                              -
                            </button>
                            <span className="font-label-sm">
                              {product.quantity}
                            </span>
                            <button className="text-on-surface-variant hover:text-primary cursor-pointer">
                              +
                            </button>
                          </div>
                          <span className="font-body-lg font-bold text-primary">
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
              <button className="w-full text-center font-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest cursor-pointer" onClick={() => setCartIsOpen(!cartIsOpen)}>
                Continuar Comprando
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
