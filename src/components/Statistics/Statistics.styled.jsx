import styled from '@emotion/styled';

export const Container = styled.div`
  justify-content: center;
  font-weight: 700;
  text-align: center;

  color: #212121;
  border-radius: 10px;
  border: 2px solid #aaabab52;
  margin-bottom: 15px;
`;

export const Stats = styled.p`
  padding-bottom: 10px;
  font-weight: 700;
  text-align: center;
  color: #212121;
  border-bottom: 2px solid #aaabab52;
`;

const setColor = props => {
  const event = props.eventPercentage;

  if (event >= 0 && event <= 25) {
    return '#ff0000';
  } else if (event >= 25 && event <= 50) {
    return '#ff004c';
  } else if (event >= 50 && event <= 75) {
    return '#cfd606';
  } else if (event >= 75 && event <= 100) {
    return '#22ff00';
  }
};

export const Total = styled.p`
  margin-top: 20px;

  margin-left: 20px;
  display: flex;
  padding-bottom: 10px;
  font-weight: 700;
  text-align: center;
  justify-content: center;
`;
export const Event = styled.span`
  padding-left: 10px;
  padding-right: 5px;

  color: ${setColor};
`;
