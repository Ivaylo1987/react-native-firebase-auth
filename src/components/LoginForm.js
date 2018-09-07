import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button buttonText='Login' />
        </CardSection>
      </Card>
    );
  }
}

export { LoginForm };
