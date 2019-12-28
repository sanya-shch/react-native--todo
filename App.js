import React, {useState} from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import {NavBar} from "./src/NavBar";
import {AddToDo} from "./src/AddToDo";
import {ToDoItem} from "./src/ToDoItem";

export default function App() {
  const [todos, setToDo] = useState([]);

  const addToDo = (title) => {
    const newToDo = {
      id: Date.now().toString(),
      title
    };

    setToDo(prevToDos => [newToDo, ...prevToDos]);
  };

  const removeToDo = (id) => {
    setToDo(prevToDos => prevToDos.filter(item => item.id !== id));
  };

  return (
    <View>
      <NavBar title="ToDoApp"/>
      <View style={styles.container}>
        <AddToDo onSubmit={addToDo}/>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item })=> <ToDoItem todo={item} onRemove={removeToDo}/> }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
