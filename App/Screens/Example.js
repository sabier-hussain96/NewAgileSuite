import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
    { id: 3, title: "Todo 3" },
  ]);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <View style={styles.todoContainer} key={todo.id}>
          <Text style={styles.todoText}>{todo.title}</Text>
          <View>
          <TouchableOpacity onPress={() => handleDelete(todo.id)}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  todoText: {
    fontSize: 18,
  },
  deleteText: {
    fontSize: 18,
    color: "red",
  },
});

export default TodoList;