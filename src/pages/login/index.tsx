import React, { useEffect, useState } from "react";
import {Stack, Center, Image, HStack, Button, Checkbox, FormControl, ZStack, Spacer, Heading, Divider, Link, WarningOutlineIcon, Input} from "native-base";
import {  Pressable } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/auth/auth";
import { LoginAPI } from "../../services/user/UserApi";
import { storage } from "../../storage/storage";
import { parse } from "react-native-svg";

const initialValues = {
    userNameOrEmailAddress: '',
    password:  '',
    rememberClient:  true
}
  
const loginValidationSchema = yup.object().shape({
    userNameOrEmailAddress: yup.string(),
    password: yup.string().required('Password is required'),
  })

export default function Login() {
    
    const [checkbox, setCheckbox] = useState(false)
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)

    const { login, isLoggingIn } = useAuth()
    const [erroNotification, setErroNotification] = useState(false)
    let navigate = useNavigate()
    let emailStorage = storage.getEmail()
    let passwordStorage = storage.getPassword()

  return(
        <Formik
            initialValues = {initialValues}
            validationSchema= {loginValidationSchema}
            onSubmit={async (values) => {

                values.rememberClient = checkbox
                
                if(checkbox){
                    storage.clearEmail()
                    storage.clearPassword()

                    storage.setEmail(values.userNameOrEmailAddress)
                    storage.setPassword(values.password)

                }
                try{
                     login(values)
                     if(isLoggingIn){
                         console.log(isLoggingIn)
                     }
                    //  window.location.reload()
                }catch(err){
                    setErroNotification(true);
                }
            }} 
        >
            
            {({ handleChange, handleBlur, errors, touched, setFieldValue, handleSubmit }) => (
                <Stack direction="column" alignItems='center' bgColor="">
                      <Center mt={40}>
                        <Image   alt="logo"  w='250' h='100' 
                            resizeMode='contain' alignSelf='center' mb= {10}
                            source={require('../../images/logo-laranja.png')}
                        />
                        <FormControl isInvalid={erroNotification}>  
                            <Stack  space={4} width={{base:300, lg:400}}>
                                <Input h={45} 
                                    placeholder={"Digite seu e-mail" }
                                    onChangeText={handleChange('userNameOrEmailAddress')} 
                                    onBlur={handleBlur('userNameOrEmailAddress')}
                                />
                                {errors.userNameOrEmailAddress && touched.userNameOrEmailAddress &&
                                    <FormControl.HelperText>
                                        {errors.userNameOrEmailAddress}
                                     </FormControl.HelperText>
                                }
                                <ZStack>
                                <Input h={45} 
                                    placeholder= { passwordStorage ? passwordStorage : "Digite sua senha" }
                                    onChangeText={handleChange('password')} 
                                    onBlur={handleBlur('password')}
                                    type="password"
                                />
                                <Button h={8} mt="1.5" mr="1.5" alignSelf="flex-end" w={100} _text={{fontSize: "12"}} bgColor='#EF9600' onPress={(e) => handleSubmit()} >
                                    Entrar
                                </Button>
                                </ZStack>
                                <HStack>
                                <Checkbox 
                                    colorScheme="amber"
                                    bgColor="#EF9600"
                                    size="sm"
                                    value="rememberme"
                                    onChange={() => setCheckbox(!checkbox)}>
                                    <Heading ml="2" size="sx" color="#EF9600" alignSelf="flex-end">Lembrar me</Heading>
                                </Checkbox>
                                <Spacer/>
                                <Pressable>
                                    <Heading onPress={() => navigate("/ForgotPassword")} size="sx" color="#EF9600" alignSelf="flex-end">Esqueceu sua senha?</Heading>
                                </Pressable>
                                </HStack>
                                {errors.password && touched.password &&
                                <FormControl.HelperText> {errors.password} </FormControl.HelperText>
                                }
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    E-mail ou senha incorreto
                                </FormControl.ErrorMessage>
                            </Stack>
                            
                        </FormControl>
                        
                    </Center>
                    <Divider mt="10%" maxW="200"/>
                    <HStack padding={4} space={2} >
                        <Heading  color="#A3A3A3" alignSelf="flex-end" size="xs" >Novo na Importa Coletiva? </Heading> 
                        <Link onPress={() => navigate("/Register")}  _text={{color:'#EF9600'}}  >Cadastre-se</Link>
                    </HStack>
                </Stack>
            )}
      </Formik>
    )
}
