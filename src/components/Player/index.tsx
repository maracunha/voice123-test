import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

interface IProp {
  url: string;
}

const Player = ({ url }: IProp) => {
  const [play, setPlay] = useState(false);
  const [widthPercentage, setWidthPercentage] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const audioElement: MutableRefObject<HTMLAudioElement> = useRef(new Audio(url));

  useEffect(() => {
    try {
      if (play) {
        audioElement.current.play() as unknown;

        if (!totalDuration) {
          const durationMiliseconds: number = audioElement.current?.duration;
          setTotalDuration(Math.floor(durationMiliseconds));
        }
      } else {
        audioElement.current.pause();
      }
    } catch (error) {
      console.error('Can not reproduce the audio');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);

  const handleClick = () => {
    setPlay((prev) => !prev);
  };

  console.log({ widthPercentage, totalDuration });

  useEffect(() => {
    let id: number | null = null;
    if (audioElement && !id && play) {
      id = window.setInterval(() => {
        setWidthPercentage((n) => n + Math.ceil(100 / totalDuration));
      }, 1000);
    }

    if (widthPercentage === 100 && id) {
      clearInterval(id);
      setWidthPercentage(0)
    }

    return () => {
      if (id && play) {
        clearInterval(id);
        id = null;
      }
    };
  }, [play, widthPercentage, totalDuration]);

  audioElement.current.addEventListener('ended', (event) => {
    if (event.isTrusted) {
      setPlay(false);
    }
  });

  return (
    <>
      <Card>
        <Box
          sx={{
            backgroundColor: 'lightblue',
            position: 'absolute',
            width: `${widthPercentage}%`,
            height: '100%',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <IconButton aria-label="play/pause" onClick={handleClick}>
            {play ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </CardContent>
      </Card>
    </>
  );
};

export default Player;
