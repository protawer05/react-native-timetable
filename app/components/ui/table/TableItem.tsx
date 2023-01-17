import { View, Text } from 'react-native'
import React, { FC } from 'react'

interface ILessonInfo {
	name: string
	startTime: string
	endTime: string
	teacher?: string
	audience?: string
	lightTime?: number
}

const TableItem: FC<ILessonInfo> = ({
	name,
	startTime,
	endTime,
	teacher,
	audience,
	lightTime,
}) => {
	return (
		<View className='w-full bg-[#393939] h-12 flex-row px-3 items-center mb-1'>
			<View className='time basis-9 mr-3'>
				<Text className='startTime text-white text-right'>{startTime}</Text>
				<Text className='endTime text-[#a1a1a1de] text-right'>{endTime}</Text>
			</View>
			<View className='lightTime h-8 w-[1.9] bg-[#ff0000] mr-3' />
			<View className='lessonInfo basis-6/12'>
				<Text className='lessonName text-white'>{name}</Text>
				<Text className='audience text-[#868383]'>{audience} кабинет</Text>
			</View>
			<View className='teacher pb-5'>
				<Text className='min-w-[35%] text-right text-[#878787de]'>
					{teacher}
				</Text>
			</View>
		</View>
	)
}
export default TableItem
