import TriangleIcon from '../../../../icons/triangleIcons';
import './styles.scss';

interface VideoButtonProps {
  setPlay: VoidFn;
  play: boolean;
}
const VideoButton = (props: VideoButtonProps) => {
  return (
    <div className="controls-button">
      <div
        className={`controls-button__play ${!props.play ? 'enabled' : 'disabled'}`}
        onClick={props.setPlay}>
        <TriangleIcon />
      </div>
    </div>
  );
};
export default VideoButton;
