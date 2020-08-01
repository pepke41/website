import Header from "../components/header";
import Head from "next/head";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const ContactPageLayout = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: calc(100vh - 46px);
`;
const Card = styled.div`
  width: 600px;
  height: 200px;
  box-shadow: 1px 1px 5px grey;
  font-family: Helvetica;
`;
const CardTitle = styled.div`
  background-image: url("http://cdn.wonderfulengineering.com/wp-content/uploads/2014/06/galaxy-wallpapers-10.jpg");
  height: 80%;
  display: flex;
  align-items: flex-end;
  padding: 5px;
  color: white;
`;
const ContactCard = styled.ul`
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
`;
const Title = styled.span`
  font-size: 1.5em;
`;
export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Header></Header>
      <ContactPageLayout>
        <Card>
          <CardTitle>
            <Title>Contact me online</Title>
          </CardTitle>
          <ContactCard>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} />{" "}
              <a href="https://www.linkedin.com/in/emily-pepke-268943107">
                Emily Pepke
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />{" "}
              <a href="https://twitter.com/emilyofsuburbia">@EmilyofSuburbia</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />{" "}
              <a href="https://github.com/pepke41">@pepke41</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> &nbsp;elpepke41@gmail.com
            </li>
          </ContactCard>
        </Card>
      </ContactPageLayout>
    </div>
  );
}
