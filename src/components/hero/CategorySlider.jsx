import { useState } from 'react';
import { categorylists } from "../../utils/data";
import { CategoryCard, Container, Heading } from "../../router";



export const CategorySlider = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (item) => {
    setSelectedCategory(item);
  };

  return (
    <>
      <section className="category-slider pb-16">
        <Container>
          <Heading title="Browse the categories" subtitle="Most viewed and all-time top-selling categories" />

          <div className="grid grid-cols-2 md:grid-cols-7 gap-5 my-8">
            {categorylists.map((item) => (
              <CategoryCard
                key={item.id}
                item={item}
                onClick={() => handleCategoryClick(item)} // Add click handler
              />
            ))}
          </div>

          {selectedCategory && (
            <div className="category-description my-8">
              <h3 className="text-xl font-bold">{selectedCategory.name}</h3>
              <p>{selectedCategory.description}</p>
              <ul>
                {selectedCategory.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fa fa-check mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>
      
    </>
  );
};
