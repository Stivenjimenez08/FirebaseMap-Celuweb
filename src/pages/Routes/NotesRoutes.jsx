import { Navigate, Route, Routes } from "react-router-dom"
import { HomeMap, Profile } from "../index"


export const NotesRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={ <HomeMap /> } />

        <Route path="/profile" element={ <Profile /> } />
        
        <Route path="/*" element={ <Navigate to="/home" /> } />
    </Routes>
  )
}