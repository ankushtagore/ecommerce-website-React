import React from 'react';
import Image from 'material-ui-image'
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from "../../../components/header/header.styles";
import { JewelleryContainer } from './jewellery.styles';


function Jewellery({ history }) {
    return (
      <JewelleryContainer>
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/g4f4rkN/Rectangle-112.png" alt="" />
      </OptionLink>
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/LScxzBQ/Rectangle-113.png" alt="" />
      </OptionLink>
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/TtnQZ8r/Rectangle-114.png" alt="" />
      </OptionLink>
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/fpkR24R/Rectangle-115.png" alt="" />
      </OptionLink>
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/g4f4rkN/Rectangle-112.png" alt="" />
      </OptionLink>
      <OptionLink to="shop/hats">
          <img src="https://i.ibb.co/g4f4rkN/Rectangle-112.png" alt="" />
      </OptionLink>
      </JewelleryContainer>

    )
}

export default Jewellery