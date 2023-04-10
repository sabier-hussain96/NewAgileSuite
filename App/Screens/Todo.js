import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState,useEffect, useReducer } from 'react'
import { Colors } from '../Global/ApplicationCss'
import { InitialState, todoReducer } from '../Component/TodoReducer'
import TodoList from '../Component/TodoList'
import { connect } from 'react-redux'
import * as EndPoint from '../api/Endpoints'
import { GET } from '../api/ApiMethods'
import { storeEmplyoeeData } from '../Redux/Actions/commonActions'


const Todo = ({userData}) => {
  const [input, setInput] = useState('')
  const [state, dispatch] = useReducer(todoReducer, InitialState)

  // useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     fetchEmployeDetail()
  //   }

  //   return () => {
  //     mounted = false;
  //   }
  // }, [])


  // const fetchEmployeDetail = async () => {
  //   const endpoints = `${EndPoint.employee_details_URL}?id=${userData.emp_id}`
  //   GET(endpoints, response => {
  //     if (response.data.status === 'S') {
  //       storeEmplyoeeData(response.data.employee_data)
  //     }

  //   });
  // }

  const handleTodo = () => {
    dispatch({ type: 'ADD_TODO', payload:{name:input} })
    setInput('')
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#FFFFFF' }}>
      <Text style={{ marginBottom: 20, fontWeight: '700' }}>Todo List</Text>
      <TextInput value={input} placeholder={'Enter Text'} style={{ width: "80%", height: 50, backgroundColor: "#F5F5F5", borderRadius: 6 }} onChangeText={(text) => setInput(text)} />
      <TouchableOpacity onPress={handleTodo} style={{ marginTop: 20, backgroundColor: Colors.secondary, width: '80%', height: 40, padding: 8, alignItems: 'center', justifyContent: 'center', borderRadius: 3 }}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      <TodoList Todo={state.todo} dispatch={dispatch} />
    </View>
  )
}
const mapStateToProps = state => ({
  userData: state.userData, 
  // emplyoeeData: state.emplyoeeData
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     storeEmplyoeeData: (emplyoeeData) => dispatch(storeEmplyoeeData(emplyoeeData)),

//   }
// }
export default connect(mapStateToProps,null) (Todo)