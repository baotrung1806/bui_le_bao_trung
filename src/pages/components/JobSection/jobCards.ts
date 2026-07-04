import CameraOperatorVideo from '@/assets/images/job/videos/Camera Operator.mp4';

export interface JobCardConfig {
  id: string;
  title: string;
  videoSrc?: string;
  href?: string;
}

// Add/edit cards here instead of duplicating JSX in JobSection.
export const JOB_CARDS: JobCardConfig[] = [
  {
    id: 'content-creator',
    title: 'Content Creator',
    videoSrc: CameraOperatorVideo,
    href:'https://www.youtube.com/@trungbui2003',
  },
  {
    id: 'thumbnail-designer',
    title: 'Thumbnail Designer',
    videoSrc: CameraOperatorVideo,
    href:'https://drive.google.com/drive/folders/1JVXLCSFKhwaz_22XPNKHxjj8F5j-XnhL?usp=sharing',
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    videoSrc: CameraOperatorVideo,
    href:'https://drive.google.com/drive/folders/19n7BgYuyjbilPMuiWBT8CKdZ9gBqmCTL?usp=sharing',
  },
  {
    id: 'ai-architect',
    title: 'AI Architect',
    videoSrc: CameraOperatorVideo,
    href:'https://drive.google.com/drive/folders/1YCCbeHfgQZ2OXtWc8F6WrTazTtAQZo1n?usp=sharing',
  },
  {
    id: 'camera-operator',
    title: 'Camera Operator',
    videoSrc: CameraOperatorVideo,
    href:'https://drive.google.com/drive/folders/1W4DjLj8Ks_MkgVQNFNIwDmZT5ZB8-olC?usp=sharing',
  },
];
