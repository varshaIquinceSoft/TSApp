import React, { useState } from "react";
import { View,Text,StyleSheet, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { postDetail } from "../api";
import Header from "../components/Header";
import InputField from "../components/InputField";


const DummyPost:React.FC = (props) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const onBack=()=>{
        console.log('back press');
    }
    
    const onSubmit = async() =>{
        console.log('title :',title);
        console.log('description :',description);
        const data = {
                title,
                body: description,
                userId: 1,
              }
        let response = await postDetail(data,'posts');
        console.log('res :', response);
        if(response.id == 101){
            alert('Data saved successfully');
        }
    }
    return(
        <SafeAreaView style={styles.container}>
             <Header title='User'  navigation={props.navigation}/>
            <View style={styles.loginView}>
            <InputField title= 'Title' onInputChanged={setTitle}/>
            <InputField title= 'Description'
             multiLine={true} 
             onInputChanged={setDescription}
             style={{height:100}}/>
            <TouchableOpacity style={styles.button} 
             onPress={()=> onSubmit()}>
                <Text style={styles.buttonTxt}>Submit</Text>
               </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}
export default DummyPost;

const styles  = StyleSheet.create({
    container:{
        flex:1,
    //  justifyContent:'center',
     alignItems:'center',
    
    //  backgroundColor:'#a8324c'
    // backgroundColor:'black'
    },
    loginView:{
      flexDirection:'column',
      width:'90%',
      height:'30%',
      alignItems:'center',
    },
    // inputView:{
    //     flexDirection:'row',
    //     alignItems:'center',
    //     height:50,
    //     justifyContent:'space-between'
    // },
    button:{
        width:'100%',
        backgroundColor:'#a8324c',
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonTxt:{
        color:'white',
        fontSize:20
    }
   
   
    
})