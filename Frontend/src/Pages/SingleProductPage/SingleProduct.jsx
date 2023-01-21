import {SimpleGrid , Image, Box, Heading, Text, Button, Input } from '@chakra-ui/react';
import {useState,useEffect} from 'react';
import { Comments } from './components/Comments';
import { ImageBar } from './components/ImageBar';
import data from './components/skin.json'

const headStyle = {
  m:'36px 0px 24px',
  as:'h1',
  fontSize:'20px' 
}

const rating = 4.5;
const custImage = [
  "https://images-static.nykaa.com/prod-review/1673414644978_41873378-8ea0-4d2e-a914-2b595326e4e0_1.jpg?tr=w-145,h-145,cm-pad_resize",
  "https://images-static.nykaa.com/prod-review/1672054577960_1bfb7d65-f3ac-4a20-b898-fe2544ed90f7_1.jpg?tr=w-145,h-145,cm-pad_resize",
  "https://images-static.nykaa.com/prod-review/1673414644978_41873378-8ea0-4d2e-a914-2b595326e4e0_1.jpg?tr=w-145,h-145,cm-pad_resize",
  "https://images-static.nykaa.com/prod-review/1672054577960_1bfb7d65-f3ac-4a20-b898-fe2544ed90f7_1.jpg?tr=w-145,h-145,cm-pad_resize",
  "https://images-static.nykaa.com/prod-review/1673414644978_41873378-8ea0-4d2e-a914-2b595326e4e0_1.jpg?tr=w-145,h-145,cm-pad_resize",
  "https://images-static.nykaa.com/prod-review/1672054577960_1bfb7d65-f3ac-4a20-b898-fe2544ed90f7_1.jpg?tr=w-145,h-145,cm-pad_resize"
]
const comments = [
  {
    name : 'ravi',
    rating : '4.5',
    title : 'Love it' ,
    body : 'sfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd f'
  },
  {
    name : 'hari',
    rating : '4.5',
    title : 'Love it' ,
    body : 'sfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd f'
  },
  {
    name : 'hari',
    rating : '4.5',
    title : 'Love it' ,
    body : 'sfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd fsfsdfjdlsfkds;lfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdk fsdf;dskf sdkfdsk fskflkkfgsd f'
  },
  {
    name : 'hari',
    rating : '4.5',
    title : 'Love it' ,
    body : 'sfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd f'
  },
  {
    name : 'hari',
    rating : '4.5',
    title : 'Love it' ,
    body : 'sfsdfjdlsfkds;lfk;lsdk fsdf;dskf sdkfdsk fskflkkfgsd f'
  },
]

const line = <Box bg='rgb(0 0 0 / 45%)' w='100%' h='1px'></Box>
const shadow = "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"

