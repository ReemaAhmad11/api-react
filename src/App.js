import './App.css';
import Gitimage from './componants/Gitimage';
import Post from './componants/Post';
import {Routes , Route} from 'react-router-dom';




function App() {
  return (
    <>

      <Post></Post>
      <Gitimage></Gitimage>

    <Routes>
      <Route path ='/Gitimge' element={<Gitimage/>}> </Route>
    </Routes> 
  
    </>
  );
}

export default App;
