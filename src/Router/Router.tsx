import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/history/History'
import { History } from '../pages/home/Home'
import { DefaultLayout } from '../layouts/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
