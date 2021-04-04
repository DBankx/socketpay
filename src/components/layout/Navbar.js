import React from "react";
import {Container, Spacer, HStack, Badge} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {QuestionIcon, SearchIcon, LinkIcon} from "@chakra-ui/icons";
import "../../assets/css/nav.css";
import {useMediaQuery} from "@chakra-ui/react";

const Navbar = () => {
    const [isMobile] = useMediaQuery("(max-width: 500px)");
    return (
        <header className="nav">
                <Container maxW="container.xl">
                <HStack>
                    <NavLink to="/"><span className="logoTxt">SocketPay</span></NavLink>
                    <Spacer />
                    <HStack spacing="20px">
                        <NavLink className="link" to="/products"><SearchIcon boxSize={4} /> {!isMobile && "View Products"}</NavLink>
                        <NavLink className="link" to="/saved" activeClassName="link"><LinkIcon boxSize={4} /> {!isMobile && "Saved Items"} <Badge ml="1" colorScheme="green">
                            {JSON.parse(localStorage.getItem("skp_ci")).length}
                        </Badge></NavLink>
                    </HStack>
                </HStack>
            </Container>
        </header>
    )
}

export default Navbar;