import React, { useState } from "react";
import { Stack, Center, Image, HStack, Button, Checkbox, FormControl, Heading, Divider, Link, Input} from "native-base";
import { Formik } from "formik";
import * as yup from 'yup';
import UISidePresentation from "./components/UISidePresentation";
import TermsConditionsModal from "./components/TermsConditionsModal";

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
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
  })

export default function Register() {
    const [term, setTerm] = useState(false);
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

            //const cadastro = registerUserAPI(sendRegister)
               
          }}
    >
        {({ handleChange, handleBlur, values, errors, touched, setFieldValue, handleSubmit }) => (
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
                        <FormControl > 
                            <Stack space={2}>
                                <Input  
                                    placeholder="Digite seu nome"  
                                    onChangeText={handleChange('name')} 
                                    onBlur={handleBlur('name')}
                                />
                                
                                {errors.name && touched.name &&
                                    <FormControl.HelperText> {errors.name} </FormControl.HelperText>
                                }
                                <Input  
                                    placeholder="Digite seu sobrenome" 
                                    onChangeText={handleChange('surname')} 
                                    onBlur={handleBlur('surname')}
                                />
                                {errors.surname && touched.surname &&
                                    <FormControl.HelperText> {errors.surname} </FormControl.HelperText>
                                }

                                <Input  
                                    placeholder="Digite seu usuário para login" 
                                    onChangeText={handleChange('username')} 
                                    onBlur={handleBlur('username')}
                                />
                                {errors.username && touched.username &&
                                    <FormControl.HelperText> {errors.username} </FormControl.HelperText>
                                }
                                <Input  
                                    placeholder="Digite seu e-mail" 
                                    onChangeText={handleChange('emailAddress')} 
                                    onBlur={handleBlur('emailAddress')}
                                />
                                {errors.emailAddress && touched.emailAddress &&
                                    <FormControl.HelperText> {errors.emailAddress} </FormControl.HelperText>
                                }
                                <HStack space={4} >
                                    <Input 
                                        alignSelf='stretch' 
                                        placeholder="Digite sua senha" 
                                        onChangeText={handleChange('password')} 
                                        onBlur={handleBlur('password')}
                                        type="password"
                                    />
                                    <Input alignSelf='stretch' placeholder="Repita sua senha" 
                                        onChangeText={handleChange('passwordConfirmation')} 
                                        onBlur={handleBlur('passwordConfirmation')}
                                        type="password"
                                    />
                                </HStack>
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
                                {errors.password && touched.password &&
                                    <FormControl.HelperText>
                                        {errors.password}
                                    </FormControl.HelperText>
                                }
                                {errors.passwordConfirmation && touched.passwordConfirmation &&
                                    <FormControl.HelperText>
                                        {errors.passwordConfirmation}
                                    </FormControl.HelperText>
                                }

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
                            <Center mt="50%">
                                <Divider maxW={160} my={2}/>
                                <HStack space={2}  >
                                    <Heading  alignSelf="flex-end"  color="#A3A3A3" size="xs" >Já tem sua conta?</Heading>
                                    <Link  _text={{color:'#EF9600'}}  >Login</Link>
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