import styles from './styles.module.css'

type Props = {
	handleDarkMode: React.FormEventHandler
	darkMode: boolean
}

const Switch: React.FC<Props> = ({handleDarkMode, darkMode}: Props) => {

  return (
    <label className={styles.switch}>
      <input onChange={handleDarkMode} type='checkbox' checked={darkMode}/>
      <span className={styles.slider}></span>
    </label>
  )
}
export default Switch
