import './App.css'
import NotFound from './components/Home/NotFound';
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Layout>
      <Router>
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
        </Router>
    </Layout>
    </>
  )
}

export default App
