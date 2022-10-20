import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View,StyleSheet,TouchableOpacity,Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

type props={
    title:String;
    navigation?;
    add?: Boolean; 
}

const Header:React.FC=(props)=>{
    const onBack=()=>{
        props.navigation.goBack();
    }
    const addUserData=()=>{
        props.navigation.navigate('DummyPost');
    }
    return(
        <View style={styles.headerView}>
        <TouchableOpacity onPress={props.onBack}>
        {
           props.navigation?
            <TouchableOpacity onPress={()=>onBack()}>
                <Icon name='chevron-back' size={30} color={'white'}/>
                </TouchableOpacity>
            :null
        }
        </TouchableOpacity>
        <Text style={styles.hederTitle}>{props.title}</Text>
        {
            props.add?
            <TouchableOpacity onPress={()=>addUserData()}>
            <Icon name='add' size={30} color={'white'}/>
            </TouchableOpacity>
            :null
        }
    </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    headerView:{
        backgroundColor:'#a8324c',
        height: 45,
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        justifyContent:'center',
        marginBottom:20
    },
    hederTitle:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        width:'80%',
        fontWeight:'bold'
    }
})