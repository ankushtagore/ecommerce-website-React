import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class SendReference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div className="row " style={{marginLeft:"50px", marginTop:"50px"}}>
          <div className='col-4' >
            <img src={this.state.image} style={{ width: '504px', height: '504px' }}/>
            <h2>Select Image</h2>
            <div class="con" >
              <input type="file" src="https://i.ibb.co/R3FGkzw/Rectangle-74.png" name="myImage" placeholder="Upload Image" onChange={this.onImageChange} />
            </div>
          </div>

          <div className='col-5'>
            <form className="row" noValidate autoComplete="off">
              <TextField id="filled-basic" label="A Suitable Title*" variant="filled" />
              <TextField id="filled-basic" label="Description*" variant="filled" />
              <TextField id="filled-basic" label="Set a Price" variant="filled" />
            </form>
            <div className="row w-100 p-3">
              <Button variant="contained" color="secondary" size='large' > BOOK APPOINTMENT</Button>
            </div>

            </div>
          </div>
        </div>
        );
  }
}
        export default SendReference;


// import React from "react";
// import ReactDOM from "react-dom";
// import { Formik, Field, Form } from "formik";
// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Contact Us</h1>
//       <Formik
//         initialValues={{ name: "", email: "" }}
//         onSubmit={async values => {
//           await new Promise(resolve => setTimeout(resolve, 500));
//           alert(JSON.stringify(values, null, 2));
//         }}
//       >
//         <Form>
//           <Field name="name" type="text" />
//           <Field name="email" type="email" />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }