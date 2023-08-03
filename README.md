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
4. After the build is done, you will be asked do you want to install it on your device say yes.
<br>
5. For android physical device, go to your expo dashboard download the apk file to your android device
<br>
6. Install the expo go app, make sure you're on the same network as your system
   - Use the expo go app to scan the qr code that appears after running step 3, it will automatically run the installed apk file for you
   - For iOS use the camera app to lauch the expo go app
<br>
6. Any other firebase package been used should also be refrenced in the app config file.
<br>
7. Follow the documentation to create the service file, use the below link to achieve that  [Link on how to set up firebase for expo app](https://www.youtube.com/watch?v=wQnUb86ge7Y).




