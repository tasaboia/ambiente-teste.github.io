import React, { useState } from "react";
import {Stack, Input , Center, Image, Button, FormControl, ZStack, Heading, HStack, WarningOutlineIcon, Text, Divider, Link} from "native-base";
import { Formik } from "formik";
import * as yup from 'yup';
import { useParams, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { IForgotPassword } from "./types";
import { ForgotPasswordAPI } from "../../services/user/UserApi";

const initialValues: IForgotPassword = {
    emailAddress: '',
}

const forgotPasswordValidationSchema = yup.object().shape({
    emailAddress: yup.string().email("Digite um e-mail valido").required("Digite o e-mail"),
  })

export default function ForgotPassword() {
    let navigate = useNavigate();
    const [erroEmail, setErroEmail] = useState(false)
    const {mutate , isError} = useMutation(ForgotPasswordAPI,{
        onSuccess: () => {
            navigate("/ResetPassword") 
          },
        onError: () => {
            setErroEmail(true)
        },
    })

  return(
        <Formik
            initialValues={initialValues}
            validationSchema= {forgotPasswordValidationSchema}
            onSubmit={ values => {
                mutate(values)
        }}>
            {({ handleChange, handleBlur, errors, touched, handleSubmit }) => (
               
                <Stack direction="column" alignItems='center'>
                      <Center mt={40}>
                      <Image   alt="logo"  w='250' h='100' resizeMode='contain' source={require("../../images/logo-laranja.png")}/>

                        <FormControl isInvalid={erroEmail}> 
                            <Stack space={1} mt={6} >
                                <Heading size="lg" color="#EF9600" >Recuperação de conta</Heading>
                                <Heading my={2} fontSize={{base: 8, lg:10, md:8, sm:8}} color="#A3A3A3">Informe o seu e-mail que enviaremos um link para redefinir a sua senha.</Heading>
                            </Stack> 
                            <Stack width={{base:300, lg: 400}}>
                                <ZStack>
                                <Input width={{base:300, lg: 400}} h={45} alignSelf='stretch'  bg='#E0E0E0' placeholder="Digite seu e-mail" 
                                    onChangeText={handleChange('emailAddress')} 
                                    onBlur={handleBlur('emailAddress')}
                                />
                                <Button h={8} mt="1.5" mr="1.5" alignSelf="flex-end" w={100} _text={{fontSize: "xs"}} bgColor='#EF9600' onPress={() => handleSubmit()} >
                                Redefinir senha
                                </Button>
                                </ZStack>

                                {errors.emailAddress && touched.emailAddress &&
                                    <HStack mt={1}><WarningOutlineIcon color="red.500" size="xs" /><Text fontSize={10} color="red.500"> {errors.emailAddress} </Text></HStack>
                                }
                                {isError &&
                                    <HStack mt={1} space={1}><WarningOutlineIcon color="red.500" size="xs" /><Text fontSize={10} color="red.500">Erro inesperado</Text></HStack>
                                }      

                                <Center  mb={50} mt="50%">
                                    <Divider maxW={160} my={2}/>
                                    <HStack space={2}  >
                                        <Heading  alignSelf="flex-end"  color="#A3A3A3" size="xs">Voltar para</Heading>
                                        <Link onPress={() => navigate("/")}  _text={{color:'#EF9600'}}>Login</Link>
                                    </HStack>
                                </Center>
                            </Stack>
                        </FormControl>
                        
                    </Center>
                </Stack>
            )}
      </Formik>
    )
}