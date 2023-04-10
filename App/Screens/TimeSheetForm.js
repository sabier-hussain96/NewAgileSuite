import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Styles } from '../Global/ApplicationCss'
import TaskDetails from './TaskDetails'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'
import moment from 'moment'
import { GET, POSTREQUEST } from '../api/ApiMethods'
import * as EndPoint from '../api/Endpoints'


const TimeSheetForm = ({ emplyoeeData, route, userData }) => {
    const [maxWorkHrs, setMaxWrkHrs] = useState("");
    // const [remainingHrs, setRemainingHrs] = useState("");
    useEffect(() => {
        fetchMaxWorkingHrs()
    }, [])

    const fetchMaxWorkingHrs = async () => {
        const endpoints = `${EndPoint.max_working_hour}`
        GET(endpoints, response => {
            if (response.data.status === 'S') {
                setMaxWrkHrs(response.data.value)
            }
        });
    }

   
    return (
        <View style={[Styles.mainConatiner, { padding: 10 }]}>
            {/* Project deatils part */}
            <ScrollView>
                <View style={{ marginBottom: 10 }}>
                    <View style={Styles.headerView}>
                        <View style={Styles.headerViewText}>
                            <Text style={Styles.EmpDetTitleText}>Project : </Text>
                            <Text style={[Styles.EmpDetTitleValue, { alignSelf: "center", paddingTop: 2 }]}>{route.params.ProjectDetails}</Text>
                        </View>
                        <View style={Styles.headerViewText}>
                            <Text style={Styles.EmpDetTitleText}>Date : </Text>
                            <Text style={[Styles.EmpDetTitleValue, { alignSelf: "center", paddingTop: 2 }]}>{moment(route.params.dateSelected).format("DD/MM/YYYY")}
                            </Text>
                        </View>
                    </View>
                    <View style={Styles.headerView}>
                        <View style={Styles.headerViewText}>
                            <Text style={Styles.EmpDetTitleText}>Max Working hrs : </Text>
                            <Text style={[Styles.EmpDetTitleValue, { alignSelf: "center", paddingTop: 2 }]}>{maxWorkHrs}</Text>
                        </View>
                        <View style={Styles.headerViewText}>
                            <Text style={Styles.EmpDetTitleText}>Remaining Working hrs  : </Text>
                            <Text style={[Styles.EmpDetTitleValue, { alignSelf: "center", paddingTop: 2 }]}></Text>
                        </View>
                    </View>
                    <View style={Styles.headerView}>
                        <View style={Styles.headerViewText}>
                            <Text style={Styles.EmpDetTitleText}>Project Manager : </Text>
                            <Text style={[Styles.EmpDetTitleValue, { alignSelf: "center", paddingTop: 2 }]}></Text>
                        </View>
                    </View>

                </View>
                <TaskDetails projectId={route.params.Project_Id} max_work={maxWorkHrs} dateSubmitted={route.params.dateSelected} projectSlug={route.params.projectSlug} />
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        emplyoeeData: state.emplyoeeData,
        userData: state.userData,
    }
}

export default connect(mapStateToProps, null)(TimeSheetForm)