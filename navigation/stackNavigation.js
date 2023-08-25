import { StyleSheet } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavs } from './tabNavigation'
import { SignUpScreen } from '../screens/SignUp';
import LoginScreen from '../screens/LoginPage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useSelector } from 'react-redux';


export default function StackNavigation() {
    const userState = useSelector(state => state?.auth)
    // console.log('StackNavigation userState', userState)
    const [signedIn, setsignedIn] = useState(false)

    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        setsignedIn(isSignedIn)
        console.log('isSignedIn', isSignedIn)
    };

    useLayoutEffect(() => {
        isSignedIn()
    }, [])
    const stack = createNativeStackNavigator()

    return (
        <>
            <stack.Navigator initialRouteName={userState && userState.token ? 'dashboard' : 'login'}>
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
        </>
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
