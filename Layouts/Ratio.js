'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} = React;

module.exports = React.createClass({
  updateWidth: function() {
    console.log(this.refs);
  },
  render: function() {
    return (
      <View ref='wrap' style={[css.row, css.transparent]}>
        <TouchableHighlight style={[css.center, {flex: 1}]} onPress={this.updateWidth()}>
          <Text ref='text'>测试</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var css = require('../CommonStyles');
var styles = StyleSheet.create({

});
