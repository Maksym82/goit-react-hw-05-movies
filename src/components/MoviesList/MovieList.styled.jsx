import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    list-style: none;
    padding: 0;
`;

const MovieLink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    background-color: blue;
    color: white;
    border-radius: 4px;
    margin-bottom: 20px;
`;

export { List, MovieLink, Button };
