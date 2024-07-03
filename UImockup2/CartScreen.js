import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

 export default function CartScreen () {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItems');
        if (storedCartItems !== null) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <View style={styles.container}>
    <ScrollView style={styles.scroll}>
    <View style={styles.container}>
       <Image style={{top:5, left: 160}}source={require('./assets/Logo.png')}/>
       <Pressable style={{left: 350, top: -25}}><Ionicons name="search-outline" size={30} color="black"/></Pressable>
       <Text style={{ fontSize:26, top:10, left:130}}>CHECKOUT</Text>
    </View>
    {cartItems.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.dressName}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        ))}
    </ScrollView>
    <View style={{alignItems:'center'}}>
    <Pressable style={styles.button}>
    <Ionicons name="bag-handle-outline" size={45} color="white" style={{top:5, right:85}}/>
   <Text style={{color:'white', fontSize:26, top:-30, left:20}}>CHECKOUT</Text>
    </Pressable>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    

  },
  scroll:{
    backgroundColor: '#fff',
    
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:-5,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'black',
    top:20,
    width:450,
    left: 10,
    marginVertical: 20
  },
  itemImage:{
    top:30,
    left: 20,
    height:200,
    width:'40%'
  },
  itemDetails:{
    alignItems:'center',
    top:-100,
    left: 40
  }
});