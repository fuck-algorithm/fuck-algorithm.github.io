import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// 替换%PUBLIC_URL%为实际的基础路径
const replacePublicUrl = (htmlElement: Document) => {
  const publicUrl = process.env.PUBLIC_URL || '';
  const allElements = htmlElement.getElementsByTagName('*');
  
  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    const attributeNames = element.getAttributeNames();
    
    for (const attrName of attributeNames) {
      const attrValue = element.getAttribute(attrName);
      if (attrValue && attrValue.includes('%PUBLIC_URL%')) {
        element.setAttribute(attrName, attrValue.replace(/%PUBLIC_URL%/g, publicUrl));
      }
    }
  }
};

// 应用%PUBLIC_URL%替换
document.addEventListener('DOMContentLoaded', () => {
  replacePublicUrl(document);
});

const container = document.getElementById('root');
if (!container) throw new Error('未找到id为root的元素');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
); 