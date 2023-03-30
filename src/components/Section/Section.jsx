import PropTypes from 'prop-types';

import { Title } from './Section.styled';

const Section = ({ title }) => {
  return <Title>{title}</Title>;
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
