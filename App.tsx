import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BlurView } from 'expo-blur'
import { StyleSheet } from 'react-native'
// Screens
import HomeScreen from './app/components/screens/HomeScreen'
import HomeworkScreen from './app/components/screens/HomeworkScreen'
// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
	const Tab = createBottomTabNavigator()
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View className='w-full h-full'>
					<NavigationContainer>
						<Tab.Navigator
							initialRouteName='Home'
							screenOptions={({ route }) => ({
								tabBarActiveTintColor: 'cyan',
								tabBarInactiveTintColor: 'purple',
								tabBarActiveBackgroundColor: '#8000ff6e',
								headerShown: false,
								tabBarBackground: () => (
									<BlurView
										tint='light'
										intensity={110}
										style={StyleSheet.absoluteFill}
									/>
								),
								tabBarStyle: { position: 'absolute' },

								tabBarIcon: ({ focused, color, size }) => {
									let iconName
									let rn = route.name

									if (rn === 'Расписание') {
										iconName = focused ? 'ios-time' : 'ios-time-outline'
									} else if (rn === 'Домашка') {
										iconName = focused ? 'ios-school' : 'ios-school-outline'
									}
									// @ts-ignore
									return <Ionicons name={iconName} size={size} color={color} />
								},
							})}
						>
							<Tab.Screen name='Расписание' component={HomeScreen} />
							<Tab.Screen name='Домашка' component={HomeworkScreen} />
						</Tab.Navigator>
					</NavigationContainer>
				</View>
				<StatusBar style='dark' />
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
