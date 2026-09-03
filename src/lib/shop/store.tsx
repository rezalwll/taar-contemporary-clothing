import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";

type CartLine = { productId: number; size: string; quantity: number };
type StoreContextValue = {
  cart: CartLine[]; favorites: number[]; cartCount: number;
  addToCart: (productId: number, size: string) => void; removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void; toggleFavorite: (productId: number) => void;
};
const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  useEffect(() => {
    try {
      setCart(JSON.parse(sessionStorage.getItem("sohi-cart") ?? "[]"));
      setFavorites(JSON.parse(sessionStorage.getItem("sohi-favorites") ?? "[]"));
    } catch { /* keep empty state */ }
  }, []);
  useEffect(() => { sessionStorage.setItem("sohi-cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { sessionStorage.setItem("sohi-favorites", JSON.stringify(favorites)); }, [favorites]);
  const addToCart = (productId: number, size: string) => {
    setCart((items) => {
      const found = items.find((item) => item.productId === productId && item.size === size);
      return found ? items.map((item) => item === found ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { productId, size, quantity: 1 }];
    });
    toast.success("به سبد خرید اضافه شد");
  };
  const removeFromCart = (productId: number) => setCart((items) => items.filter((item) => item.productId !== productId));
  const updateQuantity = (productId: number, quantity: number) => setCart((items) => items.map((item) => item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item));
  const toggleFavorite = (productId: number) => setFavorites((items) => items.includes(productId) ? items.filter((id) => id !== productId) : [...items, productId]);
  return <StoreContext.Provider value={{ cart, favorites, cartCount: cart.reduce((sum, item) => sum + item.quantity, 0), addToCart, removeFromCart, updateQuantity, toggleFavorite }}>{children}</StoreContext.Provider>;
}
export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}
