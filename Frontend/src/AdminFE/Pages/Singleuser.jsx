import { Button, Td, Tr, Icon, useToast } from "@chakra-ui/react";
import { BiBlock } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Singleuser = (el) => {
  const [change, setChange] = useState(false);
  const toast = useToast();
  console.log(el);
  useEffect(() => {}, [change]);
  // const deleteuser=(id)=>{
  //   axios.delete(`https://fair-pear-salmon-suit.cyclic.app//users/delete/${id}`)
  //   .then((res)=>{
  //     setChange(!change)
  //     toast({
  //       title: 'User Deleted From System !',
  //       description: "User Deleted From System !",
  //       status: 'info',
  //       duration: 3000,
  //       isClosable: true,
  //     })
  //   })
  //   .then((err)=>console.log(err))
  // }
  // const blockUser = (id) => {
  //   axios.delete(`https://fair-pear-salmon-suit.cyclic.app//admins/${id}`)
  //   .then((res)=>{
  //     setChange(!change)
  //     toast({
  //       title: 'User Blocked From System !',
  //       description: "User Blocked From System !",
  //       status: 'warning',
  //       duration: 3000,
  //       isClosable: true,
  //     }) })
  //   .then((err)=>console.log(err))
  // }
  const handleDelete = (id) => {
    el.deleteuser(id);
  };
  const handleBlock = (id) => {
    el.blockUser(id);
  };
  console.log(change);
  return (
    <Tr>
      <Td>{el.index + 1}</Td>
      <Td>{el._id}</Td>
      <Td>{el.name}</Td>
      <Td>
        <Button bgColor={"#B2F5EA"}>
          <Icon as={BiBlock} w={6} h={6} onClick={() => handleBlock(el._id)} />
        </Button>
      </Td>
      <Td>
        <Button bgColor={"#B2F5EA"}>
          <Icon
            as={RiDeleteBin6Line}
            w={6}
            h={6}
            onClick={() => handleDelete(el._id)}
          />
        </Button>
      </Td>
    </Tr>
  );
};

export default Singleuser;
