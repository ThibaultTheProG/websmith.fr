export type ProjectType = "site-internet" | "application-web" | "application-mobile" | "marketing" | "tous";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  imageUrl: string;
  link?: string;
  technologies?: string[];
}

export interface Review {
  id: number;
  clientName: string;
  companyName: string;
  logoUrl: string;
  content: string;
  rating: number;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  projectDescription: string;
}
