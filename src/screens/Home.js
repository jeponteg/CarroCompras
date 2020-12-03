import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DishList from '../components/DishExample/DishList'


const Home = ({navigation}) => {
    return (
        <DishList navigation={navigation}/>
    )
}

export default Home

const styles = StyleSheet.create({})
