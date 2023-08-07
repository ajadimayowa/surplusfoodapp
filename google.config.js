import { GoogleSignin } from '@react-native-google-signin/google-signin';

const scopes = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
GoogleSignin.configure({
    scopes: scopes,    
    webClientId: '538355012816-k34fme8a8gb7904ltnskbq5g7l2oj0s7.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

// export default googleAuth;