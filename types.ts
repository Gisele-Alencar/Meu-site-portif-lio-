import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  type: 'image' | 'iframe';
  imageUrl?: string;
  iframeUrl?: string;
  linkUrl?: string;
}

export interface CareerMoment {
  id: number;
  title: string;
  year: string;
  description: string;
  imageUrl: string;
}

export interface Skill {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}