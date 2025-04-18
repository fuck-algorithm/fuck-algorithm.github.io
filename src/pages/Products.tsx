import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products: React.FC = () => {
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>我们的产品</h1>
        <p>为算法学习者量身打造的工具和教程，让复杂算法变得简单易懂</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            variant="detailed" 
          />
        ))}
      </div>
      
      <div className="coming-soon">
        <h2>更多产品正在开发中</h2>
        <p>我们正在努力开发更多实用工具和教程，敬请期待！</p>
        <p className="contact-info">如有任何建议或合作意向，请联系我们：<a href="mailto:contact@fuck-algorithm.github.io">contact@fuck-algorithm.github.io</a></p>
      </div>
    </div>
  );
};

export default Products; 