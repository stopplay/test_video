import React, { useRef, useEffect } from 'react';

const Video = ({ autoPlay, srcMp4, srcWeb, srcOgv, children }) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, [autoPlay]);

  return (
    <div className="video-container">
      <video preload="auto" loop muted ref={ref => (videoRef.current = ref)}>
        <source src={srcMp4} type="video/mp4" />
        <source src={srcWeb} type="video/webm" />
        <source src={srcOgv} type="video/ogg" />
      </video>
      {children && <div className="content-container">{children}</div>}
    </div>
  );
};

export default Video;