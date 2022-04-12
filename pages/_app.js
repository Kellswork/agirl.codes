import { createGlobalStyle, ThemeProvider } from 'styled-components'
import './_app.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --tw-bg-opacity: 1;
    background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
  }
`

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJ5QKRS"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
      </GlobalStyle>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
