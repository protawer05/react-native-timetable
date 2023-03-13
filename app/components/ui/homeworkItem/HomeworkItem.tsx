import { FC } from 'react'
import {
	Text,
	TouchableOpacity,
	TouchableOpacityBase,
	View,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import useRequest from '../../../hooks/useRequest'
type IProps = {
	lessonTitle: string
	homework: string
	id: number
	onDelete: any
}

const HomeworkItem: FC<IProps> = ({ lessonTitle, homework, id, onDelete }) => {
	const { deleteHomework } = useRequest()
	async function onClickDelete(id: number) {
		try {
			await deleteHomework(id)
		} catch (e) {
			alert(e)
		}
		onDelete()
	}
	return (
		<View className='mb-5'>
			<View className='w-full border-4 border-blue-400 py-2 flex flex-row items-center justify-center'>
				<Text className='text-center font-semibold text-3xl text-cyan-300'>
					{lessonTitle}
				</Text>
				<TouchableOpacity
					onPress={() => onClickDelete(id)}
					style={{ position: 'absolute', right: 5, top: '32%' }}
				>
					<Ionicons name='trash-outline' size={27} />
				</TouchableOpacity>
			</View>
			<View className='border-x-4 border-b-4 border-cyan-300'>
				<Text className='pl-1 pr-1 text-2xl text-purple-400'>{homework}</Text>
			</View>
		</View>
	)
}

export default HomeworkItem
