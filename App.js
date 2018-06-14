import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput,Dimensions,Platform } from 'react-native';

const {height, width } = Dimensions.get('window');
export default class App extends React.Component {
    state={
        newToDO:""
    }
  render() {
        const {newToDo} = this.state;
    return (
      <View style={styles.container} >
          <StatusBar barStyle = "light-content"/>
          <Text style={styles.title}>Kawai To Do!</Text>
          <View style={styles.card}>
              <TextInput style={styles.input}
                         placeholder={"Please Input!"}
                         value={newToDo}
                         onChangeText={this._controllNewToDo}
              />
          </View>
      </View>
    );
  }
  _controllNewToDo = text =>{
        this.setState({
            newToDo : text
        })
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },title:{
        color: "white",
        fontSize : 30,
        marginTop: 50,
        fontWeight: "400",
        marginBottom:30
  },card:{
      backgroundColor:"white",
        flex:1,
        width: width - 25,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        //shadow줄 때 ios는 shadow~ android는 elevation으로 선택하게 해줌,
        ...Platform.select({
            ios: {
                shadowColor: "rgb(50,50,50)",
                shadowOpacity: 0.5,
                shadowRadius : 5,
                shadowOffset :{
                    height : -1,
                    width : 0
                }
            },
            android: {
                elevation : 3
            }
        }),
    },
    input:{
        padding : 20,
        borderBottomColor : "#bbb",
        borderBottomWidth: 1,
        fontSize : 25,
    }
});
