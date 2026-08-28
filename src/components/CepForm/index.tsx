import { useState } from "react";
import { useCEPForm } from "./cep-form.schema";
import type { Address } from "../../interfaces/address";
import { formatCurrency } from "../../utils/format-currency";

const SHIPPING_BY_REGION: Record<string, number> = {
  Norte: 39.9,
  Nordeste: 29.9,
  "Centro-Oeste": 19.9,
  Sudeste: 14.9,
  Sul: 9.9,
};

export const CepForm = () => {
  const { register, handleSubmit, errors, isSubmitting } = useCEPForm();
  const [address, setAddress] = useState<Address | null>(null);
  const [addressError, setAddressError] = useState<string | null>(null);

  const onSubmit = async ({ cep }: { cep: string }) => {
    setAddressError(null);
    setAddress(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setAddressError(
          "CEP não encontrado. Por favor, verifique e tente novamente.",
        );
        return;
      }

      const shippingCost = SHIPPING_BY_REGION[data.regiao];

      if (!shippingCost) {
        setAddressError(
          "Região de entrega não identificada. Não é possível calcular o frete.",
        );
        return;
      }

      setAddress({ ...data, shippingCost });
    } catch {
      setAddressError(
        "Ocorreu um erro ao buscar o endereço. Por favor, tente novamente mais tarde.",
      );
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-3">
        <input
          className="grow bg-surface-container-low border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 font-body-md text-[16px] text-on-surface placeholder:text-on-surface-variant/50 transition-colors max-w-42.5"
          placeholder="Insira seu CEP"
          type="text"
          {...register("cep")}
        />

        <button
          type="submit"
          className="bg-surface-container-highest text-on-surface font-label-sm text-[12px] uppercase tracking-widest px-6 py-3 rounded hover:bg-surface-dim transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Calculando..." : "Calcular"}
        </button>
      </div>

      {errors.cep && (
        <p className="text-error font-label-sm text-[12px]">
          {errors.cep.message}
        </p>
      )}

      {addressError && (
        <span className="text-error text-sm">{addressError}</span>
      )}

      {address && (
        <div>
          <p>
            <strong>Região:</strong> {address.regiao}
          </p>
          <p>
            <strong>Custo de entrega:</strong>{" "}
            {formatCurrency(address.shippingCost)}
          </p>
        </div>
      )}
    </form>
  );
};
