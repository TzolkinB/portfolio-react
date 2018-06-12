import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const BreadCrumbLink = (props) => {
  return (
    <Link
      className="primary"
      to={props.href}
    >
      {props.text}
    </Link>
  );
}

const BreadCrumbs = (props) => {
  const {
    breadcrumbs
  } = props;

  const safeCrumbs = breadcrumbs || [];
  const isLast = (i) => (safeCrumbs.length === (i + 1));

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-transparent">
        <li className="breadcrumb-item active" aria-current="page">
          <Link
            to="/"
            className="primary"
          >
            <i className="material-icons align-top">home</i>&nbsp;&nbsp;Home
          </Link>
        </li>
        {safeCrumbs.map((bc, i) => {
          const crumbClass = isLast(i) ? 'breadcrumb-item' : 'breadcrumb-item';
          return (
            <React.Fragment key={`fragment-${i}`}>
              <li>
                <i className="material-icons breadcrumb-icon">keyboard_arrow_right</i>
              </li>
              <li className={crumbClass}>
                {bc.href ? <BreadCrumbLink {...bc} /> : bc.text}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default BreadCrumbs;
