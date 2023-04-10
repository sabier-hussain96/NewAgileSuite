import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useId } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Provider, Title } from 'react-native-paper';
import { connect } from 'react-redux';
import { GET, POSTREQUEST, handleErrorResponse, POST } from '../api/ApiMethods';
import * as EndPoint from '../api/Endpoints';
import { screenNames } from '../Constants/Constants';
import { Styles } from '../Global/ApplicationCss';
import Toast from 'react-native-simple-toast';


const TaskDetails = ({ userData, max_work, dateSubmitted, projectSlug }) => {

  useEffect(() => {
    fetchActivityList()
    fetchStatusList()
    fetchTimeSheet()


  }, [])
  // const id = useId();
  // console.log(id)

  const fetchActivityList = async () => {
    const endpoints = `${EndPoint.activity_Type}`
    GET(endpoints, response => {
      var activitydata = response.data.lookup_details;
      if (response.data.status === 'S') {

        let activityArr = []
        for (let i = 0; i < activitydata.length; i++) {
          // console.log("Arrray of activity",activitydata[i])
          activityArr.push({
            activityId: activitydata[i].id,
            activtiyName: activitydata[i].longname
          })
        }
        setactivityList(activityArr)
      }
    });
  }

  const fetchStatusList = async () => {
    const endpoints = `${EndPoint.activity_status}`
    GET(endpoints, response => {
      var activityStatusdata = response.data.lookup_details;
      if (response.data.status === 'S') {
        let activitystatus = []
        for (let i = 0; i < activityStatusdata.length; i++) {
          // console.log("Arrray of status",activityStatusdata[i])
          activitystatus.push({
            statusId: activityStatusdata[i].id,
            statusName: activityStatusdata[i].longname
          })
        }
        setactivityStatus(activitystatus)
      }
    });
  }

  const fetchTimeSheet = async () => {
    const fetchprojectdetails_array = {
      empID: userData.emp_id,
      project_slug: projectSlug,
      submittedDate: dateSubmitted
    }
    const endpoints = `${EndPoint.fetch_TimeSheet}`
    POSTREQUEST(endpoints, fetchprojectdetails_array, response => {
      console.log("response fetching timeSheet", response.data)
      if (response.data.status === 'S') {
        setactivities(response.data.timesheet)
      }
    });
  }

  const navigation = useNavigation()

  const [activity, setactivities] = useState([])
  const [task_name, setTaskname] = useState("")
  const [activity_name, setActivityName] = useState("hgf")
  const [task_status, setActivityStatus] = useState("")
  const [task_desc, setDescription] = useState("")
  const [emp_comment, setComment] = useState("")
  const [eta_given, setEtaGiven] = useState("")
  const [no_of_hrs, setEfforts] = useState("")
  const [eta_taken, setEtaTaken] = useState("")


  // LOV's activity and status

  const [activityLists, setactivityList] = useState([])
  const [activityStatus, setactivityStatus] = useState([])

  const [remainingHrs,setRemainingHrs] = useState(8)

  // adding new row and updating initEmpTask state.
  const addActivity = () => {
    let newActivity = [...activity]
    newActivity.push({
      id: 0, submitted_date: dateSubmitted, task_name: '', activity_name: '', task_status: '', task_desc: '', emp_comment: '', eta_given: '',
      no_of_hrs: '', eta_taken: '', timesheet_status: '', approver_comment: "", active: "", dependency: "", dependency_comment: "", emp_id: userData.emp_id,
    })
    setactivities(newActivity)
  }

  const handleChange = (index, e, text) => {
    const newInputFields = activity.map((item, i) => {
      if (index == i) {
        return { ...item, [e]: text }
      }
      return item

    })

    setactivities(newInputFields);
  };

  // deleting the row using id and updating to the state .
  const deleteActivity = (id) => {
    const requestdata ={
      delete_ids:id
    }
    Alert.alert('Confirmation',
      'would you like to perform delete action ?', [{
        text: 'Ok',
        onPress: () => {
          const endpoints = `${EndPoint.delete_TimeSheet}`
          POSTREQUEST(endpoints, requestdata, response => {
           
          });
        }
      }, {
        text: 'Cancel',
        onPress: () => {

        }
      }
    ])


  }

  const onCancel = () => {
    navigation.navigate(screenNames.Time_Sheet)
  }

  const saveActivity = async () => {
    calculateRemainingHours()
    // const endPoints = `${EndPoint.create_TimeSheet}`;
    // const requestData = {
    //   activities: activity,
    //   empID: userData.emp_id,
    //   submittedDate: dateSubmitted,
    //   project_slug: projectSlug,
    //   maxWorkhours: max_work,

    // } 
    // POSTREQUEST(endPoints, requestData, response => {
    //   // console.log("Response checking",response.data);
    //   if (response.data.status === 'S') {
    //     handleSuccessResponse(response.data.message)
    //   }
    // })

  }

  const handleSuccessResponse = messsage => {
    Toast.show(messsage, Toast.LONG);
  };

  const calculateRemainingHours = () =>{
        var result = max_work-no_of_hrs;
        console.log("result == ",result)
        setRemainingHrs(result)
  }

  // console.log("Remaining hours in details page :",remainingHrs)


  return (
    <SafeAreaView style={{ padding: 5 }}>
      <View>
        {activity.map((item, index) => {
          return (
            <View key={item.id}>
              <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <Text style={Styles.MainHeading}>Activity Details </Text>
                <TouchableOpacity style={{ justifyContent: "center", borderRadius: 5, padding: 5, backgroundColor: "red" }} onPress={() => deleteActivity(item.id)}><Text style={{ color: "white", fontFamily: "Montserrat-Bold" }}>Delete</Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 10 }}>
                <View style={Styles.ViewActivity}>
                  <View style={{ width: '45%' }}>
                    <Text style={Styles.fieldsText}>Activity</Text>
                    <Dropdown
                      maxHeight={300}
                      style={[styles.dropdown, { borderColor: 'blue' }]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      itemTextStyle={{ fontFamily: "Montserrat-Regular" }}
                      labelField="activtiyName"
                      valueField="activityId"
                      data={activityLists}
                      onChange={(item) => {
                        handleChange(index, "task_name", item.activtiyName)
                      }}
                    />

                  </View>

                  <View style={{ width: '50%' }}>
                    <Text style={Styles.fieldsText}>Activity Status</Text>
                    <Dropdown
                      maxHeight={300}
                      style={[styles.dropdown, { borderColor: 'blue' }]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      itemTextStyle={{ fontFamily: "Montserrat-Regular" }}
                      labelField="statusName"
                      valueField="statusId"
                      value={item.task_name}
                      data={activityStatus}
                      onChange={(item) => {
                        handleChange(index, "task_status", item.statusName)
                      }}
                    />
                  </View>
                </View>

                <View style={Styles.ViewActivity}>
                  <View style={{ width: '100%' }}>
                    <Text style={Styles.fieldsText}> Activity Name</Text>
                    <TextInput name={activity_name} value={item.activity_name} style={Styles.textInputFields} multiline={true} onChangeText={text => handleChange(index, "activity_name", text)} />
                  </View>
                </View>

                <View style={Styles.ViewActivity}>
                  <View style={{ width: '100%' }}>
                    <Text style={Styles.fieldsText}>Description</Text>
                    <TextInput name={task_desc} value={item.task_desc} style={Styles.textInputFields} multiline={true} onChangeText={text => handleChange(index, "task_desc", text)} />
                  </View>
                </View>

                <View style={Styles.ViewActivity}>
                  <View style={{ width: '31%' }}>
                    <Text style={Styles.fieldsText}>ETA Given</Text>
                    <TextInput name={eta_given} value={item.eta_given.toString()} style={Styles.textInputFields} onChangeText={text => handleChange(index, "eta_given", text)} keyboardType='number-pad' maxLength={2} />
                  </View>
                  <View style={{ width: '31%' }}>
                    <Text style={Styles.fieldsText}>Today's Effort</Text>
                    <TextInput name={no_of_hrs} value={item.no_of_hrs.toString()} style={Styles.textInputFields} onChangeText={text => handleChange(index, "no_of_hrs", text)} keyboardType='number-pad' maxLength={1} />
                  </View>
                  <View style={{ width: '31%' }}>
                    <Text style={Styles.fieldsText}>ETA Taken</Text>
                    <Text style={[Styles.textInputFields, { height: 50, fontSize: 15, padding: 15 }]} >{activity[index].no_of_hrs}</Text>
                  </View>
                </View>

                <View style={Styles.ViewActivity}>
                  <View style={{ width: '100%' }}>
                    <Text style={Styles.fieldsText}>Comment</Text>
                    <TextInput name={emp_comment} value ={item.emp_comment}style={Styles.textInputFields} multiline={true} onChangeText={text => handleChange(index, "emp_comment", text)} />
                  </View>

                </View>
              </View>

            </View>
          );
        })}
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
        <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
          <TouchableOpacity style={{ backgroundColor: '#B3E5FC', padding: 10, borderRadius: 5 }} onPress={onCancel}>
            <Text style={{ alignSelf: "center" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
          <TouchableOpacity style={{ backgroundColor: '#B3E5FC', padding: 10, borderRadius: 5 }} onPress={addActivity}>
            <Text style={{ alignSelf: "center" }}>Add Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#B3E5FC', padding: 10, marginLeft: 5, borderRadius: 5 }} onPress={saveActivity}>
            <Text style={{ alignSelf: "center" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  }
}

export default connect(mapStateToProps, null)(TaskDetails)
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
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
    fontFamily: "Montserrat-Regular"
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular"
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