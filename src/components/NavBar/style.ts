import styled from "styled-components";
import { infoColor, lightColor, secondaryColor } from "utils/colors";

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-color: ${secondaryColor};
  a {
    color: ${lightColor};
    margin: 0 24px;
    font-weight: bold;
    :hover {
      border-bottom: 2px solid ${infoColor};
    }
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  svg {
    margin-right: 8px;
  }
`;
