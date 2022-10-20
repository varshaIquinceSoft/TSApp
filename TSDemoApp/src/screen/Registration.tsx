import React, { useState } from "react";
import { View,Text,StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import InputField from "../components/InputField";
import {firebaseRegistration} from "../firebaseAuth";

const Registration:React.FC = (props) => {
    const [email,setEmail] = useState<String>('');
    const [password,setPassword] = useState<String>('');
    const [name,setName] = useState<String>('');
    const [confirmPassword,setConfirmPassword] = useState<String>('');
   

    const onRegistration = () =>{
        const callback={
            sccess : function(){
              props.navigation.navigate('Login');
            },
            error : function(msg:String){
              alert('Registration Failed!');
            }
          }
        console.log('EMail :',email);
        console.log('Password :',password);
        firebaseRegistration(email,password,callback);
    }
    return(
        <SafeAreaView style={styles.container}>
              <Header title='Registration' navigation={props.navigation}/>
            <View style={styles.loginView}>
              
            <InputField title= 'Name' onInputChanged={setName}/>
            <InputField title= 'Email' onInputChanged={setEmail}/>
            <InputField title= 'Password' onInputChanged={setPassword} secure={true}/>
            <InputField title= 'Confirm Password' onInputChanged={setConfirmPassword} secure={true}/>
            <TouchableOpacity style={styles.button} 
             onPress={()=> onRegistration()}>
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
        justifyContent:'center',
        marginTop:20
    },
    buttonTxt:{
        color:'white',
        fontSize:20
    }
   
   
    
})