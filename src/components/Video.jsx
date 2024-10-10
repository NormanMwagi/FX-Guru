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
        fluid: true,
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
        <div className='flex justify-center items-center w-full h-full p-4'>
            <div className='w-full max-w-screen-lg'>
                <VideoJs options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
        </div>
    );
}

export default Video
