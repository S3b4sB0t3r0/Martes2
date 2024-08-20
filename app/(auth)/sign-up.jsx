import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { images } from '../../constants';

import FormField from '../../components/FormField';
import { useState } from 'react';
import  CustomButton  from '../../components/CustomButton'

import { createUser } from '../../lib/appwrite'

const SingUp = () => {
 const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
 })

 const [isSubmitting, setIsSubmitting] = useState(false)

 const submit = () => {
    createUser();
 }

    return(
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
            <View className="w-full justify-center min-h-[83vh] px-4 my-6">
                <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]"/>
                <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                    Sing Up to Aora</Text>


            <FormField 
            title="Username"
            value={form.username}
            handChangeText={(e) => setForm({...form, email: e })}
            otherStyles="mt-10"
            />
            <FormField 
            title="Email"
            value={form.email}
            handChangeText={(e) => setForm({...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            />
            <FormField 
            title="Email"
            value={form.password}
            handChangeText={(e) => setForm({...form, 
                password: e })}
            otherStyles="mt-7"
            />

            <CustomButton       
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}        
            />

            <View className ="justify-center pt-5 flex-row gap-2">

            <Text className="text-lg text-gray-100 font-pregular">
                Have an account already?
            </Text>
                <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sing In</Link>
            </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )


}


export default SingUp