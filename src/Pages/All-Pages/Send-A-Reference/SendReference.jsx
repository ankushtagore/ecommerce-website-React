import React, { Component } from "react";

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
        <div>
          <div>
              <p>Have a particular design stuck in your head?</p>
              <p>We've got you covered!</p>
            <img src={this.state.image} />
            <h1>Select Image</h1>
            <input type="file" name="myImage" placeholder="Upload Image" onChange={this.onImageChange} />
          </div>
          <div>
            <h3>Tell us a bit more about it</h3>
            <input type="text" placeholder="Share what you like about the design, what you like don't like" />
            <button>SEND A REFERENCE</button>

          </div>
        </div>
      </div>
    );
  }
}
export default SendReference;
