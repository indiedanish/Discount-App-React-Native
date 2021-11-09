import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  KeyboardAvoidingViewBase,
} from "react-native";

export default function App() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [error, setError] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);

  const [history, setHistory] = useState([]);

  function isLetter(str) {
    if (str.length === 1 && str.match(/[a-z]/i)) return false;
    else return true;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      enabled={Platform.OS === "ios" ? true : false}
    >
      <Text>Enter Price: </Text>
      <TextInput
        style={{ borderWidth: 2, width: 300, marginBottom: 20 }}
        onChangeText={(value) => {
          setPrice(value);
          setError("");
          setButtonPressed(false);
          return;
        }}
      >
        {" "}
      </TextInput>

      <Text>Enter Discount: </Text>
      <TextInput
        style={{ borderWidth: 2, width: 300 }}
        onChangeText={(value) => {
          setDiscount(value);
          setButtonPressed(false);
          setError("");
          return;
        }}
      >
        {" "}
      </TextInput>

      <Text style={{ margin: 20, color: 'red', textAlign: "center" }}>{error}</Text>

      <Text>
        {" "}
        You Save: {buttonPressed === true ? price - discountedPrice : "0"}{" "}
      </Text>

      <Text>
        {" "}
        Final Price: {buttonPressed === true ? discountedPrice : "0"}{" "}
      </Text>

      <TouchableOpacity
        onPress={() => {
          price > 0 && discount > 0 && isLetter(price) && isLetter(discount)
            ? setDiscountedPrice(price - price * (discount / 100))
            : setError(
                "Price and Discount should be greater then 0\n and not be Alphabet"
              );
          price > 0 && discount > 0 && isLetter(price) && isLetter(discount)
            ? setButtonPressed(true)
            : console.log("Do Nothing");
        }}
      >
        <Text
          style={{
            borderWidth: 2,
            marginTop: 10,
            padding: 10,
            color: "white",
            backgroundColor: "black",
          }}
        >
          Calculate
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          price > 0 && discount > 0 && isLetter(price) && isLetter(discount)
            ? setHistory([
                ...history,
                { Price: { price }, DiscountedPrice: { discountedPrice } },
              ])
            : console.log("");
        }}
      >
        <Text
          style={{
            borderWidth: 2,
            marginTop: 10,
            marginBottom: 20,
            padding: 10,
            color: "white",
            backgroundColor: "black",
          }}
        >
          {" "}
          Save
        </Text>
      </TouchableOpacity>

      <Text style={{ backgroundColor: "black", color: "white", width:300, textAlign: "center", padding:10}} >History</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        style={{ height: 200, width: 300}}
      >
        <ScrollView style={{ borderWidth:2, }}>
          <Text style={{textAlign: "center"}} >
            {history.map(
              (ele) =>
                "Price: " +
                ele.Price.price +
                " | Discounted Price: " +
                ele.DiscountedPrice.discountedPrice +
                " \n"
            )}
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={() => setHistory([])}>
        <Text
          style={{
            borderWidth: 2,
            marginTop: 10,
            marginBottom: 20,
            padding: 10,
            color: "white",
            backgroundColor: "black",
          }}
        >
          Clear
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
