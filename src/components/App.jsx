import { useReducer } from 'react';
import SectionTitle from './SectionTitle/SectionTitle';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

import { Container } from './App.styled';

const LS_ALL_STATE = 'feedbackStatistics';

function countReducer(state, action) {
  switch (action.option) {
    case 'good':
      return { ...state, good: state.good + action.value };

    case 'neutral':
      return { ...state, neutral: state.neutral + action.value };
    case 'bad':
      return { ...state, bad: state.bad + action.value };

    default:
      break;
  }
}

function init(params) {
  const receivingDataLS = localStorage.getItem(LS_ALL_STATE);
  const parsItem = JSON.parse(receivingDataLS);

  return { ...params, ...parsItem };
}

export function App() {
  const allState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, dispatch] = useReducer(countReducer, allState, init);

  const handleIncrement = label => {
    dispatch(label);
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;

    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = state;

    const all = neutral + bad + good;
    return Math.ceil((good / all) * 100);
  };

  const saveLsState = state => {
    localStorage.setItem(LS_ALL_STATE, JSON.stringify(state));
  };
  saveLsState(state);
  const { good, neutral, bad } = state;
  const allTotal = neutral + bad + good;

  return (
    <Container>
      <SectionTitle title="Please Leave feedback" />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleIncrement}
      />

      <SectionTitle title="Statistics" />
      {allTotal > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
}
