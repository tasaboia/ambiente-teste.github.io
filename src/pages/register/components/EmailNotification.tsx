import React from 'react'
import { Center, Stack, Text, Image, Link, HStack } from 'native-base'
import { useNavigate } from 'react-router-dom';

export default function EmailNotification() {
    let navigate = useNavigate();

  return (
    <Stack>
        <Center mt={40}>
            <Image 
                alt="logo" 
                w='250' 
                h='100' 
                resizeMode='contain'
                alignSelf='center' 
                source={require('../../../images/logo-laranja.png')}
            />
            <Stack>
                <Text color="#4F4F4F" alignSelf="center" fontSize={30}>Check sua caixa de e-mail </Text>
                <Text>E-mail de validação foi enviado para o e-mail cadastrado.</Text>
            </Stack>
            
            <HStack mt={60}>          
                <Text color="#4F4F4F">Retornar a página de </Text>
                <Link onPress={() => navigate("/")}  _text={{color:'#EF9600'}}  >Login</Link>
            </HStack>
  
        </Center>
    </Stack>
  )
}
