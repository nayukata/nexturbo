import Head from 'next/head'
import type { FC, PropsWithChildren } from 'react'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <Head>
        <title>Admin</title>
      </Head>
      <body style={{ margin: 0, fontSize: 14, minHeight: '100vh' }}>{children}</body>
    </html>
  )
}

export default RootLayout
