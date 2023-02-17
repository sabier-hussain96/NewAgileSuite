import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as EndPoint from '../api/Endpoints'
import { setClientToken } from '../api/Api'
import { GET } from '../api/ApiMethods'


const DashBoard = () => {
  // useEffect(() => {
  //   getUserDetails();
    
  // },[])

  // const getUserDetails = async()=>{
  //   console.log("hello")
  //   const user_id = await AsyncStorage.getItem('userId')
  //   const token= await AsyncStorage.getItem('bearer_Token')
  //   setClientToken(token) 
  //   const endPoint = `${EndPoint.employee_details_URL}?id=${user_id}`
  //   GET(endPoint,response =>{
  //     if(response.status === 'S'){
  //       console.log("fetched all the records of employee id :6 ======= ",response)
  //     }
  //   })
  // }


  
  return (
    <View>
      <Text>DashBoard</Text>
    </View>
  )
}

export default DashBoard