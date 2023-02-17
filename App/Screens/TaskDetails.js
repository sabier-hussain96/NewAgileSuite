import React, { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screenNames } from '../Constants/Constants';
import { Provider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Styles } from '../Global/ApplicationCss';
import { Dropdown } from 'react-native-element-dropdown';

const activityStatusList = [
  {
    id: '1',
    label: "Completed",
    value: "completed",
  },
  {
    id: '2',
    label: "InProgress",
    value: "inProgress",
  },
  {
    id: '3',
    label: "On Hold",
    value: "onHold",
  },

]

const genderList = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Others",
    value: "others",
  },

];

const TaskDetails = () => {

  const navigation = useNavigation()

  let activityList = [
    { label: 'Analysis', value: 'Analysis' },
    { label: 'Automation testing', value: 'Automation testing' },
    { label: 'Bug fixing', value: 'Bug fixing' },
    { label: 'Candidate calling', value: 'Candidate calling' },
    { label: 'Client calling', value: 'Client calling' },
    { label: 'Coordinating', value: 'Coordinating' },
    { label: 'Desining/planning', value: 'Desining/planning' },
    { label: 'Developmen', value: 'Developmen' },
    { label: 'Documentation', value: 'Documentation' },
    { label: 'Email drafting', value: 'Email drafting' },
    { label: 'Exit formailites', value: 'Exit formailites' },
    { label: 'Finance', value: 'Finance' },
    { label: 'Interviewing', value: 'Interviewing' },
    { label: 'Joining formalities', value: 'Joining formalities' },
    { label: 'meeting', value: 'meeting' },
    { label: 'Other', value: 'Other' },
    { label: 'Profile outsourcing', value: 'Profile outsourcing' },
    { label: 'Prototyping', value: 'Prototyping' },
    { label: 'R&D', value: 'R&D' },
    { label: 'Reporting', value: 'Reporting' },
    { label: 'Research', value: 'Research' },
    { label: 'Test Case Preparation', value: 'Test Case Preparation' },
    { label: 'Test/Debugging', value: 'Test/Debugging' }
  ]

  const [initEmployeesTask, setInitEmpTask] = useState([])
  const [task_name, setTaskname] = useState("")
  const [activity_name, setActivityName] = useState("")
  const [task_status, setActivityStatus] = useState("")
  const [task_desc, setDescription] = useState("")
  const [emp_comment, setComment] = useState("")
  const [eta_given, setEtaGiven] = useState("")
  const [no_of_hrs, setEfforts] = useState("")
  const [eta_taken, setEtaTaken] = useState("")


  // adding new row and updating initEmpTask state.
  const addActivity = () => {

    let newActivity = [...initEmployeesTask]
    newActivity.push({ id: Math.floor(Math.random() * 100), task_name: '', activity_name: '', task_status: '', task_desc: '', emp_comment: '', eta_given: '', no_of_hrs: '', eta_taken: '', })
    setInitEmpTask(newActivity)

  }

  const handleChange = (index, e, text) => {
    const newInputFields = initEmployeesTask.map((item, i) => {
      if (index == i) {
        if(e==="no_of_hrs"){
          setEfforts(text)
        }
        return { ...item, [e]: text}  
      }
    
      return item
      
    })

    setInitEmpTask(newInputFields);
  };

  // deleting the row using id and updating to the state .
  const deleteActivity = (id) => {
    let temp = [...initEmployeesTask]
    let afterFilterArray = temp.filter(item => item.id !== id)
    setInitEmpTask(afterFilterArray)

  }

  const onCancel = () => {
    navigation.navigate(screenNames.Time_Sheet)
  }

  const handleActivityList = (value) => {
    console.log("name of the task",)
    setTaskname(value)

  }

  calculateWorkingHours = () => {

  }

  handleEtaTaken = (text) =>{
    setEtaTaken(text)
  }

  const saveActivity = () => {
    console.log("Getting the record", initEmployeesTask)

  }

  return (
    <Provider>
      <SafeAreaView style={{ padding: 5 }}>
        <View>
          {initEmployeesTask.map((item, index) => {
            return (
              <View key={item.id}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                  <Text style={Styles.MainHeading}>Activity Details </Text>
                  <TouchableOpacity style={{ justifyContent: "center",borderRadius:5,padding:5,backgroundColor:"red"}} onPress={() => deleteActivity(item.id)}><Text style={{ color: "white", fontFamily: "Montserrat-Bold" }}>Delete</Text>
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
                         iconStyle={styles.iconStyle}
                         labelField="label"
                         valueField="value"
                         data={activityList}
                        value={task_name}
                        onChange={(item) => {
                          handleActivityList(item)
                        }}
                        renderLeftIcon={() => (
                          <AntDesign
                            style={styles.icon}
                            color={ 'black'}
                            name="Safety"
                            size={20}
                          />
                        )}
                      />

                    </View>

                    <View style={{ width: '50%' }}>
                      <Text style={Styles.fieldsText}>Activity Status</Text>
                      {/* <Dropdown
                        data={activityStatusList}
                        onChangeText={value => {
                          handleActivityList(value)
                        }}
                        value={task_status}
                      /> */}
                    </View>
                  </View>

                  <View style={Styles.ViewActivity}>
                    <View style={{ width: '100%' }}>
                      <Text style={Styles.fieldsText}> Activity Name</Text>
                      <TextInput name={activity_name} style={Styles.textInputFields} multiline={true} onChangeText={text => handleChange(index, "activity_name", text)} />
                    </View>
                  </View>

                  <View style={Styles.ViewActivity}>
                    <View style={{ width: '100%' }}>
                      <Text style={Styles.fieldsText}>Description</Text>
                      <TextInput name={task_desc} style={Styles.textInputFields} multiline={true} onChangeText={text => handleChange(index, "task_desc", text)} />
                    </View>
                  </View>

                  <View style={Styles.ViewActivity}>
                    <View style={{ width: '31%' }}>
                      <Text style={Styles.fieldsText}>ETA Given</Text>
                      <TextInput name={eta_given} style={Styles.textInputFields} onChangeText={text => handleChange(index, "eta_given", text)} keyboardType='number-pad' />
                    </View>
                    <View style={{ width: '31%' }}>
                      <Text style={Styles.fieldsText}>Today's Effort</Text>
                      <TextInput name={no_of_hrs} style={Styles.textInputFields} onChangeText={text => handleChange(index, "no_of_hrs", text)} keyboardType='number-pad'/>
                    </View>
                    <View style={{ width: '31%' }}>
                      <Text style={Styles.fieldsText}>ETA Taken</Text>
                      <Text style={[Styles.textInputFields,{height:50,fontSize:15,padding:15}]}>{no_of_hrs}</Text>
                      {/* <TextInput name={etaTaken} style={Styles.textInputFields} onChangeText={text => handleChange(index, "etaTaken", text)} keyboardType='numeric' /> */}
                    </View>
                  </View>

                  <View style={Styles.ViewActivity}>
                    <View style={{ width: '100%' }}>
                      <Text style={Styles.fieldsText}>Comment</Text>
                      <TextInput name={emp_comment} style={Styles.textInputFields} multiline={true} onChangeText={text => handleChange(index, "emp_comment", text)} />
                    </View>

                  </View>
                </View>

              </View>
            );
          })}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
          <View style={{ justifyContent: "flex-start", flexDirection: "row"}}>
            <TouchableOpacity style={{ backgroundColor: '#B3E5FC', padding: 10,borderRadius:5  }} onPress={onCancel}>
              <Text style={{ alignSelf: "center" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
            <TouchableOpacity style={{ backgroundColor: '#B3E5FC', padding: 10,borderRadius:5 }} onPress={addActivity}>
              <Text style={{ alignSelf: "center" }}>Add Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#B3E5FC', padding: 10, marginLeft: 5 ,borderRadius:5}} onPress={saveActivity}>
              <Text style={{ alignSelf: "center" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Provider>
  )
}

export default TaskDetails
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