import type { Note, CreatorAccount } from '@/types'

export const CREATOR_CATEGORIES = {
  account: '小红书账号',
  notes: '精选笔记',
  tutorials: '设计教程',
  thoughts: '设计思考',
} as const

export type CreatorCategory = keyof typeof CREATOR_CATEGORIES

export interface CreatorData {
  account: CreatorAccount
  notes: Note[]
  tutorials: Note[]
  thoughts: Note[]
}

export const creator: CreatorData = {
  account: {
    platform: '小红书',
    handle: '@Yinke设计',
    description: '分享产品设计思考、视觉创作过程和日常灵感',
    followers: '1.2w',
    url: '#',
  },

  notes: [
    {
      id: 'note-1',
      title: '产品设计师的 2024 年度总结',
      summary: '这一年做了哪些项目、有哪些思考、学会了什么新东西。',
      coverImage: '',
      publishDate: '2025-01-02',
      source: '小红书',
      url: '#',
    },
    {
      id: 'note-2',
      title: '如何搭建个人设计系统',
      summary: '我用了半年时间搭建自己的设计系统，分享一些心得。',
      coverImage: '',
      publishDate: '2024-12-15',
      source: '小红书',
      url: '#',
    },
  ],

  tutorials: [
    {
      id: 'tut-1',
      title: 'Figma 高级技巧：组件属性的 5 种用法',
      summary: '让你的组件更智能、更灵活。',
      coverImage: '',
      publishDate: '2024-11-20',
      source: '小红书',
      url: '#',
    },
    {
      id: 'tut-2',
      title: '从零学 Blender：给设计师的 10 个入门练习',
      summary: '不需要编程，设计师也能做 3D。',
      coverImage: '',
      publishDate: '2024-10-08',
      source: '小红书',
      url: '#',
    },
  ],

  thoughts: [
    {
      id: 'thought-1',
      title: '好设计，为何让人感觉"刚刚好"',
      summary: '从克制与平衡的角度，聊聊什么是恰到好处的设计。',
      coverImage: '',
      publishDate: '2024-09-22',
      source: '个人博客',
      url: '#',
    },
    {
      id: 'thought-2',
      title: '关于"审美疲劳"的几个观察',
      summary: '为什么有些设计会很快过时，而有些却一直耐看。',
      coverImage: '',
      publishDate: '2024-08-10',
      source: '个人博客',
      url: '#',
    },
  ],
}
