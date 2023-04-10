import AsyncStorage from '@react-native-async-storage/async-storage'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Logout from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import CancelIcon from '../Assets/Icons/CancelIcon'
import { ICONSIZES, screenNames } from '../Constants/Constants'
import { Colors, Styles } from '../Global/ApplicationCss'


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
            {/* <View style={{ justifyContent: "center" }}>
              <Image source={require('../Assets/Images/User.webp')} style={Styles.custDrawUserImage}></Image>
            </View> */}
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