import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCard/BlogCard';
import BlogContainer from './BlogCard/BlogContainer';
import { Route, Routes } from 'react-router-dom';
import BlogPost from './BlogPost/BlogPost';
import BlogComments from './BlogComments/BlogComments';
import MostLiked from './navbar/MostLiked';
import MostCommented from './navbar/MostCommented';
import Header from './navbar/Header';

function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path="/" element={<BlogContainer/>}></Route>
    <Route path='/post' element={<BlogPost/>}></Route>
    <Route path="/comments" element={<BlogComments/>} />
    <Route path="/most-liked" element={<MostLiked/>}></Route>
    <Route path='/most-commented' element={<MostCommented/>}></Route>
   </Routes>
   </>
  );
}

export default App;
