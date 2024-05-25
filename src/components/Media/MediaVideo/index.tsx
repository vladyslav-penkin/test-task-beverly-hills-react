import { FC, useState } from 'react';
import './styles.scss';

export const MediaVideo: FC = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  return (
    <div className="MediaVideo">
      {showVideo && (
        <iframe 
          className="MediaVideo_iframe" 
          id="game" 
          scrolling="no" 
          src="https://d2drhksbtcqozo.cloudfront.net/casino/games-mt/jokersplit/index.html?gameid=jokersplit&jurisdiction=MT&channel=web&moneymode=fun&partnerid=1&beyondplay=true&fullscreen=false"
        ></iframe>
      )}
      {!showVideo && (
        <>
          <div className="MediaVideo_overlay"></div>
          <button className="MediaVideo_button" onClick={() => setShowVideo(!showVideo)}>
            Try the Game
          </button>
        </>
      )}
    </div>
  );
};