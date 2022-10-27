import React, { useState } from "react";
import { View,Text,StyleSheet, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import InputField from "../components/InputField";
import {firebaseLogin, firebaseRegistration} from "../firebaseAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login:React.FC = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    console.log('Login Props :',props);

    const onLogin = () =>{
        const callback={
          sccess : function(auth:object){
            console.log('auth :', auth);
            AsyncStorage.setItem('auth',JSON.stringify(auth));
            props.navigation.navigate('UserData');
          },
          error : function(msg:String){
            alert('Login Failed!');
          }
        }
        console.log('EMail :',email);
        console.log('Password :',password);
        firebaseLogin(email,password,callback);
        // firebaseRegistration(email,password,'User account created successfully!');
       
    }
    const OnSignPress = ()=>{
     props.navigation.navigate('Registration');
    }
    return(
        <SafeAreaView style={styles.container}>
             <Header title='Login' />
            <View style={styles.loginView}>
            <InputField title= 'Email' onInputChanged={setEmail}/>
            <InputField title= 'Password' 
            onInputChanged={setPassword}
            secure={true}
            />
            <TouchableOpacity style={styles.button} 
             onPress={()=> onLogin()}>
                <Text style={styles.buttonTxt}>Login</Text>
               </TouchableOpacity>

              <View style={styles.signUpView}>
                <View style={styles.signUpLine}/>
                <TouchableOpacity  onPress={()=> OnSignPress()}>
                <Text>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.signUpLine}/>
              </View>
            </View>
        </SafeAreaView>
    )

}
export default Login;

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
    //   flex:1,
      // height:'50%',
      alignItems:'center',
      // justifyContent:'center',
    },
    signUpView:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        // flex:1,
        alignItems:'center',
        marginTop:10
    },
    signUpLine:{
      borderWidth:1,
      borderColor:'gray',
      height:1,
      flex:2
    },
    button:{
        width:'100%',
        backgroundColor:'#a8324c',
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    buttonTxt:{
        color:'white',
        fontSize:20
    }
   
   
    
})