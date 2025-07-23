import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseProductString(input: string) {
  const regex = /\{(.+?)\}/g;
  const matches = [...input.matchAll(regex)];

  if (matches.length !== 3) {
    throw new Error(
      "Formato inválido. Se esperaban tres valores entre llaves."
    );
  }

  const [name, price, description] = matches.map((match) => match[1]);

  // Extraer número al final (ignora espacios)
  const stockMatch = input.match(/\}[^}]*?(\d+)\s*$/);
  const stock = stockMatch ? parseInt(stockMatch[1], 10) : 0;

  return {
    name,
    price,
    description,
    stock,
  };
}
