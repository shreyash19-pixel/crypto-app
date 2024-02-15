import { useState } from "react";
import Home from "./pages/Home";
import AppContext from "./utils/AppContext";

function App() {

  const [data,setData] = useState([])
  const [page,setPage] = useState(1)

  const shareData = {
    data,
    setData,
    page,
    setPage
  }

  return (
    <div style = {{width: "100%", height: "100%",backgroundImage : "linear-gradient(0deg,#0f051d 30%,#130749 70%)"}}>
      <AppContext.Provider value = {shareData}>
        <Home />
     </AppContext.Provider>
    </div>
  );
}

export default App;
