import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useCallback} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavs } from './screens/tabs/tabNavigations';
import { useFonts } from 'expo-font';
import { SignUpScreen } from './screens/SignUp';
import { Provider } from 'react-redux';
import { store } from './assets/store/store';





export default function App() {
  
  const stack = createNativeStackNavigator()
  const [loaded] = useFonts({
    'montserratBold' : require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserratExtraBold' : require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'montserratLight' : require('./assets/fonts/Montserrat-Light.ttf'),
    'montserratMedium' : require('./assets/fonts/Montserrat-Medium.ttf'),
    'montserratRegular' : require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserratSemiBold' : require('./assets/fonts/Montserrat-SemiBold.ttf'),
    
  })

  if(!loaded){
    return null;
  }
  
  return (
    <Provider store={store}>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{
          headerShown:false
        }} name='HomePage' component={TabNavs}/>
        <stack.Screen options={{
          title:'Register'
        }} name='signup' component={SignUpScreen}/>
      </stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
