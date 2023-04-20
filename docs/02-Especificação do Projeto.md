# Especificações do Projeto

A definição do problema a ser resolvido e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos próprios integrantes do grupo, os quais correspondem ao público-alvo. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários. 

## Personas
| <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/bcc905714254facee4994c3c50a6e6ef642ed296/docs/img/amandaalves.png" width="150" title="Amanda Alves" align="left"> | <h2 align="right"><b>Amanda Alves</b></h2></br> <p align="left">Idade: 34 <br/> Ocupação: Analista de projetos em empresa de médio porte. <br/> Aplicativos: Instagram, Flipboard, Facebook, LinkedIn, Jornais digitais. Hobbies: <ul><li>Gosta de ler.</li> <li>Assiste series e documentários.</li> <li>Corre.</li> <li>Pesquisa sobre inovações no mercado de trabalho.</li></ul> </p> |
| --- | --- |
| Motivações <ul><li>Melhorar de posição no mercado de trabalho.</li><li>Acredita que a área de TI seja promissora. </li><li>Suprir a carência de profissionais no mercado de trabalho na área de TI. </li></ul> | Frustrações <br/> <ul><li>Não sabe por onde começar a estudar.</li> <li>Não atender aos requisitos básicos exigidos nas vagas de emprego.</li> <li>Não ter um plano de estudos eficiente, nem saber como encontrar conteúdos de qualidade.</li></ul> |
| <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t16-e1-proj-web-t16-time10-devplay/blob/bcc905714254facee4994c3c50a6e6ef642ed296/docs/img/carlosgomes.png" width="150" title="Carlos Gomes" align="left"> | <h2 align="right"><b>Carlos Gomes</b></h2></br> <p align="left">Idade: 20 <br/> Ocupação: Estudante de Sistema de Informação <br/> Aplicativos: Bancos, Facebook, Instagram, Youtube. Hobbies: <ul><li>Jogos RPG.</li> <li>Gosta de pesquisar sobre investimentos e tecnologia.</li> <li>Assiste a séries e lives.</li> <li>Joga pelada com os amigos todo domingo.</li></ul> </p> |
| Motivações <ul><li>Ter uma carreira boa e bem remunerada como do seu tio que é desenvolvedor.</li><li>Poder trabalhar em casa. </li><li>Aprender sobre tecnologia e inovações. </li></ul> | Frustrações <br/> <ul><li>Não ter disciplina para estudar sozinho sem orientações.</li> <li>Se sentir sobrecarregado com a quantidade de conteúdo a ser estudado e não saber por onde começar.</li> <li>Ter dificuldade de encontrar cursos de qualidade dentre os vários conteúdos disponíveis.</li></ul> |



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Eu como Amanda Alves| Desejo acessar um conteúdo         |Para ter um currículo alinhado com as necessidades do que o mercado de TI está exigindo|
|Eu como Amanda Alves| Desejo adicionar um conteúdo à Minha Lista de cursos favoritos | Para ter agrupado todos os conteúdos que desejo assistir ao longo do tempo|
|Eu como Amanda Alves| Desejo Visualizar os cursos que adicionei na minha lista |Para ter um roteiro de aprendizagem e planejar os próximos tópicos a serem estudados|
|Eu como Amanda Alves| Desejo continuar assistindo um curso que parei em outro dia | Para não ter que começar o vídeo do início e agilizar o estudo|
|Eu como Amanda Alves| Acessar aulas na temática de construção de sites para iniciantes| Para poder dar prosseguimento a minha jornada de migração de carreira e iniciar meu primeiro portfólio|
|Eu como Carlos Gomes| Desejo acessar a plataforma usando login e senha|Para ter acesso à Minha Lista, Continuar Assistindo e Configurações de forma individualizada  |
|Eu como Carlos Gomes| Desejo remover um conteúdo da minha lista de favoritos| Para poder ter apenas os conteúdos que me interessam e que posso ter adicionado por impulso|
|Eu como Carlos Gomes| Desejo buscar um conteúdo com o tema de um framework em alta no momento"| Para acessar um tema específico e criar meu primeiro site e iniciar meu portifólio e ter mais chance de conseguir um estágio |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir. 

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues. 

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-1.0 | Ao acessar a plataforma exibir a logo DEVPLAY até que o carregamento das informações iniciais e validação do usuário esteja concluída.| BAIXA | 
|RF-1.1 | Deve permitir navegação pelas setas.| MÉDIA |
|RF-2.0 | Caso o usuário não tenha se autenticado ou esteja com login expirado apresentar um formulário com campo de login e senha. Exibir botões de confirmação, esqueci a senha e cadastro.| BAIXA |
|RF-2.1 | Na Página de Criação de Conta exibir um campo de texto com Nome, Email e senha. E um botão para confirmar o cadastro. | BAIXA |
|RF-3.0 | Em Todas as Página exibir uma barra lateral estática navegável por click para acessar as páginas Busca, Favoritos, Continuar Assistindo e Perfil.| MÉDIA |
|RF-3.1 | Na Página Inicial exibir o conteúdo em formato de trilhos navegáveis com itens. | ALTA |
|RF-3.2 | Cada item do trilho deve ser composto por N itens, até um total de 30 itens.| BAIXA |
|RF-3.3 | Cada item do trilho deve ser clicável e navegável para o conteúdo.| ALTA |
|RF-3.4 | Os trilhos podem ser de diversos tipos. | BAIXA |
|RF-3.5 | O trilho do poster deve exibir uma imagem que representa graficamente o conteúdo disponível.| ALTA |
|RF-3.6 | O trilho do tipo vídeo deve ter sua thumbnail devidamente carregada. | MÉDIA |
|RF-3.7 | Cada trilho será classificado por temas e/ou roadmap de carreira e possuir um título acima.| ALTA |
|RF-3.8 | Cada item selecionado deve abrir um painel com informações mais detalhadas e botão de acesso ao conteúdo. | MÉDIA |
|RF-3.9 | O painel deve permitir que o usuário adicione e remova quaisquer conteúdos aos favoritos. | BAIXA |
|RF-3.10 | Na página inicial exibir um trilho de conteúdo Recomendado que conteúdo os melhores títulos e vídeos do momento.| MÉDIA |
|RF-3.11 | Na página inicial exibir um trilho de Novidades com os conteúdos mais recentes.| MÉDIA |
|RF-4.0 | Na Página de Busca possuir um campo de texto que permita ao usuário digitar um texto. | ALTA |
|RF-4.1 | Exibir como resultado da busca roadmaps de carreira e títulos exibidos em formato de grid com itens navegáveis.| ALTA |
|RF-5.0 | Na página de Continuar Assistindo exibir os conteúdos que o usuário não terminou de assistir em formato de grid navegáveis.| BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-1.0 | O código fonte deve ser publicado estar acessível publicamente no Github.| ALTA | 
|RNF-1.1 | Os arquivos estáticos devem estar disponíveis em CDN  | | 
|RNF-2.0 | Deve ser responsiva no qual deve se ajustar a resolução utilizada pela pessoa usuário. Deve-se utilizar a regra mobile first.| BAIXA |
|RNF-2.1 | O site deve ser acessível para deficientes visuais (mecanismos de navegação e apresentação do site).|  |
|RNF-3.0 | Deve ser compatível com os mais diversos navegadores do mercado. (Google Chorme, Opera, Microsoft Edge).| BAIXA |
|RNF-4.0 | A manutenibilidade do software para modificação ou adaptação deve ser assegurada seguindo os frameworks padrões da indústria | MÉDIA |
|RNF-5.0 | O site deve ser ter um tempo médio de resposta às requisições dos usuários na média de 5 segundos.| MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 12/07/2023.|
|RE-02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end.|
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho.|

