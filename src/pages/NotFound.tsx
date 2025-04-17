import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>页面未找到</h2>
      <p>您访问的页面不存在或已被移除。</p>
      <a href="/" className="cta-button">返回首页</a>
    </div>
  );
};

export default NotFound; 