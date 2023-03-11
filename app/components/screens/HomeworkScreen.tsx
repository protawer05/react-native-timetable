import {
	ImageBackground,
	ScrollView,
	View,
	Text,
	TouchableOpacityBase,
	TouchableOpacity,
} from 'react-native'
//@ts-ignore
import image from '../../../assets/backgroundScreen.png'
import HomeworkItem from '../ui/homeworkItem/HomeworkItem'
import { useEffect, useState } from 'react'
import useRequest from '../../hooks/useRequest'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function HomeworkScreen({ navigation }: any) {
	const getHomework = useRequest()
	const [loading, setIsLoading] = useState(true)
	const [homeworks, setHomeworks] = useState([])
	useEffect(() => {
		getHomework()
			.then(data => setHomeworks(data))
			.then(data => setIsLoading(false))
			.catch(error => console.log(error))
	}, [])

	const renderHomework = (homeworks: any) => {
		const items = homeworks.map(({ lessonTitle, homework, _id }: any) => {
			return (
				<HomeworkItem lessonTitle={lessonTitle} homework={homework} key={_id} />
			)
		})
		return items
	}

	const items = renderHomework(homeworks)
	const renderItems = loading ? <Text>Loading...</Text> : items
	return (
		<ImageBackground
			source={image}
			resizeMode='cover'
			className='justify-center trans'
			style={{ height: '100%' }}
		>
			<TouchableOpacity
				className='flex flex-row items-center justify-center'
				onPress={() => {
					navigation.navigate('АддДомашка')
				}}
			>
				<Ionicons
					name='add-circle-outline'
					size={35}
					color={'red'}
					style={{ paddingTop: 3 }}
				/>
				<Text className='text-center text-2xl text-red-500'>Add homework</Text>
			</TouchableOpacity>
			<ScrollView>{renderItems}</ScrollView>
		</ImageBackground>
	)
}
// lessonTitle, homework
