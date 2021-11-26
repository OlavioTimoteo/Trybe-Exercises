
  

# Exercícios 19.1

  



## Introdução ao Docker

1.  No  [Docker Hub](https://hub.docker.com/search?q=&type=image) , utilizando a caixa de busca  _(  "Search for great content"  )_ ,  **busque pela imagem da Distribuição Linux  Debian** ;

2.  Uma vez que encontrar a  **imagem oficial** , acesse-a  _(clicando em seu card)_ e verifique na página de detalhes,  **se existe algum comando para baixarmos a imagem localmente sem ter que criar um  container  para isso** ;

3.  **Baixe a imagem utilizando a  tag  :  stable-slim** , que é uma versão reduzida da distribuição;
R: `docker pull debian:unstable-slim`

4.  Após baixar a imagem para seu computador local,  **crie e execute um  container  no modo interativo utilizando essa imagem como referência** _(não esqueça referenciar a  tag  )_ ;
R: `docker container run debian:unstable-slim`

5.  No terminal,  **você deve conseguir rodar o comando  `cat /etc/*-release`** , que vai retornar os dados da distribuição  `Debian`  que está sendo rodada dentro do  container  ;

6.  **Encerre o terminal** ;
R: `exit`

7.  **Verifique na sua lista de containers** , qual o  container  é referente ao exercício que acabou de praticar;
R: `docker container ls -a`

8.  **Inicie o mesmo  container  novamente** , sem criar outro. Valide se ele está ativo na lista de containers;
R: `docker container start b038054fd3e6 `

9.  **Retome o  container  que foi criado anteriormente nesse exercício** ;
 
10. **Rode o comando  `cat /etc/debian_version`** que deve retornar a versão atual do sistema do  container  ;

11. **Encerre o terminal** ;
R: `exit`

12.  **Remova somente o  container  criado para esse exercício** ;
R: `docker container rm b038054fd3e6`

13. _(Bônus)_ **Crie e rode de modo interativo em modo 'Cleanup'** , a imagem  andrius/ascii-patrol  ;
R:`docker container run -it --rm andrius/ascii-patrol`

14. _(Bônus)_ **Encerre o  container  utilizando os botões [  ctrl  ] + [  c  ].**
R: `ctrl + c`
