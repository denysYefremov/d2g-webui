import React, { PropTypes } from 'react';

const Link = ({
  active,
  children,
  onClick,
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const { bool, node, func } = PropTypes;

Link.propTypes = {
  active: bool,
  children: node,
  onClick: func,
};

export default Link;
