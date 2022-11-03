
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Grid } from '@chakra-ui/react';

function Gitimage() {
  const [state, setState] = useState([]);
  let url = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    axios.get(url).then((res) => {
      setState(res.data.results);
    }, [])
  });




  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap={8}>
        {state.map(items => {
          return (
            <div >
              <img src={items.image} alt=""></img>
            </div>
          )
        })}
      </Grid>
    </>
  )
}

export default Gitimage