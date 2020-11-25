import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {baseUri} from '../../rawData';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdc3c7',
    borderRadius: 7,
    marginBottom: 10,
  },
  imageContainer: {
    height: 100,
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
});

const DishCard = ({id,title, readyInMinutes, servings, image,selectItem}) => {
    
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
        <View style={styles.car}>
          <View style={styles.car2}>
            <View>
              <TouchableOpacity
                onPress={() => selectItem(id)}
              >
                <Text style={styles.text}>Agregar al Carro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      
    );
  
}

export default  DishCard