import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput,StyleSheet,Modal} from 'react-native';
export default function TodoInput(props) {
    const [text, setText] = useState(null);
    const handleAddTask = () => {
        props.onPress(text)
        setText(null);
    }
// Render
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput style={styles.inputtext} onChangeText={text => setText(text)} value={text} placeholder={'Write a task'} />
          <TouchableOpacity style={styles.touchholder} onPress={() => handleAddTask()}>
              <Text style={{color: '#fafafa'}}> Add </Text>
          </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
inputtext:{
  flex: 1, 
  height: 40, 
  borderColor: 'white', 
  borderWidth: 1, 
  borderRadius: 8,
  paddingLeft:10 ,  
  backgroundColor:'white'
},
touchholder: {
    marginLeft: 8, 
    marginBottom: 50, 
    padding: 8, 
    backgroundColor: '#212121',
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8
  },
});