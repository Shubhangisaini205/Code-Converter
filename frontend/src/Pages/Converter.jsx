import React, { useState } from 'react';
import { Textarea, Select, Button, Box, Flex, Heading } from '@chakra-ui/react';

const Converter = () => {
    const [inputCode, setInputCode] = useState('');
    const [language, setLanguage] = useState('');
    const [convertedCode, setConvertedCode] = useState('');
    const [loading, setLoading] = useState(false)

    const handleCodeChange = (e) => {
        setInputCode(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleConvert = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://code-converter-n7m8.onrender.com/convert?language=${language}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputcode: inputCode }),
            });

            if (!response.ok) {
                throw new Error('Code conversion failed');
            }

            const convertedCode = await response.json();
            setLoading(false)
            setConvertedCode(convertedCode);
        } catch (error) {
            console.error('Error during code conversion:', error);
        }
    };
    const handleDebug = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://code-converter-n7m8.onrender.com/debug`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputcode: inputCode }),
            });

            if (!response.ok) {
                throw new Error('Code conversion failed');
            }

            const convertedCode = await response.json();
            setLoading(false)
            setConvertedCode(convertedCode);
        } catch (error) {
            console.error('Error during code conversion:', error);
        }
    }

    const handleQuality = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://code-converter-n7m8.onrender.com/qualityCheck`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputcode: inputCode }),
            });

            if (!response.ok) {
                throw new Error('Code conversion failed');
            }

            const convertedCode = await response.json();
            setLoading(false)
            setConvertedCode(convertedCode);
        } catch (error) {
            console.error('Error during code conversion:', error);
        }
    }


    return (
        <Box p={4} w="60%" h="auto"  display="flex" border="1px solid black" flexDirection="column" alignItems="center" justifyContent="center" margin="auto" mt="40px" >
            <Heading as="h1" size="xl" mb={4}>
                Code Converter
            </Heading>

            <Flex mb={4} width="80%" gap={10} >
                <Heading as="h2" size="md" mb={2} mt={"10%"}>
                    Input:
                </Heading>
                <Textarea
                    value={inputCode}
                    onChange={handleCodeChange}
                    placeholder="Enter code..."
                    size="lg"
                    width="100%"
                    height="200px"
                />
            </Flex>


            <Flex width="100%" margin="auto"  justifyContent="space-evenly" alignItems="center" mb={10}>
                
                <Select
                    value={language}
                    onChange={handleLanguageChange}
                    placeholder="Select Language"
                    size="md"
                    mt={4}
                    width="20%"
                >
                    <option value="Python">Python</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="C++">C++</option>
                    <option value="C#">C#</option>
                    <option value="PHP">PHP</option>
                    {/* Add more language options */}
                </Select>





                <Button colorScheme="orange" onClick={handleConvert} >
                    Convert
                </Button>
                <Button colorScheme="green" onClick={handleDebug} >
                    Debugger
                </Button>
                <Button colorScheme="purple" onClick={handleQuality} >
                    Check Quality
                </Button>

            </Flex>





            <Flex mb={4} width="80%" gap={10}>
                <Heading as="h2" size="md" mb={2} mt={"10%"}>
                    Output:
                </Heading>
                <Textarea
                    value={loading ? 'Please wait while response is loading....' : convertedCode}
                    readOnly
                    placeholder="Converted code will appear here..."
                    size="lg"
                    width="100%"
                    height="200px"
                />
            </Flex>
        </Box>
    );
};

export default Converter;
