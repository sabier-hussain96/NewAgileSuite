import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Styles } from '../Global/ApplicationCss'
import TaskDetails from './TaskDetails'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'
import moment from 'moment'




const TimeSheetForm = ({emplyoeeData}) => {
    // console.log("TimeSheet manager ==== ",emplyoeeData.emp_job_history)
    const [CurrDate, setCurrDate] = useState([])
    useEffect(() => {
        const dateFunction = async () => {
            var presentDate = await AsyncStorage.getItem('datevariable');
            setCurrDate(JSON.parse(presentDate));
        }
        dateFunction();
    }, [])

    const [maxworkHours] = useState(8)
    return (
        <View style={[Styles.mainConatiner, { padding: 10 }]}>
            {/* Project deatils part */}
            <ScrollView>
                <View style={{ marginBottom: 10}}>
                    <View style={Styles.headerView}>
                        <View style={Styles.headerViewText}>
                            <Text style={Styles.EmpDetTitleText}>Project : </Text>
                            <Text style={[Styles.EmpDetTitleValue, { alignSelf: "center", paddingTop: 2 }]}>XYZ </Text>
                        </View>
                        <View style={Styles.headerViewText}>
                            <Text style={Styles.EmpDetTitleText}>Date : </Text>
                            <Text style={[Styles.EmpDetTitleValue, { alignSelf: "center", paddingTop: 2 }]}>{moment(CurrDate).format("DD/MM/YYYY")}
                            </Text>
                        </View>
                    </View>
                    <View style={Styles.headerView}>
                        <View style={Styles.headerViewText}>
                            <Text style={Styles.EmpDetTitleText}>Max Working hrs : </Text>
                            <Text style={[Styles.EmpDetTitleValue, { alignSelf: "center", paddingTop: 2 }]}>{maxworkHours} </Text>
                        </View>
                        <View style={Styles.headerViewText}>
                            <Text style={Styles.EmpDetTitleText}>Remaining Working hrs  : </Text>
                            <Text style={[Styles.EmpDetTitleValue, { alignSelf: "center", paddingTop: 2 }]}>8.0 </Text>
                        </View>
                    </View>
                    <View style={Styles.headerView}>
                        <View style={Styles.headerViewText}>
                            <Text style={Styles.EmpDetTitleText}>Project Manager : </Text>
                            <Text style={[Styles.EmpDetTitleValue, { alignSelf: "center", paddingTop: 2 }]}></Text>
                        </View>
                    </View>

                </View>
                <TaskDetails />
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        emplyoeeData: state.emplyoeeData
    }
}

export default connect(mapStateToProps, null)(TimeSheetForm)