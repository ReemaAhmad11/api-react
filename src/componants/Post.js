import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Text } from '@chakra-ui/react'




function Post() {
  const [email, setEmail] = useState();
  const [passowrd, setPassowrd] = useState();
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefailt();
    navigate("/GetImage")
  }



  let url = "https://6362424d66f75177ea2a99c0.mockapi.io/toDo"
  const postApi = () => {
    axios.post(url, {
      email,
      passowrd
    }).then((res) => {
      console.log(res);
    })


  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Text position={'flex'} color={'gray.500'} fontSize='xl' w={400} mt={120} ml={666}> Log In Page </Text>
        <Input placeholder='Email' position={'flex'} w={400} mt={120} ml={475} onChange={e => { setEmail(e.target.value) }}></Input>
        <Input placeholder='Password' position={'flex'} ml={475} w={400} mt={35} onChange={e => { setPassowrd(e.target.value) }}></Input>
        <Button  position={'flex'} w={200} mt={45} mb={20} ml={575} onClick={postApi}>Log In</Button>
      </form>
    </>
  )
}

export default Post