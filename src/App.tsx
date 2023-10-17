import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [DarkThemeOn, setDarkThemeOn] = useState(false)

  function changeTheme() {
    setDarkThemeOn(!DarkThemeOn)
  }

  return (
    <ThemeProvider theme={DarkThemeOn ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <Sobre />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
