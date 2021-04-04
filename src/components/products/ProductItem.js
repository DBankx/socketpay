import React from "react";
import {Box, Image, Badge, HStack, Center} from "@chakra-ui/react";
import Rater from "../Rater";
import {Link} from "react-router-dom";
import {nFormatter} from "../../utilFunctions";

const ProductItem = ({product}) => {
    return (
        <Box h="100%" maxW="sm" _hover={{borderColor: "#1DBF73"}} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Center>
            <Image height="300" src={product.images[0]} alt={product.title} objectFit="cover" />
            </Center>
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        {product.condition}
                    </Badge>
                    <HStack
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        <HStack>
                        <Rater rating={product.ratings} boxSize={3} /> 
                        <p>{nFormatter(product.reviews)} review(s)</p>
                        </HStack>
                        <p>&bull;</p>
                        <p>{nFormatter(product.stock)} left</p>
                    </HStack>
                </Box>

                <Link to={`/product/${product.id}`}>
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    // isTruncated
                    _hover={{color: "#1DBF73"}}
                >
                    {product.title}
                </Box>
                </Link>

                <Box>
                    ₦{product.price}
                    <Box as="span" color="gray.600" fontSize="sm">
                        / unit
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductItem;