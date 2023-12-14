import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '..'
import { Container, HStack, VStack, Image, Text, Heading } from '@chakra-ui/react'
import { wrap } from 'framer-motion'

const Coins = () => {
const [coins, setCoins] = useState([]);

  
useEffect(()=>{
  const fetchCoins = async () => {
    const {data} = await axios.get(`${server}/coins/markets?vs_currency=inr`);
    console.log(data);
    setCoins(data);
}
fetchCoins();

},[])





 
return <Container maxW={"container.xl"}>

  <HStack wrap={"wrap"}>

{
  coins.map((coin)=>(
 
   <CoinCard 
   key={coin.id}
   name={coin.id}
   price={coin.current_price}
   image={coin.image}
   />

   
  
  ))
 
}

</HStack>

</Container>;


}



export default Coins
  

const CoinCard = ({name, price, image, url}) =>(
 
  
  <VStack
  w={52} shadow={"lg"} padding={8} transition={"all 0.3s"} m={4}
  css={{
    "&:hover":{
      transform: "scale(1.1)"
    }
  }}
  >
    <Image src={image} 
w={"10"} 
h={"10"} 
objectFit={"contain"}
/>

<Heading size={"md"} noOfLines={1}>{`${price} INR`}</Heading>
<Text noOfLines={1}>{name}</Text>
  </VStack>
  
  

)






//   return <Container>
//     <HStack wrap={"wrap"}>
//       {
//       coins.map((coin)=>(
//         <CoinCard 
//         key={coin.id}
//         img={coin.image} 
//          price={coin.price}
//          url={coin.url} 
//         id={coin.id} /> 
        
       
        
//       ))
      
//     }
//     </HStack>
//   </Container>
    
 
      
// }

// export default Coins


// const CoinCard = (id, img, price, url) =>(

//   <a>
//   <VStack w={52} shadow={"lg"} padding={8} transition={"all 0.3s"} m={4}
//   css={{
//     "&:hover":{
//       transform: "scale(1.1)"
//     }
//   }}>
    
//     <Image src={img}/>

//     <Heading>{price}</Heading>
//     <Text>{id}</Text>

//   </VStack>

//   </a>
// )




// <HStack wrap={"wrap"}>
// <Image src={coin.image} w={20} />
// <Heading size={"md"}>{coin.id}</Heading>
// <Text>{`${coin.current_price} Rs`}</Text>
// </HStack>