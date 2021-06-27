import React from 'react'
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ReactStars from "react-rating-stars-component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './product.css';

function product() {
    const [value, setValue] = React.useState(30);

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('BUST', 32, 34, 36, 38, 40, 42, 44, 46, 48, 50),
        createData('WAIST', 26, 28, 30, 32, 34, 36, 38, 40, 42, 44),
        createData('HIP', 36, 38, 40, 42, 44, 46, 48, 50, 52, 54),

    ];

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div>
            <div className="row mt-5 p-5">
                <div className="col-6" >

                    <img src="https://i.ibb.co/6D2nn9d/Rectangle-78.png" alt="" />

                    <button style={{fontSize:"34px"}} className="mt-3 btn-lg btn-block mb-2">Add to Cart</button>
                
                <button style={{fontSize:"34px"}} className=" p-3 btn-lg btn-block btn-warning">Buy Now</button>


                </div>
                <div className="col-6 text-center">

                    <h1>Gorgeous Designer Saree</h1>
                    <p>Sold by Nikita Singh</p>

                    <p className="price">₹ 2,599.00</p>
                    <p>onwards</p>
                    <h2>Select Size</h2>

                    {/* <h2>Customise Your Design</h2> */}

                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        size="small"
                        centered
                    >
                        <Tab label="XS" />
                        <Tab label="XS" />

                        <Tab label="S" />
                        <Tab label="M" />
                        <Tab label="L" />
                        <Tab label="XL" />
                        <Tab label="XXL" />
                    </Tabs>

                    <button className="mt-2 border-0 " >Size Chart</button>

                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>(INCHES)</TableCell>
                                    <TableCell align="right">XS</TableCell>
                                    <TableCell align="right">S</TableCell>
                                    <TableCell align="right">M</TableCell>
                                    <TableCell align="right">L</TableCell>
                                    <TableCell align="right">XL</TableCell>
                                    <TableCell align="right">2XL</TableCell>
                                    <TableCell align="right">3XL</TableCell>
                                    <TableCell align="right">4XL</TableCell>
                                    <TableCell align="right">5XL</TableCell>
                                    <TableCell align="right">6XL</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <button className="text-warning mt-2 border-0 " >Customize your size</button>
                    </TableContainer>




                    <div>
                        {/* 
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
                    </Grid> */}

                    </div>

                    <h3 className="pt-5">Specifications</h3>
                    <p>Classical Silk Saree</p>

                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam doloribus, facere amet praesentium a non vitae recusandae temporibus magnam voluptatem ipsam pariatur id unde necessitatibus cum illum perspiciatis reprehenderit?</p>


                    <input className="" style={{width:"200px",height:"60px", borderTop:0, borderRight:0, borderLeft:0, borderBottom:'2px' , marginBottom:'10px'}} type="text" placeholder="Enter Pincode" />
                    <br />
                    <button style={{fontSize:"28px"}} className=" p-3 btn-lg btn-block btn-warning">Check Availability</button>

                </div>
            </div>

            <div className="row-6 pl-4 pt-5 m-5" style={{backgroundColor: '#222325'}}>

                <h3>Reviews and Ratings *4.7/5</h3>
                <ReactStars
    count={5}
    value={4.5}
    size={50}
    activeColor="#ffd700"
  />
  <h4> Great Fit</h4>
  <p>lorem ipsum dolor sit amet, consectetur</p>
  <p style={{fontSize:"15px"}}>Preeti verma</p>
  <ReactStars
    count={5}
    value={5}
    size={50}
    activeColor="#ffd700"
  />
  <h4> Great Fit</h4>
  <p>lorem ipsum dolor sit amet, consectetur</p>
  <p style={{fontSize:"15px"}}>Preeti verma</p>
  

                <button style={{marginLeft: "50%"}}>Read more...</button>
 
            </div>
            <div className="row m-5">
            <h3>You may also like</h3>
                <img src="" alt="" />
                <Carousel responsive={responsive}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel>
            </div>
        </div>
    )

}
export default product
