import { MutableRefObject, useRef, useState } from 'react';
import {
  Avatar,
  Card as MuiCard,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Provider } from '../../interfaces';

interface TalentProp {
  talent: Provider;
}

const Card = ({ talent }: TalentProp) => {
  const [play, setPlay] = useState(false);
  const audioRef: MutableRefObject<HTMLAudioElement | null> = useRef(null);

  const { picture_small, name, username } = talent.user;
  const sample = talent.relevant_sample;
  const sampleName = sample.name.length > 25 ? sample.name.slice(0, 25) + '...' : sample.name;

  if (play && audioRef) {
    audioRef.current?.play() as void;
  } else {
    audioRef.current?.pause();
  }

  audioRef.current?.addEventListener('ended', (event) => {
    if (event.isTrusted) {
      setPlay(false);
    }
  });

  const handleClick = () => {
    setPlay((prev) => !prev);
  };

  return (
    <Grid item xs={12} sm={6}>
      <Paper>
        <List>
          <ListItem
            sx={{ minHeight: 120 }}
            secondaryAction={
              <MuiCard sx={{ width: 150 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <CardMedia component="audio" ref={audioRef} src={sample?.file} />
                  <IconButton aria-label="play/pause" onClick={handleClick}>
                    {play ? <PauseIcon /> : <PlayArrowIcon />}
                  </IconButton>
                  <Typography variant="body2" color="text.secondary">
                    {sampleName}
                  </Typography>
                </CardContent>
              </MuiCard>
            }
          >
            <ListItemAvatar>
              <Avatar src={picture_small} alt={name} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Link href={`https://voice123.com/${username}`} underline="none" color="inherit">
                  {name}
                </Link>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};

export default Card;
