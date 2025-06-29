import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"
import { Provider } from "react-redux"
import appStore from "./utils/Store"

function App() {
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/" >
      <Routes>
        <Route path="/" element={<Body/>}>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
