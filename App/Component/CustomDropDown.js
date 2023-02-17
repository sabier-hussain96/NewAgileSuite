import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { SIZES } from '../Constants/Constants'
import { Styles } from '../Global/ApplicationCss'
import { yearList } from './dummyData'

const CustomDropDown = () => {
  const [selectedYear, setSelectedYear] = useState('Select year');
  const [clicked, setClicked] = useState(false);

  return (
    <View style={[Styles.mainConatiner]}>
      <TouchableOpacity style={Styles.dropDownView} onPress={() => {
        setClicked(!clicked)
      }}>

        <Text style={{ fontFamily: "Montserrat-SemiBold", paddingLeft: 5, fontSize: 13 }}>{selectedYear}</Text>
        {clicked ? (<IonIcon name="ios-chevron-up-outline" size={SIZES.medium} />) : (<IonIcon name="ios-chevron-down-outline" size={SIZES.medium} />)}
      </TouchableOpacity>
      {clicked && <View style={Styles.dropDown}>
        <FlatList data={yearList} renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {
              setSelectedYear(item.year)
              setClicked(false)
            }}>
              <Text style={{ fontFamily: "Montserrat-SemiBold", paddingLeft: 5, fontSize: 15 }}>
                {item.year}
              </Text>
            </TouchableOpacity>
          )

        }} />
      </View> }

    </View>
  )
}

export default CustomDropDown
