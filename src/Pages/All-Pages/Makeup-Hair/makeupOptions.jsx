import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 450,
  },
});

export default function MakeupOptions() {
  const classes = useStyles();

  return (
    <div className="row">
          <div className="col p-5 mt-5">    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/MZNCmNb/Rectangle-138.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pack for 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
       <p>Details Point 1</p>
       <p>Details Point 1</p>
       <p>Details Point 1</p>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="secondary" variant="outlined" >
          View Details
        </Button>
      </CardActions>
    </Card>
    <div className="mt-5">
      <h3>How does it work?</h3>
      <p>Select the appropriate package.
        Confirm the session for a time that suits you.
        Our Artists will see you on your selected time.
      </p>
    </div>
    <div className="mt-5">
      <h3>Reviews</h3>
    </div>
    </div>
    </div>


  );
}

