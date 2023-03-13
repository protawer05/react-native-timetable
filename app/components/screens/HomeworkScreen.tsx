import {
	ImageBackground,
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	RefreshControl,
} from 'react-native'
//@ts-ignore
import image from '../../../assets/secondBackground.jpg'
import HomeworkItem from '../ui/homeworkItem/HomeworkItem'
import { useEffect, useState } from 'react'
import useRequest from '../../hooks/useRequest'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function HomeworkScreen({ navigation }: any) {
	const { getHomework } = useRequest()
	const [loading, setIsLoading] = useState(true)
	const [homeworks, setHomeworks] = useState([])
	useEffect(() => {
		getHomeworks()
		setInterval(() => {
			getHomeworks()
		}, 5000)
	}, [])

	const getHomeworks = () => {
		getHomework()
			.then(data => setHomeworks(data))
			.then(data => setIsLoading(false))
			.catch(error => alert(error))
	}

	function onDelete() {
		getHomeworks()
	}
	const renderHomework = (homeworks: any) => {
		const items = homeworks.map(({ lessonTitle, homework, _id }: any) => {
			return (
				<HomeworkItem
					lessonTitle={lessonTitle}
					homework={homework}
					id={_id}
					key={_id}
					onDelete={onDelete}
				/>
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
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={loading} onRefresh={getHomeworks} />
				}
			>
				{renderItems}
			</ScrollView>
		</ImageBackground>
	)
}
// lessonTitle, homework
