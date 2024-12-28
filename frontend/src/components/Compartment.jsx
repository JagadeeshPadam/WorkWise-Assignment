import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Seat from './Seat';

export default function Compartment({ loading, data }) {
    let booked = 0;
    let notBooked = 0;

    data?.forEach((item) => {
        if (item.isBooked) {
            booked++;
        } else {
            notBooked++;
        }
    });

    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            h="full"
            gap="4"
            p="4"
            bg="white"
            rounded="lg"
            shadow="md"
        >
            {loading ? (
                <Heading size="lg" textAlign="center" color="blue.600">
                    Ticket Booking - Jag Travels
                </Heading>
            ) : (
                <Text textAlign="center" fontSize="xl" fontWeight="bold" color="gray.600">
                    Please Wait.
                </Text>
            )}

            <Grid
                templateColumns="repeat(7, 1fr)"
                gap="2"
                bg="#F9FAFB"
                minH="fit-content"
                h="80vh"
                minW="400px"
                w="fit-content"
                rounded="lg"
                p="4"
                shadow="sm"
            >
                {data?.map((item) => (
                    <Seat key={item._id} isBooked={item.isBooked} seatNumber={item.seatNumber} />
                ))}
            </Grid>
        <Flex
    gap="4"
    justify="space-around"
    align="center"
    color="white"
    fontSize="lg"
    fontWeight="semibold"
>
    <Box
        w="50%"
        textAlign="center"
        bg="linear-gradient(to right, #FFC107, #FF9800)"
        rounded="lg"
        p="4"
        shadow="lg"
        transition="transform 0.2s, box-shadow 0.2s"
        _hover={{
            transform: "scale(1.05)",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
        }}
    >
        <Text>Booked Seats = {booked}</Text>
    </Box>
    <Box
        w="50%"
        textAlign="center"
        bg="linear-gradient(to right, #6CAC48, #4A7D2D)"
        rounded="lg"
        p="4"
        shadow="lg"
        transition="transform 0.2s, box-shadow 0.2s"
        _hover={{
            transform: "scale(1.05)",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
        }}
    >
        <Text>Available Seats = {notBooked}</Text>
    </Box>
</Flex>
</Box>
    );
}
