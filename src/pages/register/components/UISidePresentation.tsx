import React from 'react'
import { Box, Text, Stack } from "native-base";


export default function UISidePresentation() {
  
  return (
    <Box 
        display={{ base: "none", md: "flex"}} 
        w="50%"
        height="100vh"
        alignSelf="flex-start" 
        bg="#F6A200"
        
    >
        <Stack alignSelf='center' mt={{md:90, lg:120}} mx={{md: 90, lg: 150}}  >
            <Text fontSize={{md: "18", lg: "32", xl:'30' }} color='white'> 
                Você sabia que a importação de produtos chineses pode ser um caminho viável e vantajoso para MEIs e PMEs?
            </Text>
            <Text fontSize={{md: "14", lg: "18", xl:'20' }}  mt={'2vh'} color='white'>
                A Importa Coletiva chegou para oferecer alternativas viáveis que caibam no caixa de sua empresa e assim, promover o crescimento do seu negócio!
            </Text>
            <Text fontSize={{md: "18", lg: "32", xl:'30'}} mt={'6vh'} color='white'>
                Cadastre e veja como mudamos a maneira de  importar 
            </Text>
        </Stack>
    </Box>

  )
}
