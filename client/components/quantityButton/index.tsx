import { useState } from "react";
import { Button } from "../button";
import styles from "./quantityButton.module.scss";

interface QuantityButtonProps {
    className?: string;
    quantity: number;
    maxQuantity: number;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
}

export const QuantityButton = ({
    className,
    quantity,
    maxQuantity,
    decreaseQuantity,
    increaseQuantity,
}: QuantityButtonProps) => {
    return (
        <div className={className}>
            <Button
                className={`${styles.button} ${
                    quantity <= 1 ? styles.disabled : ""
                }`}
                onClick={decreaseQuantity}
            >
                -
            </Button>
            <span className={styles.title}> {quantity}</span>
            <Button
                className={`${styles.button} ${
                    quantity === maxQuantity ? styles.disabled : ""
                }`}
                onClick={increaseQuantity}
            >
                +
            </Button>
        </div>
    );
};
