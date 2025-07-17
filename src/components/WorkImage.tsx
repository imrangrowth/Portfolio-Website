import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string; // Name of video file in /public/videos/
  link?: string;
}

const WorkImage = ({ image, alt, video, link }: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleMouseEnter = () => {
    if (video) {
      setIsVideo(true);
      setVideoUrl(`/videos/${video}`); // Ensure video is placed in public/videos
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={image} alt={alt} />
        {isVideo && video && (
          <video src={videoUrl} autoPlay muted playsInline loop></video>
        )}
      </a>
    </div>
  );
};

export default WorkImage;