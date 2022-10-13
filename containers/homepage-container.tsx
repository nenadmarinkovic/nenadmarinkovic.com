import { Container } from "../styles/components/layout";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Tag from "../components/Tag";
import Panel from "../components/Panel";

function Homepage() {
  return (
    <Container>
      <Banner
        name="Nenad"
        surname="Marinković"
        text="
                Software developer at Company in Vienna,
                Austria. Working mainly with Javascript ( React, Vue, Node) on
                designing and developing web interafaces and APIs."
      />
      <Card
        title="Starting with the purpose"
        description="The design of a project is the backbone to which all other pieces are dependent. Sometimes, getting another pair of eyes on a project can spark creativity. "
        reversed={false}
        boxColor="orange"
        boxTitle="Design"
        boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <Card
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        reversed={true}
        boxColor="blue"
        boxTitle="Development"
        boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <Card
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        reversed={false}
        boxColor="green"
        boxTitle="Maintenance"
        boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <Tag color="green" text="Node.js" />
      <Tag color="blue" text="Typescript" />
      <Tag color="yellow" text="Firebase" />
      <Tag color="black" text="Next.js" />
      <Panel />
    </Container>
  );
}

export default Homepage;
