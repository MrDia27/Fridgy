import { SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';
import { Styles } from './Styles';
import Product from './Product';

const DATA = [
  {
    id: '1',
    name: 'First Item',
    image: require('../assets/favicon.png'),
  },
  {
    id: '2',
    name: 'Second Item',
    image: require('../assets/favicon.png'),
  },
  {
    id: '3',
    name: 'Third Item',
    image: require('../assets/favicon.png'),
    expirationDate : "24/12/2022"
  },
];

export default function Home( { navigation } ) {
  return (
    <>
      <SafeAreaView style={Styles.container}>
          <FlatList style={Styles.container}
              data={DATA}
              renderItem={({ item }) => <Product image={item.image} name={item.name} expirationDate={item.expirationDate}/>}
              keyExtractor={item => item.id}
          />
      </SafeAreaView>
      <TouchableOpacity style={ { alignSelf: 'center', marginBottom: 32, padding: 16, borderRadius: 24, backgroundColor: '#333'} } onPress={ () => navigation.navigate('Scanner') }>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>🔍 Scanner un produit</Text>
      </TouchableOpacity>
    </>
)};

