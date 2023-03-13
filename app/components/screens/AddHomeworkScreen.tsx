import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ImageBackground,
	Alert,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import useRequest from '../../hooks/useRequest'
// @ts-ignore
import image from '../../../assets/thirdBackground.jpg'
export default function AddHomeworkScreen() {
	const [lessonTitle, setLessonTitle] = useState('Математика')
	const [homework, setHomework] = useState('')
	const [buttonText, setButtonText] = useState('Добавить')
	const { addHomework } = useRequest()
	async function onSubmit() {
		try {
			if (homework.length > 5) {
				await addHomework(lessonTitle, homework)
				setHomework('')
				setButtonText('Успешно отправлено')
				setTimeout(() => {
					setButtonText('Добавить')
				}, 3000)
			} else {
				Alert.alert('Ошибка', 'Недостаточно символов')
			}
		} catch (e) {
			setButtonText('Ошибка отправки')
			setTimeout(() => {
				setButtonText('Добавить')
			}, 5000)
		}
	}
	return (
		<ImageBackground
			source={image}
			resizeMode='cover'
			className='justify-center trans'
			style={{
				height: '103%',
				zIndex: 0,
				marginTop: -40,
			}}
		>
			<View className='mt-[-25%]'>
				<View className='flex flex-col items-center mb-10'>
					<Text className='text-cyan-500 text-3xl'>Название предмета:</Text>
					<Picker
						style={{
							marginTop: 5,
							width: '80%',
							backgroundColor: '#135ee184',
							color: '#fff',
						}}
						selectedValue={lessonTitle}
						onValueChange={itemValue => setLessonTitle(itemValue)}
					>
						<Picker.Item
							style={{ fontSize: 26 }}
							label='Математика'
							value='Математика'
						/>
						<Picker.Item
							style={{ fontSize: 26 }}
							label='Русский язык'
							value='Русский язык'
						/>
						<Picker.Item
							style={{ fontSize: 26 }}
							label='Английский язык'
							value='Английский язык'
						/>
						<Picker.Item
							style={{ fontSize: 26 }}
							label='Информатика'
							value='Информатика'
						/>
						<Picker.Item
							style={{ fontSize: 26 }}
							label='История'
							value='История'
						/>
						<Picker.Item
							style={{ fontSize: 26 }}
							label='Физика'
							value='Физика'
						/>
						<Picker.Item
							style={{ fontSize: 26 }}
							label='Литература'
							value='Литература'
						/>
						<Picker.Item style={{ fontSize: 26 }} label='ОБЖ' value='ОБЖ' />
						<Picker.Item
							style={{ fontSize: 26 }}
							label='Заметка'
							value='Заметка'
						/>
					</Picker>
				</View>
				<View className='w-full text-center px-8 flex-grow-1 mb-8'>
					<TextInput
						style={{
							fontSize: 24,
							backgroundColor: 'cyan',
							borderWidth: 1,
							padding: 10,
							borderRadius: 4,
							flexWrap: 'wrap',
							maxWidth: '100%',
						}}
						multiline
						onChangeText={setHomework}
						value={homework}
						placeholder='Введите домашку'
					/>
				</View>
				<TouchableOpacity
					className='w-full items-center justify-center h-[70] bg-[#158ed5b3]'
					onPress={onSubmit}
					disabled={buttonText == 'Добавить' ? false : true}
				>
					<Text className='text-2xl text-[#fff] '>{buttonText}</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	)
}
