import { useEffect, useState } from 'react'
import { Switch } from '~/components/button'
import styles from './styles.module.css'

type Props = {
  title: string
}

const Home: React.FC<Props> = ({ title }: Props) => {
	const [darkMode, setDarkMode] = useState(false)

	useEffect(() => {
		const mode = localStorage.getItem("dark-mode")
		mode !== 'dark' ? setDarkMode(false) : setDarkMode(true)
	})

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem('dark-mode', 'light')
			setDarkMode(false)
    } else {
      localStorage.setItem('dark-mode', 'dark')
			setDarkMode(true)
    }
  }

  return (
    <div className={styles.container}>
      <Switch handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <h1>{title}</h1>
      <p>[ "React", "TypeScript", "Vite" ]</p>
    </div>
  )
}

export default Home
