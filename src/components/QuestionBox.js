import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Card } from "react-native-elements";

class QuestionBox extends Component {
  constructor(props) {
    super(props);

    this.answer = this.answer.bind(this);
  }

  state = {
    allowedToDrink: null,
    answered: false
  }

  answer(allowedToDrink) {
    this.setState({answered: true, allowedToDrink});
  }

  render() {
    const { allowedToDrink, answered } = this.state
    if(!answered) {
      return (
        <Card wrapperStyle={styles.container}>
          <Text h4 style={styles.questionText}>Are you at least 18 years old? </Text>
          <View style={styles.buttonsContainer}>
            <Button
              title="Yes"
              icon={{name:'thumb-up'}}
              buttonStyle={[styles.button, {backgroundColor: '#2ecc71'}]} onPress={() => this.answer(true)}
             />
            <Button
              title="No"
              icon={{name:'thumb-down'}}
              buttonStyle={[styles.button, {backgroundColor: '#d35400'}]} onPress={() => this.answer(false)}
            />
          </View>
        </Card>
      )
    }

    return (
        <Card wrapperStyle={styles.container}>
          <Text style={[styles.answerText, {color: allowedToDrink ? '#27ae60' : '#c0392b'}]}>
            {allowedToDrink ? 'You are allowed to drink' : 'You are not allowed to drink'}
          </Text>
        </Card>
    )
  }
}

export default QuestionBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // minHeight: 150,
    minWidth: '90%'
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 90
  },
  questionText: {
    textAlign: 'center',
    marginBottom: 30
  },
  answerText: {
    textAlign: 'center',
    fontSize: 20
  }
})
