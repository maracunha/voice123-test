import { useRef, useState } from 'react';
import {
  Avatar,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { ITalentsAPIResponse } from '../../interfaces';

const Card = ({ talent }:ITalentsAPIResponse ) => {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  const { picture_small, name, username } = talent.user;
  const sample = talent.relevant_sample;

  const sampleName = sample.name.length > 25 ? sample.name.slice(0, 25) + '...' : sample.name;
  // console.log(sampleName, sampleName.length);

  const description = `${name} | user: ${username}`;

  if (play && audioRef) {
    audioRef.current?.play();
  } else {
    audioRef.current?.pause();
  }

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
                <CardActionArea>
                  <CardMedia
                    ref={audioRef}
                    component="audio"
                    src={sample?.file}
                    alt={sample?.name}
                  />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <IconButton aria-label="play/pause" onClick={handleClick}>
                      {play ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                      {sampleName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </MuiCard>
            }
          >
            <ListItemAvatar>
              <Avatar src={picture_small} alt={name} />
            </ListItemAvatar>
            <ListItemText primary={name} />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};

export default Card;
// <Box maxWidth={100} bg="grey">
//   <CardMedia ref={audioRef} component="audio" src={sample.file} alt={sample.name} />
//   <IconButton aria-label="play/pause" onClick={handleClick}>
//     {play ? <PauseIcon /> : <PlayArrowIcon />}
//   </IconButton>
// </Box>
