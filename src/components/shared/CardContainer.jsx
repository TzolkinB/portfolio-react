import React from 'react';

const CardContainer = props => {
  const { 
    title, subtitle, text,
    url, urlText, url2, url2Text
  } = props;

  const multipleUrls = () => {
    if(url2) {
      return <a href={url2} target="_blank" className="card-link">{url2Text}</a>;
    }
    return;
  }

  return (
    <div className="card card-width">
      <div className="card-body">
        <p className="lead"><strong>{title}</strong></p>
        <p className="card-subtitle mb-2">{subtitle}</p>
        <p className="card-text">{text}</p>
        <a href={url} target="_blank" className="card-link">{urlText}</a>
        {multipleUrls()}
      </div>
    </div>
  );
}

export default CardContainer;
