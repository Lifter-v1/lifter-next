import { useEffect } from 'react'
import tw from "tailwind-styled-components"


const Login = () => {
  return (
    <Wrapper>
    <Title>Lifter</Title>
    <SubTitle>Login to access your account</SubTitle>
    <SignInButton onClick={() => signInWithPopup(auth, provider)}>
            Sign In with Google
    </SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`

`

const Title = tw.div`

`

const SubTitle = tw.div`

`
const SignInButton = tw.div`

`
