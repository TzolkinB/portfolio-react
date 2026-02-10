export interface Skill {
  name: string
  years: string
  isCore: boolean
  imageSrc?: string
  customImage?: JSX.Element
}

export interface SkillCategory {
  icon: string
  skills: Skill[]
}

export interface SkillCategories {
  [categoryName: string]: SkillCategory
}

export interface Project {
  title: string
  subtitle: string
  description: string
  url: string
  urlText: string
  url2?: string
  url2Text?: string
  badgeText: string[]
  impactMetricBold?: string
  impactMetricStandard?: string
}

export interface SectionProps {
  id: string
}

export interface BadgeConfig {
  icon: string
  text: string
}
