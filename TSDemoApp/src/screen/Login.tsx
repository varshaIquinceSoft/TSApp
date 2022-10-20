import React, { useState } from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import InputField from "../components/InputField";


const Login:React.FC = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onLogin = () =>{
        console.log('EMail :',email);
        console.log('Password :',password);
    }
    return(
        <View style={styles.container}>
             <Header title='Registration'/>
            <View style={styles.loginView}>
                <Text>Login</Text>
            <InputField title= 'Email' onInputChanged={setEmail}/>
            <InputField title= 'Password' 
            onInputChanged={setPassword}
            secure={true}
            />
            <TouchableOpacity style={styles.button} 
             onPress={()=> onLogin()}>
                <Text style={styles.buttonTxt}>Login</Text>
               </TouchableOpacity>
            </View>
        </View>
    )

}
export default Login;

const styles  = StyleSheet.create({
    container:{
        flex:1,
     justifyContent:'center',
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