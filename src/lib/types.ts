export type GroupId = 'flagship' | 'security' | 'fiaos' | 'os' | 'health';

export type RepoState = 'coming-soon' | 'private' | 'public';

export interface Fact {
  label: string;
  value: string;
}

export interface Shot {
  file: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  group: GroupId;
  featured?: boolean;
  aliases: string[];
  summary: string;
  highlight: string;
  stage?: string;
  repo: { state: RepoState; note: string };
  stack?: string[];
  facts: Fact[];
  paragraphs: string[];
  callout?: string;
  shots: Shot[];
  schematic?: boolean;
  placeholder?: boolean;
  comingSoon?: boolean;
  hero?: boolean;
  pulse?: { text: string; label: string; count?: number; prefix?: string; suffix?: string };
  links?: { label: string; href: string }[];
}

export interface Group {
  id: GroupId;
  label: string;
  index: string;
  summary: string;
}

export interface SiteProfile {
  person: string;
  role: string;
  headline: string;
  tagline: string;
  description: string;
  place: string;
  studio: string;
  between: string;
  focus: string;
  ethos: string;
  socials?: { label: string; href: string }[];
}
