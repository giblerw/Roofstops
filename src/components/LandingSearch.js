import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Button
} from 'react-native';
// import {Hoshi} from 'react-native-textinput-effects'



export default class LandingSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: '',
      isLoading: false,
      error: false
    }
  }

  handleSearch(event) {
  this.setState({zipcode: event.nativeEvent.text})
  }

  handleSubmit() {
    this.setState({isLoading: true})
  }

  onChanged(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        alert("Enter Zip Code");
      }
    }
    this.setState({myNumber: newText});
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>Find Your Roof</Text>
        <TextInput style={styles.textInput} keyboardType='numeric' onChangeText={(text) => this.onChanged(text)} value={this.state.myNumber} maxLength={5} style={styles.input} value={this.state.zipcode} onChange={this
          .handleSearch
          .bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.gotoRoofstops}
          underlayColor="white">
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <ActivityIndicator animating={this.state.isLoading} color="#111" size='large'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    color: '#F3FFF8',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 50,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 2,
    borderColor: '#F3FFF8',
    borderRadius: 7,
    height: 60,
    width: 150,
    color: '#F3FFF8',
    fontSize: 36,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#046C87',
    height: 45,
    width: 100,
    marginTop: 10,
    borderRadius: 4,
    justifyContent: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#F3FFF8',
    alignSelf: 'center',
    fontSize: 18
  }
});
