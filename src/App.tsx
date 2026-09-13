
import './App.css'
import { useState, Suspense } from 'react'
import Nav from './components/nav.tsx'
import Banner from './components/Banner.tsx'
import MainLayout from './components/MainLayout.tsx'
import TechList from './components/TechList.tsx'
import Footer from './components/Footer.tsx'
import type { ItechList } from './components/Types/techListType.ts'

const techListFetch = async (): Promise<ItechList> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  
  const [techListPromise] = useState(() => techListFetch());

  return (
    <>
      <Nav />
      <Banner />
      <MainLayout />
      <Suspense fallback={<h2>Loading.......</h2>}>
        <TechList
          techListPromise={techListPromise}
        />
      </Suspense>
      <Footer />

    </>
  )
}

export default App
