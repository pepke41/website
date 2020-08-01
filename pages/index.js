import Layouts from "../components/layout";
import Head from "next/head";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Title = styled.h1`
  font-family: "Uncial Antiqua", cursive;
`;
const Subtitle = styled.p`
  font-family: "Farsan", cursive;
  font-size: 18px;
`;
const Wrapper = styled.div`
  text-align: center;
`;
const Index = () => (
  <Wrapper>
    <Head>
      <title>An Adventure Through Time and Space</title>
      <link
        href="https://fonts.googleapis.com/css?family=Farsan|Uncial+Antiqua"
        rel="stylesheet"
      />
    </Head>
    <Layouts>
      <div>
        <Title>Emily Pepke</Title>
      </div>
      <Subtitle>Creator of Cool Things at Prudential Customer Office</Subtitle>
      <img
        alt="cute-af-superman"
        src="http://31.media.tumblr.com/781c49680acc14909792edbb7a0f09d2/tumblr_mu5ov1QgJj1rsoxqjo1_500.gif"
      />
    </Layouts>
  </Wrapper>
);
export default Index;
