import React from 'react';
import { ThriftStoreContainer } from './Thriftstore.styles';
import {
  OptionLink,
} from "../../../components/header/header.styles";

function ThriftStore() {
    return (
      <ThriftStoreContainer>
      <OptionLink to="shop/hats">
       
         <img src="https://i.ibb.co/jw738zK/Image.png" alt="" /> 
         <div class="top-left">Top Left</div>
         <h1>Heloscss</h1>
      </OptionLink>
      </ThriftStoreContainer>
    )
}

export default ThriftStore