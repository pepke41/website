import Layouts from '../components/layout'
import Head from 'next/head'
import { css } from 'emotion'

const title = css `
  font-family: 'Uncial Antiqua', cursive;
`
const font = css `
  font-family: 'Farsan', cursive;
  font-size: 18px
`
const pageStyle = css `
  text-align: center;
`
const Index = () => (
  <div className={pageStyle}>
    <Head>
      <title>An Adventure Through Time and Space</title>
      <link href="https://fonts.googleapis.com/css?family=Farsan|Uncial+Antiqua" rel="stylesheet"/>
    </Head>
    <Layouts>
      <div><h1 className={title}>Emily Pepke</h1></div>
      <p className={font}>Creator of Cool Things at Prudential Customer Office</p>
      <img alt='cute-af-superman'
            src="http://31.media.tumblr.com/781c49680acc14909792edbb7a0f09d2/tumblr_mu5ov1QgJj1rsoxqjo1_500.gif" />
    </Layouts>
  </div>
)
export default Index
