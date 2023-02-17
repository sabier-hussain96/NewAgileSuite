import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'
import Header from '../Component/Header'
import { Styles } from '../Global/ApplicationCss'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../Constants/Constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dropdown } from 'react-native-material-dropdown';

const Project = [
  {
    id: '1',
    label: "Primed",
    value: "Primed",
  },
  {
    id: '2',
    label: "Hi-Interest",
    value: "Hi-Interest",
  },
  {
    id: '3',
    label: "ShiftLease",
    value: "ShiftLease",
  }
]

const TimeSheet = () => {
  const navigation = useNavigation()
  const [projectName, setProjectName] = useState(null);
  const [selectedDate, setDate] = useState([])
  const [disabledDays, setDisabledDays] = useState([]);
  const currentDate = new Date().toLocaleDateString();

  // const tomorrowDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);

  // const disabledDaysArray = [];
  // for (let i = 1; i < 90; i++) {
  //   const disabledDate = new Date(tomorrowDate.getFullYear(), tomorrowDate.getMonth(), tomorrowDate.getDate() + i);
  //   if (disabledDate > currentDate) {
  //     disabledDaysArray.push(i);
  //   }
  // }

  // // Update the disabled days state
  // setDisabledDays(disabledDaysArray);  

  const onSelectProject = (item) => {
    setSelectedItem(item)
  }
  return (
    <View style={[Styles.mainConatiner]}>
      <Header />
      {/* <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ alignContent: "center" }}>Project</Text>
        </View>
        <View style={{ width: '30%' }}>
          <Dropdown data={Project} />
        </View>

      </View> */}


      <Calendar maxDate={currentDate} hideExtraDays={true} onDayPress={({ dateString }) => {
        setDate(dateString)
        AsyncStorage.setItem('datevariable', JSON.stringify(selectedDate))
        navigation.navigate(screenNames.TimeSheet_form)
      }} style={{ marginTop: 10 }} />

    </View>
  )
}


export default TimeSheet

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    padding: 7,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});