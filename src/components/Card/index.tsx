import {
  Avatar,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from '@mui/material';
import { Provider } from '../../interfaces';
import Hightlihgts from '../TextHeightlights/solution2';
import Player from '../Player';

interface TalentProp {
  talent: Provider;
  keywords: string;
}

const Card = ({ talent, keywords }: TalentProp) => {
  const { picture_small, name, username } = talent.user;
  const sample = talent.relevant_sample;
  const sampleName = sample.name;

  return (
    <Grid item xs={12} sm={6}>
      <Paper>
        <List>
          <ListItem sx={{ minHeight: 120 }} secondaryAction={<Player url={sample.file} />}>
            <ListItemAvatar>
              <Avatar src={picture_small} alt={name} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Link
                  data-testid="linkProfile"
                  href={`https://voice123.com/${username}`}
                  underline="none"
                  color="inherit"
                >
                  {name}
                </Link>
              }
              secondary={<Hightlihgts keywords={keywords} texts={sampleName} id={talent.id} />}
            />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};

export default Card;
