import React, { Component } from 'react';
import { Feedback } from '../Feedback';
import { Container, Section } from './App.styled';

export class App extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  render() {
    return (
      <Section>
        <Container>
          <Feedback />
        </Container>
      </Section>
    );
  }
}
