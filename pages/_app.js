import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { BlockProvider } from '../context/BlockContext'
import { ModalProvider } from 'react-simple-hook-modal'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <BlockProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </BlockProvider>
    </MoralisProvider>
  )
}

export default MyApp
