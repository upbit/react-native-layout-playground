/**
 * React Native Layout Playground
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var css = require('./CommonStyles');

var FlexView = require('./Layouts/FlexView');
var FlexViewFixed = require('./Layouts/FlexViewFixed');
var FlexImage = require('./Layouts/FlexImage');

var PlaceHolder = React.createClass({
  render: function() {
    return (
      <View style={[css.center, css.transparent, {paddingTop: 8, height: 24}]}>
        <Text>{this.props.message}</Text>
      </View>);
  }
});

var RCTLayoutPlayground = React.createClass({
  render: function() {
    return (
      <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{marginTop: 16}}>

        <PlaceHolder message='Flex' />
        <FlexView />

        <PlaceHolder message='Flex with fixed items' />
        <FlexViewFixed />

        <PlaceHolder message='Image (default)' />
        <FlexImage mode='default'/>

        <PlaceHolder message='Image (contain)' />
        <FlexImage mode='contain'/>

        <PlaceHolder message='Image (stretch)' />
        <FlexImage mode='stretch'/>

      </ScrollView>
    );
  }
});

AppRegistry.registerComponent('RCTLayoutPlayground', () => RCTLayoutPlayground);
