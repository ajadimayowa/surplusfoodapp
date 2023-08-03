####  To run this application on a virtual device for the first time, run the below command.

##### **NOTE:**  *This command is required if you're using that device for the first time to run the application.*

1. Install expo dev client
```
npx expo install expo-dev-client
```
2. Install React Native Firebase App
```
npx expo install @react-native-firebase/app
```
3. Run the project for Ios and Android add the following line of code to your scripts in package.json
```
"dev": expo start --dev-client
```
4. Run the development build for android and iOS [Follow this link for development documentation](https://docs.expo.dev/develop/development-builds/create-a-build/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=Cj0KCQjwoK2mBhDzARIsADGbjepm0Q72S4-BARocZT-NZbQYkUas1m3CmwFafYkkeGlKqDX3dOCTTEEaAhb9EALw_wcB)
```
eas build --profile development --platform android
```
```
eas build --profile development-simulator --platform ios
```
5. After the build is done, you will be asked do you want to install it on your device say yes.

6. For android physical device, go to your expo dashboard download the apk file to your android device

7. Install the expo go app, make sure you're on the same network as your system
   - Use the expo go app to scan the qr code that appears after running step 4, it will automatically run the installed apk file for you
   - For iOS use the camera app to lauch the expo go app

8. Any other firebase package been used should also be refrenced in the app config file.

9. Follow the documentation to create the service file, use the below link to achieve that  [Link on how to set up firebase for expo app](https://www.youtube.com/watch?v=wQnUb86ge7Y).




