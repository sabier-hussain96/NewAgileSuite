import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import CancelIcon from '../Assets/Icons/CancelIcon'
import Logout from 'react-native-vector-icons/Ionicons'
import { Colors, Styles } from '../Global/ApplicationCss'
import { ICONSIZES, screenNames, SIZES } from '../Constants/Constants'
import { DrawerActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setClientToken } from '../api/Api'
import * as EndPoint from '../api/Endpoints'
import { GET } from '../api/ApiMethods'
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux'
import { employeeData } from './dummyData'

const CustomDrawer = (props) => {
  // console.log("custome drawer ===== ", emplyoeeData)
  // {emplyoeeData.full_name}
  // const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView  {...props} style={{ backgroundColor: Colors.primary }}>
        <View style={Styles.customDrawMainView}>
          {/* Image and user details */}
          <View >
            <View style={{ justifyContent: "center" }}>
              <Image source={require('../Assets/Images/User.webp')} style={Styles.custDrawUserImage}></Image>
            </View>
            <View style={Styles.userTextView}>
              <Text style={Styles.userText}>Shaik Hussain</Text>
              <Text style={Styles.userRoleText}>@pixsellz</Text>
            </View>
          </View>

          <View style={{ justifyContent: "center" }}>
            <CancelIcon stroke={Colors.buttons} onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer())
            }} />
          </View>
        </View>
        {/* Drawer Item lists */}
        <View style={[Styles.mainConatiner, { marginTop: 10 }]}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={Styles.logoutView}>
        <Logout name="log-out" size={ICONSIZES.medium} />
        <TouchableOpacity onPress={async () => {
          props.navigation.replace(screenNames.Login)
          await AsyncStorage.removeItem('token');
        }}>
          <Text style={{ fontSize: 20, fontFamily: "Montserrat-Bold" }}>log out</Text>
        </TouchableOpacity>

      </View>
    </View>

  )
}


const mapStateToProps = (state) => {
  return {
    emplyoeeData: state.emplyoeeData
  }
}
export default connect(mapStateToProps, null)(CustomDrawer)