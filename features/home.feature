Funcionalidade: Catálogo de Livros - Home

  Como usuário do sistema
  Quero visualizar, buscar e filtrar livros no catálogo
  Para encontrar facilmente os livros de meu interesse

  Cenário: Visualizar o catálogo de livros ao acessar a Home
    Dado que estou na página inicial do catálogo de livros
    Então devo ver uma lista de livros disponíveis

  Cenário: Buscar livros pelo título
    Dado que estou na página inicial do catálogo de livros
    Quando digito "Cristianismo" no campo de busca
    Então devo ver apenas os livros cujo título contém "Cristianismo"

  Cenário: Buscar livros pelo autor
    Dado que estou na página inicial do catálogo de livros
    Quando digito "Lewis" no campo de busca
    Então devo ver apenas os livros cujo autor contém "Lewis"

  Cenário: Filtrar livros por categoria
    Dado que estou na página inicial do catálogo de livros
    Quando seleciono a categoria "Apologética"
    Então devo ver apenas os livros que pertencem à categoria "Apologética"

  Cenário: Buscar e filtrar livros ao mesmo tempo
    Dado que estou na página inicial do catálogo de livros
    E digito "C.S." no campo de busca
    Quando seleciono a categoria "Apologética"
    Então devo ver apenas os livros do autor "C.S. Lewis" na categoria "Apologética"

  Cenário: Limpar filtros e busca
    Dado que realizei uma busca ou selecionei uma categoria
    Quando clico no botão "Limpar Filtro"
    Então devo ver novamente todos os livros do catálogo
