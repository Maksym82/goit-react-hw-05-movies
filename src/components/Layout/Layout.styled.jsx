import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


const Header = styled.header`
    position: fixed;
    padding: 10px 15px;
    width: 100%;
    background-color: #fff;
`;

const Navi = styled.nav`
    display: flex;
    gap: 30px;
`;

const Main = styled.main`
    padding: 50px 20px 20px 20px;
`

const StyledLink = styled(NavLink)`
  color: black;
  background-color: white;
  text-decoration: none;
  padding: 5px;
  border-radius: 2px;
`;

export { Header, Navi, Main, StyledLink };