import React from "react";
import {HStack} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";

const Rater = ({rating, boxSize}) => {
    return (<HStack spacing="4px">
        {Array(5)
            .fill("")
            .map((_, i) => (
                <StarIcon
                    key={`${_}${i}`}
                    color={i < rating ? "#FFC100" : "gray.300"}
                    boxSize={boxSize}
                />
            ))}
    </HStack>)
}

export default Rater;