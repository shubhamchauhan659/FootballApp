import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

class StateList extends React.Component {
  render() {
    const {title} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('ResultScreen', {
            title: title,
          });
        }}>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
            margin: 10,
            width: '90%',
            height: 100,
            borderRadius: 10,
            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 30,
              color: '#DDDDDD',
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default StateList;
