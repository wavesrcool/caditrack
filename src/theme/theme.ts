import { createTheme, responsiveFontSizes } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    caditrack: {
      colors: {
        green: string
        lightgrey: string
        lapis: string
        charcoal: string
        white: string
      }
    }
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    caditrack?: {
      colors?: {
        green?: string
        lightgrey?: string
        lapis?: string
        charcoal?: string
        white?: string
      }
    }
  }
}

let theme = createTheme({
  caditrack: {
    colors: {
      green: `#03833C`,
      lightgrey: `#C8D3D5`,
      lapis: `#336699`,
      charcoal: `#2F4858`,
      white: `#FCFAFA`,
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
