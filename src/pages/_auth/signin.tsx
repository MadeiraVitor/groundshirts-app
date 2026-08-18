import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../../components/LoginForm'

export const Route = createFileRoute('/_auth/signin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <LoginForm />
    </>
  )
}
