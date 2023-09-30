import React, {useState, useEffect} from 'react'
import Nav from '../preLogin/nav/nav'
import Main from '../preLogin/main/main'


export default function Home({goToHomeFunction}) {
  const [openLogin, setOpenLogin] = useState(false);

  function goToHome(password) {
    goToHomeFunction(password);
  }
 
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }} >
        <Nav setOpenLogin={setOpenLogin} />
        <Main openLogin = { openLogin} goToHome={goToHome} />
    </div>
  )
}
