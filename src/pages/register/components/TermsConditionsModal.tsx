import React, { useState } from "react";
import { Modal ,Center, Button, Heading, Box, Text, Stack, HStack} from "native-base";
import { Pressable } from "react-native";

export default function TermsConditionsModal({setTerm}: any) {
    const [showModal, setShowModal] = useState(false);

    const handleTermAgree = () => {
      console.log("aqui")
      setTerm(true)
      setShowModal(false);
    }

    return( 
    <Center>
        <Pressable onPress={() => setShowModal(true)}>
        <Heading size="xs" color="#F6A200">
            termos e condições
        </Heading >
        </Pressable>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
        _dark: {
          bg: "#F6A200"

        },
        bg: "#4F4F4F"

      }}>
          <Modal.Content  bgColor="#4F4F4F" maxWidth="700" maxH="600">
            <Modal.CloseButton  _icon={{color: "#FFF"}} />
            <Modal.Header  bgColor="#4F4F4F" _text={{color: "#FFF", fontSize: 35, alignSelf: "center"}} >Termos & Condições
            </Modal.Header>
            <Modal.Body>
              <Box mx={4} my={4} padding={6} bgColor="#FFF" borderRadius={20}> 
                
              
            Estes Termos & Condições de Uso (“Termos de Uso”), manifestam os termos e as condições extensíveis ao acesso e uso das utilidades da Plataforma Importa Coletiva por você, Usuário da Plataforma Importa Coletiva.
Introdução ao Acesso à Plataforma Importa Coletiva
O “Aceite” dos termos descritos a seguir é substancial para qualquer forma de utilização da Conta Importa Coletiva e dos serviços relacionados nesta Plataforma. Se você não concordar com os termos que se seguem, não poderá utilizar ou acessar o site a qualquer título. Se entendermos que as informações fornecidas por você não são coerentes ou verdadeiras, temos o direito de recusar e/ou cancelar o acesso a qualquer tempo, sem citação antecipada.  Além disso, o cadastro como Usuário não é permitido para pessoa juridicamente inativa. 
Restrições ao uso
Ainda que você tenha a autorização para usar os serviços da Plataforma Importa Coletiva, mantemos todos os direitos de propriedade intelectual que detemos sobre eles. 
Você só poderá utilizar a Plataforma Importa Coletiva em conformidade com o estabelecido neste Termo de Uso e com os elementos de serviços que integram o ecossistema da Plataforma. 
Os direitos sobre as criações intelectuais individuais, textos (direitos autorais); designs (direitos de design); e nomes e imagens usados na Plataforma Importa Coletiva.
Os direitos de propriedade intelectual podem pertencer a outro indivíduo ou a uma organização (marcas registradas); portanto, não vincule nossa marca a qualquer outra existente. Não publique nosso nome, logotipo, logomarca entre outros, indevidamente, sem nossa prévia autorização e de forma a causar engano.

Vigência e Encerramento destes Termos de Uso:

a) A permissão, a partir do Aceite do Usuário nesta ocasião ofertada para uso da Plataforma Importa Coletiva tem sua validade por tempo indeterminado. Contudo, a Importa Coletiva reserva o direito de dar por finalizada ou conter a disponibilização da Plataforma a qualquer tempo, ao seu critério exclusivo. 
b) Além disso, a Importa Coletiva reserva o direito de substituir parcialmente e/ou integralmente a proposta e organização da Plataforma, bem como rescindir prontamente com a decretação de falência ou insolvência social de qualquer das partes ou ainda com a quebra de contrato de qualquer dos deveres estabelecidos nestes Termos de Uso.
1. Para efeitos da atualidade e compreensão dos serviços da Importa Coletiva, as seguintes palavras e expressões terão as significações a eles referidos abaixo:


Importação Coletiva: A importação coletiva consiste no compartilhamento de um container entre diversos empreendedores, para armazenagem e transporte dos produtos adquiridos com diversos fornecedores, dispensando a necessidade de um único empreendedor importar da China produtos em uma quantidade suficiente para justificar os custos de um container individual.
Container Compartilhado: O container compartilhado entre diversos importadores é o que torna a importação coletiva possível e encaixa-se na modalidade LCL. Através da consolidação de diversos embarques em um mesmo container, o container compartilhado transforma em realidade o desejo, de muitos MEIs e PMEs, de importar produtos da China, acessando novos fornecedores e produtos com foco em elevar suas margens de lucro, bem como a competitividade de seus negócios.
Sua Nova Maneira de Importar: Diante dos entraves burocráticos que dificultam o acesso de micro e pequenas empresas nas atividades de importação, cresce a demanda destes por importações dentro dos parâmetros legais brasileiros com o objetivo de acessar produtos de qualidade, com custos reduzidos e dessa forma, aumentar a lucratividade e a competitividade. A Importa Coletiva, visando oferecer condições para a superação da complexidade da importação e compreendendo esta demanda por produtos chineses de qualidade, apresenta um conceito de negócio alinhado aos movimentos da sociedade atual que anseia cada vez mais por soluções disruptivas, conveniência, agilidade, inovação, tecnologia e atendimento humanizado.
Parceiro(s) Comercial(is): pessoa(s) jurídica(s) que vende(m) produtos ou serviços diretamente ao Usuário e que, por estar(em) cadastrado(s) à Importa Coletiva, se encontra(m) habilitado(s) para receber o pagamento das transações.
Usuário(s): pessoa(s) jurídica(s) regularmente constituída, com CNPJ válido e ativo, que aceitou este Contrato ao instalar o Aplicativo ou cadastra-se a Plataforma Importa Coletiva, inserindo os dados cadastrais no Formulário de Adesão à Plataforma Importa Coletiva e aceitar os Termos e Condições de Uso.
      

