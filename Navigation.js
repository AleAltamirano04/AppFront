import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Pantalla1 from "./screens/Pantalla1";
import Registrarse from "./screens/Registrarse";
import Noticias from "./screens/Noticias"
import AgregarNoticias from "./screens/AgregarNoticias"
import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();

const Navigation = () =>{
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Pantalla1} />
        <Stack.Screen name="Register" component={Registrarse} />
        <Stack.Screen name="Noticias" component={Noticias} />
        <Stack.Screen name="AgregarNoticias" component={AgregarNoticias} />
    </Stack.Navigator>
    )
}
export default Navigation;