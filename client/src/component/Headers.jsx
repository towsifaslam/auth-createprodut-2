import { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
export default function Headers() {
  const [shwo, setShow] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state.auth }));

  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
    <MDBNavbar fixed="top" expand="lg" style={{ background: "#f0e6ea" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ fontWeight: "600", fontSize: "22px" }}
        >
          Touropedia
        </MDBNavbarBrand>

        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!shwo)}
          style={{ color: "#606080" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={shwo} navbar>
          {user?.result?._id && <h5>{user.result.name}</h5>}
          <MDBNavbarItem>
            <MDBNavbarLink href="/">
              <p className="header-text">Home</p>
            </MDBNavbarLink>
          </MDBNavbarItem>
          {user?.result?._id && (
            <>
              <MDBNavbarItem>
                <MDBNavbarLink href="/addTour">
                  <p className="header-text">Add Tour</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/dashbord">
                  <p className="header-text">Dashbord</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </>
          )}
          {user?.result?._id ? (
            <MDBNavbarItem>
              <MDBNavbarLink href="/login">
                <p className="header-text" onClick={() => handleLogout()}>
                  Logout
                </p>
              </MDBNavbarLink>
            </MDBNavbarItem>
          ) : (
            <MDBNavbarItem>
              <MDBNavbarLink href="/login">
                <p className="header-text">Login</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
