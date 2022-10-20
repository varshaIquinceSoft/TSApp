import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet, TouchableOpacity,FlatList, SafeAreaView} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { getDetail } from "../api";
import Header from "../components/Header";
import InputField from "../components/InputField";

const UserData:React.FC = () => {
  const [data,setData] = useState();

    const getData = async()=>{
        let data = await getDetail('posts')
        console.log('data : ',data);
        setData(data);
    }
    useEffect(()=>{
      getData();
    },[]);

    return(
        <SafeAreaView style={styles.container}>
             <Header title='User Data'/>
            
           <FlatList 
           data={data}
           renderItem = {({item})=>{
            return(
                <View style={styles.listView}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                </View>
            )
           }}
           ItemSeparatorComponent={()=>{
            return(<View style={{borderColor:'#ede9e8',borderWidth:1}}></View>)
           }}/>
        </SafeAreaView>
    )

}
export default UserData;

const styles  = StyleSheet.create({
    scrollContainer:{
        flex:1,
        alignItems:'center',
    },
  listView :{
    flexDirection:'column',
    borderBottomColor:'gray',
    margin:10,
    
  },
  title :{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'justify'
  },
  body :{
    textAlign:'justify'
  }
})