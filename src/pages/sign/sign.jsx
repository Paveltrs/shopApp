import React from 'react'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'

import './sign.scss'

const SignPage = () => (
    <div className="sign">
        <SignIn />
        <SignUp />
    </div>
)

export default SignPage;