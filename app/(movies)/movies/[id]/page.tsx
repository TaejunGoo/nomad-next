import { Suspense } from 'react'
import MovieInfo from '../../../../components/movie-info'
import MovieVideos from '../../../../components/movie-videos'

export default async function Page({params: {id}} : {params : {id : string}}) {
	return <div>
		<Suspense fallback={<h1>Loading Movie info</h1>}>
			<MovieInfo id={id} />
		</Suspense>
		<Suspense fallback={<h1>Loading Movie videos</h1>}>
			<MovieVideos id={id} />
		</Suspense>
	</div>
}
