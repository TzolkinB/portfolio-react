import { MDBTypography, MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import Card   from './shared/CardContainer';

const Projects = (props: { id: string}) => {
  const { id } = props;

  const reactStarterTemplate = (
    <Card
      title="React Starter Template"
      subtitle="Uses Webpack"
      text="Basic template for getting new applications up and running quickly."
      url="https://github.com/TzolkinB/react-template"
      urlText="Github Repo"
    />
  )

  const memoryGame = (
    <Card
      title="Memory Game"
      subtitle="Uses React, Webpack, Bootstrap Material Design"
      text="Traditional memory card game for use by two players that declares a winner and can be replayed multiple times."
      url="https://memory-game1234.firebaseapp.com/#/"
      urlText="Demo"
      url2="https://github.com/TzolkinB/memory"
      url2Text="Github Repo"
    />
  )

  return(
    <div id={id} className="py-5 px-4 px-sm-5">
      <MDBTypography tag="h3" className="text-center">
        Projects
      </MDBTypography>
      <div className="d-flex flex-column d-sm-none">
          {reactStarterTemplate}
        <div className="py-2"></div>
          {memoryGame}
      </div>
      <MDBRow className="d-none d-sm-flex">
        <MDBCol size={1} lg={2} xl={3}></MDBCol>
        <MDBCol size={5} lg={4} xl={3}>
          {reactStarterTemplate}
        </MDBCol>
        <MDBCol size={5} lg={4} xl={3}>
          {memoryGame}
        </MDBCol>
        <MDBCol size={1} lg={2} xl={3}></MDBCol>
      </MDBRow>
      </div>
  );
}

export default Projects;
