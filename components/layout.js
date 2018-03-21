import Header from './header'
import { css, injectGlobal } from 'emotion'

injectGlobal`
  html,body {
    margin: 0px auto;
  }
`
const pageLayout = css `
  margin: 0 auto;
  max-width: 960px;
`

const Layout = (props) => (
  <div>
    <Header/>
    <div className={pageLayout}>
      {props.children}
    </div>
  </div>
)

export default Layout

