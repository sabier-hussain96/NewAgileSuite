import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import API from '../api/Api';
import * as EndPoint from '../api/Endpoints';
import CustomDropDown from '../Component/CustomDropDown';
import { Styles } from '../Global/ApplicationCss';

const GeneralHoliday = () => {
  useEffect(() => {
    GETHoliday();

  }, [])

  const [holidayList, setHolidayList] = useState([])

  const GETHoliday = async () => {
    const endPoints = `${EndPoint.holiday_List_URL}`
    try {
      const response = await API.get(endPoints);
      if (response.status === 200) {
        const responseData = response.data.data;
        setHolidayList(responseData)
      }
    } catch (error) {
      // handleErrorResponse(error);
    }
  }

  return (

    <View style={[Styles.mainConatiner, { padding: 5 }]}>

{/* List og General Holidays. */}
      <FlatList
        data={holidayList} contentContainerStyle={{ paddingBottom: 20 }} renderItem={({ item }) => (
          <View style={Styles.HolDayListView}>
            <View style={Styles.HoldDateView}>
              <Text style={Styles.dateText}>{moment(item.from_date).format("DD")}</Text>
              <Text style={Styles.monthText}>{moment(item.from_date).format("MMM")}</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={Styles.occassionText}>{item.fetch_holidaytype.longname}</Text>
              <Text style={Styles.dayText}>{moment(item.from_date).format("dddd")}</Text>
            </View>
          </View>
        )} />

    </View>

  )
}

export default (GeneralHoliday)