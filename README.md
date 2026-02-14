# Cardápio Interativo
- [https://mdlocadora.vercel.app/](https://modelocardapiointerativo.vercel.app/)

O **Cardápio Interativo** é uma plataforma digital desenvolvida para facilitar a gestão de pedidos e o controle de acesso em estabelecimentos alimentícios, proporcionando segurança, praticidade e eficiência tanto para administradores quanto para clientes e funcionários.

## Funcionalidades Principais

### 1. Autenticação e Controle de Acesso

- **Cadastro e Login de Usuários**: Permite o registro e autenticação de administradores, funcionários e clientes.
- **Aprovação de Usuários**: Administradores podem aprovar ou rejeitar novos cadastros.
- **Políticas de Segurança**: Implementação de políticas de acesso seguro utilizando Supabase e RLS (Row Level Security).

### 2. Gestão de Pedidos

- **Dashboard do Funcionário**: Interface para funcionários visualizarem e gerenciarem pedidos dos clientes.
- **Dashboard do Administrador**: Ferramentas administrativas para controle de usuários, pedidos e relatórios.
- **Pedido do Cliente**: Página dedicada para clientes realizarem pedidos de forma simples e intuitiva.

### 3. QR Code

- **Geração de QR Code**: Geração de QR Codes únicos para identificação de usuários e pedidos.
- **Leitura de QR Code**: Leitura de QR Codes para facilitar o acesso e autenticação.
- **Exibição de QR Code**: Visualização do QR Code do usuário para uso em diferentes fluxos do sistema.

### 4. Integração com Supabase

- **Banco de Dados em Nuvem**: Utilização do Supabase para autenticação, armazenamento e políticas de segurança.
- **Migrações Automatizadas**: Scripts de migração para atualização do banco de dados.

### 5. Interface Moderna

- **Frontend em React + Vite**: Interface responsiva e moderna utilizando React, Vite e Tailwind CSS.
- **Componentização**: Componentes reutilizáveis para QR Code, autenticação, notificações, etc.

### 6. Outras Funcionalidades

- **Notificações Toast**: Feedback visual para ações do usuário.
- **Configuração para Deploy**: Arquivos de configuração para Docker, Vercel, Nginx e ambiente de produção.

## Estrutura do Projeto

- **api/**: Endpoints de autenticação, administração e integração com Supabase.
- **public/**: Arquivos públicos e assets estáticos.
- **server/**: Backend Node.js para integração e serviços adicionais.
- **src/**: Código-fonte do frontend (React), componentes, contextos e páginas.
- **supabase/**: Migrações e políticas de banco de dados.

## Tecnologias Utilizadas

- **React**
- **Vite**
- **Tailwind CSS**
- **Supabase**
- **Node.js**

## Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure as variáveis de ambiente e o Supabase conforme necessário.
3. Inicie o frontend:

   ```bash
   npm run dev
   ```

4. (Opcional) Execute o backend e scripts auxiliares conforme a necessidade.

## Deploy na Vercel

Para realizar o deploy do projeto na Vercel:

1. Faça login em sua conta Vercel e importe o repositório do projeto.
2. Certifique-se de que o projeto está configurado para usar o comando de build `npm run build` e o diretório de saída `dist`.
3. O arquivo `vercel.json` já está configurado para redirecionar rotas corretamente.
4. Adicione as variáveis de ambiente necessárias no painel da Vercel.
5. Clique em "Deploy" e aguarde a publicação.

## Estrutura de Pastas do Projeto

```
├── _redirects
├── CATEGORY_ORDER_FIX.patch
├── Dockerfile
├── eslint.config.js
├── index.html
├── nginx.conf
├── package.json
├── postcss.config.js
├── removebg.py
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
├── api/
│   ├── _lib/
│   ├── admin/
│   └── auth/
├── public/
│   └── assets/
├── server/
│   └── index.js
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── components/
│   ├── contexts/
│   ├── lib/
│   └── pages/
├── supabase/
│   └── migrations/
```

## Contato

**Iagor Lourenço**

- GitHub: [https://github.com/iagorlrnc](https://github.com/iagorlrnc)
- LinkedIn: [linkedin.com/in/iagorlrnc/](https://www.linkedin.com/in/iagorlrnc/)
- Email: theiagorlourenco@gmail.com
- WhatsApp: (63) 99123-7836

---

Desenvolvido por Iagor Lourenço</content>
