import { View, Text, FlatList, Button, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Divider } from 'react-native-elements';
import { leaveStatus } from '../Component/dummyData'
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { screenNames } from '../Constants/Constants';
import * as  Endpoints from '../api/Endpoints'
import { connect } from 'react-redux';
import { GET, POST } from '../api/ApiMethods';

const LeaveApplication = ({ userData }) => {



    // date (calendar) related state
    const [date, setDate] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [endDate, setEndDate] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const [leaveType, setLeaveType] = useState("")

    const [dayType, setdayType] = useState("")

    // Leave Type list based on condition
    const [LeaveTypeList, setLeaveTypeList] = useState([])
    const [spclLeaveList, setSpecialLeaveList] = useState([])
    const [leaveDayType, setDayType] = useState([])

    // total leaves,count of individual leaves
    const [totalleavesCount, setTotalLeaves] = useState(0);
    const [countLeaves, setCountLeaves] = useState(0)

    // Radio Button state
    const [checked, setChecked] = useState('No');


    useEffect(() => {
        fetchLeaveType()
        fetchTotalLeave()
        fetchLeaveDay()
    }, [])

    const fetchLeaveType = () => {
        const endpoints = `${Endpoints.leaveType}${userData.emp_id}`
        GET(endpoints, response => {
            if (response.data.status === 'S') {
                var Responvariable = response.data.data;
                let leaveTypeArr = [];
                let spclleaveArr = []
                for (let i = 0; i < Responvariable.length; i++) {
                    if (Responvariable[i].is_special_leave == 0) {
                        leaveTypeArr.push({
                            id: Responvariable[i].id,
                            leave_name: Responvariable[i].leave_name
                        })
                    } else {
                        spclleaveArr.push({
                            id: Responvariable[i].id,
                            leave_name: Responvariable[i].leave_name
                        })
                    }

                }
                setLeaveTypeList(leaveTypeArr)
                setSpecialLeaveList(spclleaveArr)
            }
        })
    }

    const fetchELCount = (leaveId) => {
        const endpoints = `${Endpoints.leavesCount}?emp_id=${userData.emp_id}&leave_id=${leaveId}`;
        POST(endpoints, response => {
            if(respon)
            setCountLeaves(response.data.leavesallowed)
        })
    }

    const fetchTotalLeave = () => {
        const endpoints = `${Endpoints.TotalleavesCount}?emp_id=${userData.emp_id}`
        POST(endpoints, response => {
            setTotalLeaves(response.data.leavesallowed)
        })
    }

    const fetchLeaveDay = () => {
        const endpoints = `${Endpoints.leaveDayType}`
        GET(endpoints, response => {
            console.log("Response on fetch leave day", response.data.lookup_details)
            var lookUpData = response.data.lookup_details
            if (response.data.status === 'S') {
                for (let i = 0; i < lookUpData.length; i++) {
                    let lookUpArr = [];
                    for (let index = 0; index < lookUpData.length; index++) {
                        lookUpArr.push({
                            id: lookUpData[index].id,
                            longname: lookUpData[index].longname,

                        })
                    }
                    setDayType(lookUpArr)
                }

            }
        })
    }

    const handleleaveType = (leavetype) => {
        setLeaveType(leavetype.id);
        fetchELCount(leavetype.id)
    }

    const handleleaveDayType = (dayType) => {
        setdayType(dayType.longname);
    }

    const navigation = useNavigation()
    return (
        <ScrollView style={{ flexGrow: 1, margin: 20 }}>
            <View style={{ flexDirection: "row", marginBottom: 30, borderBottomWidth: 0.2, borderBottomColor: "black", paddingBottom: 10 }}>
                <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 18 }}>Hi, Username</Text>
            </View>

            <View style={{ flexDirection: "column", elevation: 5, backgroundColor: "white", padding: 10, borderRadius: 10 }}>
                <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 18, paddingLeft: 10 }}>Leaves Status</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={{
                        flexDirection: "row", backgroundColor: "#90CAF9",
                        alignItems: "center", justifyContent: "space-between",
                        height: 90,
                        width: 150, margin: 10, borderRadius: 10, paddingLeft: 10, paddingRight: 10
                    }}>
                        <Text style={{ fontFamily: "Montserrat-Bold", color: "#2E7D32" }}>Leave Balance</Text>
                        <View style={{ backgroundColor: "white", height: 30, width: 30, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ textAlign: "center", fontFamily: "Montserrat-Bold" }}>{totalleavesCount.toFixed(2)}</Text>
                        </View>

                    </View>

                    <View style={{
                        flexDirection: "row", backgroundColor: "#90CAF9",
                        alignItems: "center", justifyContent: "space-between",
                        height: 90,
                        width: 150, margin: 10, borderRadius: 10, paddingLeft: 10, paddingRight: 10
                    }}>
                        <Text style={{ fontFamily: "Montserrat-Bold", color: "#2E7D32" }}>Leave Applied</Text>
                        <View style={{ backgroundColor: "white", height: 30, width: 30, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ textAlign: "center", fontFamily: "Montserrat-Bold" }}>0</Text>
                        </View>

                    </View>
                </View>

            </View>
            <View style={{ marginTop: 15, flexDirection: "column" }}>
                <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 18 }}>Apply for the leave</Text>
                <View style={{ marginTop: 15, flexDirection: "row" }}>
                    <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 15, paddingBottom: 10 }}>Special Leave </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => {
                            setChecked('Yes')
                        }}>
                            <Image style={{ height: 20, width: 20, marginHorizontal: 5, }}
                                source={checked === 'Yes' ? require('../Assets/Images/radioOn.png') : require('../Assets/Images/radioOff.png')}></Image>
                            <Text style={{ alignSelf: "center" }}>Yes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            setChecked('No')
                        }}>
                            <Image style={{ height: 20, width: 20, marginHorizontal: 5, }} source={checked === 'No' ? require('../Assets/Images/radioOn.png') : require('../Assets/Images/radioOff.png')}></Image>
                            <Text style={{ alignSelf: "center" }}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ marginTop: 15,width:'50%', flexDirection: "column", borderBottomWidth: 0.2, borderBottomColor: "black", paddingBottom: 10 }}>
                        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 15, paddingBottom: 10 }} >Start Date</Text>
                        <TouchableOpacity onPress={() => setOpenModal(true)}>
                            <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 15 }}>
                                {moment(date).format('DD-MM-YYYY')}
                            </Text>
                        </TouchableOpacity>

                        <DatePicker
                            modal
                            mode='date'
                            open={openModal}
                            date={date}
                            minimumDate={new Date()}
                            onConfirm={date => {
                                setOpenModal(false);
                                setDate(date);
                            }}
                            onCancel={() => {
                                setOpenModal(false);
                            }}
                            
                        />
                    </View>
                    <View style={{ marginTop: 15, width: 120, flexDirection: "column",borderBottomWidth: 0.2, borderBottomColor: "black", paddingBottom: 10 }}>
                        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 15, paddingBottom: 10 }}>Day Type</Text>
                        <Dropdown
                            maxHeight={250}
                            itemTextStyle={{ fontFamily: "Montserrat-Regular" }}
                            placeholderStyle={{ fontSize: 16, fontFamily: "Montserrat-Regular" }}
                            selectedTextStyle={{ fontSize: 16, fontFamily: "Montserrat-Bold" }}
                            dropdownPosition='auto'
                            labelField="longname"
                            valueField="id"
                            data={leaveDayType}
                            onChange={(item) => {
                                handleleaveDayType(item)
                            }}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ marginTop: 15, flexDirection: "column",width:'50%', borderBottomWidth: 0.2, borderBottomColor: "black", paddingBottom: 10 }}>
                        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 15, paddingBottom: 10 }} >End Date</Text>
                        <TouchableOpacity onPress={() => setEndDate(true)}>
                            <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 15 }}>
                                {moment(end).format('DD-MM-YYYY')}
                            </Text>
                        </TouchableOpacity>

                        <DatePicker
                            modal
                            mode='date'
                            open={endDate}
                            date={end}
                            minimumDate={date !== new Date() ? date : new Date()}
                            onConfirm={date => {
                                setEndDate(false);
                                setEnd(date);
                            }}
                            onCancel={() => {
                                setEndDate(false);
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 15, width: 120, flexDirection: "column" }}>
                    <Text>Day Type</Text>
                        <Dropdown
                            disable={setDayType == 'First Half'? true : false}
                            maxHeight={250}
                            itemTextStyle={{ fontFamily: "Montserrat-Regular" }}
                            placeholderStyle={{ fontSize: 16, fontFamily: "Montserrat-Regular" }}
                            selectedTextStyle={{ fontSize: 16, fontFamily: "Montserrat-Bold" }}
                            dropdownPosition='auto'
                            labelField="longname"
                            valueField="id"
                            data={leaveDayType}
                            onChange={(item) => {
                                handleleaveDayType(item)
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 15, flexDirection: "column", borderBottomWidth: 0.2, borderBottomColor: "black" }}>
                    <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 15 }}>Leave Type</Text>
                    {checked === 'No' ?
                        <Dropdown
                            maxHeight={250}
                            itemTextStyle={{ fontFamily: "Montserrat-Regular" }}
                            placeholderStyle={{ fontSize: 16, fontFamily: "Montserrat-Regular" }}
                            selectedTextStyle={{ fontSize: 16, fontFamily: "Montserrat-Bold" }}
                            dropdownPosition='auto'
                            labelField="leave_name"
                            valueField="id"
                            data={LeaveTypeList}
                            onChange={(item) => {
                                handleleaveType(item)
                            }}
                        /> : <Dropdown
                            maxHeight={250}
                            itemTextStyle={{ fontFamily: "Montserrat-Regular" }}
                            placeholderStyle={{ fontSize: 16, fontFamily: "Montserrat-Regular" }}
                            selectedTextStyle={{ fontSize: 16, fontFamily: "Montserrat-Bold" }}
                            dropdownPosition='auto'
                            labelField="leave_name"
                            valueField="id"
                            data={spclLeaveList}
                            onChange={(item) => {
                                handleleaveType(item)
                            }}
                        />}

                </View>

                <View style={{ marginTop: 15, flexDirection: "column", borderBottomWidth: 0.2, borderBottomColor: "black" }}>
                    <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 15 }}>Reason for Leave</Text>
                    <TextInput multiline={true}></TextInput>
                </View>
            </View>

            <View style={{ marginTop: 15, justifyContent: "center", alignSelf: "center", width: "95%", backgroundColor: "#90CAF9", padding: 15, borderRadius: 15 }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(screenNames.Leaves_Used)
                }}><Text style={{ textAlign: "center", fontFamily: "Montserrat-Bold", color: "#1B5E20" }}>Apply</Text></TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}


export default connect(mapStateToProps, null)(LeaveApplication)