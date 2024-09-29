import { useState } from "react";
import { Button } from "../button";
import styles from "./quantityButton.module.scss";

interface QuantityButtonProps {
    className?: string;
}

export const QuantityButton = ({ className }: QuantityButtonProps) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className={className}>
            <Button className={styles.button}>-</Button>
            <span className={styles.title}> {quantity}</span>
            <Button className={styles.button}>+</Button>
        </div>
    );
};
