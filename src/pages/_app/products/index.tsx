import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Ola</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis enim vel, sapiente id aut veniam? Vero, commodi. Fugiat, assumenda harum hic a quisquam, modi autem, cum commodi amet adipisci ut?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis enim vel, sapiente id aut veniam? Vero, commodi. Fugiat, assumenda harum hic a quisquam, modi autem, cum commodi amet adipisci ut?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis enim vel, sapiente id aut veniam? Vero, commodi. Fugiat, assumenda harum hic a quisquam, modi autem, cum commodi amet adipisci ut?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis enim vel, sapiente id aut veniam? Vero, commodi. Fugiat, assumenda harum hic a quisquam, modi autem, cum commodi amet adipisci ut?</p>
    </div>
  )
}
