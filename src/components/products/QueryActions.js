import React from "react";
import {Box, HStack, Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {NumberParam, StringParam, useQueryParams} from "use-query-params";

const QueryActions = () => {
    const [queryParams, setParams] = useQueryParams({
        category: StringParam,
        ratings: NumberParam,
        condition: StringParam
    }); 
    return (
        <Box>
            <HStack spacing="10px">
                <Box className="query__action">
                    <Menu isLazy={true} >
                        <MenuButton bg="#fff" _expanded={{bg: "#1DBF73 !important", color: "#fff"}} _hover={{bg: "#1DBF73 !important", color: "#fff"}} className="menu__btn__outlined" as={Button} rightIcon={<ChevronDownIcon />}>
                            Category
                        </MenuButton>
                        <MenuList  className="menu__list">
                          <MenuItem onClick={() => setParams({...queryParams, category: "tech"})}>Tech</MenuItem>
                            <MenuItem onClick={() => setParams({...queryParams, category: "games"})}>Games</MenuItem>
                            <MenuItem onClick={() => setParams({...queryParams, category: "home"})}>Home</MenuItem>
                            <MenuItem onClick={() => setParams({...queryParams, category: "fashion"})}>Fashion</MenuItem>
                            <MenuItem onClick={() => setParams({...queryParams, category: "accessories"})}>Accessories</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box className="query__action">
                    <Menu isLazy={true} >
                        <MenuButton bg="#fff" _expanded={{bg: "#1DBF73 !important", color: "#fff"}} _hover={{bg: "#1DBF73 !important", color: "#fff"}} className="menu__btn__outlined" as={Button} rightIcon={<ChevronDownIcon />}>
                           Rating 
                        </MenuButton>
                        <MenuList className="menu__list">
                            <MenuItem onClick={() => setParams({...queryParams, ratings: 1})}> >1 </MenuItem>
                            <MenuItem onClick={() => setParams({...queryParams, ratings: 2})}> >2 </MenuItem>
                            <MenuItem onClick={() => setParams({...queryParams, ratings: 3})}> >3 </MenuItem>
                            <MenuItem onClick={() => setParams({...queryParams, ratings: 4})}> >4 </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box className="query__action">
                    <Menu isLazy={true} >
                        <MenuButton bg="#fff" _expanded={{bg: "#1DBF73 !important", color: "#fff"}} _hover={{bg: "#1DBF73 !important", color: "#fff"}} className="menu__btn__outlined" as={Button} rightIcon={<ChevronDownIcon />}>
                            Condition
                        </MenuButton>
                        <MenuList className="menu__list">
                            <MenuItem onClick={() => setParams({...queryParams, condition: "NEW"})}>NEW</MenuItem>
                            <MenuItem onClick={() => setParams({...queryParams, condition: "USED"})}>USED</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </HStack>
        </Box>
    )
}

export default QueryActions;