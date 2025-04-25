import { Product } from '../components/ProductCard';

// 所有产品数据
export const products: Product[] = [
  {
    id: 'leetcode-hot-100',
    title: 'LeetCode Hot 100',
    description: '把一天能理解的知识，缩短到一个小时 - LeetCode最热门的100道算法题目解析',
    longDescription: '把一天能理解的知识，缩短到一个小时。收集了LeetCode平台上最受欢迎的100道算法题目，涵盖了从简单到困难的各种难度。每道题目都提供了详细解析，包括解题思路、算法分析和多种编程语言的代码实现。我们的目标是让你能够在最短的时间内掌握这些经典算法问题。',
    imageUrl: '/assets/images/leetcode-hot-100.jpg',
    url: 'https://fuck-algorithm.github.io/leetcode-hot-100/',
    features: [
      '把一天能理解的知识，缩短到一个小时',
      '详细的解题思路分析',
      '多种解法对比，从暴力到最优',
      '时间和空间复杂度分析',
      '动图演示算法执行过程',
      '提供JavaScript、Python、Java等多种语言实现',
      '面试常见问题解答'
    ]
  }
]; 