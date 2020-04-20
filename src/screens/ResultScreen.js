import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
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
        console.log(snapshot.val(), 'Aman');
        this.setState({
          stores: snapshot.val(),
        });
      });
  }

  clubsList = (stores, index) => {
    const {route} = this.props;
    return (
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
          height: 500,
          borderColor: '111111',
          borderRadius: 7,
          backgroundColor: '#ffffff',
          padding: 5,
          shadowOffset: 10,
          shadowOffset: {width: 0, height: 0.5},
          shadowColor: '#AAAAAA',
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 3,
        }}>
        <Image
          source={{uri: stores.image_url}}
          style={{height: '80%', width: '100%'}}
        />
        <View
          style={{
            height: '10%',
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
                  .ref(`/States/${route.params.title}/Clubs/club${index}`)
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
                }}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 23,
                color: 'green',
                fontWeight: '500',
              }}>
              {stores.like}
            </Text>
          </View>
          <Text
            style={{
              color: '#000000',
              fontSize: 20,
              fontWeight: '500',
            }}>
            {stores.city}
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
              color: 'grey',
              fontSize: 15,
              fontWeight: '500',
            }}>
            {stores.name}
          </Text>
          <Text style={{color: 'grey', fontSize: 15, fontWeight: '500'}}>
            {stores.league}
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
      <FlatList
        data={arr}
        renderItem={({item, index}) => this.clubsList(item, index)}
        numColumns={1}
        style={{
          marginVertical: 5,
        }}
        initialNumToRender={10}
      />
    );
  }
}

export default ResultScreen;
