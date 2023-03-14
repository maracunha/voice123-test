import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';

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

  useEffect(() => {
    let id: number | null = null;
    if (audioElement && !id && play) {
      id = window.setInterval(() => {
        setWidthPercentage((n) => n + Math.ceil(100 / totalDuration));
      }, 1000);
    }

    if (widthPercentage >= 99 && id) {
      clearInterval(id);
      setWidthPercentage(0);
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

  const SECONDS_TO_UPDATE = 10;
  const { currentTime } = audioElement.current;
  const widthRaise = (SECONDS_TO_UPDATE * 100) / totalDuration;

  const handleClickRaise = () => {
    audioElement.current.currentTime = currentTime + SECONDS_TO_UPDATE;

    if (widthPercentage < 90) {
      setWidthPercentage((x) => x + widthRaise);
    }
  };

  const handleClickDecay = () => {
    audioElement.current.currentTime = currentTime - SECONDS_TO_UPDATE;

    if (widthPercentage < 10) {
      setWidthPercentage(0);
    } else {
      setWidthPercentage((x) => x - widthRaise);
    }
  };


  return (
    <>
      <Card>
        <Box
          sx={{
            backgroundColor: 'lightblue',
            position: 'absolute',
            width: `${widthPercentage}%`,
            height: '40%',
            bottom: 0,
            left: 0,
            right: 0,
            p: 0,
          }}
        />
        <CardContent sx={{ textAlign: 'center', p: 0 }}>
          <IconButton aria-label="play/pause" onClick={handleClick}>
            {play ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </CardContent>
        <CardContent sx={{ textAlign: 'center', p: '0 !important', }}>
            <IconButton aria-label="decay 10s" disabled={widthPercentage < 1} onClick={handleClickDecay}>
              <Replay10Icon fontSize="small" />
            </IconButton>
            <IconButton aria-label="raise 10s" disabled={widthPercentage < 1} onClick={handleClickRaise}>
              <Forward10Icon fontSize="small" />
            </IconButton>
        </CardContent>
      </Card>
    </>
  );
};

export default Player;
