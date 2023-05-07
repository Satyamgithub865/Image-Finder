import { useState, useEffect } from 'react';
import DisplayImage from './components/DisplayImage';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { getImages } from './services/api';
import SnackBar from './components/SnackBar';

function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(9);
  const [data, setData] = useState([]);
  const [snackopen, setSnackopen] = useState(false);

  useEffect(() => {
    if (count < 3 || count > 200) {
        setSnackopen(true);
        return;
    }
    setSnackopen(false);

    const getData = async () => {
        const res = await getImages(text, count);
        setData(res.data.hits);
    }
    getData();
}, [text, count])

  return (
    <div>
      <NavBar />
      <SearchBar setText={setText} setCount={setCount} />
      <DisplayImage data={data} />
      <SnackBar snackopen={snackopen} setSnackopen={setSnackopen} />
    </div>
  );
}

export default App;
