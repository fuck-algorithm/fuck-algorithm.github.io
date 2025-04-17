import React from 'react';
import './ProblemList.css';

interface Problem {
  id: number;
  title: string;
  url: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const problems: Problem[] = [
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

const ProblemList: React.FC = () => {
  return (
    <div className="problem-list">
      <h2>所有算法题解</h2>
      <p className="subtitle">按题号排序的所有题解列表</p>
      
      <div className="filters">
        <span className="filter-label">难度筛选:</span>
        <button className="filter-btn active">全部</button>
        <button className="filter-btn easy">简单</button>
        <button className="filter-btn medium">中等</button>
        <button className="filter-btn hard">困难</button>
      </div>
      
      <div className="problem-table-container">
        <table className="problem-table">
          <thead>
            <tr>
              <th>题号</th>
              <th>标题</th>
              <th>难度</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(problem => (
              <tr key={problem.id} className={`difficulty-${problem.difficulty}`}>
                <td>{problem.id}</td>
                <td>{problem.title}</td>
                <td>
                  <span className={`difficulty-tag ${problem.difficulty}`}>
                    {problem.difficulty === 'easy' ? '简单' : 
                     problem.difficulty === 'medium' ? '中等' : '困难'}
                  </span>
                </td>
                <td>
                  <a href={problem.url} target="_blank" rel="noopener noreferrer" className="view-btn">
                    查看解析
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProblemList; 