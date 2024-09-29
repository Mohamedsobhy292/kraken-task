import { Button } from "../../components/button";
import { QuantityButton } from "../../components/quantityButton";
import styles from "./product.module.scss";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "./queries";
import { Product } from "../../types";
import { DocumentNode } from "graphql";

interface ProductData {
    product: Product;
}

export default function ProductPage() {
    const { loading, error, data } = useQuery<ProductData>(
        GET_PRODUCT as DocumentNode
    );
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error || !data?.product) {
        return <div>Error...</div>;
    }

    const { product } = data;

    return (
        <div className={styles.container}>
            <section className={styles.productHeader}>
                <img
                    src={product.img_url}
                    alt={product.name}
                    className={styles.productImg}
                />
                <h1 className={styles.productTitle}>{product.name}</h1>
                <span className={styles.productDetails}>
                    {product.power} // {product.quantity}
                </span>

                <div className={styles.priceContainer}>
                    <h3 className={styles.price}>{product.price}</h3>
                    <QuantityButton className={styles.quantity} />
                </div>
                <Button>Add to cart</Button>
            </section>

            <section className={styles.descriptionSection}>
                <h3>Description</h3>
                <p>
                    Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in
                    B22, bulb switches on instantly, no wait around warm start
                    and flicker free features make for a great all purpose bulb
                </p>
            </section>
        </div>
    );
}
