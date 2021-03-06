import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList,
} from 'react-native';
import {dishData} from '../rawData'
import ShoppingCard from './ShoppingCard';

const styles = StyleSheet.create({
    flatListContainer: {
        padding: 10,
        width: '100%',
        height:'30%',
        flexGrow: 0  
      },
    padre:{
        alignContent:'center',
        padding:10
    },
    container:{
        height:80,
        backgroundColor:'#4ABD67',
        borderRadius:15,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    boxCar:{
        height:50,
        width:150, 
        backgroundColor: 'red',
        borderRadius:15,
        justifyContent:'center',
        alignContent:'center'
    },
    text:{
        fontWeight:'bold',
        color:'#FFFF',
        textAlign:'center'
    },
    renderHeader: {
        color:'#FFFF',
        textDecorationLine: 'underline',
        fontSize: 18
      } 
})


const Shopping = ({add,itemseleted,deletelist}) => {

    renderHeader = () => {
        return <Text style={styles.renderHeader}>Pedidos</Text>
    };
   
    if(itemseleted!=''){
        
        return (
            <>
                <FlatList
                    ListHeaderComponent={renderHeader}
                    style={styles.flatListContainer}
                    data={itemseleted}
                    keyExtractor={({id}) => id.toString()}
                    renderItem={({
                    item: {id,title, readyInMinutes, servings, image, sourceUrl},
                    }) => (
                        <ShoppingCard
                            title={title}
                            readyInMinutes={readyInMinutes}
                            servings={servings}
                            image={image}
                            sourceUrl={sourceUrl}
                            id={id}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View>
                            <Text style={styles.text}>Lista Vacía</Text>
                        </View>
                    )}
                />

                <View style={styles.padre} >
                    <View style={styles.container}>
                        <Text style={styles.textTotal}>Total carrito ({add})</Text>
                        <TouchableOpacity
                            style={styles.boxCar}
                            onPress= {deletelist}
                        >
                        <Text style={styles.text}>Vaciar Carrito</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>   
        )
        
        }else{
            
            return (
                <>
                    <View>
                        <FlatList
                            style={styles.flatListContainer}
                            ListHeaderComponent={renderHeader}
                        />
                        <Text style={styles.text}>Lista Vacía</Text>
                    </View>                                
                </>   
                
            )
    }
}


export default Shopping


