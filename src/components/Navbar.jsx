import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, HStack, Link } from '@chakra-ui/react';

function Navbar() {
    return (
        <Box px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <HStack spacing={8} alignItems="center">
                    <Link as={RouterLink} to="/" fontWeight="bold">
                        Home
                    </Link>
                    <Link as={RouterLink} to="/book" fontWeight="bold">
                        Book
                    </Link>
                </HStack>
            </Flex>
        </Box>
    );
}

export default Navbar;
