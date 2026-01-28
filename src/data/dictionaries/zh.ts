import type { Dictionary } from "@/interfaces";

export const zh: Dictionary = {
  meta: {
    title: "伊戈尔·克拉马尔 — 高级前端 / UI系统架构师",
    description: "作品集：UI架构、设计系统、令牌、主题化、可访问性、测试和质量。",
  },

  nav: {
    home: "首页",
    stack: "技术栈",
    projects: "案例",
    experience: "经验",
    contact: "联系",
  },

  hero: {
    role: "高级前端工程师",
    name: "伊戈尔·克拉马尔",
    subtitle: "UI系统架构师",
    description:
      "设计设计系统，实施令牌和主题化，设置质量门控。让界面构建快速、外观一致、适用于所有人。",
    stats: {
      experience: "年经验",
      projects: "个项目",
      systems: "个UI系统",
    },
    stack: "主要技术栈",
    status: "状态",
    statusText: "开放机会",
    availability: "远程或混合 · 莫斯科±3小时",
  },

  achievements: {
    label: "成果",
    title: "系统化方法带来的改变",
    description: "在质量、速度和开发可预测性方面的可衡量改进",
    items: [
      {
        metric: "89%",
        metricSuffix: "覆盖率",
        label: "测试",
        description: "从零到CI中稳定的回归测试。关键场景受控。",
        highlight: "0% → 89%",
      },
      {
        metric: "40+",
        metricSuffix: "组件",
        label: "设计系统",
        description: "令牌、主题化、文档。整个团队的唯一真相来源。",
        highlight: "Tokens → UI",
      },
      {
        metric: "AA",
        metricSuffix: "WCAG",
        label: "可访问性",
        description: "语义化、键盘、焦点管理、对比度。a11y作为完成定义的一部分。",
        highlight: "a11y by default",
      },
      {
        metric: "2×",
        metricSuffix: "更快",
        label: "发布速度",
        description: "质量门控、自动化、可预测的变更。生产环境中更少的意外。",
        highlight: "CI/CD",
      },
    ],
    impact: {
      title: "总体影响",
      subtitle: "在实际项目中的实施结果",
      stats: [
        { value: "7+", label: "年生产环境" },
        { value: "500K+", label: "用户" },
        { value: "15+", label: "团队使用" },
      ],
    },
  },

  principles: {
    label: "理念",
    title: "我遵循的原则",
    description:
      "我如何在界面、架构和质量方面做出决策。这些原则经过多年形成并在实际项目中得到验证。",
    quote: "好的代码不是今天能工作的代码，而是明天容易修改的代码",
    items: [
      {
        title: "系统重于英雄主义",
        subtitle: "可扩展性",
        description: "固定规则：令牌、组件契约、指南。团队更快、更可预测地前进。",
        keywords: ["Design Tokens", "API Contracts", "Guidelines"],
      },
      {
        title: "可访问性是质量的一部分",
        subtitle: "包容性",
        description:
          "语义化、键盘、焦点状态、对比度。这减少了错误并改善了所有用户的体验。",
        keywords: ["WCAG 2.1", "Screen Readers", "Keyboard Nav"],
      },
      {
        title: "质量是可衡量的",
        subtitle: "指标",
        description: "类型、代码检查、测试、回归和质量门控——让发布成为常规而非彩票。",
        keywords: ["TypeScript", "Testing", "CI/CD"],
      },
      {
        title: "DX = 业务速度",
        subtitle: "生产力",
        description: "清晰的组件API、文档、模板和CI：更少的摩擦、更少的上下文、更多的结果。",
        keywords: ["Storybook", "Documentation", "Templates"],
      },
    ],
  },

  contact: {
    badge: "开放机会",
    title: "让我们一起",
    titleAccent: "工作",
    description: "寻找有趣的项目，注重质量、系统和细节",
    emailLabel: "写信给我",
    sendEmail: "发送邮件",
    copyEmail: "复制",
    copied: "已复制！",
    or: "或",
    socials: "社交网络",
    responseTime: "通常在24小时内回复",
    timezone: "莫斯科，UTC+3",
  },

  footer: {
    role: "高级前端 / UI架构师",
    description: "UI Kit、设计令牌、主题化、可访问性、测试和DX。",
    write: "写信",
    navigation: "导航",
    contacts: "联系方式",
    aboutSite: "关于本站",
    aboutSiteText: "快速、可访问、无重依赖。玻璃效果、细边框、平静的动画。",
    sourceCode: "源代码",
    copyright: "伊戈尔·克拉马尔",
  },

  common: {
    telegram: "Telegram",
    github: "GitHub",
    email: "邮箱",
    toTop: "回到顶部",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换主题",
    lightTheme: "启用浅色主题",
    darkTheme: "启用深色主题",
  },

  stack: {
    meta: {
      title: "技术栈",
      description: "我使用的技术栈和工具。",
    },
    hero: {
      label: "技术",
      title: "我的",
      titleAccent: "技术栈",
      description: "用于构建快速、可访问和可扩展应用程序的工具和技术。",
    },
    filters: {
      all: "全部",
    },
    levels: {
      expert: "专家",
      advanced: "高级",
      familiar: "熟悉",
    },
    categories: {
      frontend: "前端",
      backend: "后端",
      database: "数据库",
      devops: "DevOps",
      testing: "测试",
      tools: "工具",
      ai: "AI / ML",
    },
    stats: {
      total: "项技术",
      categories: "个类别",
      years: "年经验",
    },
    empty: "技术即将推出",
  },
};
