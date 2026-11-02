import groupsJson from '../data/groups.json';
import projectsJson from '../data/projects.json';
import siteJson from '../data/site.json';
import type { Group, GroupId, Project, SiteProfile } from './types';

export const site = siteJson as SiteProfile;
export const groups = groupsJson as Group[];
export const projects = projectsJson as Project[];

export function allProjects(): Project[] {
  return projects;
}

export function groupById(id: GroupId): Group {
  const group = groups.find((item) => item.id === id);
  if (!group) throw new Error(`Unknown group: ${id}`);
  return group;
}

export function projectsIn(id: GroupId): Project[] {
  return projects.filter((project) => project.group === id);
}

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function searchBlob(project: Project): string {
  return [
    project.slug,
    project.title,
    project.summary,
    project.highlight,
    project.stage ?? '',
    project.repo.note,
    ...(project.stack ?? []),
    ...project.aliases,
    ...project.facts.flatMap((fact) => [fact.label, fact.value]),
    ...project.paragraphs,
  ]
    .join(' ')
    .toLowerCase();
}
