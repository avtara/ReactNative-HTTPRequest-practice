import React, {Component} from 'react';
import {
    View,
    StyleSheet} from 'react-native';

const Card= (props) => {
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle : {
        borderWidth:1,
        borderRadius:2,
        borderColor:'#f8f8f8',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:2,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
    }
});

export default Card;