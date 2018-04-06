import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import { connect } from 'react-redux';
const searchName = txt => {
  return {
    type: 'SEARCH_BY_NAME',
    text: txt
  };
};
const buttonPress = () => {
  return {
    type: 'SEARCH_BUTTON_PRESS'
  };
};
const { height, width } = Dimensions.get('window');

class List extends React.Component {
  renderItem(item, index) {
    return (
      <View
        style={{
          height: 50,
          width: width,
          borderBottomWidth: 1,
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Image
          source={{ uri: item.avatar_url }}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
        <Text>{item.login}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'red', height: 70, width: width }} />
        <View>
          <TextInput
            onChangeText={
              txt => this.props.dispatch(searchName(txt))
              // console.log(this.props)
            }
            autoCapitalize={'none'}
            underlineColorAndroid={'rgba(0,0,0,0)'}
            autoCorrect={false}
            placeholder={'search filter'}
            placeholderTextColor={'rgb(153,153,153)'}
            style={{
              height: 42,
              borderWidth: 1,
              borderRadius: 3,
              padding: 5,
              paddingLeft: 15,
              fontSize: 12,
              borderColor: 'rgb(233,238,241)',
              margin: 20
            }}
          />
          <TouchableOpacity
            onPress={() => this.props.dispatch(buttonPress())}
            style={{
              backgroundColor: 'red',
              alignSelf: 'center',
              height: 50,
              width: 300,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ fontWeight: 'bold', color: 'white' }}>SEARCH</Text>
          </TouchableOpacity>
          <View style={{ height: height - 202 }}>
            <FlatList
              data={this.props.listReducer.listArray}
              style={{ marginTop: 20 }}
              renderItem={({ item, index }) => this.renderItem(item, index)}
              keyExtractor={(item, index) => item.id.toString()}
            />
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(List);
