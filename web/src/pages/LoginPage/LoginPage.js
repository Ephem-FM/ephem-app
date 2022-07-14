import { useRef } from 'react'
import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.createVibe())
    }
  }, [isAuthenticated])

  const aliasRef = useRef()
  useEffect(() => {
    aliasRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="EXISTING VIBE" />
      <div className="flex flex-col items-center mt-[20%] grow">
        <Toaster toastOptions={{ className: 'caption-text', duration: 6000 }} />
        <Form onSubmit={onSubmit} className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-2">
            <Label name="alias" className="caption-text text-yellow">
              Alias
            </Label>
            <TextField
              name="alias"
              className="bg-transparent border-b-2 border-yellow outline-none font-main caption-text text-yellow"
              ref={aliasRef}
              validation={{
                required: {
                  value: true,
                  message: 'alias required',
                },
              }}
            />

            <FieldError
              name="alias"
              className="caption-text text-xs text-red"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label name="phone" className="text-yellow caption-text">
              Phone
            </Label>
            <TextField
              name="phone"
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
              className="text-xs caption-text text-red"
            />
          </div>

          <Submit className="btn-yellow caption-text mx-auto">
            view my vibe
          </Submit>
        </Form>

        <div className="caption-text text-grey text-xs text-center mt-4">
          <Link to={routes.signup()}>New here?</Link>
        </div>
      </div>
    </>
  )
}

export default LoginPage
