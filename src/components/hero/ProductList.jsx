import { Container, Heading } from "../../router";
import { productlists } from "../../utils/data";
import { ProductCard } from "../cards/ProductCard";
import './ProductList.css'; // Import the CSS with animations

export const ProductList = () => {
  return (
    <>
      <section className="product-home">
        <Container>
          <Heading
            title="Live Auction"
            subtitle="Explore on the world's best & largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-8">
            {productlists?.slice(0, 12)?.map((item, index) => (
              <ProductCard
                item={item}
                key={index + 1}
                className="product-slide-in" // Apply sliding animation here
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
