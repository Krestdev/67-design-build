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
}

export type HeroProps = {
  title: string;
  main_title: string;
  image: string;
}