export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Tag {
  id: number;
  title: string;
  label: string;
}

export interface Event {
  id: number;
  title: string;
  startingTime: Date;
  endTime: Date;
  location: string;
  tags: Tag[];
  description: string;
  contactInfoOn: boolean;
  contactInfo?: string;
  interested: number;
  timeOfPosting: Date;
}