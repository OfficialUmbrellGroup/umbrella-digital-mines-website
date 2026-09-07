import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Operate from './pages/Operate'
import Hosting from './pages/Hosting'
import Repairs from './pages/Repairs'
import Miners from './pages/Miners'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/operate" element={<Operate />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/miners" element={<Miners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
