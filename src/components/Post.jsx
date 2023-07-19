import React from 'react'
import { useNavigate, Navigate, Route, Routes } from 'react-router-dom'

function Post() {
  // const params = useParams()
  const status = 200
  const navigate = useNavigate()

  function handleClick() {
    navigate("/about")
  }

  if (status == 404) {
    return <Navigate to={"/notfound"} />
  }


  return (
    <>
      <h2>This is post page</h2>

      <button onClick={handleClick}>Click Me</button>
      <Routes>
        <Route path='/show' element={<p>This is paragraph</p>} />
      </Routes >
    </>
  )
}

export default Post
