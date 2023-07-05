# Sistema de Apostas

Projeto desenvolvido para a disciplina de Desenvolvimento de Aplicativos Web. O objetivo do site é permitir que os usuários realizem apostas em uma roleta virtual.


## Requisitos:
## Parte 1 (Administrador):
1. Realizar o cadastro de novos usuários com nomes, logins (únicos) e senhas.
2. Definir as cores disponíveis na roleta.
3. Registrar as apostas dos usuários.
4. Girar a roleta e determinar o resultado.
5. Distribuir o prêmio de acordo com as apostas vencedoras.

## Parte 2 (Usuário):
1. Permitir que os usuários façam login ou cadastrem-se no sistema.
2. Após o login, exibir o nome do usuário e o saldo disponível para apostas.
3. Permitir que os usuários selecionem a cor desejada e apostem uma quantia nela.
4. Girar a roleta e mostrar o resultado.
5. Distribuir o prêmio para os usuários que acertarem a cor.

### Tecnologias Utilizadas:
- Python
- Django
- Bootstrap
- JavaScript

## Usabilidade:
1. Instale as dependências do projeto com o comando `pip install -r requirements.txt`.
2. Execute as migrações do banco de dados com os comandos `python manage.py makemigrations` e `python manage.py migrate`.
3. Crie um superusuário com o comando `python manage.py createsuperuser`.
4. Inicie o servidor com o comando `python manage.py runserver`.
5. Acesse o sistema através do endereço `http://localhost:8000` ou `http://127.0.0.1:8000/`.

## História de usuário:
*Apostas*
* Eu como usuário apostador gostaria de selecionar a cor desejada na roleta e apostar uma quantia nela.
* Eu como usuário gostaria de saber o valor do meu saldo antes de fazer uma aposta.
* Eu como usuário gostaria de saber o resultado da roleta após a aposta.

*Usuário*
* Eu como usuário gostaria de maior facilidade e segurança na criação de minha conta.

*Admin*
* Eu como Admin gostaria de gerenciar usuários.

*Seleção de cor*
* Eu como usuário gostaria de ver todas as cores disponíveis na roleta antes de fazer minha aposta.
* Eu como usuário gostaria de ver o resultado da roleta após o giro.