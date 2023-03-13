import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AddHomeworkScreen from './AddHomeworkScreen'
import HomeworkScreen from './HomeworkScreen'

const HomeStack = createNativeStackNavigator()

function HomeworkStack({ navigation }: any) {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				options={{ headerShown: false }}
				name='homework'
				component={HomeworkScreen}
			/>
			<HomeStack.Screen
				name='АддДомашка'
				component={AddHomeworkScreen}
				options={{
					header: ({}) => (
						<View
							style={{
								height: 40,
							}}
						>
							<TouchableOpacity
								onPress={() => navigation.navigate('homework')}
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<Ionicons
									name='arrow-back-outline'
									size={35}
									style={{ paddingTop: 3 }}
								/>
								<Text className='text-xl'>Назад к расписанию</Text>
							</TouchableOpacity>
						</View>
					),
				}}
			/>
		</HomeStack.Navigator>
	)
}
export default HomeworkStack
