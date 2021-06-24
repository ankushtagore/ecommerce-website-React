import React from 'react'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Productall() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
        return (
            <div>
                <div className="left-side">
                    <h1>jIgkljDdq4RYDnJyQsiWbdvGeei


                        dg
                        dfFmQrSA8YenEcgUFhdfg
                        dg
                        dg
                        sdkReadysdgs
                        sd
                        sdksdkReads
                        sd
                        sd
                        sd
                    </h1>
                    <img src="https://i.ibb.co/fpkR24R/Rectangle-115.png" alt="" />
                    <button>Add to Bag</button>
                    <button>Buy Now</button>
                </div>
                <div className="right-side">
                    <h1>Silk Saree</h1>
                    <h2>Rupee 2,599.00</h2>
                    <h4>onwards</h4>

                    <h2>Customise Your Design</h2>
                    <button>Colors</button>
                    <button>Neck</button>
                    <button>Sleeves</button>
                    <button>Length</button>
                    <button>Fabric</button>

                    <h2>Select Size</h2>
             <div>
             <buttom>XS</buttom>
                    <buttom>S</buttom>
                    <buttom>M</buttom>
                    <buttom>L</buttom>
                    <buttom>XL</buttom>
                    <buttom>XXL</buttom>
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
                <div className="lower-sec">
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
    export default Productall
