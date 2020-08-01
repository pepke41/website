import Layouts from "../components/layout";
import Head from "next/head";
import styled from "@emotion/styled";

const Title = styled.h1`
  font-family: "Uncial Antiqua", cursive;
`;
export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <link
          href="https://fonts.googleapis.com/css?family=Farsan|Uncial+Antiqua"
          rel="stylesheet"
        />
      </Head>
      <Layouts>
        <Title>About Me</Title>
        <p>
          My name is Emily Pepke. I am a Software Engineer at Prudential's
          Customer Office. I work on web development. My current project has me
          doing work with Salesforce lightning components. My real passion
          within that is when I get to do UI work. I like being able to do
          things that interact with someone. Within web development I have an
          interest in accessibility. As someone who really cares about other
          people making a site usable for all is something I stirve for.
        </p>
        <p>
          Aside from coding I enjoy playing video games, going to the gym,
          spending time outside, and hanging out with friends.
        </p>
        <p>
          As a young developer just starting out my hopes are to become a better
          developer, be able to mentor others especially young women, and make a
          difference in this industry.
        </p>
      </Layouts>
    </div>
  );
}
