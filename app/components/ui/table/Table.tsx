import { View, Text } from 'react-native'
import React, { FC } from 'react'
import TableItem from './TableItem'

const Table: FC<any> = ({ title, lessonArr, timeArr }) => {
	const setTeacherName = (lessonName: string) => {
		switch (lessonName) {
			case 'Алгебра' || 'Геометрия':
				return 'Верка'
			case 'Русский язык' || 'Литература':
				return 'Галинка'
			case 'Физика':
				return 'Михалыч'
			case 'Физкультура':
				return 'Оксанка'
			case 'Классный час':
				return 'Верка'
			case 'Англ. яз':
				return 'Англичанка'
			case 'Информатика':
				return 'Информатичка'
			case 'ОБЖ':
				return 'ОБЖшник'
			case 'История':
				return 'Историчка'
		}
	}
	const setAudienceNumber = (lessonName: string) => {
		switch (lessonName) {
			case 'Алгебра' || 'Геометрия':
				return '306'
			case 'Русский язык' || 'Литература':
				return '310'
			case 'Физика':
				return '307'
			case 'Физкультура':
				return 'Спорт зала'
			case 'Классный час':
				return '306'
			case 'Англ. яз':
				return '304'
			case 'Информатика':
				return '301'
			case 'ОБЖ':
				return '312'
			case 'История':
				return '314'
		}
	}
	return (
		<View className=''>
			<Text className='text-3xl text-center text-[#fff] border-t-4 py-1 border-[#4c4c4c]'>
				{title}
			</Text>
			{lessonArr.map((lesson: string, i: number) => {
				const timeArrSelect = timeArr[i]
				return (
					<TableItem
						name={lesson}
						startTime={timeArrSelect[0]}
						endTime={timeArrSelect[1]}
						teacher={setTeacherName(lesson)}
						audience={setAudienceNumber(lesson)}
					/>
				)
			})}
		</View>
	)
}

export default Table
