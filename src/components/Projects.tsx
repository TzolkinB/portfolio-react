import { MDBTypography, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import Card from './shared/CardContainer'

function Projects(props: { id: string }) {
  const { id } = props

  const myCypressGuide = (
    <Card
      title="My Cypress Guide"
      subtitle="Personal Document Maintained on Notion.so"
      text="Personal guidelines I follow as well as a list of plugins, common UI patterns, and any other Cypress tips or information I find useful."
      url="https://kimbellcypress.notion.site/Best-Practices-bb7e5a025c834b7397d531ad76bee0b4"
      urlText="Notion Site"
    />
  )
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

  return (
    <div id={id} data-testid={id} className="py-5 px-4 px-sm-5">
      <MDBTypography tag="h2" className="text-center py-2">
        Projects
      </MDBTypography>
      <MDBRow
        className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-lg-center
      "
      >
        <MDBCol>{myCypressGuide}</MDBCol>
        <MDBCol>{reactStarterTemplate}</MDBCol>
        <MDBCol>{memoryGame}</MDBCol>
      </MDBRow>
    </div>
  )
}

export default Projects
