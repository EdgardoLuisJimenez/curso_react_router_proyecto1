import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { ProfilePage } from './pages/ProfilePage';
import { Menu } from './components/Menu';
import { BlogPost } from './components/BlogPost';
import { AuthProvider, AuthRoute, useAuth } from './auth/auth';
import { LoginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path='/' element={<HomePage />}></Route>

            <Route path='/blog' element={<BlogPage />}>
              <Route path=':slug' element={<BlogPost />}>
              </Route></Route>

            <Route path='/login' element={<LoginPage />}></Route>
            <Route
              path='/logout'
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>}>

            </Route>
            <Route
              path='/profile'
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }>

            </Route>

            <Route path='*' element={<p>Not found</p>}></Route>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export { App };
