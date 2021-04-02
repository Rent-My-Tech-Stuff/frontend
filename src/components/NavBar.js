import { connect } from "react-redux";
import { useLocation, useHistory, Link, Redirect } from "react-router-dom";
import styled from "styled-components";

import { logout } from "../actions";

const StyledNav = styled.nav`
  background-color: white;
  padding: 1rem;
  font-size: 2rem;
  font-family: "B612 mono";
  display: flex;
  justify-content: flex-start;
   span {
    cursor: pointer;
  margin: 0rem 2rem 0rem 2rem;
  }
`;

const ownerPages = ["/owner-home"];
const renterPages = ["/renter-home", "/item"];

function NavBar(props) {
  const { user, logout } = props;
  const location = useLocation();
  const history = useHistory();
  console.log(user);
  if (user) {
    if (user.role === "owner") {
      if (ownerPages.includes(location.pathname)) {
        // logged in as an owner, and on an owner page
        return (
          <StyledNav>
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=B612+Mono&display=swap');
            </style>
            <span onClick={logout}>Log out</span>
          </StyledNav>
        );
      } else {
        // logged in as an owner but not on an owner page
        return <Redirect to="/owner-home" />;
      }
    } else {
      if (renterPages.includes(location.pathname)) {
        // logged in as a renter and on a renter page
        return (
          <StyledNav>
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=B612+Mono&display=swap');
            </style>
            <span onClick={() => history.push("/renter-home")}>Home</span>
            <span onClick={logout}>Log out</span>
          </StyledNav>
        );
      } else {
        // logged in as a renter but not on a renter page
        return <Redirect to="/renter-home" />;
      }
    }
  } else {
    if (
      ownerPages.includes(location.pathname) ||
      renterPages.includes(location.pathname)
    ) {
      // not logged in but on an owner or renter page
      return <Redirect to="/" />;
    } else {
      // not logged in and not on a protected page; no nav bar should appear
      return <span />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { logout })(NavBar);
