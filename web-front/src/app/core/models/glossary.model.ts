export enum GlossaryVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export interface Glossary {
  id: string;
  title: string;
  description: string;
  visibility: GlossaryVisibility;
}
