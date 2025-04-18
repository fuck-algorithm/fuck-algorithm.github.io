document.addEventListener('DOMContentLoaded', function() {
  // 处理页面内容
  displayContent();
});

function displayContent() {
  const root = document.getElementById('root');
  
  if (!root) {
    console.error('未找到root元素');
    return;
  }
  
  // 创建App容器
  const app = document.createElement('div');
  app.className = 'App';
  
  // 添加页面结构
  app.innerHTML = `
    <header class="App-header">
      <nav class="navbar">
        <div class="logo">
          <h1>Fuck Algorithm</h1>
        </div>
        <div class="nav-links">
          <a href="#">首页</a>
          <a href="#products">产品</a>
          <a href="#problems">题解</a>
          <a href="#about">关于我们</a>
          <a href="https://github.com/fuck-algorithm" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </nav>
    </header>
    
    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Fuck Algorithm</h1>
          <p class="slogan">把一天能理解的知识，缩短到一个小时</p>
          <a href="#products" class="cta-button">查看我们的产品</a>
        </div>
      </section>
      
      <section id="products" class="products">
        <h2>我们的产品</h2>
        <div class="product-cards">
          <div class="product-card">
            <h3>LeetCode Hot 100</h3>
            <p>LeetCode最热门的100道算法题目解析</p>
            <a href="https://fuck-algorithm.github.io/leetcode-hot-100/" target="_blank" rel="noopener noreferrer" class="product-link">
              立即访问
            </a>
          </div>
        </div>
      </section>
      
      <section id="problems" class="problems">
        <div class="problem-list">
          <h2>所有算法题解</h2>
          <p class="subtitle">按题号排序的所有题解列表</p>
          
          <div class="filters">
            <span class="filter-label">难度筛选:</span>
            <button class="filter-btn active">全部</button>
            <button class="filter-btn easy">简单</button>
            <button class="filter-btn medium">中等</button>
            <button class="filter-btn hard">困难</button>
          </div>
          
          <div class="problem-table-container">
            <table class="problem-table">
              <thead>
                <tr>
                  <th>题号</th>
                  <th>标题</th>
                  <th>难度</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody id="problems-tbody"></tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section id="about" class="about">
        <h2>关于我们</h2>
        <p>我们致力于提供简洁明了的算法解析，帮助开发者快速理解和掌握常见算法问题。</p>
        <p>我们的目标是让复杂的算法变得简单易懂，将需要一天才能理解的知识浓缩到一小时内。</p>
      </section>
    </main>
    
    <footer>
      <div class="footer-content">
        <div class="footer-links">
          <a href="https://github.com/fuck-algorithm" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#products">产品</a>
          <a href="#problems">题解</a>
          <a href="#about">关于我们</a>
        </div>
        <p>© ${new Date().getFullYear()} Fuck Algorithm. 保留所有权利。</p>
      </div>
    </footer>
  `;
  
  // 添加到DOM
  root.appendChild(app);
  
  // 添加题目数据
  const problems = [
    {
      id: 20,
      title: '有效的括号',
      url: 'https://fuck-algorithm.github.io/leetcode-20-valid-parentheses/',
      difficulty: 'easy'
    },
    {
      id: 94,
      title: '二叉树的中序遍历',
      url: 'https://fuck-algorithm.github.io/leetcode-94-binary-tree-inorder-traversal/',
      difficulty: 'medium'
    },
    {
      id: 136,
      title: '只出现一次的数字',
      url: 'https://fuck-algorithm.github.io/leetcode-136-single-number/',
      difficulty: 'easy'
    },
    {
      id: 160,
      title: '相交链表',
      url: 'https://fuck-algorithm.github.io/leetcode-160-intersection-of-two-linked-lists/',
      difficulty: 'easy'
    },
    {
      id: 169,
      title: '多数元素',
      url: 'https://fuck-algorithm.github.io/leetcode-169-majority-element/',
      difficulty: 'easy'
    },
    {
      id: 200,
      title: '岛屿数量',
      url: 'https://fuck-algorithm.github.io/leetcode-200-number-of-islands/',
      difficulty: 'medium'
    },
    {
      id: 283,
      title: '移动零',
      url: 'https://fuck-algorithm.github.io/leetcode-283-move-zeroes/',
      difficulty: 'easy'
    },
    {
      id: 461,
      title: '汉明距离',
      url: 'https://fuck-algorithm.github.io/leetcode-461-hamming-distance/',
      difficulty: 'easy'
    }
  ];
  
  const tbody = document.getElementById('problems-tbody');
  if (tbody) {
    problems.forEach(problem => {
      const tr = document.createElement('tr');
      tr.className = `difficulty-${problem.difficulty}`;
      
      const difficultyText = problem.difficulty === 'easy' ? '简单' : 
                             problem.difficulty === 'medium' ? '中等' : '困难';
      
      tr.innerHTML = `
        <td>${problem.id}</td>
        <td>${problem.title}</td>
        <td>
          <span class="difficulty-tag ${problem.difficulty}">
            ${difficultyText}
          </span>
        </td>
        <td>
          <a href="${problem.url}" target="_blank" rel="noopener noreferrer" class="view-btn">
            查看解析
          </a>
        </td>
      `;
      
      tbody.appendChild(tr);
    });
  }
  
  // 处理筛选按钮
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 移除所有按钮的active类
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // 添加当前按钮的active类
      this.classList.add('active');
      
      // 获取选择的难度
      const difficulty = this.classList.contains('easy') ? 'easy' : 
                        this.classList.contains('medium') ? 'medium' : 
                        this.classList.contains('hard') ? 'hard' : 'all';
      
      // 筛选题目
      const rows = document.querySelectorAll('.problem-table tbody tr');
      rows.forEach(row => {
        if (difficulty === 'all' || row.classList.contains(`difficulty-${difficulty}`)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
}
