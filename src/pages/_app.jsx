import '../styles/globals.css'
import "@fontsource/bai-jamjuree";
import { Headers, MainLayout, Sidebar } from 'components/layouts';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (typeof window !== "undefined") {
    return (
      <div className="w-full min-h-screen bg-primary-400 flex gap-4">
        <Headers title="Administration" />
        <Sidebar />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    )
  } else {
    return <></>;
  }


}

export default MyApp
