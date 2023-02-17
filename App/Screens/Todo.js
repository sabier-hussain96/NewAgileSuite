import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useReducer } from 'react'
import { Colors } from '../Global/ApplicationCss'
import { InitialState, todoReducer } from '../Component/TodoReducer'
import TodoList from '../Component/TodoList'
import { connect } from 'react-redux'


const Todo = ({userData}) => {
  const [input, setInput] = useState('')
  const [state, dispatch] = useReducer(todoReducer, InitialState)

  const handleTodo = () => {
   

    dispatch({ type: 'ADD_TODO', payload:{name:input} })
    setInput('')
  }

  // const Increase = () => {
  //   dispatch({type:'Increase'})
  // }

  // const Decrease = () => {
  //   dispatch({type:'Descrease'})
  // }
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
});
export default connect(mapStateToProps,null) (Todo)