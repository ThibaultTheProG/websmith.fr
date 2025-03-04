export type ProjectType = "tous" | "web" | "mobile" | "marketing" | "autre";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  imageUrl: string;
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
  projectDescription: string;
}
