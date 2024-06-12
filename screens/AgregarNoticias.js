import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,Alert } from 'react-native';
import React, {useState} from 'react';

//conexicion databse
import dataBase from '../database/database'
import { getFirestore, addDoc, collection } from 'firebase/firestore'

const base = getFirestore(dataBase)

export default function App({navigation}){
    const initialState = {
        noticia:'',
    }

const [state, setState] = useState(initialState)
const handleChangeText = (value, name) => {
    setState({...state, [name]: value})
}

const PublicarNoticia = async () => {
    await addDoc (collection(base, 'noticias'),{
      ...state
})
Alert.alert('Noticias', 'Noticia publicada con exito')
}

return (
      <View style={styles.container}>
        <Text style={styles.Text}>Ingrese una Noticia</Text>
        <TextInput style={styles.PubNoti} onChangeText={(value) => handleChangeText(value,'noticia')}
                value={state.noticia} 
                />
        <TouchableOpacity style={styles.box} onPress={PublicarNoticia}>
          <Text style={styles.TextR}>Publicar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Noticias')}>
          <Text style={styles.TextR}>Noticias</Text>
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
        marginTop: 50,
      color: 'white',
      paddingTop: 40,
      fontSize: 25,
    },
    TextR:{
        color: 'white',
      textAlign: 'center',
      paddingTop: 25,
      fontSize: 20,
    },
    box:{
        marginTop: 20,
        backgroundColor: "#071B40",
        width: 370,
        height: 80,
        borderRadius: 8,
    },
    PubNoti:{
        fontSize: 23,
        textAlign: 'center',
        marginTop: 35,
        backgroundColor:"white",
        width: 370,
        height: 400,
        borderRadius: 8,
    }
  });
