
export interface Project {
  id: string;
  title: string;
  category: 'web' | 'hardware' | 'electrical';
  description: string;
  longDescription?: string;
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
