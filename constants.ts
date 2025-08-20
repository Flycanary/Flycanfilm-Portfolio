import type { NavLink, Project, Skill, Service } from './types';
import React from 'react';
import AfterEffectsIcon from './components/icons/skills/AfterEffectsIcon';
import PremiereProIcon from './components/icons/skills/PremiereProIcon';
import Cinema4DIcon from './components/icons/skills/Cinema4DIcon';
import IllustratorIcon from './components/icons/skills/IllustratorIcon';
import DaVinciResolveIcon from './components/icons/skills/DaVinciResolveIcon';
import StoryboardingIcon from './components/icons/skills/StoryboardingIcon';
import MotionGraphicsIcon from './components/icons/services/MotionGraphicsIcon';
import VideoEditingIcon from './components/icons/services/VideoEditingIcon';
import CreativeDirectionIcon from './components/icons/services/CreativeDirectionIcon';
import MusicVideoIcon from './components/icons/services/MusicVideoIcon';

export const SKILLS: Skill[] = [
  { name: 'After Effects', icon: React.createElement(AfterEffectsIcon, { className: 'w-12 h-12' }) },
  { name: 'Premiere Pro', icon: React.createElement(PremiereProIcon, { className: 'w-12 h-12' }) },
  { name: 'Cinema 4D', icon: React.createElement(Cinema4DIcon, { className: 'w-12 h-12' }) },
  { name: 'Illustrator', icon: React.createElement(IllustratorIcon, { className: 'w-12 h-12' }) },
  { name: 'DaVinci Resolve', icon: React.createElement(DaVinciResolveIcon, { className: 'w-12 h-12' }) },
  { name: 'Storyboarding', icon: React.createElement(StoryboardingIcon, { className: 'w-12 h-12' }) }
];

export const SERVICES: Service[] = [
  {
    title: 'Motion Graphics & Animation',
    description: 'Crafting dynamic animations and visual effects that bring brands, products, and stories to life with cinematic flair.',
    icon: React.createElement(MotionGraphicsIcon),
  },
  {
    title: 'Video Editing & Post-Production',
    description: 'Assembling raw footage into a compelling narrative, complete with professional color grading, sound design, and finishing.',
    icon: React.createElement(VideoEditingIcon),
  },
  {
    title: 'Creative Direction & Storyboarding',
    description: 'Developing concepts and visual blueprints to guide projects from the initial idea to a powerful and cohesive final execution.',
    icon: React.createElement(CreativeDirectionIcon),
  },
  {
    title: 'Music Video Direction',
    description: 'Directing and producing visually stunning music videos that capture the artist\'s vision and resonate with their audience.',
    icon: React.createElement(MusicVideoIcon),
  }
];

export const PROJECTS: Project[] = [
  {
    title: '"Echoes in Neon" - Music Video',
    description: 'Directed and edited a music video for an indie-pop artist. The project involved concept creation, on-set direction, and full post-production to create a vibrant, story-driven visual.',
    tags: ['Direction', 'Music Video', 'Premiere Pro', 'Color Grading'],
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&h=600&fit=crop&fm=jpg&auto=format',
    liveUrl: '/#',
    repoUrl: '/#',
  },
  {
    title: '"Kinetic" - Brand Commercial',
    description: 'A high-energy commercial for a sports apparel brand. I was responsible for the motion graphics, editing, and color grading to create a dynamic and impactful final product.',
    tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Commercial'],
    imageUrl: 'https://images.unsplash.com/photo-1584862909242-032598380a6c?q=80&w=800&h=600&fit=crop&fm=jpg&auto=format',
    liveUrl: '/#',
    repoUrl: '/#',
  },
  {
    title: 'Infographic Explainer Video',
    description: 'A clear and engaging explainer video for a tech startup, simplifying complex data through clean motion graphics and smooth transitions.',
    tags: ['After Effects', 'Adobe Illustrator', 'Explainer Video'],
    imageUrl: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=800&h=600&fit=crop&fm=jpg&auto=format',
    liveUrl: '/#',
    repoUrl: '/#',
  },
  {
    title: 'Event Title Sequence',
    description: 'An opening title sequence for a creative conference. The project involved concept development, storyboarding, and final animation to set the tone for the event.',
    tags: ['Motion Design', 'Title Sequence', 'Cinema 4D'],
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&h=600&fit=crop&fm=jpg&auto=format',
    liveUrl: '/#',
    repoUrl: '/#',
  },
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: 'home' },
  { name: 'Showreel', href: 'showreel' },
  { name: 'About', href: 'about' },
  { name: 'Projects', href: 'projects' },
  { name: 'Services', href: 'services' },
  { name: 'Contact', href: 'contact' },
];

export const PROFILE_INFO = {
  name: 'Abhishek Singh',
  title: 'Motion Graphic Artist & Filmmaker',
  bio: "I'm a passionate Motion Graphic Artist and Filmmaker dedicated to bringing stories to life through compelling visuals and dynamic animation. With a keen eye for detail and a love for cinematic storytelling, I specialize in creating engaging content for digital platforms, commercials, and film. I thrive on collaborating with creative teams to transform concepts into visually stunning realities.",
  contactEmail: 'flycanfilm@gmail.com',
  instagramUsername: 'flycanfilm',
  linkedinUsername: 'flycanfilm',
  // Reverting to the standard YouTube embed URL for maximum compatibility.
  showreelUrl: 'https://www.youtube.com/embed/9upN5HcPgM?autoplay=1&mute=1&controls=1&loop=1&playlist=9upN5HcPgM&rel=0&playsinline=1&modestbranding=1',
};