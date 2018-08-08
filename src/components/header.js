import React from 'react';
import {Text,View, StyleSheet} from 'react-native';


const Header = (props) => {

    return (
        <View style={style.viewStyle}>
            <Text style={style.textSize}> {props.headerName} </Text>
        </View>
    );
}

const style = StyleSheet.create({
    viewStyle:{
        backgroundColor: 'gray',
        alignItems:'center',
        justifyContent:'center',
        height: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height:20},
        shadowOpacity: 0.9,
        position: 'relative'
        
    },
    
    textSize:{
        fontSize: 20
    }
})
export default Header;