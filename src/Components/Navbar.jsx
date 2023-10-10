import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link} from 'react-router-dom';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
        <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

            <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
            >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                {/* <MDBNavbarLink ><Link to="home">HOME</Link></MDBNavbarLink> */}
                <MDBNavbarLink ><Link to="/home">HOME</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                {/* <MDBNavbarLink ><Link to="about">ABOUT</Link></MDBNavbarLink> */}
                <MDBNavbarLink ><Link to="/about">ABOUT</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                {/* <MDBNavbarLink ><Link to="contect">CONTECT</Link></MDBNavbarLink> */}
                <MDBNavbarLink ><Link to="/contect">CONTECT</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                {/* <MDBNavbarLink ><Link to="contect">CONTECT</Link></MDBNavbarLink> */}
                <MDBNavbarLink ><Link to="/product">PRODUCT</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                {/* <MDBNavbarLink ><Link to="lazy">LAZY</Link></MDBNavbarLink> */}
                <MDBNavbarLink ><Link to="/examples">EXAMPLES</Link></MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Dropdown
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavbarItem>
            </MDBNavbarNav>

            <form className='d-flex input-group w-auto'>
                <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                <MDBBtn color='primary'>Search</MDBBtn>
            </form>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>

        {/* <Outlet/> */}
    </>    
  );
}
