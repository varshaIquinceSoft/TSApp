import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen } from "react-native-screens";
import Login from "../screen/Login";
import Registration from "../screen/Registration";
import DummyPost from "../screen/DummyPost";
import UserData from '../screen/UserData';
import { StackNavigationParamList } from "./type";


const stack = createStackNavigator<StackNavigationParamList>();
const Stack:React.FC =()=>{
 return(
    <stack.Navigator>
        <stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <stack.Screen name='Registration' component={Registration} options={{headerShown:false}}/>
        <stack.Screen name='DummyPost' component={DummyPost} options={{headerShown:false}}/>
        <stack.Screen name='UserData' component={UserData} options={{headerShown:false}}/>
    </stack.Navigator>
 )

}
export default Stack;
