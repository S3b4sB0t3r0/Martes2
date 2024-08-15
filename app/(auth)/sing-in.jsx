import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import { useState } from 'react';

const SingIn = () => {
 const [form, setForm] = useState({
    email: '',
    password: ''
 })

    return(
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
            <View className="w-full justify-center min-h-full px-4 my-6">
                <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]"/>
                <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                    Logo to Aora</Text>

            <FormField 
            title="Email"
            value={form.email}
            handChangeText={(e) => setForm({...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            />
            <FormField 
            title="Email"
            value={form.email}
            handChangeText={(e) => setForm({...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            />

            </View>
            </ScrollView>
        </SafeAreaView>
    )


}


export default SingIn