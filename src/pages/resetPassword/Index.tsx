import React from "react";
import {Stack,  Center, Image, Button,  FormControl, Heading, Input, Divider, HStack, Link } from "native-base";
import { Formik } from "formik";
import * as yup from 'yup';
import { useParams, useNavigate } from "react-router-dom";

const initialValues = {
    newPassword: '',
    confirmationPassword: '',
  }

const resetPasswordValidationSchema = yup.object().shape({
    newPassword: yup.string().required("Digite sua nova senha"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Senhas precisam ser iguais')
  })

export default function ResetPassword() {
    let navigate = useNavigate();

  return( 
        <Formik
            initialValues={initialValues}
            validationSchema= {resetPasswordValidationSchema}
            onSubmit={values => {
                console.log(values);
              }}
        >
            {({ handleChange, handleBlur }) => (
                <Stack direction="column" alignItems='center'>
                      <Center mt={40}>
                        <Image   alt="logo"  w='250' h='100' 
                            resizeMode='contain' alignSelf='center' mb= {10}
                            source={require("../../images/logo-laranja.png")}
                        />
                        {/* <Heading mt={4} alignSelf="flex-start" size="SX" color="#EF9600" >Redefinir Senha</Heading> */}
                        <FormControl >  
                            <Stack space={4} >
                                <Input 
                                     alignSelf='stretch' 
                                    placeholder="Digite sua nova senha" 
                                    onChangeText={handleChange('password')} 
                                    onBlur={handleBlur('password')}
                                    type="password"
                            />
                                <Input alignSelf='stretch' placeholder="Confirme sua senha" 
                                    onChangeText={handleChange('passwordConfirmation')} 
                                    onBlur={handleBlur('passwordConfirmation')}
                                    type="password"
                               />
                            <Button 
                                alignSelf="center"
                                maxW={20} _text={{fontSize: "12"}}
                                bgColor="#EF9600"
                                onPress={()=> navigate("/")}>Redefinir</Button>
                            </Stack>
                            <Center  mb={50} mt="50%">
                                <Divider maxW={160} my={2}/>
                                <HStack space={2}  >
                                    <Heading  alignSelf="flex-end"  color="#A3A3A3" size="xs" >Já tem sua conta?</Heading>
                                    <Link onPress={() => navigate("/")}  _text={{color:'#EF9600'}}>Login</Link>
                                </HStack>
                            </Center>
                        </FormControl>
                    </Center>
                </Stack>
            )}
      </Formik>
    )
}