import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProblemList from './components/ProblemList';
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <h1>Fuck Algorithm</h1>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">首页</Link>
            <Link to="/products">产品</Link>
            <Link to="/#problems">题解</Link>
            <Link to="/#about">关于我们</Link>
            <a href="https://github.com/fuck-algorithm" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/problems" element={<ProblemList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com/fuck-algorithm" target="_blank" rel="noopener noreferrer">GitHub</a>
            <Link to="/products">产品</Link>
            <Link to="/#problems">题解</Link>
            <Link to="/#about">关于我们</Link>
          </div>
          <p>© {new Date().getFullYear()} Fuck Algorithm. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
};

export default App; 