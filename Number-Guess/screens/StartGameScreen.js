import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput,
         Button, TouchableWithoutFeedback, Keyboard,
        Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';


const StartGameScreen = () => {
    const [enteredValue,setEnteredValue] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const [selectedNumber,setSelectedNumber] = useState();
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Invalid Input!','Please enter a number between 1 and 99',[{text: 'Ok',style:'destructive',onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }
    let confirmedOutput;
    if(confirmed){
    confirmedOutput = <Card style={styles.cardNumberContainer}> 
                        <Text>You selected</Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <Button title="START GAME" />
                      </Card>;
    }
    return ( 
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                {/* <TextInput /> */}
                <Input style={styles.input}
                       blurOnSubmit
                       autoCapitalize='none' 
                       autoCorrect={false} 
                       keyboardType="number-pad" 
                       maxLength={2}
                       onChangeText={numberInputHandler}
                       value = {enteredValue}
                       />
                <View style={styles.buttonContainer}>
                   <View style={styles.button}> 
                     <Button title="Reset" onPress={resetInputHandler}   color={Colors.secondary} /> 
                   </View>
                   <View style={styles.button}> 
                      <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /> 
                    </View>
                </View>
            </Card>
            
            {confirmedOutput}
        </View> 
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    title:{
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    button: {
        width: 100,

    },
    input:{
        width: 50,
        textAlign: 'center'
    },
    cardNumberContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
    
});
export default StartGameScreen;