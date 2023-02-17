import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import Lottie from 'lottie-react-native'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { setClientToken } from '../api/Api'
import { screenNames } from '../Constants/Constants'
import { Styles } from '../Global/ApplicationCss'
import { EmplyoeeData } from '../Redux/Actions/commonActions'

const SplashScreen = ({ EmplyoeeData}) => {

  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkToken()
    }, 5000)
  }, [])

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token')
    if (Boolean(token)) {
      setClientToken(token);
      getEmplyoeeDetail()
      navigation.replace(screenNames.DashBoard)

    } else {
      navigation.replace(screenNames.Login)
    }
  }


  const getEmplyoeeDetail = () => {
    EmplyoeeData(async response => {
    })
  }

  return (
    <View style={[Styles.mainConatiner, Styles.splashView]}>
      <Lottie source={require('../Global/Animation/Portfolio.json')} autoPlay loop style={{ height: 300, width: 300 }} />

    </View>
  )
}

const mapStateToProps = state => ({
  empData: state.emplyoeeData
});


const mapDispatchToProps = dispatch => {
  return {
    EmplyoeeData: (onResponse) =>
      dispatch(EmplyoeeData(onResponse)),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);