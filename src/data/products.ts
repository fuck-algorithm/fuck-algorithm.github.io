import { Product } from '../components/ProductCard';

// 所有产品数据
export const products: Product[] = [
  {
    id: 'leetcode-hot-100',
    title: 'LeetCode Hot 100',
    description: 'LeetCode最热门的100道算法题目解析',
    longDescription: '收集了LeetCode平台上最受欢迎的100道算法题目，涵盖了从简单到困难的各种难度。每道题目都提供了详细解析，包括解题思路、算法分析和多种编程语言的代码实现。我们的目标是让你能够在最短的时间内掌握这些经典算法问题。',
    imageUrl: '/assets/images/leetcode-hot-100.jpg',
    url: 'https://fuck-algorithm.github.io/leetcode-hot-100/',
    features: [
      '详细的解题思路分析',
      '多种解法对比，从暴力到最优',
      '时间和空间复杂度分析',
      '动图演示算法执行过程',
      '提供JavaScript、Python、Java等多种语言实现',
      '面试常见问题解答'
    ]
  },
  {
    id: 'data-structure-visualizer',
    title: '数据结构可视化工具',
    description: '以可视化方式展示常见数据结构的操作过程',
    longDescription: '通过交互式动画展示各种数据结构（如数组、链表、树、图等）的基本操作，帮助你直观理解数据结构的工作原理。每种数据结构都配有详细的原理介绍、特性分析和适用场景说明，非常适合初学者学习数据结构概念。',
    imageUrl: '/assets/images/data-structure.jpg',
    url: 'https://fuck-algorithm.github.io/data-structure-visualizer/',
    features: [
      '支持多种基础数据结构',
      '动态演示增删改查操作',
      '自定义输入测试',
      '代码和可视化同步展示',
      '算法复杂度实时分析',
      '交互式学习体验'
    ]
  }
]; 