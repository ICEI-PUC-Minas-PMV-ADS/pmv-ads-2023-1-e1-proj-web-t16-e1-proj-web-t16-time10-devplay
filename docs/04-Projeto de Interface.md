
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

## Fluxograma

![Exemplo de UserFlow](img/fluxograma.jpg)

Fluxo de usuário (User Flow ou Fluxograma) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe. Em nosso modelo, na notação BPMN, temos um fluxo em que o usuário inicia sua interação ao entrar no site, passando por páginas a depender de suas preferências.

## Wireframes

### Tela - Home-Page (Index)

A página de homepage homepage apresenta uma seleção de conteúdo atraente para o usuário, com destaque para os mais populares ou recomendados. Será também nessa página em que o serviço será apresentado ao usuário visitante, servindo como uma página de "lead". A página deve conter um botão de inscrição para incentivar os usuários a explorarem o conteúdo e se cadastrarem no site.

Imagem em falta.

### Tela - Carregamento 

Antes de fato exibir o conteúdo em si, é feita a obtenção de informações essenciais ao funcionamento do site. Dentre essas informações são configurações remotas, download de assets, recuperação de caches locais, entre outros. Durante esse período o site entra em modo _bootstrap_ e esta tela é exibida.

<div>
<img align="center"  width="600px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/main/docs/img/loadingpage.png">
</div>

### Tela - Criar Conta

Permite aos usuários se registrar fornecendo informações como nome, endereço de e-mail e uma senha escolhida pelo usuário. Ele funciona ao solicitar que o usuário insira essas informações em um formulário, que inclui uma confirmação de senha e pode incluir outros campos, como data de nascimento.

Após enviar as informações de registro, o componente de criar conta verifica se as informações fornecidas são válidas e únicas. Se tudo estiver correto, o usuário é redirecionado para a página de Onboarding.

<div>
<img align="center"  width="600px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/main/docs/img/signuppage.png">
</div>

### Tela - Pesquisa de Onboarding

Essa tela é responsável para que o usuário seja recomendado com conteúdos adequados referentes ao seu nível de conhecimento atual. Serão aplicados perguntas, como familiaridade com ferramentas, tempo de experiência, e a partir disso, definir o nível do usuário.

<div>
<img align="center"  width="600px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/main/docs/img/onboardingpage.png">
</div>

### Tela - Login

Permite aos usuários acessar uma área restrita do site, com um nome de usuário e uma senha. Ele funciona ao solicitar que o usuário insira suas informações de login em um formulário e, em seguida, verifica essas informações em um banco de dados ou sistema de autenticação. Se as informações estiverem corretas, o usuário é redirecionado para a área restrita do site.

<div>
<img align="center"  width="600px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/main/docs/img/loginpage.png">
</div>

### Tela - Esqueceu a senha

Permite aos usuários recuperarem o acesso à sua conta caso tenham esquecido sua senha. Ele funciona ao solicitar que o usuário insira seu endereço de e-mail ou nome de usuário no site e, em seguida, enviar um e-mail de redefinição de senha para o endereço de e-mail associado à conta.

O e-mail de redefinição de senha geralmente contém um link seguro que leva o usuário de volta ao site para criar uma nova senha. Depois de criar uma nova senha, o usuário pode acessar sua conta novamente.

<div>
<img align="center"  width="600px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/main/docs/img/forgetpasswordpage.png">
</div>

### Tela - Área logada com trilhos

Após o usuário entrar no sistema, ele será redirecionado para esse página. Serão exibidos horizontalmente os trilhos navegáveis de conteúdos, sendo exibido uma barra lateral estática navegável por click para acessar páginas de Busca, Favoritos, Continuar Assistindo e Perfil.

<div>
<img align="center"  width="600px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/main/docs/img/indexpage.png">
</div>

### Tela - Resultados de busca

Tela que apresentará os resultados de busca realizada pelo usuário.

Imagem em falta.

### Tela - Conteúdos favoritos

Tela que apresentará os conteúdos adicionados aos favoritos pelo usuário.

<div>
<img align="center"  width="600px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/main/docs/img/favoritepage.png">
</div>

### Tela - Continuar assistindo

Tela que exibirá os conteúdos que estão sendo assistidos pelo usuário naquele momento.

Imagem em falta.

### Tela - Informações detalhadas do conteúdo

Essa tela exibirá informações detalhadas sobre o conteúdo em que foi clicado, contendo informações como autor, um breve introdução e ao que se refere aquele conteúdo.

<div>
<img align="center"  width="600px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/main/docs/img/previewcontentpage.png">
</div>

### Tela - Reprodução do conteúdo

Nessa tela o conteúdo escolhiod pelo usuário será exibido. É composta pelo player com _media controls_ e informações adicionais dependendo do contexto da reprodução.

<div>
<img align="center"  width="600px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/main/docs/img/playcontent.png">
</div>
