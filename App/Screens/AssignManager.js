import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

const AssignManager = ({ userData }) => {
  // console.log("userdata from Assigned Mangers page", userData)
  return (
    <View>
      {/* <View style={{width:50,height:50,backgroundColor:"#039BE5",borderRadius:30,alignItems:"center",justifyContent:"center"}}><TouchableOpacity><Text style={{color:"white",textAlign:"center"}}>V</Text></TouchableOpacity></View> */}
      <View style={{
        height: 100,
        width: 100,
        alignSelf: "center", marginTop: 20
      }}>
        <Image source={{ uri: `http://3.111.227.14:8092${userData.hr_employee.profile_pic}` }} style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
          borderRadius: 70,
          borderWidth: 1
        }} />
      </View>
      <View style={{ alignSelf: "center", height: "auto", width: 200, backgroundColor: "#2097f5", marginTop: 2 }}>
        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 18, textAlign: "center", color: "white", lineHeight: 30 }}>{userData.hr_employee.full_name}</Text>
        <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 15, textAlign: "center", color: "white", lineHeight: 30 }}>{userData.hr_employee.designation.longname}</Text>
      </View>

      <View style={{
        marginTop: 2,
        height: 50,
        width: 3,
        backgroundColor: '#909090', alignSelf: "center"
      }}></View>
      {/* <View style={{ width: 20, height: 1, marginLeft: 2, backgroundColor: "#000000", marginTop: 10 }}></View> */}
      <View style={{
        height: 80,
        width: 80,
        alignSelf: "center",
      }}>
        <Image source={require('../Assets/Images/User.webp') } style={{
          width: 80,
          height: 80,
          resizeMode: "contain",
          borderRadius: 70,
          borderWidth: 1
        }} />
      </View>
      <View style={{ alignSelf: "center", height: "auto", width: 200, backgroundColor: "#2B4E72", marginTop: 2 }}>
        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 18, textAlign: "center", color: "white", lineHeight: 30 }}>Reporting Manager</Text>
        <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 15, textAlign: "center", color: "white", lineHeight: 30 }}>Project mangaer</Text>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    emplyoeeData: state.emplyoeeData

  }
}


export default connect(mapStateToProps, null)(AssignManager)