
export type Language = 'en' | 'ko' | 'fr';

export type Translatable = Record<Language, string>;

export interface Project {
  id: string;
  title: Translatable;
  category: 'web' | 'hardware' | 'electrical';
  description: Translatable;
  longDescription?: Translatable;
  image: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
    schematic?: string;
  };
  codeSnippet?: string;
  schematicImage?: string;
}

export interface Skill {
  name: string;
  category: 'Coding' | 'Electrical' | 'Tools';
  proficiency: number;
}
