import React from "react";
import {  View, Text,} from "react-native"; 
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router'

export default function App() {

  return(

    <View className="flex-1 imtems-center justify-center bg-white">
      <Text>Aora ADSO</Text>
      <StatusBar style='auto'/>
      <Link href="/profile" style={{color: 'blue'}}>Ir a la pagina de Perfil</Link>

    </View>

  )

}
