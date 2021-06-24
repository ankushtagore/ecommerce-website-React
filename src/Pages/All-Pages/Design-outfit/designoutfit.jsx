import React from 'react';
import Image from 'material-ui-image'
import Directory from '../../../components/directory/Directory.component'
import { DesignOutfitContainer } from './designoutfit.styles'
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from "../../../components/header/header.styles";


export default function DesignerYourOutfit({ history }) {
    return (

        <DesignOutfitContainer>
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

        </DesignOutfitContainer>
    )
}
