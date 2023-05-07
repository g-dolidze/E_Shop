type Prodact = {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  price: string;
  rating: string;
  amount: string;
};
type CartItem = Prodact & {
  quantity: number;
};

type InitialState = {
  products: Prodact[];
  totalFound: number;
  chousenItems: CartItem[];
};