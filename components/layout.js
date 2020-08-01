import Header from "./header";
import styled from "@emotion/styled";

const PageLayout = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

export default function Layout(props) {
  return (
    <div>
      <Header />
      <PageLayout>{props.children}</PageLayout>
    </div>
  );
}
