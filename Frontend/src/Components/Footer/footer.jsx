import { Box, Button, Heading, Input, SimpleGrid, Image, Text } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

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

export const Footer = () =>{
    return <SimpleGrid color='white'>
        <SimpleGrid bg='#3f414d' style={{
            display : 'flex',
            justifyContent : 'center',
            gap : '40px'
        }} >
            <Box>
                <Heading as='h2' size='14px' ><EmailIcon /> Get special discount on your inbox</Heading>
                <Input color='white' placeholder='Your Email' _placeholder={{ color: 'white' }} htmlSize={8} width='auto' type='email' />
                <br/>
                <Button  variant='outline' _hover={{
                    color:'black',
                    backgroundColor : 'white'
                }}>Send</Button>
            </Box>
            <Box>
                <Heading as='h2' size='14px' ><PhoneIcon />experience the nykaa mobile app</Heading>
                <Image w='100px' src='https://i.pinimg.com/564x/25/60/bb/2560bbc828e28e3bede2f9023458b89e.jpg' alt='GooglePlay' />
                <Image bg='blue' w='100px' src='https://i.pinimg.com/564x/93/29/00/93290032b3ef8d8711b8bb97e80b1561.jpg' alt='AppStore' />
            </Box> 
            <Box>
                <Heading as='h2' size='14px' ><PhoneIcon />for any help, you may call us at <br/> 1800-267-4444 </Heading>
                <Heading as='h2' size='12px' >(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</Heading>
            </Box>
        </SimpleGrid>
        <SimpleGrid bg="#8c8d94" style={{
            display : 'flex',
            justifyContent : 'center',
            gap : '40px'
        }} >
            {
                FootArr.map((item,index)=>{
                    return <div>                
                        <Heading as='h2' size='14px' >{item.head}</Heading>
                        {
                            item.arr.map((el,i)=>{
                                return <h1>{el}</h1>
                            })
                        }
                    </div> 
                })
            }
        </SimpleGrid>
        <SimpleGrid style={{
            display : 'flex',
            justifyContent : 'center',
            gap : '40px',
            color : 'black'
        }} >
            {
                FootMid.map((el,i)=>{
                  return <SimpleGrid display={"flex"}>
                        <Image w='100px' src={el.img} alt='Image' />
                        <SimpleGrid>
                            <Heading as='h2' size='14px' >{el.head}</Heading>
                            <h1>{el.para}</h1>
                        </SimpleGrid>
                  </SimpleGrid>
                })
            }
        </SimpleGrid>
        <SimpleGrid bg="#fc2779" >
            <SimpleGrid style={{
            display : 'flex',
            justifyContent : 'center',
            gap : '40px'
        }} >
                <h1>Terms & Conditions</h1>
                <h1>Terms & Conditions</h1>
                <h1>Cancellation Policy</h1>
                <h1>Privacy Policy</h1>
            </SimpleGrid>
            <Text margin={"auto"} fontSize='md'>© 2023  Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</Text>
            <h1 ></h1>
        </SimpleGrid>
    </SimpleGrid>
}