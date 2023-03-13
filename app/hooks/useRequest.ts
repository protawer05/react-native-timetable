import axios from 'axios'
const useRequest = () => {
	async function getHomework() {
		const { data } = await axios.get(
			'https://nazuna-backend-dodisrp1o-protawer05.vercel.app/api/homework'
		)
		return await data
	}

	async function deleteHomework(id: number) {
		axios.delete(
			`https://nazuna-backend-dodisrp1o-protawer05.vercel.app/api/homework/${id}`
		)
	}
	async function addHomework(lessonTitle: string, homework: string) {
		const data = { lessonTitle, homework }
		axios.post(
			'https://nazuna-backend-dodisrp1o-protawer05.vercel.app/api/homework',
			data
		)
	}

	return { getHomework, deleteHomework, addHomework }
}

export default useRequest
