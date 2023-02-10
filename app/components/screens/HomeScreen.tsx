import { ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Table from '../ui/table/Table'
import { lessons } from '../../utils/LessonName'
import { timesOtherDay, timesMonday } from '../../utils/LessonTime'
// @ts-ignore
import image from '../../../assets/backgroundScreen.png'
export default function HomeScreen() {
	return (
		<ImageBackground
			source={image}
			resizeMode='cover'
			className='justify-center trans'
		>
			<ScrollView>
				<Table
					title='Понедельник'
					lessonArr={lessons.monday}
					timeArr={timesMonday}
				/>
				<Table
					title='Вторник'
					lessonArr={lessons.tuesday}
					timeArr={timesOtherDay}
				/>
				<Table
					title='Среда'
					lessonArr={lessons.wednesday}
					timeArr={timesOtherDay}
				/>
				<Table
					title='Четверг'
					lessonArr={lessons.thursday}
					timeArr={timesOtherDay}
				/>
				<Table
					title='Пятница'
					lessonArr={lessons.friday}
					timeArr={timesOtherDay}
				/>
			</ScrollView>
		</ImageBackground>
	)
}
