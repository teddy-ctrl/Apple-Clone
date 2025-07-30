// src/components/HlsVideoPlayer.js

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HlsVideoPlayer = ({ src, className }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // This is for Safari, which has native HLS support
      video.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default HlsVideoPlayer;