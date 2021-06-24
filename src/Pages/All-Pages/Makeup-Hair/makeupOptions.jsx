import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { MakeupHairContainer } from './MakeupHair.styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'blue',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: 'blue',
    flex: '1 0 auto',
  },
  cover: {
    width: 1000,
    height: 200,
    position: 'right'
  },
  controls: {
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MakeupOptions() {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <MakeupHairContainer>
              <Card >
      <div>
          <Typography component="h5" variant="h5">
            Live From Spacesndjkcnkjfncksdnfklsnmlkvsngkj
          </Typography> 
          <CardContent>Hello</CardContent>        
      </div>
      <CardMedia
        className={classes.cover}
        image="https://i.ibb.co/jw738zK/Image.png"
        title="Live from space album cover"
      />
    </Card>
    <Card >
      <div>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>         
      </div>
      <CardMedia
        className={classes.cover}
        image="https://i.ibb.co/jw738zK/Image.png"
        title="Live from space album cover"
      />
    </Card>
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://i.ibb.co/jw738zK/Image.png"
        title="Live from space album cover"
      />
    </Card>
      </MakeupHairContainer>

  );
}