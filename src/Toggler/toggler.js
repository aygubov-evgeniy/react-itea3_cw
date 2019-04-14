import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Toggler extends Component {
  render() {
    let { name, children, activeToggler, changeStatus, label } = this.props;
    
    return(
      <div>
        <p>{name}</p>
        <div className="togglerContainer">
          {
            React.Children.map(
              children,
              (ChildrenItem) => {
                if( ChildrenItem.props.name === activeToggler ) {
                  return React.cloneElement(ChildrenItem, {
                    name: ChildrenItem.props.name,
                    active: true,
                    label: label,
                    changeStatus: changeStatus
                  })
                }else {
                  return React.cloneElement(ChildrenItem, {
                    name: ChildrenItem.props.name,
                    label: label,
                    changeStatus: changeStatus
                  })
                }
              }
            )
          }
        </div>
      </div>
    );
  }
}

export const TogglerItem = ({ name, active, changeStatus, label }) => {
  return(
    <div className={
        active ? "togglerItem active" : "togglerItem"
      }
      data-label={label}
      data-value={name}
      onClick={
        changeStatus !== undefined ? changeStatus : null
      }>
      {name}
    </div>
  );
};

Toggler.propTypes = {
  label: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
  activeToggler: PropTypes.string.isRequired
}