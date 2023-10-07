import { LINKS, PROJECTS } from '@/lib/data';

export type TSectionName = (typeof LINKS)[number]['name'];
export type TProject = (typeof PROJECTS)[number];
