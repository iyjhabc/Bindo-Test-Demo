import React, { Component } from 'react';
import {
    StyleSheet,
	Text,
	Image,
	View,
	ListView,
	TouchableOpacity,
	Dimensions
} from 'react-native';
var height = Dimensions.get('window').height
var List = React.createClass({
	ds :new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
getInitialState:function() {
    return {
        dataSource: this.ds.cloneWithRows(this.props.dataSource),
    };
},
_detail:function(Data){
	this.props._detail(Data)
},
_renderRow:function(rowData: object, sectionID: number, rowID: number){
	return(
		<TouchableOpacity style={styles.listcontainer} onPress={()=>this._detail(rowData)}>
 			<View style={styles.contentbox}>
 				<Text style={styles.listTitle}>{rowData.name}</Text>
 				<Text style={styles.ageText}>age:{rowData.age}</Text>
 			</View>
 		</TouchableOpacity>
	)
},
render:function(){
 		return(
 		<ListView 
 			enableEmptySections={true}
 			style={styles.container}
 			dataSource={this.state.dataSource} 
 			renderRow={this._renderRow}
 		/>
 		)
 	}
})
var styles = StyleSheet.create({
	container:{
		height:height-77
	},
	contentbox:{
		flexDirection:'row',
		justifyContent:'space-between',
		flex:1
	},
	greyFont:{
		color:'#4d4d4d',
	},
	listcontainer:{
		backgroundColor:'#fff',
		flexDirection:'row',
		borderBottomColor:'#ccc',
		borderBottomWidth:StyleSheet.hairlineWidth,
		height:60,
		paddingTop:15,
		paddingHorizontal:10
	},
	listTitle:{
		fontSize:20,
	},
	ageText:{
		fontSize:16,
	},
	
	
})
module.exports = List