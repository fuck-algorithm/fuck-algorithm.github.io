document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="font-family: 'Inter', sans-serif; max-width: 800px; margin: 40px auto; text-align: center; padding: 20px;">
        <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; color: #1e1e2e;">Fuck Algorithm</h1>
        <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #555;">把一天能理解的知识，缩短到一个小时</p>
        
        <div style="background-color: white; border-radius: 8px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 30px;">
          <h2>网站建设中</h2>
          <p>我们正在努力为您构建更好的算法学习平台，敬请期待！</p>
        </div>
        
        <div style="background-color: white; border-radius: 8px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 30px;">
          <h3>每日算法小知识</h3>
          <p>哈希表的平均查找时间复杂度是O(1)</p>
        </div>
        
        <a href="https://github.com/fuck-algorithm" 
           style="display: inline-block; margin-top: 20px; background-color: #1e1e2e; color: white; padding: 10px 20px; border-radius: 4px; text-decoration: none; font-weight: 500;">
          访问 GitHub 组织
        </a>
        
        <footer style="margin-top: 40px; font-size: 0.9rem; color: #777;">
          © ${new Date().getFullYear()} Fuck Algorithm. 保留所有权利。
        </footer>
      </div>
    `;
  }
});
