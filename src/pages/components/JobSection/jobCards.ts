import BaoTrung from '@/assets/images/myself/BaoTrung.webp';

export interface JobCardConfig {
  id: string;
  title: string;
  imageSrc?: string;
}

// Add/edit cards here instead of duplicating JSX in JobSection.
export const JOB_CARDS: JobCardConfig[] = [
  {
    id: 'content-creator',
    title: 'Content Creator',
    imageSrc: BaoTrung,
  },
  {
    id: 'thumbnail-designer',
    title: 'Thumbnail Designer',
    imageSrc: BaoTrung,
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    imageSrc: BaoTrung,
  },
  {
    id: 'ai-architect',
    title: 'AI Architect',
    imageSrc: BaoTrung,
  },
  {
    id: 'camera-operator',
    title: 'Camera Operator',
    imageSrc: BaoTrung,
  },
];
