import React from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from 'native-base';
import {useHistory} from 'react-router-dom';

const AboutPage = () => {
  let history = useHistory();
  return (
    <Box width="100%" m={50}>
      <Container>
        <VStack>
          <Center>
            <HStack>
              <Button
                variant="ghost"
                size="sm"
                onPress={() => history.goBack()}>
                Back
              </Button>
              <Heading>About US</Heading>
            </HStack>
          </Center>
          <Box mt={10}>
            <Text>
              psum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutPage;