const SingleProduct = () => {
  const [products,setProducts] = useState(data);
  const [like,setLike] = useState(false);
    const [screen, setScreen] = useState("");
console.log(products,typeof(Skinproducts))
    const screenSizefn = () => {
        const screenSize = window.outerWidth;
        if (screenSize >= 1440) {
          setScreen("lg");
        } else if (screenSize >= 768) {
          setScreen("md");
        } else {
          setScreen("sm");
        }
      };
    
      useEffect(() => {
        screenSizefn();
      }, []);
    
      window.addEventListener("resize", () => {
        screenSizefn();
      });

     const item = products[5];
    return <SimpleGrid  mt='30px' mb='30px'>
        {/* <SimpleGrid m='auto' border='1px solid red' > */}
            <SimpleGrid margin={"auto"}  display="inline-flex" >
                <SimpleGrid p='0px 16px' w='426px'  boxShadow={shadow} >
                    <Box display="flex" justifyContent="flex-end">
                      <Image m='15px' onClick={()=>{
                        setLike(pre=>!pre)
                      }} boxSize='38px' src={like ? 'https://i.pinimg.com/564x/e5/07/7b/e5077b410d7ba6558a019f8d37a615c6.jpg' : 'https://i.pinimg.com/564x/1f/ad/d0/1fadd08f10610c6178e319c7e707f9da.jpg'} alt='like' />
                    </Box>

                    <Image m='auto' w='320px'  src={item.imgsrc} alt='Image' />
                    <Box  margin='auto' fontSize='16px' p='10px 20px'  mt='10px' mb='20px' border='1px solid #3f414d' borderRadius='3px'  display='flex' w='134px'>
                        <Image m='0px 5px 0px 0px' boxSize='20px'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB7klEQVRIie3VzW9MYRTH8c/MRPcqUS1dqW5sJDZeZjTBCIn4B7qR2HpJxL9AQiJeFmIMFmy6E7FF24Vo2Ajxsm4UCx20wmZiLJ5nqITrzr0zIeKXnOS5c895vnfOc855+K+/VFXU8QIfoz3HJezsBXAU03iPMyijP1oZZ/EBU1jXLeg2NHADAwl+q3Az+lbyQkfjRnUUU/gXcQXzGMkDnsZ9LOsgpg8PMJkVWkULmzPElmPsjizgy3iUJTDqCWq/epl0bmXcyQG+LRRmx+DVmM0BnsWatOBjOLfkuZADXMCXuD6Po0ngN1gb13MYzgEejnsQ2vJ1kvNGvBXap47HOcBPcVForwY2JDkX8Ap7hdnbwtYM0EqM3Y59eCnFsZ3Gveg4hZn41WnVh4e4G/eYwak0gQPCrbNfGPgNoafTjMwSrvo+Mg9gESvTfvURfMImIW3zwgUwmBAzhFvRt4It+IxDaaFtTcRNqsI/n8SC0G5jWBFtTGiXBSG9I9gVYyc6hRIq+zqaOInlwuyt4ZmQwsW4rgmF1C+cZxPXdHa5/KACDguXfAMXsFtIeVE400Hsie/eRd+D8g2fbxrCCWEgtKI1o7Wf53A8+nZdJazH+BLgePyt1Avgz9QGZ1Ka3uyJ/hi408r7XWq7Usn/pr4C9zlsQRSjY1MAAAAASUVORK5CYII=' alt='image' />
                        Try It On
                    </Box>
                </SimpleGrid>            
                <Box>
                    <SimpleGrid display='inline-block' lineHeight='40px' w='713px' m='12px 0px' p='16px'  boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;">    
                    {/* display="inline-block" */}
                        <Heading as='h1' fontSize='22px' ><div>{item.title}</div></Heading>
                        <Text>{item.rating} ratings </Text>
                        <pre><Text fontSize='18px' >MRP:<span style={{fontSize:'20px',fontStyle:'bold'}}  >₹{item.price}</span>    <span style={{color: "#008945"}} >{item.discount}</span></Text></pre>
                        <Text fontSize="18px">inclusive of all taxes</Text>
                        <Box display='flex' p='0px 0px 40px' marginTop='100px' >
                            <button style={{
                                width : '222px',
                                margin : 'auto' ,
                                backgroundColor : '#fc2779',
                                color : 'white',
                                padding : '10px',
                                fontSize : '22px',
                            }} >Add to Bag</button> 
                            <Box m='0px 0px 0px 24px'>
                                <Text display='flex'><Image boxSize='20px' src='https://i.pinimg.com/564x/ed/09/b9/ed09b94a7b0a68292129677eebf9bd7e.jpg' alt='Image' /> Delivery Options</Text>
                                
                                <pre style={{display:'flex'}}><Input w='180px' placeholder="Enter pincode"/> <button style={{color:'#fc2779',padding:'0px 10px'}}>Check</button></pre>
                            </Box>   
                        </Box>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
        {/* </SimpleGrid> */}

        <Box  margin={"auto"}  display="inline-flex" >
          <SimpleGrid  w='858px' mt='30px' >
            {/* <Heading {...headStyle}>Product Description</Heading> */}
            <Image pl='20px' w='95%' src='https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-600,cm-pad_resize' alt='ad' />
          </SimpleGrid>
          <Box w='282px'></Box>
        </Box>

        <Box  margin={"auto"}  display="inline-flex" >
          <SimpleGrid  w='848px' display="inline-block" mr='20px'>
            <Heading {...headStyle}>Product Details</Heading>
            <SimpleGrid pt='20px' boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" } >
              <Box display="flex" gap='40px' >
                <Text ml='30px'>Ratings & reviews</Text>
                <Text>Product Q&A</Text>
              </Box>
              <Box p='32px 32px 24px 16px' display='flex'>
                <Box display='inline-block'  fontSize='36px' fontFamily='sans-serif' p='8px 12px' mr='8px' >
                  {rating}/5 
                </Box>
                <Box m='0px 24px' display={"grid"} gap='20px'>
                  <Text>Write a review and win 100 reward points !</Text>
                  <Button color='#fc2779' border='1px solid'>Write Review</Button>
                </Box>
              </Box>
              {line}
              <Heading as='h2' fontSize='16px' p='24px 16px 0px'>Photos From Customers</Heading>
              <Box display="flex" gap='20px' p='20px'  >
                {
                  custImage.map((el,i)=>{
                    return <Image
                    key={i}
                    boxSize='62px'
                    objectFit='cover'
                    src={el}
                    alt='Image'
                  />
                  })
                }
              </Box>
              {line}
              <Heading as='h2' fontSize='16px' p='24px 16px 0px'>Most Useful Review</Heading>
              {
                (comments.length > 0) ?
                comments.map((el,i)=>{
                  return <Comments key={i} {...el} />
                }) :
                <Text m='auto' margin='20px 20px' >comments are not available</Text>
              }
            </SimpleGrid>
          </SimpleGrid>
          <Box w='262px' ml='20px' overflow='hidden'>
            <ImageBar size={'282px'} />
          </Box>
        </Box>
    </SimpleGrid>
}

export default SingleProduct;

// btn"-text:"Add to Bag"
// discount:"13% Off"
// discountedprice:"409"
// img-href:"https://www.nykaa.com/plum-green-tea-mattifying-moisturizer/p/23997?productId=23997&pps=1"
// imgsrc:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/9/b9dd01b737534800065_01.jpg"
// price:"470"
// rating:11670
// spanned:"Enjoy Free Gift"
// title :Plum Green Tea Mattifying Moistur"