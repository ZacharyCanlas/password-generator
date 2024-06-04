import { ThemeProvider, createTheme } from "@mui/material/styles"
import JetBrainsMonoBold from "./assets/fonts/JetBrainsMono-VariableFont_wght.ttf"
import PasswordGenerator from "./components/PasswordGenerator"
import { CssBaseline } from "@mui/material"
import SettingsContextProvider from "./provider/SettingsContextProvider"

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: "#18171F",
        paper: "#24232C",
      },
      text: {
        primary: "#E6E5EA",
        secondary: "#817D92",
      },
    },
    typography: {
      fontFamily: "JetBrainsMonoBold",
      h1: {
        fontSize: 32,
        [`@media (max-width:768px)`]: {
          fontSize: 24,
        },
      },
      h2: {
        fontSize: 24,
        [`@media (max-width:768px)`]: {
          fontSize: 18,
        },
      },
      h3: {
        fontSize: 18,
        [`@media (max-width:768px)`]: {
          fontSize: 16,
        },
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'JetBrainsMonoBold';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('JetBrainsMonoBold'), url(${JetBrainsMonoBold}) format('truetype');
          }
        `,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <SettingsContextProvider>
        <CssBaseline />
        <PasswordGenerator />
      </SettingsContextProvider>
    </ThemeProvider>
  )
}

export default App
