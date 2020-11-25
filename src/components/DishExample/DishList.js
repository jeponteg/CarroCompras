import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet, View, Text, Alert} from 'react-native';
import HorizontalScroll from '../HorizontalScroll';
import {baseUri, dishData, dishTitles} from '../../rawData';
import DishCard from './DishCard';
import Shopping from '../Shopping';

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 10,
    width: '100%',
    height:'65%',
    flexGrow: 0 
  },
  horizontalScroll: {margin: 10},

  renderHeader: {
    color:'#FFFF',
    textDecorationLine: 'underline',
    fontSize: 18
  }
});

export default class DishList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: dishData,
      selectedDishes: [],
      add:0,
      itemseleted:[]
    };
  }

  selectDishes = (name) => {
    const {dishes} = this.state;
    const filteredDishes = dishes.filter((dish) => dish.cuisine === name);
    this.setState({selectedDishes: filteredDishes});
  };

  selectItem = (id) => {
    const {itemseleted} = this.state;
    if(itemseleted.find((dish) => dish.id ===id)){
      return;
    }

    this.setState(({ itemseleted }) => ({itemseleted: [...itemseleted, dishData.find((dish)=>dish.id===id)]}));
    Alert.alert('¡Muy bien!', 'Agregado al carrito!' )
    this.setState(({add }) => ({add: (add+1)}));

  }

  renderHeader = () => {
    return <Text style={styles.renderHeader}>Platos</Text>
  };

  alertdelete = () =>{
    Alert.alert(
      "Confirmación",
      "¿Quieres eliminar todo el carrito?",
      [
        {
          text: "Me arrepentí",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Borrar todo!!", onPress: () => 
          this.Delete()
        }
      ],
      { cancelable: false }
    );

  }

  Delete = () => {
    this.setState({itemseleted:[]});
    this.setState({add:0});
  }

  render() {
    const {selectedDishes} = this.state;
    const {add} = this.state;
    const {itemseleted} = this.state;
    return (
      <>
        <HorizontalScroll
          style={styles.horizontalScroll}
          onPress={this.selectDishes}
        />
        <FlatList
          ListHeaderComponent={this.renderHeader}
          style={styles.flatListContainer}
          data={selectedDishes}
          keyExtractor={({id}) => id.toString()}
          renderItem={({
            item: {id,title, readyInMinutes, servings, image, sourceUrl},
          }) => (
            <DishCard
              id={id}
              title={title}
              readyInMinutes={readyInMinutes}
              servings={servings}
              image={image}
              sourceUrl={sourceUrl}
              selectItem={this.selectItem}
            />
          )}
          ListEmptyComponent={() => (
            <View>
              <Text>No hay items</Text>
            </View>
          )}
        />
        <Shopping itemseleted={itemseleted} add={add} deletelist={this.alertdelete}/>
      </>
    );
  }
}
