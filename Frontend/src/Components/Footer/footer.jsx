import { Box, Button, Heading, Input, SimpleGrid, Image, Text } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const FootArr = [
    {
        head : "Nykaa",
        arr : ["Who are we?","Careers","Authenticity","Press","Testimonials","Nykaa CSR","Responsible Disclosure","Investor Relations"]
    },
    {
        head :  "Help" ,
        arr :  [
            "Contact Us","Frequently asked questions","Store Locator","Cancellation & Return","Shipping & Delivery","Sell on Nykaa"
        ],
    },
    {
        head : "Inspire Me",
        arr : [
            "Beauty Book","Nykaa TV","Nykaa Network","Buying Guides"
        ]
    },
    {
        head : "Quick Links",
        arr :  [
            "Offer Zone","New Launches","Nykaa Man","Nykaa Fashion","Nykaa Pro"
        ]
    },
    {
        head : "Top Categories",
        arr :  [
            "Makeup","Skin","Hair","Bath & Body","Appliances","Mom and Baby","Wellness","Fragrance","Natural","Luxe"
        ]
    }
]
const FootMid = [
    {
        img:"https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg",
        head : "Free Shipping",
        para : "On Orders Above ₹299"
    },
    {
        img:"https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg",
        head : "Easy Returns",
        para : "15-Day Return Policy "
    },
    {
        img:"https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg",
        head : "100% Authentic",
        para : "Products Sourced Directly"
    },
    {
        img:"https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg",
        head : "1900+ Brands",
        para : "1.2 Lakh+ Products"
    },
]

const Footer = () =>{
    const [email,setEmail] = useState('');
    const [screen,setScreen] = useState('');

    const screenSizefn = () =>{
        const screenSize = window.outerWidth;
        if(screenSize >= 1440){
            setScreen("lg")
        }else if(screenSize >= 768){
            setScreen("md")
        } else {
            setScreen("sm")
        }
    }

    useEffect(()=>{
        screenSizefn();
    },[])

    window.addEventListener('resize',()=>{
        screenSizefn();
    })

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const addEmailfn = () => {
        setEmail('');
    }

    const emailDiv = <SimpleGrid gap={"8px"} padding='30px' >
                        <Heading as='h2' size='14px' ><EmailIcon /> Get special discount on your inbox</Heading>
                        <SimpleGrid gap='8px' display={"flex"}>
                            <Input border='0px' borderBottom="1px solid" borderRadius="0px" value={email} onChange={handleChange} color='white' placeholder='Your Email' _placeholder={{ color: 'white' }}  w={screen ? "150px" : '200px'} type='email' />
                            <Button onClick={addEmailfn} w='100px' variant='outline' _hover={{
                                color:'black',
                                backgroundColor : 'white'
                            }}>Send</Button>
                        </SimpleGrid>
                    </SimpleGrid>

    return <SimpleGrid color='white'>
        <SimpleGrid bg='#3f414d' style={{
            display : 'flex',
            justifyContent : 'center',
            gap : '40px',
            padding : '30px'
        }} >
            { 
                (screen==='lg') ? emailDiv : null
            }
            <SimpleGrid gap={"8px"} display='flex'>
                <PhoneIcon />
                <SimpleGrid gap="8px">
                    <Heading as='h2' size='14px' > experience the nykaa mobile app</Heading>
                    <Image m='auto' borderRadius={"10px"} w='150px' src='https://i.pinimg.com/564x/25/60/bb/2560bbc828e28e3bede2f9023458b89e.jpg' alt='GooglePlay' />
                    <Image m='auto' borderRadius={"10px"} bg='blue' w='150px' src='https://i.pinimg.com/564x/93/29/00/93290032b3ef8d8711b8bb97e80b1561.jpg' alt='AppStore' />
                </SimpleGrid>
            </SimpleGrid > 
            {
                (screen==='lg') ? 
                <SimpleGrid gap={"8px"} display='flex'>
                    <PhoneIcon />
                    <SimpleGrid>
                    <Heading as='h2' size='14px' > for any help, you may call us at <br/><span>   </span>1800-267-4444</Heading>              
                    <Heading as='h2' size='12px' >(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</Heading>
                    </SimpleGrid>
                </SimpleGrid> : null
            }
            
        </SimpleGrid>
        {
            (screen === 'lg') ? 
            <SimpleGrid bg="#8c8d94" style={{
                display : 'flex',
                justifyContent : 'center',
                padding : '30px'
            }} >
                {
                    FootArr.map((item,index)=>{
                        return <Box  key={index} width={"228px"}>                
                            <Heading as='h2' size='14px' >{item.head}</Heading>
                            {
                                item.arr.map((el,i)=>{
                                    return <h1 key={i}>{el}</h1>
                                })
                            }
                        </Box> 
                    })
                }
            </SimpleGrid> : null
        }
        <SimpleGrid style={{
            display : 'flex',
            justifyContent : 'center',
            gap : (screen==='sm')?"10px":"40px",
            textAlign : 'center',
            color : 'black',
            padding : '20px'
        }} >
            {
                FootMid.map((el,i)=>{
                    if(i===3 && screen==='sm' ) return null;
                  return <SimpleGrid display={(screen==='sm')?"grid":"flex"} key={i} gap='20px'>
                        <Box margin={"auto"}>
                            <Image w='47px' src={el.img} alt='Image' />
                        </Box>
                        <SimpleGrid >
                            <Heading as='h2' size='14px' >{el.head}</Heading>
                            <Text size={"10px"}>{el.para}</Text>
                        </SimpleGrid>
                  </SimpleGrid>
                })
            }
        </SimpleGrid>
        <SimpleGrid bg='#3f414d' style={{
            display : 'flex',
            justifyContent : 'center',
            gap : '40px',
        }} >
            {
                (screen!=='lg') ? emailDiv : null
            }
        </SimpleGrid>
        <SimpleGrid bg="#fc2779"  padding='30px'  >
            {
                (screen === 'lg') ? 
                        <SimpleGrid style={{
                            display : 'inline-flex',
                            justifyContent : 'center',
                            gap : '40px'
                        }} >
                            <h1>Terms & Conditions</h1>
                            <h1>Terms & Conditions</h1>
                            <h1>Cancellation Policy</h1>
                            <h1>Privacy Policy</h1>
                        </SimpleGrid> 
                        : <Heading textAlign={"center"} as='h2' size='12px' >HELP CENTER</Heading>

            }
            <Text margin={"auto"} fontSize='md'>© 2023  Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</Text>
        </SimpleGrid>
    </SimpleGrid>
}

export default Footer