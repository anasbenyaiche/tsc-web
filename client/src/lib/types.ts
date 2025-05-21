export interface ServiceType {
  id: number;
  title: string;
  icon: string;
  features: string[];
  image:string;
}

export interface ERPModuleType {
  id: number;
  name: string;
  icon: string;
}

export interface TeamMemberType {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface FeatureType {
  id: number;
  title: string;
  description: string;
  icon: string;
}
