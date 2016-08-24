import React, { Component } from 'react';
import {
  	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	ListView,
	TouchableOpacity,
} from 'react-native';
var ListButton = React.createClass({
	getInitialState:function() {
	    return {
	    	dataSource: {},
	        selectedTab:this.props.selectedTab,
	    };
	},
	_changeTab:function(tabName){
		this.props.changeTab(tabName)
	},
	render:function(){
		return(
 		<View style={styles.container}>
			<View style={styles.tabbox}>
				<TouchableOpacity onPress={() => { this._changeTab('name')}}>
 					<View style={this.state.selectedTab=='name'?styles.pickedbox:styles.box}>
 						<Text style={this.state.selectedTab=='name'?styles.picked:styles.picText}>NAME</Text>
 					</View>
 				</TouchableOpacity>
 				<View style={styles.line}/>
 				<TouchableOpacity onPress={() => {this._changeTab('age')}}>
 					<View style={(this.state.selectedTab=='age')?styles.pickedbox:styles.box}>
 						<Text style={this.state.selectedTab=='age'?styles.picked:styles.picText}>AGE</Text>
 					</View>
 				</TouchableOpacity>
 			</View>
 		</View>
		)
	}
})
var styles = StyleSheet.create({
	container:{
		backgroundColor:'#fff',
		borderTopColor :'#d9d9d9',
		borderTopWidth:StyleSheet.hairlineWidth,
	},
	tabbox:{
		flexDirection:'row',
		flexWrap:'wrap',
		justifyContent:'space-around',
		backgroundColor:'#fff',
		borderBottomColor :'#d9d9d9',
		borderBottomWidth:StyleSheet.hairlineWidth,
		paddingTop:10,
		paddingRight:10,
		paddingLeft:10
	},
	line:{
		borderRightWidth:StyleSheet.hairlineWidth,
		borderRightColor:'#ccc',
		height:23
	},
	picText:{
		flex:1,
    	fontSize: 16,
    	marginTop:3,
    	textAlign:'center',
    	fontWeight:'400',
    	color:'#888',
    	alignSelf:'center'
	},
	picked:{
		fontSize: 16,
    	marginTop:3,
    	fontWeight:'400',
    	color:'#EC6433',
    	alignSelf:'center'
	},
	pickedbox:{
		flexDirection:'column',
		justifyContent:'center',
		borderBottomWidth:2,
		borderBottomColor:'#ff6243',
		paddingBottom:10,
		width:68,
	},
	box:{
		flexDirection:'column',
		justifyContent:'center',
		paddingBottom:10,
		width:68,
	},
	greyFont:{
		color:'#4d4d4d',
	},

	line2:{
		borderRightWidth:1,
		height:14,
		marginRight:10,
		marginLeft:10
	},
	flexRow:{
		flexDirection:'row',
		marginTop:5,
	},

})
module.exports = ListButton