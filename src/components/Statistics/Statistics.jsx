import PropTypes from 'prop-types';

import { Container, Stats, Total, Event } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <Stats>Good: {good}</Stats>
      <Stats>Neutral: {neutral}</Stats>
      <Stats>Bad: {bad}</Stats>
      <Total>Total: {total()}</Total>
      <Total>
        Positive feedback:
        <Event eventPercentage={positivePercentage()}>
          {positivePercentage()}
        </Event>
        %
      </Total>
    </Container>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
