import React, { Component } from 'react';
import {
  Label,
  ListOfButtons,
  Item,
  Button,
  Title,
  StatList,
  StatItem,
  Amount,
} from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countReviews = e => {
    const name = e.currentTarget.value;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const allValues = Object.values(this.state);

    return allValues.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    const positiveFeedback = Math.round(
      (good / this.countTotalFeedback()) * 100
    );

    return (positiveFeedback ? positiveFeedback : 0) + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Label>Please leave feedback</Label>{' '}
        <ListOfButtons>
          <Item>
            <Button value="good" onClick={e => this.countReviews(e)}>
              Good
            </Button>
          </Item>
          <Item>
            <Button value="neutral" onClick={e => this.countReviews(e)}>
              Neutral
            </Button>
          </Item>
          <Item>
            <Button value="bad" onClick={e => this.countReviews(e)}>
              Bad
            </Button>
          </Item>
        </ListOfButtons>
        <Title>Statistic</Title>
        <StatList>
          <StatItem>
            Good: <Amount>{good}</Amount>
          </StatItem>
          <StatItem>
            Neutral: <Amount>{neutral}</Amount>
          </StatItem>
          <StatItem>
            Bad: <Amount>{bad}</Amount>
          </StatItem>
          <StatItem>
            Total: <Amount>{this.countTotalFeedback()}</Amount>
          </StatItem>
          <StatItem>
            Positive feedback:{' '}
            <Amount>{this.countPositiveFeedbackPercentage()}</Amount>
          </StatItem>
        </StatList>
      </>
    );
  }
}
