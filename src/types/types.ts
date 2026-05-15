export interface BadgeConfig {
  icon: string
  text: string
}


export interface FooterLink {
  href: string
  ariaLabel: string
  svgPath: string
}

export interface FooterLinksProps {
  links: readonly FooterLink[]
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

export interface Skill {
  name: string
  years: string
  isCore: boolean
  iconPath?: string
  customImageKey?: string
}

export interface SkillCategory {
  icon: string
  skills: Skill[]
}

export interface SkillCategories {
  [categoryName: string]: SkillCategory
}

export interface SocialLink {
  href: string
  icon: string
  label: string
  backgroundColor: string
}

export interface SocialLinksProps {
  links: SocialLink[]
}
