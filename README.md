# Site Virtuosa Estética - Unidade Jaraguá do Sul

Site feito para o Projeto Extensionista (PEX) do curso de Análise e Desenvolvimento de Sistemas da Católica SC, 4º semestre, junto com a unidade de Jaraguá do Sul da Virtuosa Estética.

**Site publicado:** https://virtuosa-jaragua-do-sul.vercel.app/

> Este é um site acadêmico e não é o site oficial da clínica. Os preços são ilustrativos. As avaliações exibidas na página inicial são reais e foram retiradas da página oficial da unidade.

## Equipe

- Eduardo Stier
- Francine Martim Berto
- Jackeline Bileski de Miranda

## Contexto

A Virtuosa Estética é uma rede de clínicas de estética de Santa Catarina que funciona como franquia. A unidade de Jaraguá do Sul fica no bairro Vila Nova, na Rua 25 de Julho, e atende clientes da cidade e da região.

Hoje a rede usa uma página padrão para cada unidade. Essa página apresenta os serviços, mas não mostra preços, não tem simulação de valores e exibe as avaliações do Google como imagem.

## Problema identificado

Conversando com o responsável pela unidade, ele contou que muitas pessoas acham que a clínica é cara por ter uma estrutura bonita e moderna. Por causa disso, parte do público desiste antes mesmo de pedir um orçamento.

## Objetivo

Desenvolver um site para a unidade que deixe as informações de preço mais acessíveis e facilite o primeiro contato com a clínica.

Objetivos específicos:

- publicar uma tabela de preços de referência dos procedimentos;
- permitir que a cliente simule o valor do tratamento antes de agendar;
- responder dúvidas comuns sem a pessoa precisar ligar;
- mostrar os serviços, os resultados e a localização da unidade;
- facilitar o agendamento pelo WhatsApp.

## Público-alvo

Mulheres e homens de Jaraguá do Sul e região interessados em tratamentos estéticos, principalmente quem ainda não conhece a clínica e quer saber quanto vai pagar antes de ir até a unidade.

## Solução desenvolvida

O site tem oito páginas:

| Página | Conteúdo |
|---|---|
| Início | apresentação da unidade, destaques, pacotes e avaliações |
| Serviços | 39 procedimentos com filtro por categoria e busca |
| Preços | tabela por procedimento, pacotes e perguntas frequentes |
| Antes e depois | galeria com filtro por procedimento |
| Orçamento | simulador de valores em cinco etapas |
| A unidade | história, equipe, forma de atendimento, missão e visão |
| Contato | endereço, horários, formulário e mapa |
| 404 | página para endereços que não existem |

Principais funcionalidades:

- **Simulador de orçamento:** a cliente escolhe o procedimento, a área, o objetivo e se já fez tratamento antes. No final aparece um valor estimado e um botão que abre o WhatsApp com o resumo pronto.
- **Assistente virtual:** um chat com respostas prontas sobre agendamento, preços, localização e resultados, disponível em todas as páginas.
- **Busca e filtros:** na página de serviços é possível filtrar por categoria e buscar pelo nome do procedimento, mesmo sem acento.
- **Galeria de antes e depois:** filtro por procedimento e foto ampliada ao clicar.
- **Layout responsivo:** o site se adapta a celular, tablet e computador.

## Tecnologias

- HTML5
- CSS3
- JavaScript (sem frameworks)
- Git e GitHub
- Vercel para a publicação

## Estrutura de pastas

```
assets/
  css/     estilos gerais, componentes e páginas
  js/      menu, chatbot, simulador, galeria e serviços
  fonts/   fontes Montserrat e Satisfy
  img/     imagens do site
*.html     páginas do site
```

O número do WhatsApp e os valores usados no simulador ficam no arquivo `assets/js/config.js`.

## Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta no VS Code.
3. Clique com o botão direito no `index.html` e escolha "Open with Live Server".

Também é possível abrir o `index.html` direto no navegador.

## Limitações e próximos passos

- O formulário de contato e o simulador ainda não enviam dados para um sistema da clínica. Hoje o contato acontece pelo WhatsApp.
- As fotos do site e da galeria são ilustrativas e precisam ser trocadas por fotos reais, com autorização das clientes.
- Os preços, horários e informações da equipe precisam ser confirmados com a unidade antes de uma publicação oficial.
