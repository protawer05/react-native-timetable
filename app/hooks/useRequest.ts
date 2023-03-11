const useRequest = () => {
	async function getHomework() {
		const data = await fetch(
			'https://nazuna-backend-dodisrp1o-protawer05.vercel.app/api/homework'
		)
		return await data.json()
	}

	return getHomework
}

export default useRequest
