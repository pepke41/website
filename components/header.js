import Link from 'next/link'
import { css } from 'emotion'
import { darken } from 'polished'

const headNav = css `
  list-style-type: none;
  background-color: pink;
  margin: 0;
  padding: 0;
  overflow: hidden;
`
const innerNav = css `
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  float: left;
  &:hover {
    background-color: ${darken(0.02, 'pink')};
  }
`

const Header = () => (
  <div>
    <ul className={headNav}>
      <li>
        <Link href="/"><a className={innerNav}>Home</a></Link>
      </li>
      <li>
        <Link href="/contact"><a className={innerNav}>Contact Me</a></Link>
      </li>
      <li>
        <Link href="/resume"><a className={innerNav}>Resume</a></Link>
      </li>
      <li>
        <Link href="/about"><a className={innerNav}>About Me</a></Link>
      </li>
    </ul>
  </div>
)

export default Header
