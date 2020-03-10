import React from 'react';
import Video from './Video';

function App() {
  return (
    <div>
      <Video
        autoPlay
        srcMp4="https://res.cloudinary.com/colb/video/upload/v1583526276/Videos/video_boyrdo.mp4"
        srcWeb="https://res.cloudinary.com/colb/video/upload/v1583526466/Videos/video_p4job6.webm"
        srcOgv="https://res.cloudinary.com/colb/video/upload/v1583526462/Videos/video_frmsoa.ogv"
      />
    </div>
  );
}

export default App;
