import { ImageBackground, ScrollView, Text, View } from 'react-native'
//@ts-ignore
import image from '../../../assets/backgroundScreen.png'
export default function HomeworkScreen() {
	return (
		<ImageBackground
			source={image}
			resizeMode='cover'
			className='justify-center trans'
			style={{ height: '100%' }}
		>
			<ScrollView>
				<Text>Aboba</Text>
			</ScrollView>
		</ImageBackground>
	)
}
