import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

// Screens
import HomeScreen from './app/components/screens/HomeScreen'
import HomeworkScreen from './app/components/screens/HomeworkScreen'
// Navigation
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
	const Stack = createStackNavigator()
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View className='w-full h-full'>
					<NavigationContainer>
						<Stack.Navigator initialRouteName='App'>
							<Stack.Screen
								name='Home'
								component={HomeScreen}
								options={{
									title: 'Расписание',
									headerStyle: {
										backgroundColor: '#00ffff7c',
										height: 60,
									},
									headerTitleAlign: 'center',
									headerTitleStyle: {
										marginTop: -50,
										color: '#fff',
										fontSize: 30,
									},
								}}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</View>
				<StatusBar style='dark' />
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
