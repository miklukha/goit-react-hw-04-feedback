import React, { Component } from 'react';
// import { Container, Section } from './App.styled';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
// import { Statistic } from 'components/Statistic';

export class App extends Component {
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
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.countReviews}
        />
        {/* <Statistic good={} neutral={} bad={} total={} positivePercentage={}/> */}
      </Section>
    );
  }
}
