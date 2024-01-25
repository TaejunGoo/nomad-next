import { API_URL } from '../app/(home)/page'

async function getMovie(id:string) {
	console.log(`fetching movie : ${Date.now()}`)
	await new Promise((resolve) => setTimeout(resolve, 1000))
	const res = await fetch(`${API_URL}/${id}`)
	const json = res.json()
	return json
}

export default async function MovieInfo({id}: {id: string}) {
	const movie = await getMovie(id)
	return <h6>{JSON.stringify(movie.title)}</h6>
}
