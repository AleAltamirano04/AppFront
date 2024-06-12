import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';



const Noticias = ({navigation}) => {
    return (
    <View style={styles.container}>
        <Text style={styles.Text}>Noticias Técnica 2</Text>
        <TouchableOpacity style={styles.NoticiaBox} onPress={() => navigation.navigate('AgregarNoticias')}>
            <Text style={styles.TextR}>Publicar Noticia</Text>
        </TouchableOpacity>
        <Text style={styles.Novedades}>Novedades</Text>
        <StatusBar style="auto" />
        
        <View style={styles.box}>
            <Text style={styles.Lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.Lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.Lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.Lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>
        <View style={styles.box}>
        <Text style={styles.Lorem}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>
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
    TextR:{
        textAlign: 'center',
        color: 'white',
        paddingTop: 10,
    },
    NoticiaBox:{
        marginTop: 30,
        backgroundColor: "#071B40" ,
        width: 300,
        height: 50,
        borderRadius: 10,
    },
    Novedades:{
        color: "white",
        marginTop: 30,
        fontSize: 26,
        marginBottom: 30,
    },
    box:{
        textAlign: 'center',
        marginTop: 15,
        backgroundColor: "white",
        width: 350,
        height: 100,
        borderRadius: 20,
    },
    Lorem:{
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 12,
    }
})

export default Noticias;