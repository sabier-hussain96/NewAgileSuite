import { View, Text, FlatList,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { appliedLeaveList } from '../Component/dummyData'

const LeaveUsed = () => {

  const [all,setAll]=useState(true)
  const [casual,setcasual]=useState(false)
  const [earned,setEarned]=useState(false)
  const [sick,setSick]=useState(false)

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <View style={{ flexDirection: "row",paddingLeft:10 }}>
        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 18 }}>Leaves Used</Text>
      </View>

      <View style={{flexDirection:"row",justifyContent: 'space-between',borderRadius:10,backgroundColor:"white"}}>
        <TouchableOpacity onPress={()=>{
          setAll(true);
        }}style={{ padding:10,backgroundColor:"#90CAF9",borderRadius:10,width:'25%'}}><Text style={{textAlign:"center"}}>All</Text></TouchableOpacity>
        <TouchableOpacity style={{ padding:10,backgroundColor:"#90CAF9",borderRadius:10,width:'25%'}}><Text style={{textAlign:"center"}}>Casual</Text></TouchableOpacity>
        <TouchableOpacity style={{ padding:10,backgroundColor:"#90CAF9",borderRadius:10,width:'25%'}}><Text style={{textAlign:"center"}}>Sick</Text></TouchableOpacity>
        <TouchableOpacity style={{ padding:10,backgroundColor:"#90CAF9",borderRadius:10, width:'25%'}}><Text style={{textAlign:"center"}}>Earned</Text></TouchableOpacity>
      </View>



      <View>
        <FlatList data={appliedLeaveList}
          renderItem={({ item }) => (
            <View key={item.id} style={{ flexDirection: "column", width: "95%", height: 100, borderRadius: 10,marginTop:10,backgroundColor:"white",alignSelf:"center"}}>
              <View style={{ flexDirection: "row",padding:10,justifyContent:"space-between" }}>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{fontFamily:"Montserrat-SemiBold"}}>{item.month}</Text>
                    <Text style={{fontFamily:"Montserrat-SemiBold"}}> {item.year}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{fontFamily:"Montserrat-SemiBold"}}>{item.leaveApplied}</Text>
                  </View>
                </View>
                <View style={{width:"auto",height:"auto"}}><Text style={{fontFamily:"Montserrat-Regular"}}>{item.status}</Text></View>
              </View>

              <View style={{ flexDirection: "row",paddingLeft:10,paddingRight:10,justifyContent:"space-between" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{fontFamily:"Montserrat-SemiBold",fontSize:18,color:"#4E8E3D"}}>{item.date}</Text>
                  <Text style={{fontFamily:"Montserrat-Regular"}}>{item.leaveType}</Text>
                </View>
                <View style={{alignSelf:"center"}}>
                  <Entypo name='chevron-right'/>
                </View>
              </View>

            </View>
          )}
        />
      </View>

    </View>
  )
}

export default LeaveUsed