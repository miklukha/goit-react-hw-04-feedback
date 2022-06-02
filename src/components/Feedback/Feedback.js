import React, { Component } from 'react';
import {
  Label,
  List,
  Item,
  Button,
  Title,
  StatList,
  StatItem,
  Span,
} from './Feedback.styled';

export class Feedback extends Component {
  render() {
    return (
      <>
        <Label>Please leave feedback</Label>{' '}
        <List>
          <Item>
            <Button>Good</Button>
          </Item>
          <Item>
            <Button>Neutral</Button>
          </Item>
          <Item>
            <Button>Bad</Button>
          </Item>
        </List>
        <Title>Statistic</Title>
        <StatList>
          <StatItem>
            Good: <Span>2</Span>
          </StatItem>
          <StatItem>
            Neutral: <Span>3</Span>
          </StatItem>
          <StatItem>
            Bad: <Span>5</Span>
          </StatItem>
        </StatList>
      </>
    );
  }
}
