import { categorylists } from "../../utils/data";
import { CategoryCard, Container, Heading } from "../../router";

import './CategorySlider.css';

export const CategorySlider = () => {
  return (
    <>
      <section className="category-slider pb-16">
        <Container>
          <Heading title="Browse the categories" subtitle="Most viewed and all-time top-selling categories" />

          <div className="grid grid-cols-2 md:grid-cols-7 gap-5 my-8 animate__animated animate__fadeInUp">
            {categorylists.map((item) => (
              <CategoryCard key={item.id} item={item} className="animate__animated animate__fadeInUp animate__delay-1s" />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};