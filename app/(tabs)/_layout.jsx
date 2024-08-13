import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'


import { icons } from '../../constants';


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <view className="items-center justify-center gap-2">
            <Image 
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className="w-g h-6"
            />
            <Text className={`${focused ?'font-psemibold' : 'font-pregular'} text-xs `} style={{ color: color }}>
                {name}
            </Text>
        </view>
    )
}

const TabsLayout = () => {
    return(
        
        <>
        <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor:  '#FFA001',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle: {
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84,
            }
        }}
        >
            <Tabs.Screen 
            name="home"
            options={{
                title:'Home',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (

                    <TabIcon 
                        icon={icons.home}
                        color={color}
                        nome="home"
                        focused={focused}
                    />

                )
            }}
            />

            <Tabs.Screen 
            name="Bookmark"
            options={{
                title:'Bookmark',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (

                    <TabIcon 
                        icon={icons.bookmark}
                        color={color}
                        nome="Bookmark"
                        focused={focused}
                    />

                )
            }}
            />

            <Tabs.Screen 
            name="create"
            options={{
                title:'Create',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (

                    <TabIcon 
                        icon={icons.plus}
                        color={color}
                        nome="Create"
                        focused={focused}
                    />

                )
            }}
            />

            <Tabs.Screen 
            name="profile"
            options={{
                title:'Profile',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (

                    <TabIcon 
                        icon={icons.profile}
                        color={color}
                        nome="Profile"
                        focused={focused}
                    />

                )
            }}
            />
        </Tabs>
        </>

    )
}

export default TabsLayout