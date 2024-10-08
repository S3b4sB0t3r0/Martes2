import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native-web'
import  { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setShowPasswor] = useState 
    (false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-bas text-gray-100 font-pmedium">
                {title}</Text>

                <View className="boder-2 border-red-500 w-full h-16 px-4 bg-black-100 rounded-2xl 
                focus:boder-secondary items-center flex-row">
                    <TextInput
                    className="flex-1 text--white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    />

                    {title === 'Password' && (

                        <TouchableOpacity onPress={() =>
                            setShowPasswor(!showPassword)}>
                                <Image source={!showPassword ? icons.eye : icons.eyehide}  className=
                                "w-6 h-6" resizeMode='contain'/>
                        </TouchableOpacity>

                    )}



                     
                </View>
        </View>
    )
}

export default FormField