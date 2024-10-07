import { useRouter } from 'next/router'
import TrainingPage from '../components/TrainingPage'
import { slidesEn } from '../data/slides-en'
import { slidesSv } from '../data/slides-sv'

export default function Home() {
  const router = useRouter()
  const { lang } = router.query

  const slides = lang === 'sv' ? slidesSv : slidesEn

  return <TrainingPage slides={slides} />
}