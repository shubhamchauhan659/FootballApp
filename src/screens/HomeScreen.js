import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';
import {state} from '../data/data';
import StateList from '../components/StateList';

class HomeScreen extends React.Component {
  stateList = (props) => {
    // const {props} = this.props;
    console.log(props.title);
    return <Text>{props.item}</Text>;
  };
  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/football.jpg')}
        style={{width: '100%', height: '100%'}}>
        <FlatList
          data={state}
          renderItem={({item}) => {
            return (
              <StateList
                title={item.title}
                navigation={this.props.navigation}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    );
  }
}

export default HomeScreen;
