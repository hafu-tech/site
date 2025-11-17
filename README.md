<div align="center">
 ![HafuTech Logo](site/web-data-viz/public/assets/logo.png)
  <h1> HafuTech</h1>
  <h2>Aplicação Web para Monitoramento e Análise de Evasão Escolar</h2>
  <h3>✨ Nossa Educação, Nosso Futuro ✨</h3>
</div>
<h3><b>📄 1. Descrição Geral</b></h3>
<p>Esta aplicação web implementa um sistema completo de monitoramento e análise de dados sobre evasão escolar no Brasil. Ela realiza a autenticação de usuários, visualização de indicadores educacionais através de dashboards interativos e gestão de avisos institucionais. Após a autenticação, os dados são armazenados no sessionStorage e as informações são expostas através de uma interface web responsiva. O objetivo é centralizar informações educacionais relevantes e fornecer insights visuais para tomada de decisão baseada em dados.</p>
<h3><b>🛠️ 2. Fluxo de Funcionamento</b></h3>
<p><b>1. O usuário acessa a aplicação e é direcionado para a página inicial.</b></p>
<p><b>2. A partir dessa página, existem 2 opções: realizar cadastro ou fazer login.</b></p>
<p><b>3. Realizando cadastro:</b></p>
<p>&nbsp;&nbsp;&nbsp;3.1. O usuário informa nome, e-mail e senha.</p>
<p>&nbsp;&nbsp;&nbsp;3.2. O sistema valida os dados no frontend.</p>
<p>&nbsp;&nbsp;&nbsp;3.3. Envia requisição POST para o backend.</p>
<p>&nbsp;&nbsp;&nbsp;3.4. O backend insere os dados na tabela Funcionario do MySQL.</p>
<p>&nbsp;&nbsp;&nbsp;3.5. O usuário é redirecionado para a página de login.</p>
<p><b>4. Fazendo login:</b></p>
<p>&nbsp;&nbsp;&nbsp;4.1. O usuário informa e-mail e senha.</p>
<p>&nbsp;&nbsp;&nbsp;4.2. O sistema valida as credenciais no banco de dados MySQL.</p>
<p>&nbsp;&nbsp;&nbsp;4.3. Se válido, armazena os dados no sessionStorage.</p>
<p>&nbsp;&nbsp;&nbsp;4.4. O usuário é direcionado para a área logada com acesso ao Dashboard e Mural de Avisos.</p>
<p><b>5. Visualizando o Dashboard:</b></p>
<p>&nbsp;&nbsp;&nbsp;5.1. O usuário acessa o Dashboard através do menu lateral.</p>
<p>&nbsp;&nbsp;&nbsp;5.2. O sistema carrega dados de evasão escolar (2009-2023).</p>
<p>&nbsp;&nbsp;&nbsp;5.3. Os gráficos são renderizados usando ApexCharts.</p>
<p>&nbsp;&nbsp;&nbsp;5.4. KPIs destacam a região mais afetada (Nordeste - 7,8%) e ano escolar crítico (3º Ano EM - 8,5%).</p>
<p>&nbsp;&nbsp;&nbsp;5.5. O usuário pode filtrar dados por região.</p>
<p><b>6. Gerenciando Avisos:</b></p>
<p>&nbsp;&nbsp;&nbsp;6.1. O usuário acessa o Mural de Avisos.</p>
<p>&nbsp;&nbsp;&nbsp;6.2. Pode criar novos avisos preenchendo título e descrição.</p>
<p>&nbsp;&nbsp;&nbsp;6.3. As operações são realizadas via requisições HTTP (POST, GET, PUT, DELETE).</p>
<p>&nbsp;&nbsp;&nbsp;6.4. Os dados são armazenados na tabela comentario do MySQL.</p>
<p>&nbsp;&nbsp;&nbsp;6.5. Pode editar ou excluir avisos existentes.</p>
<p><b>7. Gerenciando Perfil:</b></p>
<p>&nbsp;&nbsp;&nbsp;7.1. O usuário pode alterar sua senha ou excluir permanentemente sua conta.</p>
<p>&nbsp;&nbsp;&nbsp;7.2. Ao sair, o sessionStorage é limpo e o usuário retorna à página inicial.</p>
<h3><b>✅ Conclusão</b></h3>
<p>A aplicação reúne, de forma organizada, todas as etapas de autenticação, visualização de dados educacionais e gestão de avisos. Ela automatiza o monitoramento de indicadores de evasão escolar, garantindo rapidez e clareza na análise. Com a autenticação segura, dashboards interativos usando ApexCharts, armazenamento no MySQL e interface web responsiva, o HafuTech entrega um fluxo de dados confiável e fácil de usar. Dessa forma, o projeto cumpre seu objetivo de oferecer uma plataforma de análise educacional bem estruturada e pronta para futuras melhorias.</p>
