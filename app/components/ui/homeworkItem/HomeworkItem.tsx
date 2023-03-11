import { FC } from 'react'
import { Text, View } from 'react-native'

type IProps = {
	lessonTitle: string
	homework: string
}

const HomeworkItem: FC<IProps> = ({ lessonTitle, homework }) => {
	return (
		<View className='mb-5'>
			<View className='w-full border-4 border-blue-400 py-2'>
				<Text className='text-center font-semibold text-3xl text-cyan-300'>
					{lessonTitle}
				</Text>
			</View>
			<View className='border-x-4 border-b-4 border-cyan-300'>
				<Text className='pl-1 pr-1 text-2xl text-purple-400'>{homework}</Text>
			</View>
		</View>
	)
}

export default HomeworkItem
