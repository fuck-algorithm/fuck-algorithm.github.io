import React from 'react';
import ProblemList from '../components/ProblemList';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Fuck Algorithm</h1>
          <p className="slogan">把一天能理解的知识，缩短到一个小时</p>
          <a href="#products" className="cta-button">查看我们的产品</a>
        </div>
      </section>

      <section id="products" className="products">
        <h2>我们的产品</h2>
        <div className="product-cards">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              variant="simple"
            />
          ))}
        </div>
      </section>

      <section id="problems" className="problems">
        <ProblemList />
      </section>

      <section id="about" className="about">
        <h2>关于我们</h2>
        <p>我们致力于提供简洁明了的算法解析，帮助开发者快速理解和掌握常见算法问题。</p>
        <p>我们的目标是让复杂的算法变得简单易懂，将需要一天才能理解的知识浓缩到一小时内。</p>
      </section>
    </>
  );
};

export default Home; 