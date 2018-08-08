import React from 'react';
import {Text,View, StyleSheet} from 'react-native';


const Header = () => {

    return (
        <View style={style.viewStyle}>
            <Text style={style.textSize}> Albuns </Text>
        </View>
    );
}

const style = StyleSheet.create({
    viewStyle:{
        backgroundColor: 'red',
        alignItems:'center',
        justifyContent:'center',
        height: 100
        
    },
    
    textSize:{
        fontSize: 20
    }
})
export default Header;