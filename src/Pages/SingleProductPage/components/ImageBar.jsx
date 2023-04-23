import './styles.css'
import { Box,Image } from "@chakra-ui/react";

const ImageArr=[
    "https://images-static.nykaa.com/uploads/ff03841c-6806-4ca8-bced-0730b620436b.jpg?tr=w-400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/3c28f575-696a-480d-b00e-b4ac7bcba71a.jpg?tr=w-240,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/9d94fa15-f514-4e73-a224-832c3d485b4c.jpg?tr=w-400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/b348b0f0-998f-4713-8373-00f996d959a8.jpg?tr=w-400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/a0dc18c9-4445-482a-a617-2d82597759a7.jpg?tr=w-240,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/061e6b4f-52ff-485b-89a3-49b6ce77b188.jpg?tr=w-400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/895b00eb-22cd-4dcc-b9e7-0301ee93325f.jpg?tr=w-400,cm-pad_resize"
]

export const ImageBar = ({size}) => {
    return <Box display='inline-grid' gap='5px' overflow='hidden'>
        {
            ImageArr.map((el,i)=>{
                return <Box className="adImage" key={i} p=' 10px 25px'>
                     <Image
                        borderRadius='10px' 
                        boxSize={size}
                        width = '100%'
                        height='100%'
                        src={el}
                        alt='AD'
                    />
                </Box>
            })
        }
    </Box>
}