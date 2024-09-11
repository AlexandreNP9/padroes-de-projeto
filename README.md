# padroes-de-projeto
Atividade sobre Padrões de Projeto da Disciplina de Engenharia de Software

Escolha três padrões de projeto (um comportamental, um criacional e um estrutural). Use como base o catálogo do Refactoring Guru: https://refactoring.guru/pt-br/design-patterns  

Crie um repositório no GitHub. Coloque os códigos de exemplo de cada padrão em uma linguagem de programação qualquer. Demonstre para que serve o padrão escolhido, explicando qual problema ele resolve, qual a solução, diagrama UML que descreve o propósito geral do padrão escolhido e o código explicado no Readme.md do repositório com o exemplo.  

Documente todos os 3 padrões em um mesmo repositório.  

----------

# Factory Method
- TIPO: Criacional  
- PROBLEMA: Resolve o problema de criar objetos de produtos sem especificar suas classes concretas  
- SOLUÇÃO: O Factory Method define um método, que deve ser usado para criar objetos em vez da chamada direta ao construtor (operador new). As subclasses podem substituir esse método para alterar a classe de objetos que serão criados  
- UML: O diagrama UML mostra a relação entre as classes no padrão Factory Method 
- CÓDIGO: no arquivo factory-method.ts  

# Adapter 
- TIPO: Estrutural  
- PROBLEMA: Permite a colaboração de objetos incompatíveis  
- SOLUÇÃO: O Adapter atua como um wrapper entre dois objetos. Ele captura chamadas para um objeto e as deixa reconhecíveis tanto em formato como interface para este segundo objeto  
- UML: O diagrama UML mostra a relação entre as classes Target, Adaptee, Adapter e Client no padrão Adapter.
- CÓDIGO: no arquivo adapter.ts  

# Chain of Responsability
- TIPO: Comportamental  
- PROBLEMA: Permite que você passe pedidos por uma corrente de handlers  
- SOLUÇÃO: Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente  
- UML: O diagrama UML mostra a estrutura do padrão Chain of Responsibility e a relação entre os manipuladores  
- CÓDIGO: no arquivo chain-of-responsability.ts  