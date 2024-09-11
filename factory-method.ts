/**
 * A classe Creator declara o método fábrica que deve retornar um objeto da classe Product.
 * As subclasses do Creator geralmente fornecem a implementação desse método.
 */
abstract class Creator {
    /**
     * Note que o Creator também pode fornecer uma implementação padrão para o método fábrica.
     */
    public abstract metodoFabrica(): Produto;

    /**
     * Apesar do nome, a responsabilidade principal do Creator não é criar produtos.
     * Normalmente, ele contém alguma lógica de negócio principal que depende de objetos Produto
     * retornados pelo método fábrica. As subclasses podem alterar indiretamente essa lógica de
     * negócio sobrescrevendo o método fábrica e retornando um tipo diferente de produto.
     */
    public algumaOperacao(): string {
        // Chama o método fábrica para criar um objeto Produto.
        const produto = this.metodoFabrica();
        // Agora, usa o produto.
        return `Creator: O código do creator trabalhou com ${produto.operacao()}`;
    }
}

/**
 * Os Creators Concretos sobrescrevem o método fábrica para alterar o tipo de produto resultante.
 */
class CreatorConcreto1 extends Creator {
    /**
     * Note que a assinatura do método ainda usa o tipo abstrato Produto,
     * embora o produto concreto seja realmente retornado pelo método.
     * Desta forma, o Creator pode permanecer independente das classes de produtos concretos.
     */
    public metodoFabrica(): Produto {
        return new ProdutoConcreto1();
    }
}

class CreatorConcreto2 extends Creator {
    public metodoFabrica(): Produto {
        return new ProdutoConcreto2();
    }
}

/**
 * A interface Produto declara as operações que todos os produtos concretos devem implementar.
 */
interface Produto {
    operacao(): string;
}

/**
 * Os Produtos Concretos fornecem várias implementações da interface Produto.
 */
class ProdutoConcreto1 implements Produto {
    public operacao(): string {
        return '{Resultado do ProdutoConcreto1}';
    }
}

class ProdutoConcreto2 implements Produto {
    public operacao(): string {
        return '{Resultado do ProdutoConcreto2}';
    }
}

/**
 * O código do cliente trabalha com uma instância de um criador concreto, embora através
 * de sua interface base. Enquanto o cliente continuar a trabalhar com o criador via a interface
 * base, é possível passar qualquer subclasse do criador.
 */
function codigoCliente(criador: Creator) {
    // ...
    console.log('Cliente: Eu não conheço a classe do criador, mas ainda funciona.');
    console.log(criador.algumaOperacao());
    // ...
}

/**
 * A aplicação escolhe o tipo de criador dependendo da configuração ou ambiente.
 */
console.log('App: Iniciado com o CreatorConcreto1.');
codigoCliente(new CreatorConcreto1());
console.log('');

console.log('App: Iniciado com o CreatorConcreto2.');
codigoCliente(new CreatorConcreto2());
