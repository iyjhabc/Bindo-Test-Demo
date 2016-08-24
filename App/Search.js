import React, { Component } from 'react';
import {
 StyleSheet,
  Text,
  Image,
  View,
  TextInput,
} from 'react-native';


var Search = React.createClass({
	_changeText:function(text){
		this.props._filterByName(text)
	},
	render:function(){
	 	return(
	 		<View style={styles.container}>
	 			<View style={styles.titleText}>
					<View style={styles.inputbox}>
						<TextInput style={styles.input} placeholder={'search'} maxLength={10} ref="10" underlineColorAndroid='#fff' onChangeText={(text)=>this._changeText(text)}>
						</TextInput>
						<Image style={styles.search}  source={require('./images/iconr_03.png')} />
					</View>
	    		</View>
	 		</View>

	 	);
	}
})

var styles = StyleSheet.create({
	container:{
    height:58,
    position:'relative'
	},
	titleText:{
		position:'absolute',
		flexDirection:'row',
		justifyContent:'space-around',
		top:20,
    right:0,
    left:0
	},
	input:{
		height: 38,
    	borderColor: '#fff',
      backgroundColor:'#fff',
    	fontSize: 13, 
    	width:270,
    	paddingRight:0,
    	color:'#000',
    	
	},
	inputbox:{
		borderRadius:10,
		overflow:'hidden',
    	paddingRight:25,
    	paddingLeft:40,
		backgroundColor:'#fff',
		height: 35,
	},
	search:{
		position:'relative',
		width:18,
		height:18,
		top:-28,
		left:-23
	}
})
module.exports = Search