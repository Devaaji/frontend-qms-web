import React from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const LoginPage = () => {
  const { isOpen: isPasswordOpen, onToggle: onPasswordToggle } =
    useDisclosure();
  return (
    <React.Fragment>
      <Flex h="100vh" w="100vw">
        <Box
          flex={1.1}
          bgGradient="linear-gradient(to right top, #3068da, #2f57cd)"
          boxShadow={"0px 0px 6px 1px rgba(0, 0, 0, 0.25);"}
        >
          <Flex
            w="full"
            h="full"
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box>
              <Text fontWeight="bold" color="white" fontSize="2xl" mb="5">
                Welcome Login
              </Text>
            </Box>
            <Box boxSize="sm" rounded="xl" overflow="hidden">
              <Image
                boxSize="sm"
                objectFit="cover"
                src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?w=1800&t=st=1670225497~exp=1670226097~hmac=a022bcf7be739eea0d02af5fa58734782892974f4c1fd45464b8f867747098f8"
                alt="Image login page"
              />
            </Box>
          </Flex>
        </Box>
        <Box flex={0.9}>
          <Flex w="full" h="full" justify="center" alignItems="center">
            <Flex alignItems="center" w="full">
              <Flex flexDir="column" alignItems="center" w="full" p="150px">
                <Stack spacing={6} w="full">
                  <Box>Login Page</Box>
                  <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input type="text" placeholder="Username" />
                  </FormControl>
                  <FormControl id="password">
                    <Box>
                      <FormLabel>Password</FormLabel>
                    </Box>
                    <InputGroup>
                      <Input
                        placeholder="Password"
                        type={isPasswordOpen ? "text" : "password"}
                      />
                      <InputRightElement>
                        <IconButton
                          bg="transparent"
                          _hover={{ bg: "transparent" }}
                          variant="ghost"
                          color="ims-linebox"
                          aria-label={
                            isPasswordOpen ? "Mask password" : "Reveal password"
                          }
                          icon={
                            isPasswordOpen ? (
                              <BsFillEyeFill />
                            ) : (
                              <BsFillEyeSlashFill />
                            )
                          }
                          onClick={onPasswordToggle}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Button
                    color="white"
                    bgGradient="linear-gradient(to right top, #3068da, #2f57cd)"
                    _hover={{
                      bgGradient:
                        "linear-gradient(to right top, #3068da, #2f57cd)",
                      transform: "scale(1.01)",
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default LoginPage;
