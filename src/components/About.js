import React  from 'react';
import Me     from 'IMG/profile.jpg';

const About = props => {
  const { id } = props;

  return(
    <div id={id} className="container-fluid"> 
      <div className="section-padding">
        <div className="row">
          <div className="col-sm-12 mb-3">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <img src={Me} alt="Profile image" height="120" width="120" className="rounded-circle float-left mr-4 mb-4"/>
            <p className="pl-2 text-justify">
              I am a front-end developer and I love using ES6 and the React
              ecosystem.  In my current job, I often convert html files into react
              components, including implementing components from the chosen css
              framework. I also add javascript to the initial prototype applications
              intended for client approval.  Additional tasks include updating
              existing code with structure and style changes as nessessary. In my
              free time I continue to deepen my understanding of Javascript and learn
              Node.  When I am not coding I love to read and be outside enjoying my
              backyard!
            </p>
            <p>I am always looking for new opportunites so feel free to reach out to me: krbell4@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
