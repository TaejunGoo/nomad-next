import { API_URL } from "../app/(home)/page"
import styles from '../styles/movie-videos.module.css'

async function getVideos(id: string) {
  console.log(`fetching videos : ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const res = await fetch(`${API_URL}/${id}/videos`)
  const json = res.json()
  return json
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id)
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allowFullScreen={true}
        />
      ))}
    </div>
  )
}
