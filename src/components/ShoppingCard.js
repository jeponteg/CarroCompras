import React, {Component}from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Linking,
  } from 'react-native';
 import {baseUri} from '../rawData'

  const styles = StyleSheet.create({

    container: {
        backgroundColor: '#bdc3c7',
        borderRadius: 7,
        marginBottom: 10,
      },
      container2: {
        backgroundColor: 'red',
        borderRadius: 7,
        marginBottom: 10,
      },
      imageContainer: {
        height: 100,
        flexDirection:'row'
      },
      image: {
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        backgroundColor: 'black',
        width: '30%',
        height: '100%',
      },
      textContainer: {
        padding: 10,
        width:'70%',
      },
      title: {
        fontWeight: 'bold',
        fontSize: 15,
      },
      information: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      car: {
        padding: 10,
        backgroundColor:'#72368A',
        borderBottomEndRadius:7,
        borderBottomStartRadius:7,
        alignItems: 'center',
      },
      text:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:15
    }
      
  })
  
export default class ShoppingCard extends Component {

    render() {

        const {id,title, readyInMinutes, servings, image, sourceUrl,add,selectItem} = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{uri: `${baseUri}${image}`}}
                    /> 
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.information}>
                            <Text>{`Listo en ${readyInMinutes} min`}</Text>
                            <Text>{`Para ${servings} personas`}</Text>
                        </View>
                    </View>           
                </View>          
            </View>
        )
    }
}