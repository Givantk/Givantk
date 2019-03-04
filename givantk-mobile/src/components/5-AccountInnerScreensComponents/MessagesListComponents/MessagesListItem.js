import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MessagesListItem = (props) => {
    return ( 
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <View style={styles.item}>
                    <Text style={styles.text}>MessagesListItem</Text>
                </View> 
            </TouchableOpacity>
        </View>
     );
}
 
const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 5
    },
    item: {
        backgroundColor: '#74b9ff',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 2,
        borderColor: '#008388'           
    },
    text: {
        fontSize: 18,
        color: '#130f40'
    }
});

export default MessagesListItem;