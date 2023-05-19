import { createStitches } from "@stitches/react"; 

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme

} = createStitches({
    theme: {
        colors: {
            primaryPink: '#FF95B9',
            secunderyPink: '#F84761',
            white: '#fff',

            purple: '#FF95B9',
            blue: '#01D4D8',
            green: '#536F70',
            yellow: '#E0B02E',
           
        }, 
        fontSizes: {
            md: '1.125rem', 
            lg: '1.125rem',
            xl: '1.5rem',
            '2xl':'2rem'
        }
    }
})