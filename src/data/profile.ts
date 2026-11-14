import type { Profile, Skill, Experience, SocialLink } from '@/types'

/** 个人基本信息 */
export const profile: Profile = {
  name: 'Yinke',
  title: 'Designer · Creator · Maker',
  tagline: '用设计连接想法与现实',
  bio: '我是一名跨界的设计创作者。在产品设计、视觉设计和摄影之间游走，同时也是一个热爱分享的内容创作者。相信好的设计能改变日常体验，好的内容能传递思考方式。',
  avatar: '',
  email: 'hello@yinke.design',
  socialLinks: [
    { platform: '小红书', handle: 'Yinke设计', icon: 'BookOpen', url: '#' },
    { platform: 'Twitter', handle: '@yinke_design', icon: 'Twitter', url: '#' },
    { platform: 'GitHub', handle: 'yinke-design', icon: 'Github', url: '#' },
    { platform: 'Email', handle: 'hello@yinke.design', icon: 'Mail', url: 'mailto:hello@yinke.design' },
  ] as SocialLink[],
}

/** 技能列表 */
export const skills: Skill[] = [
  // Design
  { name: 'Figma', level: 'Expert', category: 'Design' },
  { name: 'Sketch', level: 'Proficient', category: 'Design' },
  { name: 'Adobe Illustrator', level: 'Proficient', category: 'Design' },
  { name: 'Adobe Photoshop', level: 'Proficient', category: 'Design' },
  { name: 'Principle', level: 'Familiar', category: 'Design' },
  // Code
  { name: 'TypeScript', level: 'Proficient', category: 'Code' },
  { name: 'React', level: 'Proficient', category: 'Code' },
  { name: 'Tailwind CSS', level: 'Proficient', category: 'Code' },
  { name: 'HTML / CSS', level: 'Proficient', category: 'Code' },
  // Tool
  { name: 'Notion', level: 'Expert', category: 'Tool' },
  { name: 'Blender', level: 'Familiar', category: 'Tool' },
  { name: 'DaVinci Resolve', level: 'Familiar', category: 'Tool' },
]

/** 工作经历 */
export const experiences: Experience[] = [
  {
    id: '1',
    role: '高级产品设计师',
    company: '某科技公司',
    period: '2023 — 至今',
    description: '负责核心产品线的设计工作，参与设计系统建设。',
  },
  {
    id: '2',
    role: '产品设计师',
    company: '某互联网公司',
    period: '2021 — 2023',
    description: '参与多个 APP 从 0 到 1 的设计落地。',
  },
  {
    id: '3',
    role: '自由设计师',
    company: '独立工作室',
    period: '2020 — 2021',
    description: '承接品牌设计、产品设计和视觉设计项目。',
  },
]
