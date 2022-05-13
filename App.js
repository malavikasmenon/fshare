import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';

import Chat from './screens/Chat';

import {
  Octicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import ChatScreen from './screens/ChatScreen';
import FileSendIcon from './components/FileSendIcon';

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='FShare' component={ChatScreen} options={{title:"FShare", headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <Octicons name="search" size={22} color={'black'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'black'} />
            </View>
          )}} />
        <Stack.Screen name="Chat" component={Chat} options={({ route })  => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 10
            }}>
              
              {/*<MaterialCommunityIcons name="file-send-outline" size={22} color="black" style={styles.icon}/>*/}
              <FileSendIcon size={22} iconstyles={styles.icon} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'black'} style={{padding:8}}/>
            </View>
          )
        })}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
  padding:8, backgroundColor: '#BEBEBE', borderRadius:22, opacity:0.7
  }
});

function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}
