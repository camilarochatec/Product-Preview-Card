# Product Preview Card - Componente com React e Tailwind CSS

Este projeto é uma solução para o desafio "[Product preview card component](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa)" do Frontend Mentor, construído com o objetivo de demonstrar habilidades em componentização, estilização moderna e design responsivo.

O resultado é um componente de produto limpo, reutilizável e fiel ao design proposto, refletindo as melhores práticas de desenvolvimento front-end com React.

### ✨ **[Ver Demonstração Ao Vivo 🚀](https://www.google.com/search?q=https://SEU_LINK_DE_DEPLOY_AQUI.com)**

*(**IMPORTANTE:** Faça o deploy do seu projeto em plataformas como Vercel, Netlify ou GitHub Pages e cole o link aqui\! Recrutadores raramente clonam projetos, então um link ao vivo é essencial.)*

-----

### Screenshot do Projeto

*(**DICA:** Grave um GIF rápido mostrando a transição do layout mobile para o desktop. Isso impressiona muito mais que uma imagem estática. Você pode usar ferramentas como o ScreenToGif.)*

-----

## 💻 Tecnologias e Conceitos Aplicados

Este projeto não é apenas um card, mas uma demonstração prática de competências essenciais para um desenvolvedor front-end:

  * **React:**

      * **Componentização Limpa e Reutilizável:** A interface foi dividida em componentes lógicos (`ProductCard`, `ProductImage`, `ProductInfo`, `AddToCartButton`), facilitando a manutenção e escalabilidade.
      * **Props:** Uso de `props` para passar dados e customizar componentes de forma dinâmica, como o texto do botão de "Adicionar ao Carrinho".

  * **Tailwind CSS:**

      * **Estilização Utility-First:** Construção de uma interface complexa e customizada sem escrever uma linha de CSS tradicional, resultando em um desenvolvimento mais rápido e consistente.
      * **Design Responsivo:** Implementação de uma abordagem *Mobile-First*, com classes responsivas (`md:flex`, `md:hidden`) para garantir que o componente se adapte perfeitamente a qualquer tamanho de tela.
      * **Customização do Tema:** O arquivo `tailwind.config.js` foi configurado para incluir as cores e fontes específicas do projeto (`Fraunces` e `Montserrat`), demonstrando capacidade de adaptar a ferramenta às necessidades do design.

  * **Vite:**

      * Utilização de um ambiente de desenvolvimento moderno e ultra-rápido, proporcionando uma excelente experiência de desenvolvimento com *Hot Module Replacement* (HMR).

  * **Boas Práticas:**

      * Estrutura de arquivos organizada e semântica.
      * Código limpo e de fácil leitura.

-----

## 📁 Estrutura de Pastas

O projeto foi organizado com uma estrutura clara, separando componentes, assets e a lógica principal da aplicação.

```
/src
|-- /assets
|   |-- image-product-desktop.jpg
|   |-- image-product-mobile.jpg
|
|-- /components
|   |-- AddToCartButton.jsx
|   |-- ProductImage.jsx
|   |-- ProductInfo.jsx
|   |-- ProductCard.jsx
|
|-- App.jsx
|-- main.jsx
|-- index.css
```

-----

## 🚀 Como Executar o Projeto Localmente

Caso queira explorar o código em sua máquina, siga os passos abaixo.

**Pré-requisitos:**

  * [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
  * [Git](https://git-scm.com/)


```bash
# 1. Clone o repositório
git clone https://SEU_LINK_DO_REPOSITORIO_AQUI.git

# 2. Navegue até o diretório do projeto
cd nome-do-projeto

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Após executar os comandos, abra [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) (ou a porta indicada no terminal) em seu navegador.

-----

## 📬 Contato

**Camila Rocha**

  * **LinkedIn:** [https://www.linkedin.com/in/seu-usuario/](https://www.google.com/search?q=https://www.linkedin.com/in/seu-usuario/)
  * **Email:** seu.email@exemplo.com

Obrigado pela visita! 👋