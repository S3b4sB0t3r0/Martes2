import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'

const AuthLayout = () => {
    return(
        <View>
            <>
        <Stack>
            <Stack.Screen
                name="sing-in"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="sing-up"
                options={{
                    headerShown: false
                }}
            />
        </Stack>

                <StatusBar backgroundColor="#161622"
                style='Light'/>

            </>
        </View>
    )


}


export default AuthLayout