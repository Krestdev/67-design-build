export interface navigationLink {
  title: string;
  href: string;
}

export type LocaleGroup = { lang: string; title: string };

export type Expertise = {
  id: number;
  title: string;
  desc: string;
}

export type ProjectPreview = {
  slug: string;
  title: string;
  description: string;
  images: Array<{src:string; alt:string}>
  year: string;
}

export type Project = {
  slug:string;
  title:string;
  description:string;
  resume?: string;
  images: Array<{src:string; alt:string}>
  tags: Array<string>;
  team: Array<string>;
  date: Date;
}

export type HeroProps = {
  title: string;
  main_title: string;
  image: string;
}

export interface serviceProps {
    title: string;
    description: string;
    src: string;
    id:string;
}

export interface mailProps {
  email:string;
  name:string;
  subject:string;
  message:string;
  phone:string;
}