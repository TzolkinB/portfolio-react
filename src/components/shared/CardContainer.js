import React from 'react';

const CardContainer = props => {
  const {
    title,
    subtitle,
    text,
    url,
    urlText,
    url2,
    url2Text
  } = props;

  const multipleUrls = () => {
    if (url2) {
      return <a href={url2} target="_blank" className="card-link">{url2Text}</a>;
    }
    return;
  }

  return (<div className="card card-width">
    <div className="card-header">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
    </div>
    <div className="card-body">
      <p className="card-text">{text}</p>
    </div>
    <div className="card-footer">
      <a href={url} target="_blank" className="card-link">{urlText}</a>
      {multipleUrls()}
    </div>
  </div>);
}

export default CardContainer;
