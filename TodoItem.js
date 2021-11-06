import React , {useState}from 'react';
import {Text, TouchableOpacity,StyleSheet,View} from 'react-native';
export default function TodoItem(props) {
  	// Update style according to props
const [disabled,setDisabled]=useState(false);

   let style = props.item.completed ? {
        textDecorationLine: 'line-through',
    } : {
        textDecorationLine: 'none',
    }
  let styleb = props.item.completed ? {
        backgroundColor:'green'
    } : {
        backgroundColor:'white'
    }
  
  let stylec = props.item.delstate ? {
    backgroundColor:'#FFA8B5'
  }:{
    backgroundColor:'red'
  }

  return(
    <View style={styles.taskholder}>
        <TouchableOpacity style={[styles.square,styleb]} onPress={() =>  props.completeFunction()}></TouchableOpacity>

        <Text style={[{fontSize: 20,flex:1,maxWidth:'80%',color:'white',fontFamily:'GothamLight'},style]} numberofLines={1}>{props.item.text}</Text>
        <TouchableOpacity style={[styles.squareRight,stylec]} onPress={() => props.deleteFunction()} disabled={props.item.delstate}>
          <Text style={{fontWeight:'bold', textAlign:'center'}}>X</Text>
        </TouchableOpacity>
    </View>
    );
}
 TodoItem;

const styles = StyleSheet.create({
taskholder: {
    padding:15,
    backgroundColor: '#231539',
    borderRadius:10,
    borderColor:'#47487e',
    borderWidth:1.5,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  square:{
    width:27,
    height:27,
    marginLeft:7,
    borderColor:'black',
    borderWidth:1,
    borderRadius:3,
    backgroundColor:'white',
    marginRight:5
  },
  squareRight:{
    width:27,
    height:27,
    borderColor:'black',
    borderWidth:1,
    borderRadius:3,
  },
});