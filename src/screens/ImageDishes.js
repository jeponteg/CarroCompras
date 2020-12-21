import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import ImgCard from '../components/DishExample/ImgCard'
import {dishData} from '../rawData' 


const ImageDishes = ({route,navigation}) => {

    const { itemId } = route.params;
    const img = dishData.filter((dish) => dish.id === itemId);

    return (
        
       <FlatList
        style={styles.flatListContainer}
        data={img}
        keyExtractor={({id}) => id.toString()}
        renderItem={({
            item: {id,title, readyInMinutes, servings, image, sourceUrl},
          }) => (
            <ImgCard
              id={id}
              title={title}
              readyInMinutes={readyInMinutes}
              servings={servings}
              image={image}
              sourceUrl={sourceUrl}
              
            />
          )}
       />
        
    )
}

export default ImageDishes

const styles = StyleSheet.create({
    flatListContainer: {
        padding: 10,
        width: '100%',
        height:'65%',
        flexGrow: 0 
      },
})
