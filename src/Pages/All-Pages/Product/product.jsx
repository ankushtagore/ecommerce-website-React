import React from 'react'
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './product.css';

function product() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
        return (
            <div>
<div className="row mt-5 p-5">
                <div className="col-6" >

                    <img src="https://i.ibb.co/6D2nn9d/Rectangle-78.png"  alt="" />

              
                </div>
                <div className="col-6 text-center">

                    <h1>Gorgeous Designer Saree</h1>
                    <p>Sold by Nikita Singh</p>

                    <p className="price">₹ 2,599.00</p>
                    <p>onwards</p>
                    <p className="price">Customise Your Design</p>
                    <button>Colors</button>
                    <button>Neck</button>
                    <button>Sleeves</button>
                    <button>Length</button>
                    <button>Fabric</button>
                    <h2>Select Size</h2>
             <div>
             <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="XS" />
        <Tab label="S" />
        <Tab label="M" />
        <Tab label="L" />
        <Tab label="XL" />
        <Tab label="XXL" />
      </Tabs>
    </Paper>

                    <Grid item xs>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item xs>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item xs>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item xs>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item xs>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>

                    <p>Don't know your perfect size? Leave it on us! Get a specialist at home to take your measurements</p>
             </div>

                    <button>Size Chart</button>
                    <h3>Specifications</h3>
                    <p>Classical Silk Saree</p>

                    <h3>Description</h3>
                    <p>Keep the allure of traditional artistry alive and ablaze with these ornately</p>

                    <input type="text" placeholder="Enter Pincode" />
                    <button>Check Availability</button>
                </div>
                </div>

                <div className="row-6 ">
                <button>Add to Bag</button>
                    <button>Buy Now</button>
                    <h3>Reviews and Ratings *4.7/5</h3>
                    <p>star</p>
                    <p>loved it!</p>
                    <p>Great fit, fabric and colors</p>
                    <p>Walter White</p>
                    <button>Read more...</button>

                    <h4>You may also like</h4>
                    <img src="" alt="" />
                </div>
            </div>
        )
    
        }
    export default product
