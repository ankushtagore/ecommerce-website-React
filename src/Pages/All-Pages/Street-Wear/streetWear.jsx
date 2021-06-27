import React from 'react';
import StreetWearContainer from './streetwear.styles'
import {
  OptionLink,
} from "../../../components/header/header.styles";

function StreetWear({ history }) {
    return (
    <>
<div className="row">
        <div className="col-6">
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/R3FGkzw/Rectangle-74.png" alt="" />
      </OptionLink>
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/hR9MDdS/Rectangle-74-1.png" alt="" />
      </OptionLink>
      </div>
      <div className="col-6">
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/B3XPwqC/Rectangle-74-3.png" alt="" />
      </OptionLink>
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/0JRQ6bz/Rectangle-74-2.png" alt="" />
      </OptionLink>
      </div>
      </div>
      
</>
    )
}

export default StreetWear