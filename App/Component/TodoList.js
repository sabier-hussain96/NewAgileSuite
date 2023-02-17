import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TodoList = ({ Todo, dispatch }) => {
    // console.log(Todo)
    return (
        <View>
            {Todo?.map((item) => (
                <TouchableOpacity key={item.id} style={{marginTop:10}} onPress={() => dispatch({ type: "DELETE_TODO", id:item.id })}>
                    <View>
                        <Text>Name:{item.name}</Text>
                    </View>
                </TouchableOpacity>

            ))}
        </View>
    )
}

export default TodoList