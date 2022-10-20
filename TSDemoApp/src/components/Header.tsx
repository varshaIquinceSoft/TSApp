import React from "react";
import { View,StyleSheet,TouchableOpacity,Text } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

type props={
    title:String;
    onBack?:()=>{}
}
const Header:React.FC=(props)=>{
    return(
        <View style={styles.headerView}>
        <TouchableOpacity onPress={props.onBack}>
        {/* <Icon name='chevron-back' size={30} color={'white'}/> */}
        </TouchableOpacity>
        <Text style={styles.hederTitle}>{props.title}</Text>
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
        width:'85%',
        fontWeight:'bold'
    }
})