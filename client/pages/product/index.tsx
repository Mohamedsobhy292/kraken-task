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
                <h3 className={styles.sectionTitle}>Description</h3>
                <p>{product.description}</p>
            </section>

            <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Specification</h3>
                <ul className={styles.productSpecs}>
                    <li>
                        <h4>Brand</h4>
                        <span>{product.brand}</span>
                    </li>
                    <li>
                        <h4>Item Weight (g)</h4>
                        <span>{product.weight}</span>
                    </li>
                    <li>
                        <h4>Dimensions (cm)</h4>
                        <span>
                            {product.height} x {product.width} x{product.length}
                        </span>
                    </li>
                    <li>
                        <h4>Item Model number</h4>
                        <span>{product.model_code}</span>
                    </li>
                    <li>
                        <h4>Color</h4>
                        <span>{product.colour}</span>
                    </li>
                </ul>
            </section>
        </div>
    );
}
