import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, FlatList, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

 export default function HomeScreen ({navigation}) {
  const paw =[
    { index:1,
   image: require ('./assets/dress1.png'),
   dressName:'Office wear',
   dressType:'Reversible angorra cardigan',
   price:'$120'
    },
    { index:2,
      image: require('./assets/dress2.png'),
      dressName:'Black',
   dressType:'Reversible angorra cardigan',
   price:'$120'
       },
  ];

  const wap=[
    {
    index:1,
    image: require ('./assets/dress3.png'),
    dressName:'Church wear',
    dressType:'Reversible angorra cardigan',
    price:'$120'
     },
     { index:2,
       image: require('./assets/dress4.png'),
       dressName:'Lamerei',
    dressType:'Reversible angorra cardigan',
    price:'$120'
        },
  ];
  const awp=[
    {
    index:1,
    image: require ('./assets/dress5.png'),
    dressName:'21WN',
    dressType:'Reversible angorra cardigan',
    price:'$120'
     },
     { index:2,
       image: require('./assets/dress6.png'),
       dressName:'Lopo',
    dressType:'Reversible angorra cardigan',
    price:'$120'
        },
  ];
  const apw=[
    {
    index:1,
    image: require ('./assets/dress7.png'),
    dressName:'21WN',
    dressType:'Reversible angorra cardigan',
    price:'$120'
     },
     { index:2,
       image: require('./assets/dress3.png'),
       dressName:'Lamerei',
    dressType:'Reversible angorra cardigan',
    price:'$120'
        },
  ];
  return (

    <ScrollView style={styles.ScrollView}>
    <View style={styles.container}>
      <View style={styles.positioning}>
      <Image style={{top:25, left: -5}}source={require('./assets/Logo.png')}/>
     <Pressable style={{right: 150}} onPress={() => navigation.navigate('Checkout')}><Ionicons name="menu-outline" size={40} color="black"/></Pressable>
     <Pressable style={{left: 110, top: -35}}><Ionicons name="search-outline" size={30} color="black"/></Pressable>
     <Pressable style={{left: 150, top: -67}}><Ionicons name="bag-outline" size={30} color="black"/></Pressable>
     <Text style={{fontSize: 40,right:100, top: -20}}> Our Story</Text>
     <Pressable style={styles.filter}><Ionicons name="filter-outline" size={25} color="orange"/></Pressable>
     <Pressable style={styles.list}><Ionicons name="list-outline" size={25} color="black"/></Pressable>
      <StatusBar style="auto" />
      </View>
      <FlatList
      horizontal={true}
      data={paw}
      renderItem={({item})=>(<View style={styles.conco}><Image source={item.image} style={styles.dresses} />
     <Pressable style={{top:-30, left: 150}}><Ionicons name="add-circle-outline" size={25} color="black"/></Pressable>
      <Text style={styles.flatlistcontainer}>{item.dressName}</Text>
      <Text style={styles.flatlistdescription}>{item.dressType}</Text>
      <Text style={styles.flatlistprice}>{item.price}</Text>
      </View>)}
      />
      <FlatList
      horizontal={true}
      data={wap}
      renderItem={({item})=>(<View style={styles.conco}><Image source={item.image} style={styles.dresses} />
      <Pressable style={{top:-30, left: 150}}><Ionicons name="add-circle-outline" size={25} color="black"/></Pressable>
      <Text style={styles.flatlistcontainer}>{item.dressName}</Text>
      <Text style={styles.flatlistdescription}>{item.dressType}</Text>
      <Text style={styles.flatlistprice}>{item.price}</Text>
      </View>)}
      />
      <FlatList
      horizontal={true}
      data={awp}
      renderItem={({item})=>(<View style={styles.conco}><Image source={item.image} style={styles.dresses} />
      <Pressable style={{top:-30, left: 150}}><Ionicons name="add-circle-outline" size={25} color="black"/></Pressable>
      <Text style={styles.flatlistcontainer}>{item.dressName}</Text>
      <Text style={styles.flatlistdescription}>{item.dressType}</Text>
      <Text style={styles.flatlistprice}>{item.price}</Text>
      </View>)}
      />
      <FlatList
      horizontal={true}
      data={apw}
      renderItem={({item})=>(<View style={styles.conco}><Image source={item.image} style={styles.dresses} />
      <Pressable style={{top:-30, left: 150}}><Ionicons name="add-circle-outline" size={25} color="black"/></Pressable>
      <Text style={styles.flatlistcontainer}>{item.dressName}</Text>
      <Text style={styles.flatlistdescription}>{item.dressType}</Text>
      <Text style={styles.flatlistprice}>{item.price}</Text>
      </View>)}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    ScrollView:{
 backgroundColor: '#fff'
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top:-40
  },
  positioning: {
    alignItems:'center',
    top: 40
  },
  filter: {
    left: 150,
    top: -57,
    backgroundColor: '#F2F2F3',
    borderRadius:20,
    width:40,
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
   list: {
    left: 100,
    top: -78,
    backgroundColor: '#F2F2F3',
    borderRadius:20,
    width:40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    marginTop: -20
  },
  dresses:{
    left: 10,
    marginHorizontal:10
  },
  flatlistcontainer:{
    fontSize: 16,
    left: 20,
    top:-20
  },
  flatlistdescription:{
    fontSize: 11,
    left: 20,
    color: 'grey',
    top:-20
  },
  flatlistprice:{
    left: 20,
    fontSize: 20,
    color:'orange',
    top:-20
  }
});