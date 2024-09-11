/**
 * A interface Handler declara um método para construir a cadeia de manipuladores.
 * Também declara um método para executar uma solicitação.
 */
interface Manipulador<Requisicao = string, Resultado = string> {
    setProximo(manipulador: Manipulador<Requisicao, Resultado>): Manipulador<Requisicao, Resultado>;

    manipular(requisicao: Requisicao): Resultado;
}

/**
 * O comportamento padrão de encadeamento pode ser implementado em uma classe base de manipulador.
 */
abstract class ManipuladorAbstrato implements Manipulador {
    private proximoManipulador: Manipulador;

    public setProximo(manipulador: Manipulador): Manipulador {
        this.proximoManipulador = manipulador;
        // Retornar o manipulador daqui permite que a gente encadeie os manipuladores de uma maneira conveniente, como:
        // macaco.setProximo(esquilo).setProximo(cachorro);
        return manipulador;
    }

    public manipular(requisicao: string): string {
        if (this.proximoManipulador) {
            return this.proximoManipulador.manipular(requisicao);
        }

        return null;
    }
}

/**
 * Todos os Manipuladores Concretos ou lidam com uma solicitação ou a passam para o próximo na cadeia.
 */
class ManipuladorMacaco extends ManipuladorAbstrato {
    public manipular(requisicao: string): string {
        if (requisicao === 'Banana') {
            return `Macaco: Eu vou comer a ${requisicao}.`;
        }
        return super.manipular(requisicao);
    }
}

class ManipuladorEsquilo extends ManipuladorAbstrato {
    public manipular(requisicao: string): string {
        if (requisicao === 'Noz') {
            return `Esquilo: Eu vou comer a ${requisicao}.`;
        }
        return super.manipular(requisicao);
    }
}

class ManipuladorCachorro extends ManipuladorAbstrato {
    public manipular(requisicao: string): string {
        if (requisicao === 'Almôndega') {
            return `Cachorro: Eu vou comer a ${requisicao}.`;
        }
        return super.manipular(requisicao);
    }
}

/**
 * O código do cliente geralmente é configurado para funcionar com um único manipulador.
 * Na maioria dos casos, ele nem sabe que o manipulador faz parte de uma cadeia.
 */
function codigoCliente(manipulador: Manipulador) {
    const alimentos = ['Noz', 'Banana', 'Xícara de café'];

    for (const alimento of alimentos) {
        console.log(`Cliente: Quem quer uma ${alimento}?`);

        const resultado = manipulador.manipular(alimento);
        if (resultado) {
            console.log(`  ${resultado}`);
        } else {
            console.log(`  ${alimento} ficou intocado.`);
        }
    }
}

/**
 * A outra parte do código do cliente constrói a cadeia real.
 */
const macaco = new ManipuladorMacaco();
const esquilo = new ManipuladorEsquilo();
const cachorro = new ManipuladorCachorro();

macaco.setProximo(esquilo).setProximo(cachorro);

/**
 * O cliente deve ser capaz de enviar uma solicitação para qualquer manipulador, não apenas para o primeiro da cadeia.
 */
console.log('Cadeia: Macaco > Esquilo > Cachorro\n');
codigoCliente(macaco);
console.log('');

console.log('Subcadeia: Esquilo > Cachorro\n');
codigoCliente(esquilo);
