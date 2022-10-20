import React, { useState } from "react";
import { View,Text,StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import InputField from "../components/InputField";



const Registration:React.FC = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const onRegistration = () =>{
        console.log('EMail :',email);
        console.log('Password :',password);
    }
    const onBack=()=>{
        console.log('back press');
    }
    return(
        <SafeAreaView style={styles.container}>
              <Header title='Registration' onBack={onBack}/>
            <View style={styles.loginView}>
              
            <InputField title= 'Name' onInputChanged={setEmail}/>
            <InputField title= 'Email' onInputChanged={setEmail}/>
            <InputField title= 'Password' onInputChanged={setEmail}/>
            <InputField title= 'Confirm Password' onInputChanged={setPassword}/>
            <TouchableOpacity style={styles.button} 
             onPress={()=> onLogin()}>
                <Text style={styles.buttonTxt}>Submit</Text>
               </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}
export default Registration;

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