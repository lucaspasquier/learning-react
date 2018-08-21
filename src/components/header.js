import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text styles={styles.text}> {this.props.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafbfc',
        paddingTop: 24,
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 13
    }
  });


