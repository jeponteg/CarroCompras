import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {baseUri} from '../../rawData';

const ImgCard = ({id,title, readyInMinutes, servings, image}) => {
    return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
            style={styles.image}
            resizeMode="cover"
            source={{uri: `${baseUri}${image}`}}
            />
        </View>
         <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.information}>
                <Text>{`Listo en ${readyInMinutes} min`}</Text>
                <Text>{`Para ${servings} personas`}</Text>
            </View>
        </View>
    </View>
    )
}

export default ImgCard

const styles = StyleSheet.create({
    imageContainer: {
        height: 300,
      },
      image: {
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
      },
      textContainer: {
        padding: 10,
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
      container: {
        backgroundColor: '#bdc3c7',
        borderRadius: 7,
        marginBottom: 10,
      },
})
