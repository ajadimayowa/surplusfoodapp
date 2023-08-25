import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/index'
import googleAuth from './google.config'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Navigation from './navigation';



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
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
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
