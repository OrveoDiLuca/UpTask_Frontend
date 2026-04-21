import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <>
      <h1>Hola desde AppLayout</h1>
      <Outlet/>
    </>
  )
}
