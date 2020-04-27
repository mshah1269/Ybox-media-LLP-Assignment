import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Card from './Card'


const PersonData = props => {
  
    // console.log(props.profileimg)
     return(
        <View style={styles.container}>   
            <Card style= {styles.card}>
                <View style={{marginRight : 10 , justifyContent : 'center'}}>
                    <Image
                    source={{ uri: props.profileimg }}
                    style={{ borderRadius: 50 , padding : 10 , width : 40 , height : 40}}
                />
                </View>
                <View>      
                    <View style = {{ marginLeft:20, paddingBottom : 10 , width : '150%'  , justifyContent : 'center' }}>
                        <View  style={{flexDirection : "row"}} >
                            <Text>{props.name}</Text>
                        </View>
                        <View style={{flexDirection : "row" }}>
                            <Text style={{ color : '#aeb0b5'}}>{props.userid}</Text>                   
                        </View>
                    </View> 


                   
                </View>
                <View style={{ alignItems : 'flex-end' , flex:1 , justifyContent : 'center' }}>

                    <AntDesign name="adduser" size={25}    />
                </View>
            </Card>
        </View>
    );

};

const styles = StyleSheet.create({

container : {
    marginHorizontal: 10
},
icon : {
    backgroundColor:'red',
   
},
card : {
    flexDirection:'row',
    marginBottom: 20,
    padding: 10
}


});

export default PersonData;
