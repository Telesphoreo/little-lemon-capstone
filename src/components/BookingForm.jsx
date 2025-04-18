import React, { useState } from 'react';
import {
    Box,
    VStack,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    Button,
    useToast,
} from '@chakra-ui/react';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: 1,
    });
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: 'Reservation confirmed!',
            description: `Thank you, ${formData.name}! Your booking for ${formData.guests} guest(s) on ${formData.date} at ${formData.time} has been received.`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
        setFormData({ name: '', email: '', date: '', time: '', guests: 1 });
    };

    return (
        <Box as="form" width="100%" onSubmit={handleSubmit}>
            <VStack spacing={4}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        variant="filled"
                    />
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        variant="filled"
                    />
                </FormControl>

                <Box display="flex" gap={4} width="100%">
                    <FormControl id="date" isRequired>
                        <FormLabel>Date</FormLabel>
                        <Input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            variant="filled"
                        />
                    </FormControl>

                    <FormControl id="time" isRequired>
                        <FormLabel>Time</FormLabel>
                        <Input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            variant="filled"
                        />
                    </FormControl>
                </Box>

                <FormControl id="guests" isRequired>
                    <FormLabel>Guests</FormLabel>
                    <NumberInput
                        min={1}
                        value={formData.guests}
                        onChange={(valueString) =>
                            setFormData(prev => ({
                                ...prev,
                                guests: parseInt(valueString, 10),
                            }))
                        }
                    >
                        <NumberInputField name="guests" variant="filled" />
                    </NumberInput>
                </FormControl>

                <Button
                    type="submit"
                    colorScheme="yellow"
                    size="lg"
                    width="full"
                    borderRadius="xl"
                    boxShadow="md"
                    _hover={{ boxShadow: 'lg' }}
                >
                    Confirm Reservation
                </Button>
            </VStack>
        </Box>
    );
}
