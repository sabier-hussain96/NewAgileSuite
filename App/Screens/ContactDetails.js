import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from '../Global/ApplicationCss'
import { TabView } from 'react-native-tab-view'

const ContactDetails = () => {

  return (
    <View style={[Styles.mainConatiner, {}]}>
      <View style={{}}>
        <View style={{justifyContent:"center",alignItems:"center"}}>
          <Text>Contact</Text>
        </View>
      </View>
    </View>
  )
}

export default ContactDetails