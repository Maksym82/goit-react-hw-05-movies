import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


const Header = styled.header`
    position: fixed;
    padding: 10px 15px;
    width: 100%;
    background-color: blue;
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

const BunnerFilms =styled.img`
width: 266px;
height: 400px;
border-radius: 5px;
object-fit: cover;
transition: -webkit-transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
  -webkit-transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  cursor: click;
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}
`;

export { Header, Navi, Main, StyledLink, BunnerFilms };