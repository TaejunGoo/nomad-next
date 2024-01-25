import { API_URL } from '../app/(home)/page'

async function getVideos(id:string){
	console.log(`fetching videos : ${Date.now()}`)
	await new Promise((resolve) => setTimeout(resolve, 3000))
	const res = await fetch(`${API_URL}/${id}/videos`)
	const json = res.json()
	return json
}

export default async function MovieVideos({id}: {id: string}) {
	const videos = await getVideos(id)
	return <h6>{JSON.stringify(videos)}</h6>
}
