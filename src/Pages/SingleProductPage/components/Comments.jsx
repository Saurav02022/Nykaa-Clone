import { Box,Button,Heading,Image,Text } from "@chakra-ui/react"
import { useState } from "react";

export const Comments = ({name,rating,title,body,screen}) => {
    const [like,setLike] = useState(false);

    const line = <Box b='rgb(94 99 104 / 88%)' w='100%' h='1px'></Box>

    return <Box  display={screen=='sm'?"grid" : "flex"} p='24px 16px 16px' boxShadow=" rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;" m='auto' >
        <Box display="flex" p='0px 0px 16px' >
            <Image src="https://images-static.nykaa.com/prod-review/default_profile_image.png" alt="Image" boxSize="48px" />
            <Box ml='10px' w='148px'>
                <Heading as='h1' fontSize='16px'>{name}</Heading>
                <Text>Verified Buyers</Text>
            </Box>
        </Box>
        <Box w={screen=='lg'?'610px':(screen==='md'?'500px':'220px')} justifySelf='right'>
            <Box bg='rgb(0, 137, 69)' p='8px' borderRadius='5px' w='60px'>
                <Heading color='white' as='h1' fontSize='16px'>{rating}</Heading>
            </Box>
            <Heading mt='20px' as='h4' fontSize='16px'>{title}</Heading>
            <Text fontSize='16px'>{body}</Text>
            <Button p='20px 10px' onClick={()=>{
                        setLike(pre=>!pre)
                      }}  mt='20px'  color='#fc2779' fontSize='18px'>
                <Image
                    boxSize='30px'
                    objectFit='cover'
                    src={like? "https://i.pinimg.com/564x/5c/f2/16/5cf2167c602da0e88a57a83ee1f2067a.jpg" : "https://i.pinimg.com/736x/19/3a/10/193a10dc517a5434d011965a28da2f86.jpg"}
                    alt='Dan Abramov'
                    mr='10px'
                />
            Helpful</Button>
        </Box>
    </Box>
}

// https://i.pinimg.com/736x/19/3a/10/193a10dc517a5434d011965a28da2f86.jpg
// https://i.pinimg.com/564x/5c/f2/16/5cf2167c602da0e88a57a83ee1f2067a.jpg