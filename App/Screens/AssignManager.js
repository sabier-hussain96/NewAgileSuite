import { View, Text } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

const AssignManager = ({emplyoeeData}) => {
  return (
    <View>
      <Text>AssignManager</Text>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    emplyoeeData: state.emplyoeeData
  }
}


export default connect(mapStateToProps,null)(AssignManager)