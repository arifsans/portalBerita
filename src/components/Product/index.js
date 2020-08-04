import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from '../../assets/images/mekbuk.jpg';

export default function Product(props) {
  return (
    <View style={styles.wrapper}>
      <Image source={macbook} style={styles.imageProduct} />
      <Text style={styles.productName}>New Macbook Pro 2019</Text>
      <Text style={styles.productPrice}>Rp. 25.000.000</Text>
      <Text style={styles.location}>Jakarta Barat</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.textButton}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {width: 188, height: 107},
  productName: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
    marginTop: 12,
  },
  location: {fontSize: 12, fontWeight: '300', marginTop: 12},
  buttonWrapper: {
    backgroundColor: '#6fcf97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  textButton: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
