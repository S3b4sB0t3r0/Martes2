import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyle, isLoading}) => {
    return(
        <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        clssName={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}
        ${isLoading ? 'opacity-50' : ''}`}>
            <Text className={`text-primary font-psmibold text-lg ${textStyle}`}>
                {title}
                </Text>
        </TouchableOpacity>
    )
}

export default CustomButton