2. Conteúdo
Toda vez que houver menção aos assuntos “Importa Coletiva”, “nós” ou “nossos” estaremos nos referindo à Importa Coletiva; bem como toda vez que houver menção aos termos “você”, “Usuário”, “seu”, “sua”, estaremos nos referindo a você Usuário, que está de acordo com estes Termos de Uso para fazer uso e acesso à Plataforma.
3. Links
Nossos conteúdos do Blog e Plataforma podem envolver links para outros Websites e Blogs que não são de responsabilidade da Importa Coletiva. Nós não somos responsáveis pelo conteúdo destes links e Web sites. O Usuário contrai todos os riscos ao acessar estes hyperlinks.

4. Comentários
Você se compromete a não utilizar tecnologia robotizada, sem se limitar a "robôs", ou "offline readers," de maneira a enviar mais mensagens de demandas aos servidores da Importa Coletiva. É também bloqueada a captação de qualquer informação pessoal dos demais usuários da Plataforma Importa Coletiva.
Você não deverá utilizar a Plataforma e/ou publicar comentários com a finalidade de distribuir ou incentivar qualquer ideia e/ou opinião que por si mesma ou cuja transmissão:
Incentive ou provoque o desacato da lei, seja injuriosa, afrontosa, ultrajante, vergonhosa, obscena, ou, em geral, desigual a lei pública; 
Represente prática predatória, impertinência, obsessão, assédios, ameaça ou extorsão a terceiros;
estimule e/ou incentive atos ou conceitos discriminatórios em razão de raça, gênero, orientação sexual, religião, crença, deficiência, etnia, nacionalidade ou posição social;
Propicie o espalhamento ou inclua material com vírus, dados falsificados, ou qualquer outro elemento lesivo ou danoso.


 Privacidade & Lei Geral de Proteção de Dados Pessoais (LGPD).


A Importa Coletiva tem como principal foco, se consolidar como a maior plataforma de serviços para importação digital do mercado brasileiro. Temos como nossa proposta transformar o mercado de importação no Brasil por meio do empreendedorismo em comércio exterior e com base nisso buscamos estimular as micro, pequenas e médias empresas, oferecendo um ecossistema de ultra conveniência para as importações da China. Para executar esse objetivo se faz necessário alguns dados pessoais e/ou da pessoa jurídica de nossos usuários, e que será cadastrado em nossos sistemas com total atenção e respeito à privacidade.

A presente Política de Privacidade tem como fundamento a legislação brasileira, especialmente a Lei Geral de Proteção de Dados, Lei 13.709/2018, quando vigente. Art. 1º Esta Lei dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural.
Art. 5º “Para os fins desta Lei, considera-se: tratamento: toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração." 
Logo, informações como CPF, RG, localização, endereço, endereço IP, idade, etc. são consideradas dados pessoais.
Resumidamente, esta Política visa demonstrar o comprometimento da Organização em:
(i) Proteger os direitos dos colaboradores, clientes e parceiros;
(ii) Adotar processos e regras que assegurem o cumprimento, de forma abrangente, de normas e boas práticas relativas à proteção de dados pessoais;
(iii) Promover a transparência sobre a forma pela qual a Organização trata dados pessoais, e
(iv) Adotar medidas de proteção em relação a risco de incidente de segurança que envolva dados pessoais.

Considerações Finais:
O Usuário concorda que Estes Termos & Condições de Uso (“Termos de Uso”), da Importa Coletiva estarão sempre submissos à legislação brasileira, independentemente da instalação e geolocalização de acesso e utilização dos serviços.
Serão legitimas todas as mensagens enviadas aos Usuários pela Importa Coletiva no endereço de correio eletrônico principal que esteja no cadastro dos Usuários.
Caso haja cancelamento de qualquer consideração disponível nos Termos e Condições de Uso, esse não invalidará os demais intens. As condições que considerarmos anuladas e ineficazes serão reproduzidas ou mesmo refeitas, de forma a compreender a proposta de acordo com a legislação adequada, e aditada na nova versão destes Termos e Condições de Uso.
Fica eleito o foro da Comarca de São Paulo, Estado de São Paulo, como competente para dirimir quaisquer controvérsias decorrentes deste instrumento.
            </Box>
            
            </Modal.Body>
            <Modal.Footer justifyContent="center" bgColor="#4F4F4F"> 
              <Stack w="100%">
                <Center mt={6}>
                 <HStack alignItems="center">
                  <Box mr={2} bgColor="#F09701" w={5} h={5} borderRadius={50} _text={{color:"#4F4F4F", alignSelf:"center"}}> i </Box>
                  <Text alignSelf="center" color="#FFF">Você precisa ler e aceitar nossos termos para começar a usar nossa plataforma.</Text>
                </HStack>
                <Stack space={4} padding={8}>
                    <Button.Group space={2}>
                      <Button variant="outline" colorScheme="amber" _text={{color: "#FFF"}} onPress={() => {
                      setShowModal(false);
                    }}>
                        CANCELAR  
                      </Button>
                      <Button onPress={() => handleTermAgree()} variant="solid" colorScheme="amber" >
                        ACEITAR
                      </Button>
                      
                    </Button.Group>
                </Stack>
                </Center>

              </Stack>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
      )
  };
