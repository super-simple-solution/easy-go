import Router from 'next/router'
export default function Home() {
  return (
    <>
      <h1>First Post</h1>
      <h2 onClick={()=>Router.push('/')}>
          <a>Back to home</a>
      </h2>
    </>
  )
}
