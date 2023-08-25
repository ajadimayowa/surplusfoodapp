import { StyleSheet } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavs } from '../../screens/tabs/tabNavigations';
import { SignUpScreen } from '../../screens/SignUp';
import LoginScreen from '../../screens/LoginPage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useSelector } from 'react-redux';


export default function StackNavigation() {
    const state = useSelector(state => state?.user)
    console.log('state',state)
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
        return subscriber;
    }, []);
    useLayoutEffect(() => {
        isSignedIn()
        console.log('signedIn', signedIn)
    }, [])

    if (initializing) {
        return null;
    }

    const stack = createNativeStackNavigator()

    return (
        <>
            {user && user?.email ? <>
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
            </> : <>
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
            </>}
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
