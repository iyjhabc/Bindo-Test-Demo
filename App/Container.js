import React, { Component } from 'react';
import {
StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	RefreshControl
} from 'react-native';
var Search = require('./Search')
var List = require('./List');
var ListButton = require('./listButton');
var Container = React.createClass({
	Cache:[],
	index:0,
	getInitialState:function() {
	    return {
	    	dataSource:{},
	    	selectedTab:'name',
	    	success:false,
	    	Detail:'',
	    };
	},
	componentWillMount:function(){
		this.fetchData();
	},
	fetchData:function(){
		fetch('http://localhost:8000/data.json',
			{
				method:'GET',
				headers: {'Accept': 'application/json','Content-Type': 'application/json'}
			},
			)
		.then((response) => response.json())
		.then((responseData) => {
			this.Cache=responseData.result
			this.setState({
				dataSource:this._sort("name",responseData.result),
        		success:true,
      		})
    	})
    	.catch((err)=>{
    		console.error(err.toString())
    	})
	},
	_sort:function (sortBy, list) {
		return list.sort(function(a, b) {
		  let valueA, valueB;
		    valueA = a[sortBy];
		    valueB = b[sortBy];
		    if(valueA < valueB) return -1;
		    if(valueA > valueB) return 1;
		    return 0;
		})
	},	
	_filterByName:function (text){
		function filterByText(item){
			return item.name.indexOf(text)>=0
		}
		let arrByName = this.Cache.filter(filterByText);
		this.setState({
			dataSource:arrByName,
			Detail:null
		})
	},
	_detail:function(Data){
		if(Data){
			this.setState({Detail:Data})
		}
	},
	changeTab:function(tabName){
		if(tabName =='age'){
			this.setState({selectedTab:tabName,Detail:null,dataSource:this._sort('age',this.state.dataSource)})
		}
		if(tabName =='name'){
			this.setState({selectedTab:tabName,Detail:null,dataSource:this._sort('name',this.state.dataSource)})
		}
	},
	render:function(){
				return(
						<View style={styles.container}>
							<Search ref="listBtn" _filterByName={(text)=>this._filterByName.call(this,text)}/>
							<View style={styles.list_detail}>
								<View style={{flex:1}}>
								<ListButton key={++this.index} selectedTab={this.state.selectedTab}  ref="listBtn" changeTab={(tabName)=>this.changeTab.call(this,tabName)}/>
								<List key={++this.index} style={styles.list} ref="list" dataSource={this.state.dataSource}  _detail={(Data)=>this._detail.call(this,Data)}/>
								</View>
								<View style={styles.detailBox}>
									{
										this.state.Detail?
									<View>
										<Text style={styles.fsz}>name:{this.state.Detail.name}</Text>
										<Text style={styles.fsz}>id:{this.state.Detail.id}</Text>
										<Text style={styles.fsz}>age:{this.state.Detail.age}</Text>
										<Text style={styles.fsz}>phone:{this.state.Detail.phone}</Text>
										<Text style={styles.fsz}>image:{this.state.Detail.image}</Text>
										<Text style={styles.fsz}>phrase:{this.state.Detail.phrase}</Text>
									</View>:
									<Text style={styles.fsz}>请选择名字</Text>
									}
								</View>
							</View>
						</View>
				)
	}
})
var styles = StyleSheet.create({
	container:{
		backgroundColor:'#f1f1f1',
		flex:1
	},
	list:{
		flex:1
	},
	list_detail:{
		flexDirection:'row',
		flex:1
	},
	detailBox:{
		backgroundColor:'#fff',
		borderColor :'#d9d9d9',
		borderWidth:StyleSheet.hairlineWidth,
		flex:1,
		paddingTop:10,
	},
	fsz:{
		marginTop:10,
		fontSize:16
	}
})
module.exports = Container;