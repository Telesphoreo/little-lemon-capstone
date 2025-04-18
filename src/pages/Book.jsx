import React from 'react';
import {
    Box,
    VStack,
    Image,
    Heading,
} from '@chakra-ui/react';
import logo from '../../src/images/little_lemon_logo.png';
import BookingForm from '../components/BookingForm.jsx';

function Book() {
    return (
        <Box py={10} px={4}>
            <Box
                maxW="md"
                mx="auto"
                bg="white"
                borderRadius="2xl"
                boxShadow="2xl"
                p={6}
            >
                <VStack spacing={6}>
                    <Image src={logo} alt="Little Lemon Logo" />
                    <Heading as="h2" size="lg" textAlign="center">
                        Book a Table
                    </Heading>
                    <BookingForm />
                </VStack>
            </Box>
        </Box>
    );
}

export default Book;