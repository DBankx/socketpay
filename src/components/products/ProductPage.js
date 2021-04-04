import React, {useEffect} from "react";
import {Box, HStack, Divider, SimpleGrid, Center, Tag, TagLabel, TagCloseButton} from "@chakra-ui/react";
import data from "../../products.json";
import QueryActions from "./QueryActions";
import "../../assets/css/products.css";
import ProductItem from "./ProductItem";
import {useQueryParams, StringParam, NumberParam} from "use-query-params";

const ProductsPage = () => {
    const [queryParams, setParams] = useQueryParams({
        category: StringParam,
        ratings: NumberParam,
        condition: StringParam
    });


    let products = data.products;
    
    function queryProducts(products){
        
        if(queryParams.category){
            products = products.filter(x => x.category === queryParams.category)
        }

        if(queryParams.ratings){
            products = products.filter(x => x.ratings > queryParams.ratings)
        } 
        
        if(queryParams.condition){
            products = products.filter(x => x.condition === queryParams.condition)
        }
        
        return products;
    }
    
    let queriedProducts = queryProducts(products);
        
    return (
        <Box>
           <QueryActions />
           <Box mt="2em">
            <ul className="profile__skill__list">
                {Object.entries(queryParams).map(([queryParam, queryKey], index) => (
                    queryKey !== undefined && queryParam !== "pageSize" && queryParam !== "pageNumber" && <Tag
                        size="md"
                        key={index}
                        borderRadius="full"
                        variant="solid"
                        className="filter__tags"
                        mr="1em"
                    >
                        <TagLabel>{queryParam === "ratings" ? `Ratings > ${queryKey}`:  queryKey}</TagLabel>
                        <TagCloseButton onClick={() => setParams({...queryParams, [queryParam]: undefined})} />
                    </Tag>
                ))}
            </ul>
           </Box>
           <Box mt="2em">
               <HStack>
                   <small>{queriedProducts.length} Product(s) found</small>
               </HStack>
               <Divider />
               {queriedProducts.length > 0 ? <SimpleGrid mt="1em" templateColumns={{xl: "repeat(3, 0.8fr)", lg: "repeat(3, 0.8fr)", md: "repeat(2, 1fr)", sm: "1fr", base: "1fr"}} spacing="1em">
                   {queriedProducts.map((product) => (
                       <Box key={product.id}>
                          <ProductItem product={product} /> 
                       </Box>
                   ))}
               </SimpleGrid> : <Center mt="3em">
                   <Box>
                   <Center><Box as="h1" color="#000" fontSize="1.3em" fontWeight="semibold">OOPS!</Box></Center>
                      <Center><Box as="h1" color="gray.600" fontSize="md" fontWeight="semibold">No results were found for your query!, please search again</Box></Center>
                   </Box>
               </Center>}
           </Box>
        </Box>
    )
}

export default ProductsPage;