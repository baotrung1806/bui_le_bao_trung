import CameraOperatorVideo from '@/assets/images/job/videos/Camera Operator.mp4';
import VideoEditorVideo from '@/assets/images/job/videos/Video Editor.mp4';
import ThumbnailDesignerVideo from '@/assets/images/job/videos/Thumbnail Designer.mp4';
import ContentCreatorVideo from '@/assets/images/job/videos/Content Creator.mp4';
import AIArchitectVideo from '@/assets/images/job/videos/AI Architect.mp4';

export interface JobCardConfig {
  id: string;
  title: string;
  videoSrc?: string;
  classNameVideo?: string;
  href?: string;
}

export const JOB_CARDS: JobCardConfig[] = [
  {
    id: 'content-creator',
    title: 'Content Creator',
    videoSrc: ContentCreatorVideo,
    classNameVideo: 'h-120 mt-20',
    href:'https://www.youtube.com/@trungbui2003',
  },
  {
    id: 'thumbnail-designer',
    title: 'Thumbnail Designer',
    videoSrc: ThumbnailDesignerVideo,
    classNameVideo: 'h-120 -mt-30',
    href:'https://drive.google.com/drive/folders/1JVXLCSFKhwaz_22XPNKHxjj8F5j-XnhL?usp=sharing',
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    videoSrc: VideoEditorVideo,
    classNameVideo: 'h-120 mt-17',
    href:'https://drive.google.com/drive/folders/19n7BgYuyjbilPMuiWBT8CKdZ9gBqmCTL?usp=sharing',
  },
  {
    id: 'ai-architect',
    title: 'AI Architect',
    videoSrc: AIArchitectVideo,
    classNameVideo: 'object-cover',
    href:'https://drive.google.com/drive/folders/1YCCbeHfgQZ2OXtWc8F6WrTazTtAQZo1n?usp=sharing',
  },
  {
    id: 'camera-operator',
    title: 'Camera Operator',
    videoSrc: CameraOperatorVideo,
    classNameVideo: 'object-cover',
    href:'https://drive.google.com/drive/folders/1W4DjLj8Ks_MkgVQNFNIwDmZT5ZB8-olC?usp=sharing',
  },
];
