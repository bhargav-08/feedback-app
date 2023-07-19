import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './components/context/FeedbackContext'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import FeedBackReview from './components/FeedBackReview'
import About from './components/pages/About'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'

function App() {
  return (
    <>
      <FeedbackProvider>
        <div className='container'>
          <Header />
          <Router>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <>
                    <FeedBackReview />
                    <FeedBackStats />
                    <FeedBackList />
                    <AboutIconLink />
                  </>
                }
              />
              {/* <div className="container">
                  <FeedBackReview addFeedback={} />
                  <FeedBackStats
                    feedback={feedback}
                  />
                  <FeedBackList
                    feedback={feedback}
                    handleDelete={handleDelete}
                  />
                </div> */}
              <Route
                path='/about'
                element={<About />}
              />
              <Route
                path='/post/*'
                element={<Post />}
              />
            </Routes>
          </Router>
        </div>
      </FeedbackProvider>
    </>
  )
}

export default App
