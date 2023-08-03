import { GoogleSignin } from '@react-native-google-signin/google-signin';

const scopes = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
GoogleSignin.configure({
    scopes: scopes,
    webClientId: '941734571714-90l18fp8egatrn5m5es8rh8jc0gp5hc7.apps.googleusercontent.com',
    // webClientId: '941734571714-pkd2skeh82tov6uq0ju8vgm64r8vl3fe.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

// export default googleAuth;