import { extendTheme, ThemeConfig } from "@chakra-ui/react"

import components from './components'
import styles from './styles'
import colors from './colors'
import fonts from './fonts'
import sizes from './sizes'

const config: ThemeConfig = {

    initialColorMode: 'light',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    config,
    colors,
    fonts,
    styles,
    components,
    sizes,
})