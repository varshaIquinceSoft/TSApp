import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Stack from './src/navigation/Stack';
import DummyPost from './src/screen/DummyPost';
import Login from './src/screen/Login';
import Registration from './src/screen/Registration';
import UserData from './src/screen/UserData';


// export type Props = {
//   name: string;
//   baseEnthusiasmLevel?: number;
// };

// const App: React.FC<Props> = ({
//   name,
//   baseEnthusiasmLevel = 0
// }) => {
//   const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
//     baseEnthusiasmLevel
//   );

//   const onIncrement = () =>
//     setEnthusiasmLevel(enthusiasmLevel + 1);
//   const onDecrement = () =>
//     setEnthusiasmLevel(
//       enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0
//     );

//   const getExclamationMarks = (numChars: number) =>
//     numChars > 0 ? Array(numChars + 1).join('!') : '';

//   return (
//     <View style={styles.container}>
//       <Text style={styles.greeting}>
//         Hello {name}
//         {getExclamationMarks(enthusiasmLevel)}
//       </Text>
//       <View>
//         <Button
//           title="Increase enthusiasm"
//           accessibilityLabel="increment"
//           onPress={onIncrement}
//           color="blue"
//         />
//         <Button
//           title="Decrease enthusiasm"
//           accessibilityLabel="decrement"
//           onPress={onDecrement}
//           color="red"
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   greeting: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     margin: 16
//   }
// });

// export default App;

const App:React.FC =()=>{
  return(
    <NavigationContainer>
       <Stack/>
    </NavigationContainer>
  )
}
export default App;