import React, { useState } from "react";
import { Stack, Center, Image, HStack, Button, Checkbox, FormControl, Heading, Divider, Link, Input, WarningOutlineIcon, Text, Icon} from "native-base";
import { Formik } from "formik";
import * as yup from 'yup';
import UISidePresentation from "./components/UISidePresentation";
import TermsConditionsModal from "./components/TermsConditionsModal";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/auth/auth";


 const initialValues = {
    name: '',
    surname: "",
    username: "",
    emailAddress: '',
    termAgree: false,
    password: '',
    passwordConfirmation: '',
  }

const registerValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required("Insira seu nome"),
    surname: yup
        .string()
        .required("Insira seu sobrenome"),
    username: yup
        .string()
        .required("Insira seu usuário de login"),
    emailAddress: yup
        .string()
        .email("Digite um e-mail valido")
        .required("Digite o e-mail"),
    password: yup
        .string()
        .required('Digite sua senha'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'As senhas não são iguais')
  })

export default function Register() {
    const [erroNotification, setErroNotification] = useState(false)
    const [erroMsg, setErroMsg] = useState("")
    const [term, setTerm] = useState(false)
    const { register } = useAuth()
    let navigate = useNavigate()

  return (
    <Formik
        initialValues={initialValues}
        validationSchema= {registerValidationSchema}
        onSubmit={ (values) => {
            const sendRegister = {
                name: values.name,
                surname: values.surname,
                userName: values.username,
                emailAddress: values.emailAddress,
                password: values.password,
                captchaResponse: "",
            }
            try{
                register(sendRegister)
                .then(() => navigate("/EmailNotification"))
                .catch((err) => {
                    setErroNotification(true)
                    setErroMsg(err.message)
                    console.log(err)
                })
                
               
               if( window.innerWidth <= 600){
                navigate("/RegisteringOnMobile")
               }
                
            }catch(err){
                setErroNotification(true)
            }
          }}
    >
        {({ handleChange, handleBlur,  errors, touched, setFieldValue, handleSubmit }) => (
            <Stack direction={{ base: "column", md: "row" }} alignItems='center' >
                <UISidePresentation/>
                <Center flex={1} mt={{base: 40, lg: 'none', md: "none", sm: 40}} >
                    <Image 
                        alt="logo" 
                        w='250' 
                        h='100' 
                        resizeMode='contain'
                        alignSelf='center' 
                        source={require("../../images/logo-laranja.png")}
                    />
                    <Stack mt={10} alignContent='center' maxWidth={600}>
                        <FormControl isInvalid={erroNotification} > 
                            <Stack space={2}>
                                <Input 
                                    bg='#E0E0E0' 
                                    variant="unstyled"
                                    placeholder="Digite seu nome"  
                                    onChangeText={handleChange('name')} 
                                    onBlur={handleBlur('name')}
                                />
                                <Input  
                                    bg='#E0E0E0' 
                                    variant="unstyled"
                                    placeholder="Digite seu sobrenome" 
                                    onChangeText={handleChange('surname')} 
                                    onBlur={handleBlur('surname')}
                                />
                                <Input 
                                    bg='#E0E0E0' 
                                    variant="unstyled"
                                    placeholder="Digite seu usuário para login" 
                                    onChangeText={handleChange('username')} 
                                    onBlur={handleBlur('username')}
                                />
                                <Input  
                                    variant="unstyled"
                                    bg='#E0E0E0' 
                                    placeholder="Digite seu e-mail" 
                                    onChangeText={handleChange('emailAddress')} 
                                    onBlur={handleBlur('emailAddress')}
                                />
                                
                                <HStack space={4} >
                                    <Input 
                                        variant="unstyled"
                                        bg='#E0E0E0' 
                                        alignSelf='stretch' 
                                        placeholder="Digite sua senha" 
                                        onChangeText={handleChange('password')} 
                                        onBlur={handleBlur('password')}
                                        type="password"
                                    />
                                    <Input 
                                        variant="unstyled"
                                        bg='#E0E0E0' 
                                        alignSelf='stretch' placeholder="Repita sua senha" 
                                        onChangeText={handleChange('passwordConfirmation')} 
                                        onBlur={handleBlur('passwordConfirmation')}
                                        type="password"
                                    />
                                </HStack>
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                   { erroMsg }
                                </FormControl.ErrorMessage>                                
                                {errors.name && touched.name &&
                                    <HStack><WarningOutlineIcon color="red.500" size="xs" /><Text fontSize={10} color="red.500"> {errors.name} </Text></HStack>
                                }
                                 {errors.surname && touched.surname &&
                                    <HStack><WarningOutlineIcon color="red.500" size="xs" /><Text fontSize={10} color="red.500"> {errors.surname} </Text></HStack>
                                }
                                 {errors.username && touched.username &&
                                    <HStack><WarningOutlineIcon color="red.500" size="xs" /><Text fontSize={10} color="red.500"> {errors.username} </Text></HStack>
                                }
                                {errors.emailAddress && touched.emailAddress &&
                                    <HStack><WarningOutlineIcon color="red.500" size="xs" /><Text fontSize={10} color="red.500"> {errors.emailAddress} </Text></HStack>
                                }
                                {errors.password && touched.password &&
                                    <HStack><WarningOutlineIcon color="red.500" size="xs" /><Text fontSize={10} color="red.500"> {errors.password} </Text></HStack>
                                }
                                {errors.passwordConfirmation && touched.passwordConfirmation &&
                                    <HStack><WarningOutlineIcon color="red.500" size="xs" /><Text fontSize={10} color="red.500"> {errors.passwordConfirmation} </Text></HStack>
                                }
                                <HStack space={1}>
                                    <Checkbox 
                                    colorScheme="amber"
                                    value="termAgree"
                                    bgColor='#EF9600'
                                    isChecked={term}
                                    onChange={() => setTerm(!term)} 
                                    >
                                        <Heading color="#A3A3A3" size="xs"  alignSelf="flex-end" ml={2} >
                                            Li e aceito os
                                        </Heading>
                                    </Checkbox>   
                                    <TermsConditionsModal setTerm={setTerm}/>
                                </HStack>
                                

                                <Button 
                                    isDisabled={!term}
                                    _disabled={{color: "gray.400"}}
                                    _text={{fontSize: "2xs"}} 
                                    alignSelf='center'
                                    width='230' 
                                    bgColor='#EF9600' 
                                    onPress={() => handleSubmit()}
                                >
                                    CADASTRAR
                                </Button>
                            </Stack>
                            <Center  mb={50} mt="50%">
                                <Divider maxW={160} my={2}/>
                                <HStack space={2}  >
                                    <Heading  alignSelf="flex-end"  color="#A3A3A3" size="xs" >Já tem sua conta?</Heading>
                                    <Link onPress={() => navigate("/")}  _text={{color:'#EF9600'}}>Login</Link>
                                </HStack>
                            </Center>
                            </FormControl>
                        </Stack>
                </Center>
            </Stack>
        )}
  </Formik>
    )
}