import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Inicio from './Inicio';
import Body from './Body';
import Footer from './Footer';

//export default
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numero: 2
    }
  }

  aumentar = () =>{
    this.setState({
      numero: this.state.numero +1
    })
  }

  desminuir = () =>{
    this.setState({
      numero: this.state.numero -1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Inicio name="Calculadora" />
        <Body numero={this.state.numero} />
        <Footer
          sumar = {this.aumentar}
          restar = {this.desminuir}
           />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
