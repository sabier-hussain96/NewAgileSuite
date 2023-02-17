import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import CalendarIcon from '../Assets/Icons/CalendarIcon';
import { HomeIcon } from '../Assets/Icons/HomeIcon';
import { ProfileIcon } from '../Assets/Icons/ProfileIcon';
import CustomDrawer from '../Component/CustomDrawer';
import { screenNames } from '../Constants/Constants';
import { Colors } from '../Global/ApplicationCss';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import TimeSheet from './TimeSheet';


const Drawer = createDrawerNavigator();

const DrawerNavPage = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{unmountInactiveRoutes: true,}} >
        <Drawer.Screen name={screenNames.Home_screen} component={HomeScreen} options={{headerShown:false,unmountOnBlur: true ,drawerIcon:({focused})=>(
          <HomeIcon stroke={focused?Colors.primary:Colors.secondary}/>)}} />
        <Drawer.Screen name={screenNames.Profile_screen} component={ProfileScreen} options={{headerShown:false,unmountOnBlur: true,drawerIcon:({focused})=>(
          <ProfileIcon stroke={focused?Colors.primary:Colors.secondary}/>)}} />
        <Drawer.Screen name={screenNames.Time_Sheet} component={TimeSheet} options={{headerShown:false,unmountOnBlur: true, drawerIcon:({focused})=>(
          <CalendarIcon stroke={focused?Colors.primary:Colors.secondary}/>)}}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavPage