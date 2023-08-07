import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavs } from './screens/tabs/tabNavigations';
import { useFonts } from 'expo-font';
import { SignUpScreen } from './screens/SignUp';
import LoginScreen from './screens/LoginPage';
import { Provider } from 'react-redux';
import { store } from './assets/store/store';
import googleAuth from './google.config'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';



export default function App() {

  const [signedIn, setsignedIn] = useState(false)
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setsignedIn(isSignedIn)
    console.log('isSignedIn', isSignedIn)
    // if (isSignedIn) return navigation.replace("signup");
  };
  function onAuthStateChanged(user) {
    console.log('user', user)
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  useLayoutEffect(() => {
    isSignedIn()
    console.log('signedIn', signedIn)
  }, [])

  const stack = createNativeStackNavigator()
  const [loaded] = useFonts({
    'montserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserratExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'montserratLight': require('./assets/fonts/Montserrat-Light.ttf'),
    'montserratMedium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'montserratRegular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserratSemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),

  })
  if (!loaded && initializing) {
    return null;
  }


  return (
    <Provider store={store}>
      {user && user?.email ? <NavigationContainer>
        <stack.Navigator initialRouteName={user && user?.email ? 'dashboard' : 'login'}>
          <stack.Screen options={{
            headerShown: false
          }} name='login' component={LoginScreen} />
          <stack.Screen options={{
            headerShown: false
          }} name='dashboard' component={TabNavs} />
          <stack.Screen options={{
            headerShown: false
          }} name='signup' component={SignUpScreen} />
        </stack.Navigator>
      </NavigationContainer> : <NavigationContainer>
        <stack.Navigator initialRouteName={user && user?.email ? 'dashboard' : 'login'}>
          <stack.Screen options={{
            headerShown: false
          }} name='login' component={LoginScreen} />
          <stack.Screen options={{
            headerShown: false
          }} name='dashboard' component={TabNavs} />
          <stack.Screen options={{
            headerShown: false
          }} name='signup' component={SignUpScreen} />
        </stack.Navigator>
      </NavigationContainer>}
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
