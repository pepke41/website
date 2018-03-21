import Header from '../components/header'
import Head from 'next/head'
import { css } from 'emotion'
import Link from 'next/link'
import '../components/layout'

const contactPageLayout = css`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: calc(100vh - 46px);
`
const card = css`
  width: 600px;
  height: 200px;
  box-shadow: 1px 1px 5px grey;
  font-family: Helvetica;
`
const cardTitle = css`
  background-image: url("http://cdn.wonderfulengineering.com/wp-content/uploads/2014/06/galaxy-wallpapers-10.jpg");
  height: 80%;
  display: flex;
  align-items: flex-end;
  padding: 5px;
  color: white;
`
const contactCard = css`
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 5px;

  li {
    display: inline;

    &:not(:first-child) {
      padding-left: 5px;
    }
  }
`
const title = css`
  font-size: 1.5em;
`
export default () => (
  <div>
    <Head>
      <title>Contact Me</title>
      <script src="https://use.fontawesome.com/a3e6efdbca.js"></script>
    </Head>
    <Header>
    </Header>
    <div className={contactPageLayout}>
      <div className={card}>
        <div className={cardTitle}>
          <span className={title}>Contact me online</span>
        </div>
        <ul className={contactCard}>
            <li><i className="fa fa-linkedin" aria-hidden="true"></i> <Link
                  href="https://www.linkedin.com/in/emily-pepke-268943107"><a>Emily
                  Pepke</a></Link></li>
            <li><i className="fa fa-twitter" aria-hidden="true"></i> <Link
                                        href="https://twitter.com/emilyofsuburbia"><a>@EmilyofSuburbia</a></Link></li>
            <li><i className="fa fa-github" aria-hidden="true"></i> <Link
                                        href="https://github.com/pepke41"><a>@pepke41</a></Link></li>
            <li><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;elpepke41@gmail.com</li>
        </ul>
      </div>
    </div>
  </div>
)

