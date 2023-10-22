import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { Menu } from './Menu';
import { BlogPost } from './BlogPost';

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/blog' element={<BlogPage />}></Route>
          <Route path='/blog/:slug' element={<BlogPost />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
          <Route path='*' element={<p>Not found</p>}></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export { App };
