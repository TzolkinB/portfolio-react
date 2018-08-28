import React from 'react';
import Card from './shared/CardContainer';

const Projects = props => {
  const {id} = props;

  return (<div id={id} className="container-fluid bg-light">
    <div className="row pt-5">
      <div className="col-sm-12 mb-3">
        <h2 className="text-center primary">Projects</h2>
        <hr className="bg-primary mx-5"/>
      </div>
    </div>
    <div className="row pb-5 justify-content-center">
      <Card title="Hazmat" subtitle="Material Design Library" text="Library of React components based on Material Design guidelines for use by Tax Management Associates, Inc." url="https://qa-tma1.works/hazmat/" urlText="Demo"/>
      <Card title="React Starter Template" subtitle="Uses Webpack" text="Basic template for getting new applications up and running quickly." url="https://github.com/TzolkinB/react-template" urlText="Github Repo"/>
      <Card title="Memory Game" subtitle="Uses React, Webpack, Bootstrap Material Design" text="Traditional memory card game for use by two players that declares a winner and can be replayed multiple times." url="https://memory-game1234.firebaseapp.com/#/" urlText="Demo" url2="https://github.com/TzolkinB/memory" url2Text="GithubRepo"/>
    </div>
  </div>);
}

export default Projects;
