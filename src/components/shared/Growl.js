import React from 'react';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'Style/salert.css';

const Growl = () => {
  return (
    <Alert
      stack
      offset={150}
      position="top-right"
      timeout={5000}
      effect="slide"
      contentTemplate={CustomTemplate}
    />
  );
};

export const CustomTemplate = ({
  id,
  classNames,
  styles,
  message,
  customFields,
  handleClose,
}) => {
  return (
    <div className={classNames} id={id} style={styles}>
      <div className="s-alert-box-inner">
        <i className="material-icons pr-1">{customFields.icon}</i>
        <p className="font-weight-normal">&nbsp;{message}</p>
      </div>
      <span className="s-alert-close" onClick={handleClose}></span>
    </div>
  );
};

export default Growl;
