import Head from "next/head"

export default function Home({}) {
  return (
    <>
      <Head>
        <title>La app de gastos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>App de gastos</h1>
      </main>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}
