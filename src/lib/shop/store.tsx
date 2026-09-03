import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";

export type CartLine = { productId: number; size: string; quantity: number };
type StoreContextValue = {
  cart: CartLine[];
  favorites: number[];
  cartCount: number;
  addToCart: (productId: number, size: string, quantity?: number) => void;
  removeFromCart: (productId: number, size?: string) => void;
  updateQuantity: (productId: number, size: string, quantity: number) => void;
  toggleFavorite: (productId: number) => void;
  clearCart: () => void;
};

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    try {
      setCart(JSON.parse(sessionStorage.getItem("tar-cart") ?? "[]"));
      setFavorites(JSON.parse(sessionStorage.getItem("tar-favorites") ?? "[]"));
    } catch { /* corrupted demo data falls back to empty */ }
  }, []);
  useEffect(() => { sessionStorage.setItem("tar-cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { sessionStorage.setItem("tar-favorites", JSON.stringify(favorites)); }, [favorites]);

  const addToCart = (productId: number, size: string, quantity = 1) => {
    setCart((items) => {
      const found = items.find((item) => item.productId === productId && item.size === size);
      return found
        ? items.map((item) => item === found ? { ...item, quantity: item.quantity + quantity } : item)
        : [...items, { productId, size, quantity }];
    });
    toast.success("به سبد تار اضافه شد");
  };
  const removeFromCart = (productId: number, size?: string) => setCart((items) => items.filter((item) => !(item.productId === productId && (!size || item.size === size))));
  const updateQuantity = (productId: number, size: string, quantity: number) => setCart((items) => items.map((item) => item.productId === productId && item.size === size ? { ...item, quantity: Math.max(1, quantity) } : item));
  const toggleFavorite = (productId: number) => setFavorites((items) => items.includes(productId) ? items.filter((id) => id !== productId) : [...items, productId]);
  const clearCart = () => setCart([]);

  return <StoreContext.Provider value={{ cart, favorites, cartCount: cart.reduce((sum, item) => sum + item.quantity, 0), addToCart, removeFromCart, updateQuantity, toggleFavorite, clearCart }}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}