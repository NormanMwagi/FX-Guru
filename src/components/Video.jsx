import React from 'react';
import VideoJs from './VideoJs';
import fxVideo from '../assets/fx.mp4';
import autoprefixer from 'autoprefixer';

const Video = () =>
{
    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: false,
        sources: [{
            src: fxVideo,
            type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) =>
    {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () =>
        {
            videojs.log('player is waiting');
        });

        player.on('dispose', () =>
        {
            videojs.log('player will dispose');
        });
    };

    return (
        <div className='flex justify-center'>
            <VideoJs options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
    );
}

export default Video
