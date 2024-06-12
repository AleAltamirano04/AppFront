import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Registrarse = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.Text}>Registro</Text>
        <Image
          style={styles.Logo}
          source={require('../assets/reac1.png')}
        />
        <TextInput style={styles.DNI}placeholder='DNI' />
        <TextInput style={styles.contraseña} secureTextEntry={true} placeholder='Contraseña' />
        <TextInput style={styles.contraseñaRep} secureTextEntry={true} placeholder='Repetir Contraseña' />      
        <TouchableOpacity onPress={() => navigation.navigate('Noticias')} style={styles.ingresar}>
          <Text style={styles.textIngr}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.IniSesion}>¿Ya tienes cuenta? Iniciar Sesion</Text>
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
      marginTop: 30,
    },
    DNI:{
      color: "black",
      backgroundColor: "white",
      borderColor: "black",
      borderRadius: 10,
      width: 300,
      height: 40,
      marginTop: 100,
    },
    contraseña:{
      color: "black",
      backgroundColor: "white",
      borderColor: "black",
      borderRadius: 10,
      width: 300,
      height: 40,
      marginTop: 30,
    },
    contraseñaRep:{
      color: "black",
      backgroundColor: "white",
      borderColor: "black",
      borderRadius: 10,
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
      width: 300,
      height: 100,
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
    IniSesion:{
      color: "white",
      marginTop: 4,
    }
  });
  
export default Registrarse;