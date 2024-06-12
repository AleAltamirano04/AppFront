import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Pantalla1 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Bienvenidos</Text>
        <Text style={styles.Text2}>Escuela Técnica N°2 "Ing Emilio Rebuelto" </Text>
        <Image
          style={styles.Logo}
          source={require('../assets/reac1.png')}
        />
        <TextInput style={styles.usuario}placeholder='  Usuario' />
        <TextInput style={styles.contraseña} secureTextEntry={true} placeholder='  Contraseña' />      
        <TouchableOpacity style={styles.ingresar} onPress={() => navigation.navigate('Noticias')}>
          <Text style={styles.textIngr}>ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.TextR}>¿Todavía no tenes cuenta? Registrarse</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0B4B66',
      alignItems: 'center',
    },
    Text:{
      color: 'white',
      paddingTop: 40,
      fontSize: 25,
    },
    Text2:{
      color: 'white',
      paddingTop: 10,
    },
    Logo:{
      width: 300,
      height: 300,
    },
    usuario:{
      color: "black",
      backgroundColor: "white",
      borderColor: "black",
      borderRadius: 8,
      width: 300,
      height: 40,
      marginTop: 100,
    },
    contraseña:{
      color: "black",
      backgroundColor: "white",
      borderColor: "black",
      borderRadius: 8,
      width: 300,
      height: 40,
      marginTop: 30,
    },
    ingresar:{
      backgroundColor: "black",
      width: 300,
      height: 40,
      borderRadius: 10,
      marginTop: 20,
    },
    textIngr:{
      color: "white",
      textAlign: "center",
      marginTop: 8,
    },
    textRegist:{
      color: "white",
      margin: 3,
      marginRight: 15,
      marginBottom: 160,
    },
    Text4:{
      color: "white",
    },
    boton:{
      backgroundColor: "black",
      width: 300,
      height: 40,
      borderRadius: 10,
      marginTop: 20,
    },
    TextR:{
      color: "white",
      paddingRight: 5,
      paddingTop: 5,
    }
  });
  
  export default Pantalla1;