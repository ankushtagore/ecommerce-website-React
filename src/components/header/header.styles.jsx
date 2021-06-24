import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 70px;
    top: 0px !important;

    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    margin-bottom: 25px;
    background-color: white;
`

export const LogoContainer = styled(Link)`
    height: 4%;
    width: 300px;
    &:hover {
        transform: scale(1.1);
        transition: transform 200ms;
`
export const MenuContainer = styled(Link)`
    height: 4%;
    width: 30px;
    padding-top: 18px;

    &:hover {
        transform: scale(1.1);
        transition: transform 200ms;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: transform 200ms;
    }
`