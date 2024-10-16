import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query GetProduct {
        product: Product(id: "1") {
            name
            id
            price
            img_url
            quantity
            power
            description
            brand
            weight
            height
            width
            length
            model_code
            colour
        }
    }
`;
