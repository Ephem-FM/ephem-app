import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Form, Label, TextField, FieldError, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.createVibe())
    }
  }, [isAuthenticated])

  const onSubmit = async (data) => {
    const phone = data.password
    const response = await signUp({ ...data, phone })
    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error('alias or phone taken, have you been here before?')
    } else {
      // user is signed in automatically
      toast.success('Vibe: Created')
    }
  }

  return (
    <>
      <MetaTags title="NEW VIBE" />
      <div className="flex flex-col items-center mt-[20%] grow">
        <Toaster toastOptions={{ className: 'caption-text', duration: 6000 }} />
        <Form onSubmit={onSubmit} className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-2">
            <Label name="username" className="caption-text text-yellow">
              Alias
            </Label>
            <TextField
              name="username"
              className="bg-transparent border-b-2 border-yellow outline-none font-main caption-text text-yellow"
              validation={{
                required: {
                  value: true,
                  message: 'alias required',
                },
              }}
            />

            <FieldError
              name="username"
              className="caption-text text-red text-xs"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label name="password" className="text-yellow caption-text">
              Phone
            </Label>
            <TextField
              name="password"
              className="bg-transparent border-b-2 border-yellow outline-none font-main caption-text text-yellow"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'required',
                },
              }}
            />
            <Link
              to={routes.forgotPassword()}
              className="caption-text text-red text-xs text-right"
            >
              can't vibe?
            </Link>
            <FieldError
              name="password"
              className="caption-text text-red text-xs"
            />
          </div>

          <Submit className="btn-yellow caption-text mx-auto">
            beam me up
          </Submit>
        </Form>

        <div className="caption-text text-grey text-xs text-center mt-4">
          <Link to={routes.login()}>been here?</Link>
        </div>
      </div>
    </>
  )
}

export default SignupPage
