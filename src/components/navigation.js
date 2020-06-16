import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'


const NavigationWrapper = styled.ul`
    padding: 0;
    margin: 10px;
    list-style: none;
    display: flex;
    font-size: 18px;
    font-weight: 600;
    float: right;
` ;

const NavigationItem = styled.li`
    margin-right: 30px;
    position: relative;

    :last-child{
        margin-top: -10px;
        margin-right: 5px;
        padding: 10px;
        border-style: solid;
        border-width: 1px;
        border-color: orange;
        border-radius: 12px;
    }
`;

const Navigation = () => (
    <NavigationWrapper>
        <NavigationItem>Aktualności</NavigationItem>
        <NavigationItem>O nas</NavigationItem>
        <NavigationItem>Kursy</NavigationItem>
        <NavigationItem>Galeria</NavigationItem>
        <NavigationItem>Kontakt</NavigationItem>
    </NavigationWrapper>
);

export default Navigation