import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
type props = {
    title : String;
    onInputChanged : (text:String)=> string ;
    multiLine?: Boolean;
    secure?: Boolean;
    style?:object
}

const InputField:React.FC<props> = (props) => {

    console.log('props :', props);
    return(
            <View style={styles.inputView}>
            {/* <Text style={styles.text}>{props.title} : </Text> */}
            <TextInput mode='outlined' 
            label={props.title} 
            style={[styles.textInput,props.style]}
            multiline={props.multiLine??false}
            secureTextEntry={props.secure??false}
            onChangeText={text=> props.onInputChanged(text)}
            />
            </View>
         
    )

}
export default InputField;

const styles  = StyleSheet.create({
    inputView:{
        flexDirection:'row',
        alignItems:'center',
        // height:50,
        justifyContent:'space-between',
        marginBottom:10
    },
    textInput:{
       width:'100%',
    },
})