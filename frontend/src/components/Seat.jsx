

import { Box, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';

// Seat component that displays a seat number and its booking status
export default function Seat({ seatNumber, isBooked }) {
    return (
        <Tooltip label={isBooked ? "Occupied" : "Available"} fontSize="sm" placement="top" hasArrow>
            <Box
                color="white"
                h="fit-content"
                w="50px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p="1"
                bg={isBooked ? "linear-gradient(to bottom, #FFC107, #FFA000)" : "linear-gradient(to bottom, #6CAC48, #4A7D2D)"}
                rounded="full"
                shadow="lg"
                borderWidth="2px"
                borderColor={isBooked ? "#FFB300" : "#4A7D2D"}
                cursor="pointer"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{
                    transform: "scale(1.1)",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                }}
            >
                <Text
                    align="center"
                    fontSize="md"
                    as="b"
                    color="white"
                    textShadow="1px 1px 2px rgba(0,0,0,0.3)"
                >
                    {seatNumber}
                </Text>
            </Box>
        </Tooltip>
    );
}
