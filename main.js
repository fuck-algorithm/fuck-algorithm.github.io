// 添加一些互动元素
document.addEventListener('DOMContentLoaded', function() {
  // 获取当前时间
  const now = new Date();
  const footer = document.createElement('footer');
  footer.style.marginTop = '40px';
  footer.style.fontSize = '0.9rem';
  footer.style.color = '#777';
  footer.innerHTML = '最后更新时间: ' + now.toLocaleString();
  
  // 随机算法小知识
  const tips = [
    "快速排序的平均时间复杂度是O(n log n)",
    "动态规划通常用于解决具有重叠子问题的优化问题",
    "二分查找要求数组必须是有序的",
    "广度优先搜索通常使用队列实现",
    "深度优先搜索通常使用栈或递归实现",
    "哈希表的平均查找时间复杂度是O(1)"
  ];
  
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  const tipElement = document.createElement('div');
  tipElement.className = 'coming-soon';
  tipElement.innerHTML = '<h3>每日算法小知识</h3><p>' + randomTip + '</p>';
  
  const container = document.querySelector('.container');
  container.insertBefore(tipElement, document.querySelector('.github-link'));
  container.appendChild(footer);
});
