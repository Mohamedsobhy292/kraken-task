import React from "react";
import styles from "./navbar.module.scss";
import { CartIcon } from "../../icons/cart";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <h1>
                    <img
                        style={{
                            width: "200px",
                            cursor: "pointer",
                        }}
                        src="https://static.octopuscdn.com/logos/logo.svg"
                        alt="Octopus Energy Logo"
                    />
                </h1>
            </Link>

            <span className={styles.cart}>
                <CartIcon color="#fff" />
            </span>
        </nav>
    );
};
