import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import firebase from 'firebase';
import {FlatList} from 'react-native-gesture-handler';

class ResultScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: {},
    };
  }

  componentDidMount() {
    const {route} = this.props;
    firebase
      .database()
      .ref(`/States/${route.params.title}/Clubs/`)
      .on('value', (snapshot) => {
        this.setState({
          stores: snapshot.val(),
        });
      });
  }

  clubsList = (stores, i) => {
    const {route} = this.props;
    let index;
    if (i.toString().length === 1) {
      index = `0${i + 1}`;
    } else {
      index = `${i + 1}`;
    }
    return (
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
          height: 120,
          borderColor: '111111',
          borderRadius: 7,
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: 5,
          flexDirection: 'column',
          justifyContent: 'space-between',
          elevation: 3,
        }}>
        <View
          style={{
            height: 50,
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                firebase
                  .database()
                  .ref(`/States/${route.params.title}/Clubs/club0` + index)
                  .update({
                    like: stores.like + 1,
                  });
              }}>
              <Image
                source={{
                  uri:
                    'https://img.icons8.com/pastel-glyph/2x/facebook-like.png',
                }}
                style={{
                  height: 30,
                  width: 30,
                  marginRight: 5,
                  tintColor: '#FFFFFF',
                }}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 23,
                color: '#ffffff',
                fontWeight: '500',
              }}>
              {stores.like}
            </Text>
          </View>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 20,
              fontWeight: '500',
            }}>
            {stores.league}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: '#AAAAAA',
              fontSize: 15,
              fontWeight: '500',
            }}>
            {stores.name}
          </Text>
          <Text
            style={{
              color: '#AAAAAA',
              fontSize: 15,
              fontWeight: '500',
            }}>
            {stores.city}
          </Text>
        </View>
      </View>
    );
  };
  render() {
    const {route} = this.props;
    const {title} = route.params;
    const {stores} = this.state;

    const arr = Object.keys(stores).map((key) => stores[key]);

    return (
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/football1.jpg')}
        style={{width: '100%', height: '100%'}}>
        <FlatList
          data={arr}
          renderItem={({item, index}) => this.clubsList(item, index)}
          numColumns={1}
          style={{
            marginVertical: 5,
          }}
          initialNumToRender={10}
        />
      </ImageBackground>
    );
  }
}

export default ResultScreen;
