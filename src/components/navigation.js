import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'


const NavigationWrapper = styled.ul`
    padding: 0;
    margin: 10px;
    list-style: none;
    display: flex;
    font-size: 18px;
    font-weight: 500;
    float: right;
` ;

const NavigationItem = styled.li`
    margin-right: 70px;
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
` ; 

const StyledLink = styled(Link)`
    color: #404040;
    text-decoration: none;

` ;

const Navigation = () => (
    <NavigationWrapper>
        <NavigationItem>
            <StyledLink to={'/news/'}>Aktualności</StyledLink>
        </NavigationItem>
        <NavigationItem>
            <StyledLink to={'/about/'}>O nas</StyledLink>
        </NavigationItem>
        <NavigationItem>
            <StyledLink to={'/courses/'}>Kursy</StyledLink>
        </NavigationItem>
        <NavigationItem>
            <StyledLink to={'/galery/'}>Galeria</StyledLink>
        </NavigationItem>
        <NavigationItem>
            <StyledLink to={'/contact/'}>Kontakt</StyledLink>
        </NavigationItem>
    </NavigationWrapper>
);

export default Navigation