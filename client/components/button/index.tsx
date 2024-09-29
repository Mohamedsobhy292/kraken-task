import styles from "./button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            type="button"
            className={`${styles.button} ${className || ""}`}
            {...props}
        >
            {children}
        </button>
    );
};
