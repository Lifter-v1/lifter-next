import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"


export default function Home() {
  return (
    <Wrapper>
    <Title>Lifter</Title>
    <Subtitle>Login to access your account</Subtitle>
    <SignInButton onClick={() => signInWithPopup(auth, provider)}>
            Sign In with Google
    </SignInButton>
    </Wrapper>
  )
}

const Wrapper = tw.div`

`
