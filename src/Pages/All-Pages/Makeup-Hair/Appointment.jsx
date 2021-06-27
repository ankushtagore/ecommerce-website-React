import React, { useState } from 'react';
import { CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import DatePicker from 'react-date-picker';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Appointment() {
  const [date, setDate] = useState(new Date());
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div class="row -6 mt-5 p-4">
      <div className="col-6">
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">

            <h2>Price of One</h2>
            <p>Details Point 1</p>
            <p>Details Point 1</p>
            <p>Details Point 1</p>
            <hr />
            <h3>Original Price { }</h3>
            <h3>Offer Price(10% Off) { }</h3>
            <hr />
            <h3>Final Price { }</h3>
          </Typography>
        </CardContent>
      </div>
      <div className="col-6">
          <Grid container justify="space-around">
            <div>
            <h2>Pick a Date</h2>

              <DatePicker
                onChange={setDate}
                value={date}
              />
            </div>
          </Grid>
          <Grid container justify="space-around">
            <div>
            <h2>Select a Time</h2>

              <DatePicker
                onChange={setDate}
                value={date}
              />
            </div>
          </Grid>
        </div>
        <div className="row w-100 p-3">
          <Button variant="contained" color="secondary" size='large' > BOOK APPOINTMENT</Button>
        </div>
      </div>
      )
    }

      export default Appointment;