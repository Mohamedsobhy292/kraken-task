import { createContext, useContext, useState } from "react";

interface CartContextProviderProps {
    children: React.ReactNode;
}

const CartContext = createContext({
    itemsCount: 0,
    setItemsCount: (itemsCount: number) => {},
});

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [itemsCount, setItemsCount] = useState(0);

    return (
        <CartContext.Provider value={{ itemsCount, setItemsCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};
export default CartContext;
