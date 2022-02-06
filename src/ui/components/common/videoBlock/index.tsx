import { useState } from 'react';
import ReactPlayer from 'react-player';
import TestVideo from '../../../video/test.webm';
import VideoButton from '../../button/portfolioButton/videoButton';
import './styles.scss';

const VideoBlock = () => {
  const [play, setPlay] = useState<boolean>(false);
  const hundlerPlay = () => setPlay(!play);

  return (
    <div className="video-block" onClick={hundlerPlay}>
      <ReactPlayer url={TestVideo} width={'100%'} height={'inherit'} playing={play} />
      <VideoButton setPlay={hundlerPlay} play={play} />
    </div>
  );
};
export default VideoBlock;
