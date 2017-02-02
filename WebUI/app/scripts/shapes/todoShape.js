import { PropTypes } from 'react';

const { number, string, bool } = PropTypes;

export default {
  completed: bool.isRequired,
  id: number.isRequired,
  text: string.isRequired,
};
