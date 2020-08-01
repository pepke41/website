import Link from "next/link";
import styled from "@emotion/styled";
import { darken } from "polished";

const HeadNav = styled.ul`
  list-style-type: none;
  background-color: pink;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const NavLink = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: left;
  &:hover {
    background-color: ${darken(0.02, "pink")};
  }
`;

const Header = () => (
  <div>
    <HeadNav>
      <li>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <NavLink>Contact Me</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/resume">
          <NavLink>Resume</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </HeadNav>
  </div>
);

export default Header;
