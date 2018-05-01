import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Aumentar"
          onPress={this.props.sumar}
        />
        <Button
          title="Restar"
          onPress={this.props.restar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,backgroundColor: '#006400'
  },
});

export default Footer;
