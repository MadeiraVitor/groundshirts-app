import { createFileRoute } from '@tanstack/react-router'
import { formatCurrency } from "../../../../utils/format-currency";

type OrderStatus = "PENDING" | "PAID" | "CANCELLED";

interface OrderData {
  id: number;
  status: string;
  total: number;
  userId: number;
  paymentMethod: string;
  createdAt: string;
}

interface Order {
  id: number;
  data: OrderData[];
  status: OrderStatus;
  limit: number;
  page: number;
  totalPages: number;
  createdAt: string;
}

function getStatusColor(status: string) {
  switch (status) {
    case "PAID":
      return "#00A63E";
    case "PENDING":
      return "#D08700";
    case "CANCELLED":
      return "#E7000B";
    default:
      return "#6A7282";
  }
}

async function getOrders() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/orders`,
    {
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao carregar pedidos");
  }

  return await response.json();
}

export const Route = createFileRoute('/_app/account/orders/')({
  loader: async () => {
    const data = await getOrders();

    return data;
  },
  component: OrderPage,
})

function OrderPage() {
  const orders: Order = Route.useLoaderData();

  return (
    <section className="w-full space-y-6 p-6 flex justify-center mt-36">
      <div className="w-full max-w-4xl ">
        <h1 className="text-2xl leading-8 font-bold text-black mb-6">
          Meus pedidos
        </h1>

        <div className="space-y-4">
          {orders.data.map((order) => (
            <article
              key={order.id}
              className="flex items-center justify-between rounded-md border border-black p-4"
            >
              <div>
                <p className="text-base leading-6 text-black font-bold">
                  Pedido #{order.id}
                </p>
                <p className="text-sm leading-5 text-[#6A7282]">
                  {new Date(order.createdAt).toLocaleDateString("pt-BR")}
                </p>
              </div>

              <div className="text-right">
                <p className="text-base leading-6 font-bold text-black">
                  {formatCurrency(order.total)}
                </p>
                <p
                  className="text-sm leading-5"
                  style={{ color: getStatusColor(order.status) }}
                >
                  {order.status}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
