import axios from 'axios';
import React from 'react';
import './App.css';
import Pages from './Components/Pages';
import Pagination from './Components/Pagination';


function App() {

  const [data, setData] = React.useState([])

  const [aktuellPage, setAktuellPage] = React.useState(1)
  const [totalPages] = React.useState(10)


  // fetch Posts data
  React.useEffect(() => {
    const fetchPosts = async () => {
      const respons = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(respons.data)
    }
    fetchPosts()

  }, [])

  // aktuell posts haben 
  const lastPage = totalPages * aktuellPage
  const firstPage = lastPage - totalPages
  const aktuellPost = data.slice(firstPage, lastPage)

  // funktion Page zu tauschen 
  const handlePagination = (numbers) => {
    setAktuellPage(numbers)
  }

  return (
    <div className="App">

      <h1>All Posts</h1>
      <Pages aktuellPost={aktuellPost} />


      <Pagination
        data={data.length}
        totalPages={totalPages}
        handlePagination={handlePagination}
      />

    </div>
  );
}

export default App;
