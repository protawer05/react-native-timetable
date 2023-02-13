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
				return 'Жаба'
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
			case 'Алгебра' || 'Геометрия' || 'Классный час':
				return '301'
			case 'Русский язык' || 'Литература':
				return '308'
			case 'Физика':
				return '302'
			case 'Физкультура':
				return 'Спорт зала'
			case 'Англ. яз':
				return '319'
			case 'Информатика':
				return '301'
			case 'ОБЖ':
				return '310'
			case 'История':
				return '313'
		}
	}
	const getLightTitle = (title: string, time: number) => {
		switch (title) {
			case 'Понедельник':
				return time == 1 ? true : false
			case 'Вторник':
				return time == 2 ? true : false
			case 'Среда':
				return time == 3 ? true : false
			case 'Четверг':
				return time == 4 ? true : false
			case 'Пятница':
				return time == 5 ? true : false
			default:
				return false
		}
	}

	const time = new Date().getDay()
	return (
		<View
			className={
				'border-4 mb-4 opacity-90 ' +
				(getLightTitle(title, time) ? 'border-[#f31212]' : 'border-[#1500ff9a]')
			}
		>
			<Text
				className={
					'text-3xl text-center py-1 border-b-4  ' +
					(getLightTitle(title, time)
						? 'text-[#fe1818] border-[#f31212]'
						: 'text-[#00FFFF] border-[#00FFFF]')
				}
			>
				{title}
			</Text>
			{lessonArr.map((lesson: string, i: number) => {
				const timeArrSelect = timeArr[i]
				return (
					<TableItem
						key={i}
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
