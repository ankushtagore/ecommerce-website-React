import React from 'react';
import { ThriftStoreContainer } from './Thriftstore.styles';
import {
  OptionLink,
} from "../../../components/header/header.styles";

function ThriftStore() {
  return (
    <div><div className="row m-0">
      <img src="https://i.ibb.co/jw738zK/Image.png" alt="" />
    </div>

      <div className="container" style={{
           zIndex:1,
          postition: "absolute", width: "627px", height: '192px', left: '647px', top: '444px',
          fontFamily: 'Josefin Sans',
          fontStyle: 'normal',
          fontWeight: 'normal', fontSize: '88px',
          lineHeight: '96px',
          textAlign: 'center',
          color: '#FFFFFF',
          textShadow: '-2px 3px 10px #000000'
        }}>
        <p >Welcome to Thrift store</p>
        <br />
        <br />
        <h2>By</h2>
     
        <img src="https://i.ibb.co/SJhbVGG/UPDATED-Modavastraa-logo-3.png" alt="" style={{ margin: '0 auto' }} />
      </div>
      <div>
        <div style={{
          position: 'absolute',
          width: '824px',
          height: '240px',
          left: '780px',
          top: '1120px',

          background: '#222325',
          boxShadow: '-5px 5px 14px #000000',
          borderRadius: '20px',
        }}>
          <p > A marketplace for Buying and Selling <span className="text-warning">pre-owned apparel</span></p>
        </div>
        <br />
        <div style={{
          position: 'absolute',
          width: '824px',
          height: '240px',
          left: '780px',
          top: '1392px',

          background: '#222325',
          boxShadow: '-5px 5px 14px #000000',
          borderRadius: '20px',
        }}>   

        
             <p>A marketplace for Buying and Selling <span className="text-warning">pre-owned apparel</span></p>

        </div>
      </div>
    </div>


  )
}

export default ThriftStore


