

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}