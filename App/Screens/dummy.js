import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Header from '../Component/Header'
import { Colors, Styles } from '../Global/ApplicationCss'
import ContactDetails from './ContactDetails'
import IonIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ICONSIZES, SIZES } from '../Constants/Constants'
import { SafeAreaView } from 'react-native-safe-area-context'





const ProfileScreen = () => {
  

  return (
    <SafeAreaView  >
      <Header />
      {/* Profile Image View */}
      <ScrollView  contentContainerStyle={{paddingBottom:20}}>
        <View style={Styles.profilImgView}>
          <Image source={require('../Assets/Images/User.webp')} style={Styles.ProfileImg}></Image>
        </View>
        <View style={{
          position: "absolute",
          alignItems: "center",
          justifyContent: "center", right: 156, top: 125, width: 25, height: 25, borderRadius: 12, backgroundColor: "red"
        }} >
          <Text style={{ fontSize: 22 }}>+</Text>
        </View>
        <View style={Styles.TextView}>
          <Text style={Styles.EmpName}>Shaik Sabier Hussain</Text>
          <Text style={Styles.designation}>Shaik.sh@agileidc.com</Text>
        </View>

        <View style={Styles.EmpDetailsHeader}>
          <Text style={{ fontSize: 15, fontFamily: "Montserrat-ExtraBold" }}>Employee Details</Text>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <IonIcon name="clipboard-account" size={ICONSIZES.medium} />
          </View>
          <View style={Styles.EmpDetView}>
            <Text style={Styles.EmpDetTitleText}>Employee Id</Text>
            <Text style={Styles.EmpDetTitleValue}>AG131</Text>
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
            <Text style={Styles.EmpDetTitleValue}>Male</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <IonIcon name="calendar-week" size={ICONSIZES.medium} />
          </View>
          <View style={Styles.EmpDetView}>
            <Text style={Styles.EmpDetTitleText}>Date of Joining</Text>
            <Text style={Styles.EmpDetTitleValue}>01/02/2022</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <IonIcon name="water" size={ICONSIZES.medium} />
          </View>
          <View style={Styles.EmpDetView}>
            <Text style={Styles.EmpDetTitleText}>Blood Group</Text>
            <Text style={Styles.EmpDetTitleValue}>B+</Text>
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

        <View style={Styles.EmpDetailsHeader}>
          <Text style={{ fontSize: 15, fontFamily: "Montserrat-ExtraBold" }}>Contact Details</Text>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <IonIcon name="email-outline" size={ICONSIZES.medium} />
          </View>
          <View style={Styles.EmpDetView}>
            <Text style={Styles.EmpDetTitleText}>Personal Email</Text>
            <Text style={Styles.EmpDetTitleValue}>sabierhussain35@gmail.com</Text>
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


        {/* <View style={Styles.EmpDetailsHeader}>
          <Text style={{ fontSize: 15, fontFamily: "Montserrat-ExtraBold" }}>Address Details</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          

        </View> */}

        <View style={Styles.EmpDetailsHeader}>
          <Text style={{ fontSize: 15, fontFamily: "Montserrat-ExtraBold" }}>Education Details</Text>
        </View>
        

      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

// const styles = StyleSheet.create({
//   indicatorStyle: {
//     backgroundColor: 'rgb(0 122 255)',
//     height: 5,
//   }
// });