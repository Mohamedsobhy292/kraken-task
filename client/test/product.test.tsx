import { render, fireEvent, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import ProductPage from "../pages/product";
import { GET_PRODUCT } from "../pages/product/queries";
import { Navbar } from "../components/navbar";
import CartContext from "../context/cart-context";

const mock = {
    // delay: 30,
    maxUsageCount: 5,
    request: {
        query: GET_PRODUCT,
    },
    result: {
        data: {
            product: {
                id: 11,
                name: "product",
                power: "2312",
                description: "description",
                price: 100,
                quantity: 7,
                brand: "brand",
                weight: 77,
                height: 12.6,
                width: 6.2,
                length: 6.2,
                model_code: "E27 ES",
                colour: "black",
                img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
            },
        },
    },
};

it("should render loading text", async () => {
    render(
        <MockedProvider
            mocks={[
                {
                    ...mock,
                    delay: 30,
                },
            ]}
            addTypename={false}
        >
            <ProductPage />
        </MockedProvider>
    );
    expect(await screen.getByText("Loading...")).toBeInTheDocument();
});

it("should render error text when the request fails", async () => {
    render(
        <MockedProvider
            mocks={[
                {
                    ...mock,
                    delay: undefined,
                    error: new Error("An error occurred"),
                },
            ]}
            addTypename={false}
        >
            <ProductPage />
        </MockedProvider>
    );
    expect(await screen.findByText("Error...")).toBeInTheDocument();
});

it("should increase and decrease product quantity", async () => {
    render(
        <MockedProvider
            mocks={[
                {
                    ...mock,
                    delay: undefined,
                },
            ]}
            addTypename={false}
        >
            <ProductPage />
        </MockedProvider>
    );

    const increaseQuantity = await screen.findByText("+");

    const currentQuantity = screen.getByTitle("Current Quantity");
    expect(currentQuantity).toHaveTextContent("1");

    fireEvent.click(increaseQuantity);
    expect(currentQuantity).toHaveTextContent("2");

    const decreaseQuantity = screen.getByText("-");

    fireEvent.click(decreaseQuantity);
    expect(currentQuantity).toHaveTextContent("1");
});

it("should be able to add items to the basket", async () => {
    const setItemsCount = jest.fn();
    render(
        <MockedProvider mocks={[mock]} addTypename={false}>
            <CartContext.Provider
                // @ts-ignore
                value={{
                    setItemsCount,
                }}
            >
                <Navbar />
                <ProductPage />
            </CartContext.Provider>
        </MockedProvider>
    );

    const increaseQuantity = await screen.findByText("+");

    const currentQuantity = screen.getByTitle("Current Quantity");

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent("4");

    const addToBasketElement = screen.getByText("Add to cart");
    fireEvent.click(addToBasketElement);
    expect(setItemsCount).toHaveBeenCalledWith(4);
});
