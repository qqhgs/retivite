import { Heading, Image, Switch, VStack, Text, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import './App.css'

const App: React.FC = () => {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    const mode = localStorage.getItem('theme')
    mode !== 'dark' ? setTheme(false) : setTheme(true)
  })

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    if (theme) {
      localStorage.setItem('theme', 'light')
      setTheme(false)
    } else {
      localStorage.setItem('theme', 'dark')
      setTheme(true)
    }
  }

  return (
    <Box>
      <VStack h='100vh' justifyContent='center'>
				<Image className='logo' boxSize='80px' src='/logo.svg' alt='react'/>
        <Heading as='h1'>Good luck, have fun!</Heading>
        <Text>[ "React", "TypeScript", "Vite", "Chakra UI" ]</Text>
				<Switch size='lg' onChange={handleTheme} isChecked={theme} />
      </VStack>
    </Box>
  )
}
export default App
