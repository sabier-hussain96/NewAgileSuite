import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { header_Shown, screenNames } from './App/Constants/Constants';
import DrawerNavPage from './App/Screens/Drawer';
import Login from './App/Screens/Login';
import ResetPin from './App/Screens/ResetPin';
import SplashScreen from './App/Screens/SplashScreen';
import TimeSheetForm from './App/Screens/TimeSheetForm';
import Store from './App/Redux/Store'



const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screenNames.Splash_Screen}>
        <Stack.Screen name={screenNames.TimeSheet_form} component={TimeSheetForm}/>
        <Stack.Screen name={screenNames.Splash_Screen} component={SplashScreen} options={header_Shown}/>
        <Stack.Screen name={screenNames.Login} component={Login} options={header_Shown}/>
        <Stack.Screen name={screenNames.Reset_Pin} component={ResetPin} options={header_Shown}/>
        <Stack.Screen name={screenNames.DashBoard} component={DrawerNavPage} options={header_Shown}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  )
}

export default App