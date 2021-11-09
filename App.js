import { StatusBar } from 'expo-status-bar';
import React , {useState,useEffect} from 'react';
import { StyleSheet, TextInput , TouchableOpacity, Text, View } from 'react-native';

export default function App() {


  const [price , setPrice] = useState(0)
  const [discount , setDiscount] = useState(0)
  const [discountedPrice, setDiscountedPrice] = useState(0)
  const [error,setError] = useState("")
 
  return (
    <View style={styles.container}>

      <Text>Enter Price: </Text>
      <TextInput style={{borderWidth: 2  , width:300 , marginBottom: 20}} 
      onChangeText={(value)=> {setPrice(value)
      setError("")
      }} >  </TextInput>

      <Text>Enter Discount:  </Text>
      <TextInput style={{borderWidth: 2  , width:300}} onChangeText={(value)=> {setDiscount(value)}}>  </TextInput>

      <Text>{error}</Text>

      <Text>  You Save:  {price-discountedPrice} </Text>

      <Text> Final Price:  {discountedPrice} </Text>

      
      <TouchableOpacity onPress={()=> {


        //setDiscountedPrice(price - (price * (discount/100)))
        price > 0 && discount > 0 ? setDiscountedPrice(price - (price * (discount/100))) : setError("Price and Discount should be greater then 0") 
   
  
      }  } > 
        <Text style={{borderWidth: 2 , padding:10, color: 'white' , backgroundColor: 'black'}} >Calculate</Text>
         </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
