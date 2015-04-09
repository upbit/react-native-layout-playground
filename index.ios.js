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
var FlexViewColumn = require('./Layouts/FlexViewColumn');
var FlexViewAround = require('./Layouts/FlexViewAround');
var FlexImage = require('./Layouts/FlexImage');
var CardView = require('./Layouts/CardView');

var PlaceHolder = React.createClass({
  render: function() {
    return (
      <View style={[css.center, css.transparent, {paddingTop: 8, paddingBottom: 2, height: 24}]}>
        <Text>{this.props.message}</Text>
      </View>);
  }
});

var RCTLayoutPlayground = React.createClass({
  render: function() {
    return (
      <ScrollView style={{flex: 1}}>

        <PlaceHolder message='FlexView (default)' />
        <FlexView mode='default'/>

        <PlaceHolder message='FlexView (fixed-size)' />
        <FlexView mode='fixed-size'/>

        <PlaceHolder message='FlexViewColumn (default)' />
        <FlexViewColumn mode='default'/>

        <PlaceHolder message='FlexViewColumn (fixed-size)' />
        <FlexViewColumn mode='fixed-size'/>

        <PlaceHolder message='FlexViewAround' />
        <FlexViewAround />

        <PlaceHolder message='ImageView (default)' />
        <FlexImage mode='default'/>

        <PlaceHolder message='ImageView (contain)' />
        <FlexImage mode='contain'/>

        <PlaceHolder message='ImageView (stretch)' />
        <FlexImage mode='stretch'/>

        <PlaceHolder message='CardView with shadow' />
        <CardView />

        <PlaceHolder message='' />

      </ScrollView>
    );
  }
});

AppRegistry.registerComponent('RCTLayoutPlayground', () => RCTLayoutPlayground);
