import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600');
    
    body {
        width: 100%;
        height: 100vh;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
    }

    * {
        box-sizing: border-box;
    }

    p {
        margin: 0;
    }

    input, textarea {
        border: none;
        font-family: 'Montserrat', sans-serif;

        &:focus {
            outline: none;
        }
    }
`

interface Theme {
    name: string
    colors: {
        [key: string]: string
    }
}

export const theme: Theme = {
    name: 'Deafult',
    colors: {
        darkblue: '#21346A',
        lightgray: '#F1F1F6',
        darkgray: '#C9C9C9'
    }
}
