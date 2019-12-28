import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export const AddToDo = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Title is empty!')
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setValue} value={value} placeholder='Enter TODO title'/>
            <Button title='Add ToDo' onPress={pressHandler} color='#414141'/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomColor: '#414141',
        borderBottomWidth: 2,
        padding: 10
    }
});
