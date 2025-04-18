import React from 'react';
import { Link } from 'react-router-dom';

// 产品类型定义
export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  url: string;
  features?: string[];
}

interface ProductCardProps {
  product: Product;
  // 可简单展示或详细展示
  variant?: 'simple' | 'detailed';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'simple' }) => {
  // 简单卡片样式，用于首页
  if (variant === 'simple') {
    return (
      <div className="product-card">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-actions">
          <a href={product.url} target="_blank" rel="noopener noreferrer" className="product-link">
            立即访问
          </a>
          <Link to={`/products#${product.id}`} className="product-details-link">
            了解详情
          </Link>
        </div>
      </div>
    );
  }

  // 详细卡片样式，用于产品页面
  return (
    <div id={product.id} className="product-card-detailed">
      <div className="product-image">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Coming+Soon';
          }}
        />
      </div>
      <div className="product-content">
        <h2>{product.title}</h2>
        <p className="product-description">{product.longDescription || product.description}</p>
        
        {product.features && product.features.length > 0 && (
          <>
            <h3>主要特点：</h3>
            <ul className="product-features">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        <div className="product-actions">
          <a 
            href={product.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="product-link primary"
          >
            立即体验
          </a>
          <Link to="/" className="product-link secondary">返回首页</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 