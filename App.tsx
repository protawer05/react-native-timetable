import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Home from './app/components/screens/Home'
import Header from './app/components/ui/header/Header'

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View className='w-full h-full bg-[#1e1e1e]'>
					<Header />
					<Home />
				</View>
				<StatusBar style='dark' />
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
