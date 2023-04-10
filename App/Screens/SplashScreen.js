import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import Lottie from 'lottie-react-native'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { setClientToken } from '../api/Api'
import { screenNames } from '../Constants/Constants'
import { Styles } from '../Global/ApplicationCss'
import {storeUserData} from '../Redux/Actions/commonActions'


const SplashScreen = ({storeUserData}) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkToken()
    }, 5000)
  }, [])

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token')
    const usersData = await AsyncStorage.getItem('user_Data');
    if (Boolean(token) && Boolean(usersData)) {
      setClientToken(token);
      storeUserData(JSON.parse(usersData));
      navigation.replace(screenNames.DashBoard)
    } else {
      navigation.replace(screenNames.Login)
    }
  }


  return (
    <View style={[Styles.mainConatiner, Styles.splashView]}>
      <Lottie source={require('../Global/Animation/Portfolio.json')} autoPlay loop style={{ height: 300, width: 300 }} />
    </View>
  )
}

const mapDispatchToProps = dispatch => {
  return {
      storeUserData: (userData) => dispatch(storeUserData(userData)),
  }
}

export default connect(null,mapDispatchToProps)(SplashScreen)