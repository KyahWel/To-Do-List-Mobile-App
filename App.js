import React, {useState} from 'react';
import {Text, SafeAreaView,StyleSheet,StatusBar,FlatList, View,Pressable, TouchableOpacity,Modal,Keyboard,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from 'react-native-gradient-buttons';
import { useFonts } from 'expo-font';
import ToDoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import AppLoading from 'expo-app-loading'; 
  const App = () => {
    const [todoItems, setTodoItems] = useState([{text: "Buy groceries", completed:true,state:1, delstate:false}, {text: "Make blogpost", completed: false,state:0,delstate:true}]);
    const [modalOpen, setmodalOpen] = useState(false); 
   // Add a new item to the state
    function addTodoItem(_text) {
        setTodoItems([...todoItems, {text:_text, completed: false, state:0,delstate:true}]);
        Keyboard.dismiss()
    }
   // Delete an item from state by index
    function deleteTodoItem(_index){
        let tempArr = [...todoItems];
        tempArr.splice(_index, 1);
        setTodoItems(tempArr)
    }
    // Function to set completed to true by index.
    function completeTodoItem(_index){ 
        let tempArr = [...todoItems];
        if(tempArr[_index].state == 0){
          tempArr[_index].completed = true;
          tempArr[_index].state = 1;
          tempArr[_index].delstate = false;
          }
        else {
          tempArr[_index].completed = false;
          tempArr[_index].state = 0;
          tempArr[_index].delstate = true;
        }
        setTodoItems(tempArr)
    }


    let[fontsLoaded,error] = useFonts({
        'Lemonmilk':require('./assets/fonts/LemonMilk.otf'),
        'GothamLight':require('./assets/fonts/Gotham-Light.otf')
    });

    return(
      <>  
            <LinearGradient colors = {['#130b20','#130b20','#0d0a13']} style={styles.container}>
                <StatusBar barStyle={"light-content"} backgroundColor={"#03001e"}/>
                <Text style={[{fontFamily:'Lemonmilk'},styles.text]}>TO DO LIST</Text>
                <LinearGradient colors = {['#130b20','#130b20','#0d0a13']} style={styles.holder}>
                  <ScrollView>
                    <FlatList
                        data={todoItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => {
                            return (
                                <TodoItem
                                  item={item}
                                    deleteFunction={() => deleteTodoItem(index)}
                                    completeFunction={() => completeTodoItem(index)}
                                    modalSwitch={() => setmodalOpen(true)}
                                />
                            )
                        }}
                    />
                  </ScrollView>
                </LinearGradient>
              <GradientButton
                  style = {{height: 50}}
                  text="Add tasks"
                  textStyle={{fontSize: 20}}
                  gradientBegin="#8e2de2"
                  gradientEnd="#4a00e0"
                  gradientDirection="diagonal"
                  radius={15}
                  onPressAction={() => setmodalOpen(true)}
              />
              </LinearGradient>
            <Modal visible={modalOpen} transparent={true} animationType='fade' style={{flexDirection:'column'}}>
              <Pressable style ={styles.blackBG} onPress={() => setmodalOpen(false)}></Pressable>
                <LinearGradient colors = {['#8e2de2','#4a00e0']} style={[{borderRadius: 10},styles.modalContainer]} >
                    <TouchableOpacity style={styles.touchDisplay} onPress={() => setmodalOpen(false)}>
                      <Text style={{color: '#fafafa',fontFamily:'Lemonmilk'}}>X</Text>
                    </TouchableOpacity>
                    <Text style={[{fontFamily:'Lemonmilk'},styles.buttonText]}>Add tasks</Text>
                    <ToDoInput onPress={addTodoItem} />
                </LinearGradient>
              <Pressable style ={styles.blackBG} onPress={() => setmodalOpen(false)}></Pressable>
            </Modal>
            
        </>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
  },
  text: {
    fontSize: 50, 
    textAlign:'center',
    color: '#cc3676',
    textShadowColor:'#d51067',
    textShadowRadius:12,
  },
  holder:{
    flex:1,
    borderRadius:10,
    borderColor:'#47487e',
    borderWidth:1,
    margin:10,
    padding:20
  },
  buttonText: {
    padding: 10,
    fontSize: 30, 
    textAlign: 'center',
    color: '#ffffff'
  },
  touchDisplay: {
    alignSelf: 'flex-end',
    marginTop: -8,
    marginRight: -8,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'red',
    padding:5,
    paddingHorizontal:10,
    borderRadius:15,
  },
  blackBG:{
    flex:3,
    backgroundColor:'black',
    opacity: 0.7,
    alignItems:'stretch',
    flexDirection:'column'
  }, 
  modalContainer:{
    padding:15,
  }
});