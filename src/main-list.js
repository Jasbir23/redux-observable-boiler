import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
const searchName = txt => {
  return {
    type: 'SEARCH_BY_NAME',
    text: txt
  };
};
const { height, width } = Dimensions.get('window');

class List extends React.Component {
  renderItem(item, index) {
    return (
      <View style={{ height: 50, width: width - 40, borderWidth: 1 }}>
        <Text>{item.login}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'red', height: 70, width: width }} />
        <View style={{ padding: 20 }}>
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
              borderColor: 'rgb(233,238,241)'
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              alignSelf: 'center',
              marginTop: 20,
              height: 50,
              width: 300,
              borderRadius: 5
            }}
          />
          <FlatList
            data={this.props.listReducer.listArray}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            keyExtractor={(item, index) => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(List);
