import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  fallbackImage?: string;
  overlayOpacity?: number; // 0-100 opacity value
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  poster,
  className = '',
  muted = true,
  loop = true,
  autoPlay = true,
  fallbackImage,
  overlayOpacity =50 // Default 50% opacity
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoFailed, setIsVideoFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Map opacity to the predefined Tailwind classes (10, 20, 30, etc.)
  const getOpacityClass = (opacity: number) => {
    // Round to nearest 10
    const roundedOpacity = Math.round(opacity / 10) * 10;
    return `opacity-${roundedOpacity}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      console.error("Video failed to load", src);
      setIsVideoFailed(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Force play the video (sometimes autoplay doesn't work)
    const playVideo = async () => {
      try {
        if (video) {
          await video.play();
        }
      } catch (err) {
        console.error("Could not play the video", err);
      }
    };

    playVideo();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  // Alternative videos if the main one fails
  const videoOptions = [
    src,
    "https://assets.mixkit.co/videos/preview/mixkit-blue-ink-swirling-in-water-21862-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4"
  ];

  // Fallback image when video fails
  if (isVideoFailed && fallbackImage) {
    return (
      <div className={`${className} overflow-hidden relative`}>
        <img 
          src={fallbackImage} 
          alt="Background" 
          className="w-full h-full object-cover"
          loading="eager" // Load immediately as this is a hero element
        />
        <div className={`absolute inset-0 bg-black ${getOpacityClass(overlayOpacity)}`}></div>
      </div>
    );
  }

  return (
    <div className={`${className} overflow-hidden relative`}>
      {/* Show poster or gradient while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light"></div>
      )}
      
      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        poster={poster}
      >
        {videoOptions.map((videoSrc, index) => (
          <source key={index} src={videoSrc} type="video/mp4" />
        ))}
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className={`absolute inset-0 bg-black ${getOpacityClass(overlayOpacity)}`}></div>
    </div>
  );
};

export default VideoBackground;