import moment from "moment"
import React, { useEffect, useRef, useState } from 'react'
import { Animated, FlatList, Image, ScrollView, Text, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import IonIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'
import { GET } from '../api/ApiMethods'
import * as EndPoint from '../api/Endpoints'
import Header from '../Component/Header'
import { ICONSIZES } from '../Constants/Constants'
import { Colors, Styles } from '../Global/ApplicationCss'
import { storeEmplyoeeData } from '../Redux/Actions/commonActions'


const ProfileScreen = ({ userData,storeEmplyoeeData }) => {
  const [emplyoeeData, setemplyoeeData] = useState([])
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchEmployeDetail()
    }

    return () => {
      mounted = false;
    }
  }, [])

  const fetchEmployeDetail = async () => {
    const endpoints = `${EndPoint.employee_details_URL}?id=${userData.emp_id}`
    GET(endpoints, response => {
      if (response.data.status === 'S') {
        storeEmplyoeeData(response.data.employee_data)
        setemplyoeeData(response.data.employee_data)
      }

    });
  }



  const joiningDate = moment(emplyoeeData.Joining_date).format("DD/MM/YYYY")
  // const dob = moment(emplyoeeData.)

  // Upload Image functionality

  const [visible, setVisible] = useState(false)

  const uploadImage = () => {
    setVisible(true)

  }

  const chooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      // console.log(image);
      // console.log("Image2",image.path);
    });
    setVisible(false)
  }

  const clickFromcamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })(image => {
      console.log(image.path);
    });
  }

  const scrollY = useRef(new Animated.Value(0)).current
  return (
    <SafeAreaView  >
      <Animated.View style={[Styles.TextView, {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 3,
        padding: 8,
        backgroundColor: Colors.primary,
        opacity: scrollY.interpolate({
          inputRange: [130, 200],
          outputRange: [0, 1]
        }),
        transform: [{
          translateY: scrollY.interpolate({
            inputRange: [90, 120],
            outputRange: [60, 1],
            extrapolate: 'clamp'
          })
        }]
      }]}>
        <Text style={Styles.EmpName}>{emplyoeeData.full_name}</Text>
        {emplyoeeData.length !== 0 ?
          <Text style={Styles.designation}>{emplyoeeData.designationlookupdetails.longname}</Text>
          :
          <Text>-</Text>
        }
      </Animated.View>

      {/* Profile Image View */}
      <ScrollView onScroll={Animated.event(

        [{
          nativeEvent: {
            contentOffset: {
              y: scrollY
            }
          }
        }], { useNativeDriver: false }
      )} contentContainerStyle={{ paddingBottom: 20 }}>
        <Header />
        <View style={{ flex: 1 }}>
          <View style={Styles.profilImgView}>
            <Image source={{ uri: `http://3.111.227.14:8092${emplyoeeData.profile_pic}` }} style={Styles.ProfileImg}></Image>
          </View>

          <View style={Styles.TextView}>
            <Text style={Styles.EmpName}>{emplyoeeData.full_name}</Text>
            {emplyoeeData.length !== 0 ?
              <Text style={Styles.designation}>{emplyoeeData.designationlookupdetails.longname}</Text>
              :
              <Text>-</Text>
            }
          </View>
          {/* Employee Details */}
          <View style={Styles.EmpDetailsHeader}>
            <Text style={{ fontSize: 15, fontFamily: "Montserrat-ExtraBold" }}>Employee Details</Text>
          </View>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <View>
              <IonIcon name="clipboard-account" size={ICONSIZES.medium} />
            </View>
            <View style={Styles.EmpDetView}>
              <Text style={Styles.EmpDetTitleText}>Employee Id</Text>
              <Text style={Styles.EmpDetTitleValue}>{emplyoeeData.empno}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <View>
              <IonIcon name="graph-outline" size={ICONSIZES.medium} />
            </View>
            <View style={Styles.EmpDetView}>
              <Text style={Styles.EmpDetTitleText}>Department</Text>
              <Text style={Styles.EmpDetTitleValue}>Development</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <View>
              <IonIcon name="gender-male-female" size={ICONSIZES.medium} />
            </View>
            <View style={Styles.EmpDetView}>
              <Text style={Styles.EmpDetTitleText}>Gender</Text>
              <Text style={Styles.EmpDetTitleValue}>{emplyoeeData.gender}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <View>
              <IonIcon name="calendar-week" size={ICONSIZES.medium} />
            </View>
            <View style={Styles.EmpDetView}>
              <Text style={Styles.EmpDetTitleText}>Date of Joining</Text>
              <Text style={Styles.EmpDetTitleValue}>{moment(emplyoeeData.Joining_date).format("DD/MM/YYYY")}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <View>
              <IonIcon name="water" size={ICONSIZES.medium} />
            </View>
            <View style={Styles.EmpDetView}>
              <Text style={Styles.EmpDetTitleText}>Blood Group</Text>
              {emplyoeeData.length !== 0 ?
                <Text style={Styles.EmpDetTitleValue}>{emplyoeeData.bloodgrouplookupdetails.longname}</Text>
                :
                <Text>-</Text>
              }
            </View>
          </View>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <View>
              <IonIcon name="cake-variant" size={ICONSIZES.medium} />
            </View>
            <View style={Styles.EmpDetView}>
              <Text style={Styles.EmpDetTitleText}>DOB</Text>
              <Text style={Styles.EmpDetTitleValue}>14/07/1996</Text>
            </View>
          </View>
          {/* contact Details */}
          <View style={Styles.EmpDetailsHeader}>
            <Text style={{ fontSize: 15, fontFamily: "Montserrat-ExtraBold" }}>Contact Details</Text>
          </View>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <View>
              <IonIcon name="email-outline" size={ICONSIZES.medium} />
            </View>
            <View style={Styles.EmpDetView}>
              <Text style={Styles.EmpDetTitleText}>Personal Email</Text>
              {emplyoeeData.length !== 0 ?
                <Text style={Styles.EmpDetTitleValue}>{emplyoeeData.contactdetails.contact_id}</Text>
                :
                <Text>-</Text>
              }

            </View>
          </View>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <View>
              <IonIcon name="phone" size={ICONSIZES.medium} />
            </View>
            <View style={Styles.EmpDetView}>
              <Text style={Styles.EmpDetTitleText}>Phone</Text>
              <Text style={Styles.EmpDetTitleValue}>9738235146</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", padding: 10 }}>
            <View>
              <IonIcon name="email-multiple" size={ICONSIZES.medium} />
            </View>
            <View style={Styles.EmpDetView}>
              <Text style={Styles.EmpDetTitleText}>Official Email</Text>
              <Text style={Styles.EmpDetTitleValue}>shaik.sh@agileidc.com</Text>
            </View>
          </View>

          {/* Education Details */}
          <View style={Styles.EmpDetailsHeader}>
            <Text style={{ fontSize: 15, fontFamily: "Montserrat-ExtraBold" }}>Education Details</Text>
          </View>
          <FlatList
            data={emplyoeeData.emp_education_details} scrollEnabled={false} renderItem={({ item }) => (
              <View style={{ padding: 10 }}>
                <Text style={Styles.EmpDetTitleValue}>{item.institute_name}</Text>
                <Text style={Styles.EmpDetTitleText}>{moment(item.year_of_passing).format("MMM YYYY")}</Text>
                <Text style={Styles.EmpDetTitleText}>Grade/Percentage{item.grade}</Text>
              </View>
            )} />

          {/* Job History Details */}
          <View style={Styles.EmpDetailsHeader}>
            <Text style={{ fontSize: 15, fontFamily: "Montserrat-ExtraBold" }}>Job History</Text>
          </View>
          <FlatList
            data={emplyoeeData.emp_job_history} scrollEnabled={false} renderItem={({ item }) => (
              <View style={{ padding: 10 }}>
                <Text style={Styles.EmpDetTitleValue}>{item.employer_name}</Text>
                <Text style={Styles.EmpDetTitleText}>{item.designation}</Text>
                <Text style={Styles.EmpDetTitleText}>{item.employer_website}</Text>
                <Text style={Styles.EmpDetTitleText}>1 yr 4 mos</Text>
                <Text style={Styles.EmpDetTitleText}>Bengaluru,Karnataka,India</Text>
              </View>
            )} />
          {/* Employee Skills */}
          {/* <View style={Styles.EmpDetailsHeader}>
            <Text style={{ fontSize: 15, fontFamily: "Montserrat-ExtraBold" }}>Employee Skills</Text>
          </View> */}



        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    emplyoeeData: state.emplyoeeData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeEmplyoeeData: (emplyoeeData) => dispatch(storeEmplyoeeData(emplyoeeData)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
