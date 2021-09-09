import React, {useEffect, useState} from 'react';
import NotificationC from '../../components/NotificationC';
import {
  Actionsheet,
  Box,
  Button,
  Container,
  FlatList,
  Heading,
  HStack,
  Input,
  Text,
  useDisclose,
  VStack,
} from 'native-base';
import {Link} from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = () => {
  const [todo, setTodo] = useState(null);
  const [todos, setTodos] = useState([]);
  const [editedIndex, seteditedIndex] = useState(-1);
  const {isOpen, onOpen, onClose} = useDisclose();
  const [notification, setNotification] = React.useState({
    isOn: false,
    message: 'default Message',
    type: 'success',
  });

  const deleteTodo = data => {
    let newTodos = todos.filter(value => {
      return value !== data;
    });
    setTodos(newTodos);
    setNotification({
      isOn: true,
      type: 'success',
      message: 'Todo Deleted Successfully',
    });
  };
  const editTodo = item => {
    let index = todos.indexOf(todo);

    if (index) {
      setTodo(item);
      seteditedIndex(index);
    }
  };

  const addTodo = () => {
    alert(editedIndex);
    if (editedIndex === -1) {
      if (todo !== '') {
        setNotification({
          isOn: true,
          type: 'success',
          message: 'Todo Created Successfuly',
        });
        setTodos(prev => [...prev, todo]);
        setTodo('');
      } else {
        setNotification({
          isOn: true,
          type: 'error',
          message: 'Input Filed Id Empty',
        });
      }
    } else {
      let newArray = todos.splice(editedIndex, 0, todo);
      setTodos(newArray);
    }
  };
  const handleChange = (event: any, name) => {
    setTodo(event);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setNotification({
        isOn: false,
        type: 'success',
        message: 'Todo Created Successfuly',
      });
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [notification]);

  return (
    <Box mt={50} width="100%">
      {notification.isOn && <NotificationC notification={notification} />}

      <Container>
        <VStack space={4} alignItems="center">
          <Heading>
            Create Todos
            <Link to="/about" underlayColor="#f0f4f7">
              <Text>About Us</Text>
            </Link>
          </Heading>

          <HStack space={1}>
            <Input
              type="string"
              w="100%"
              value={todo}
              onChangeText={handleChange}
              variant="rounded"
              placeholder="Enter Todo"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />

            <Button size="sm" onPress={addTodo}>
              Add
            </Button>
          </HStack>
        </VStack>
      </Container>

      <Container centerContent={false}>
        <Box width="100%">
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Box width="100%">
                <Container>
                  <HStack space={1}>
                    <Box width="80%" m={3} mb={0} border={1} p={2} rounded="lg">
                      <HStack space={2}>
                        <Icon name="rocket" size={30} color="#900" />
                        <Text>{item}</Text>
                      </HStack>
                    </Box>
                    <Button
                      variant="ghost"
                      size="xs"
                      onPress={() => {
                        editTodo(item);
                        onOpen();
                      }}>
                      <Icon name="edit" size={30} color="blue" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="xs"
                      onPress={() => deleteTodo(item)}>
                      <Icon name="trash" size={30} color="red" />
                    </Button>
                  </HStack>
                </Container>
              </Box>
            )}
            keyExtractor={(item, index) => index}
          />
        </Box>
      </Container>

      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Actionsheet.Item startIcon={<Icon name="edit" />}>
            <Input
              type="string"
              w="100%"
              value={todo}
              onChangeText={handleChange}
              variant="rounded"
              placeholder="Enter Todo"
              _light={{
                placeholderTextColor: 'blueGray.400',
              }}
              _dark={{
                placeholderTextColor: 'blueGray.50',
              }}
            />
          </Actionsheet.Item>
          <Actionsheet.Item>
            <Button size="sm" onPress={addTodo}>
              Edit
            </Button>
            r
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default HomePage;
