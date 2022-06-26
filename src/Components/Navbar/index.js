import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <img src={require('../../images/logo.png')}
                width ='140'
                alt='logo'/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About 
                </NavLink>
                                <NavLink to="/scenarios" activeStyle>
                    Scenarios
                </NavLink>
                                <NavLink to="/alphabet" activeStyle>
                    Alphabet
                </NavLink>
                                <NavLink to="/start-reading" activeStyle>
                </NavLink>
            <NavBtn>
                <NavBtnLink to="/start-reading">Start Reading</NavBtnLink>
                    </NavBtn>    
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar