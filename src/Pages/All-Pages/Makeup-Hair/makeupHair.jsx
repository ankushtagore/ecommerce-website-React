import React from 'react';
import { MakeupHairContainer } from './MakeupHair.styles';
import {
  OptionLink,
} from "../../../components/header/header.styles";

function MakeupHair() {
    return (
      <div className="col">
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/khRVrBf/Rectangle-74-6.png" alt="" />
      </OptionLink>
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/QQwXhjw/Rectangle-74-4.png" alt="" />
      </OptionLink>
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/Xk0GNvp/Rectangle-74-5.png" alt="" />
      </OptionLink>
      </div>
    )
}

export default MakeupHair