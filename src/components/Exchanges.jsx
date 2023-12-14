import { Container, HStack, VStack, background, Image, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '..'
import Loader from './Loader'
import ErroComponent from './ErroComponent'

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading]  = useState(true);
  const [error, setError] = useState(false);

  useEffect (()=>{
    const fetchExchanges =  async () =>{
    try {
      
      const {data} = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
    } catch (error) {
      
      setError(true);
      setLoading(false);

    }

    };

    fetchExchanges();
  },[])

  if(error) return <ErroComponent message={"Error while fetching"}/>



  return <Container maxW={"container.xl"}>

    {loading? <Loader/> : <>
    
    <HStack wrap={"wrap"}>
      {
        exchanges.map((i) =>(
          <ExchangeCard key= {i.id} 
          name={i.name} 
          img={i.image} 
          rank={i.trust_score_rank} 
          url={i.url}   />
          ))
      }
    </HStack>
    </>}
  </Container>;
}

export default Exchanges



const ExchangeCard = ({name, img,rank,  url}) =>(
  <a href={url} target={"blank"} >
<VStack w={52} shadow={"lg"} padding={8} transition={"all 0.3s"} m={4}
css={{
  "&:hover":{
    transform: "scale(1.1)"
  }
}}
>

<Image src={img} 
w={"10"} 
h={"10"} 
objectFit={"contain"}
alt={"Exchanges"}/>

<Heading size={"md"} noOfLines={1}>{rank}</Heading>
<Text noOfLines={1}>{name}</Text>



</VStack>

  </a>
)
