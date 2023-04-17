export interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  types: number[];
  sizes: number[];
  prices: number[];
  category: number[];
  rating: number;
}

export interface CartPizza extends Omit<Pizza, "types" | "sizes" | "prices"> {
  type: Pizza["types"][number];
  size: Pizza["sizes"][number];
  price: Pizza["prices"][number];
}
