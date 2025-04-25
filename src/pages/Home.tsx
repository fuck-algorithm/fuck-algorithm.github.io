import React, { useEffect, useRef, useState } from 'react';
import ProblemList from '../components/ProblemList';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const snapContainerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const problemsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    
    if (heroRef.current) observer.observe(heroRef.current);
    if (productsRef.current) observer.observe(productsRef.current);
    if (problemsRef.current) observer.observe(problemsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (productsRef.current) observer.unobserve(productsRef.current);
      if (problemsRef.current) observer.unobserve(problemsRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="snap-container" ref={snapContainerRef}>
      <div className="section-nav">
        <a 
          href="#hero" 
          className={activeSection === 'hero' ? 'active' : ''} 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
        />
        <a 
          href="#products" 
          className={activeSection === 'products' ? 'active' : ''} 
          onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}
        />
        <a 
          href="#problems" 
          className={activeSection === 'problems' ? 'active' : ''} 
          onClick={(e) => { e.preventDefault(); scrollToSection('problems'); }}
        />
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''} 
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
        />
      </div>

      <section id="hero" className="hero screen-section" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <h1>Fuck Algorithm</h1>
            <p className="slogan">把一天能理解的知识，缩短到一个小时</p>
            <a href="#products" className="cta-button" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>
              查看我们的产品
              <span className="btn-icon">→</span>
            </a>
          </div>
          <div className="scroll-indicator" onClick={() => scrollToSection('products')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </div>
        </div>
      </section>

      <section id="products" className="products screen-section" ref={productsRef}>
        <div className="container">
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
          <div className="scroll-indicator" onClick={() => scrollToSection('problems')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </div>
        </div>
      </section>

      <section id="problems" className="problems screen-section" ref={problemsRef}>
        <div className="container">
          <ProblemList />
          <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </div>
        </div>
      </section>

      <section id="about" className="about screen-section" ref={aboutRef}>
        <div className="container">
          <h2>关于我们</h2>
          <p>我们致力于提供简洁明了的算法解析，帮助开发者快速理解和掌握常见算法问题。</p>
          <p>我们的目标是让复杂的算法变得简单易懂，将需要一天才能理解的知识浓缩到一小时内。</p>
          <div className="about-cta">
            <a href="https://github.com/fuck-algorithm" target="_blank" rel="noopener noreferrer" className="github-link">
              访问我们的 GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 