import React, { useState,useEffect } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { Calendar } from 'react-native-calendars'
import Header from '../Component/Header'
import { Styles } from '../Global/ApplicationCss'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../Constants/Constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dropdown } from 'react-native-element-dropdown';
import { GET, POST, POSTREQUEST } from '../api/ApiMethods';
import * as EndPoint from '../api/Endpoints'
import { connect } from 'react-redux'

const TimeSheet = ({userData}) => {
  const navigation = useNavigation()
  const [disabledDays, setDisabledDays] = useState([]);
  const [projectList,setProjectList] = useState([]);
  const [projectName,setProjectName] = useState();
  const [slug,setSlug] = useState();
  const [projectId,setProjectId] = useState();
  const currentDate = new Date().toLocaleDateString();
  const [selectedDate, setDate] = useState([])

  useEffect(() => {
    let mounted = true;
    if(mounted){
      fetchProject()
    }
  
    return () => {
      mounted=false
    }
  }, [])
  
  const handleProject = (project) => {
    setProjectName(project.project_Name);
    setProjectId(project.project_Id);
    setSlug(project.project_Slug)
  }

  const fetchProject = async () => { 
    const endpoints = `${EndPoint.fetch_ProjectList}${userData.emp_id}`;
    GET(endpoints, response => {  
      var projectArr = response.data.assigned_project;
        if (response.data.status === 'S') {
          let projectListArr = []
         for(let i=0;i<projectArr.length;i++){
          for(let j=0;j<projectArr[i].assigned_projectfor_user.length;j++){
            projectListArr.push({
              project_Id: projectArr[i].assigned_projectfor_user[j].id,
              project_Name : projectArr[i].assigned_projectfor_user[j].project_name,
              project_Slug : projectArr[i].assigned_projectfor_user[j].slug,

            })           
          }
         }
         setProjectList(projectListArr)
        }
       
    });
}

  return (
    <View style={[Styles.mainConatiner]}>
      <Header />
      <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontFamily:"Montserrat-Bold",alignContent: "center",fontSize:15 }}>Project : </Text>
        </View>
        <View style={{ width: '40%' }}>
          <Dropdown
            maxHeight={300}
            style={[styles.dropdown]}
            itemTextStyle={{fontFamily:"Montserrat-Regular"}}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="project_Name"
            valueField="project_Id"
            data={projectList}
            onChange={(item) => {
              handleProject(item)
            }}
          />
        </View>

      </View>


      <Calendar maxDate={currentDate} hideExtraDays={true} onDayPress={({ dateString }) => {
        setDate(dateString)
        if(projectName != null){
          navigation.navigate(screenNames.TimeSheet_form,{dateSelected:dateString,ProjectDetails :projectName,Project_Id :projectId,projectSlug:slug})
        }else
        {
          Alert.alert("Please select project")
        }
        
      }} markedDates={{ [selectedDate]: { selected: true } }} style={{ marginTop: 10 }} />

    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  }
}



export default connect(mapStateToProps,null)(TimeSheet)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    padding: 7,
    borderColor: 'gray',
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
    fontFamily:"Montserrat-Regular"
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily:"Montserrat-Regular"
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