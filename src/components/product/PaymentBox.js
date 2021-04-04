import React, {useState} from "react";
import {Box, HStack, NumberInput, NumberInputField, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper, Button, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useToast} from "@chakra-ui/react";
import {WarningIcon, UnlockIcon, PhoneIcon} from "@chakra-ui/icons";
import {Link as Linker} from "react-router-dom";
import PaymentFormDetails from "./PaymentFormDetails";
import {history} from "../../index";

const PaystackPop = window.PaystackPop;

const PaymentBox = ({product}) => {
    const toast = useToast();
    const dateObj = new Date();
    const deliveryDate = dateObj.setDate(dateObj.getDate() + 4);
    const [quantity, setQuantity] = useState(1);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const savedItems = JSON.parse(localStorage.getItem("skp_ci"));
    function payWithPayStack(email, number){
        const documentState = document.readyState;
        if(documentState === "complete"){
            var handler = PaystackPop.setup({
                key: process.env.REACT_APP_PAYSTACK_KEY,
                email: email,
                amount: (product.price * quantity + product.deliveryPrice) * 100,
                currency: "NGN",
                metadata: {
                    custom_fields: [
                        {
                            display_name: "Mobile Number",
                            variable_name: "mobile_number",
                            value: number
                        }
                    ]
                },
                callback: function(response){
                  history.push(`/payment-success/${response.reference}/${email}`); 
                },
                onClose: function(){
                   onClose();
                   toast({
                       title: "Payment Failed",
                       description: "Your payment failed because you closed the window!, Please try again",
                       status: "error",
                       isClosable: true
                   })
                }
            });
            handler.openIframe();
        }
    }
    return (
        <Box className="carousel-container" p="6" border="1px solid #DADBDD" borderRadius="10px">
            <HStack>
                <Box
                    fontWeight="normal"
                    as="p"
                    lineHeight="tight"
                    // isTruncated
                >
                    Item Price:
                </Box>
                <Box
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    // isTruncated
                >
                    ₦{product.price} <Box as="span" color="gray.600" fontSize="sm">
                    / unit
                </Box>
                </Box>

               
            </HStack>
            <HStack mt="2" alignItems="flex-start">
                <Box
                    fontWeight="normal"
                    as="p"
                    lineHeight="tight"
                    // isTruncated
                >
                    Delivery:
                </Box>
                <Box
                    fontWeight="semibold"
                    as="h4"
                    fontSize="sm"
                    lineHeight="tight"
                    // isTruncated
                >
                    {product.deliveryPrice > 0 ? `₦${product.deliveryPrice}` : "FREE" } <Box as="span" color="gray.600" fontSize="sm">
                    Standard Delivery (UPS)
                    <br />
                    Item location:
                    Lekki, Lagos, Nigeria
                    <br />
                    Posts to:
                    Anywhere in Lagos
                </Box>
                </Box>
            </HStack>
            <Box mt="2">
               <small> <WarningIcon color="#1196AB" /> Sales taxes may apply at checkout </small>
            </Box>
            <HStack mt="2" alignItems="flex-start">
                <Box
                    fontWeight="normal"
                    as="p"
                    lineHeight="tight"
                    // isTruncated
                >
                    Arrives:
                </Box>
                <Box
                    fontWeight="semibold"
                    as="h4"
                    fontSize="sm"
                    lineHeight="tight"
                    // isTruncated
                >
                    {new Date(deliveryDate).toUTCString()}
                </Box>
            </HStack>
            <Box mt="2" fontWeight="semibold" color={product.stock >= 1 ? "#1DBF73" : "red"}>{product.stock >= 1 ? "In Stock" : "Out of stock"}</Box>
            <HStack mt="2" alignItems="flex-start">
                <Box
                    fontWeight="normal"
                    as="p"
                    lineHeight="tight"
                    // isTruncated
                >
                   Quantity: 
                </Box>
                <Box maxW="80px">
                <NumberInput value={quantity} onChange={e => setQuantity(e)} keepWithinRange clampValueOnBlur defaultValue={1} min={1} max={product.stock}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                </Box>
            </HStack>
            <HStack mt="2">
                <Box
                    fontWeight="normal"
                    as="p"
                    lineHeight="tight"
                    // isTruncated
                >
                    Total:
                </Box>
                <Box
                    fontWeight="semibold"
                    as="h4"
                    fontSize="1.4em"
                    lineHeight="tight"
                    // isTruncated
                    color="green.600"
                >
                    ₦{(product.price * quantity + product.deliveryPrice).toFixed(2)}
                </Box>
            </HStack>
            <Box mt="1em">
            <Button disabled={product.stock < 1} bg="#1DBF73" color="#fff" w="100%" _hover={{bg: "green.500", color: "#fff"}} onClick={onOpen}>Buy now</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Confirm your details and pay</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <PaymentFormDetails onClose={onClose} payWithPaystack={payWithPayStack} />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            <Button mt="2" w="100%" onClick={() => {
                const itemId = savedItems.find((x) => x === product.id);
                console.log(itemId);
                if(!itemId){
                    localStorage.setItem("skp_ci", JSON.stringify([...savedItems, product.id]));
                    toast({
                        title: "Your item has been saved",
                        status: "success",
                        isClosable: true
                    });
                } else {
                    toast({
                        title: "You have already saved this item",
                        status: "warning",
                        isClosable: true
                    })
                }
            }}>Save for later</Button>
            </Box>
            <HStack mt="2" color="gray.600">
                <small><UnlockIcon /> Secure Transaction with <Link color="#1DBF73" href="https://paystack.com/" rel="noreferrer noopener" target="_blank">PayStack</Link></small>
            </HStack>
            <HStack mt="2">
                <Box
                    fontWeight="normal"
                    as="p"
                    lineHeight="tight"
                    // isTruncated
                >
                   Ships from: 
                </Box>
                <Box
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    // isTruncated
                >
                    SocketPay
                </Box>
            </HStack>
            <HStack mt="2">
                <Box
                    fontWeight="normal"
                    as="p"
                    lineHeight="tight"
                    // isTruncated
                >
                   Delivered By: 
                </Box>
                <Box
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    // isTruncated
                >
                    UPS
                </Box>
            </HStack>
            <Linker to="/contact">
            <Box mt="2" fontSize="sm" color="#1196AB">
                <PhoneIcon /> contact socketpay
            </Box>
            </Linker>
        </Box>
    )
}

export default PaymentBox;