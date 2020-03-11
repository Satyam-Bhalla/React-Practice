import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Card  from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';

const generateRandomNumber = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rndNumber = Math.floor(Math.random()*(max-min))+min;
    if(rndNumber === exclude){
        return generateRandomNumber(min,max,exclude);
    }else{
        return rndNumber;
    }

}

const GameScreen = (props) => {
    const [currentGuess,setCurrentGuess] = useState(generateRandomNumber(1,100,props.userChoice));
    return ( 
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={()=> {}}></Button>
                <Button title='GREATER ' onPress={()=> {}}></Button>
            </Card>
        </View>
         );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;