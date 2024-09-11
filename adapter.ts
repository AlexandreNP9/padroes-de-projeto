/**
 * O Target define a interface específica do domínio usada pelo código do cliente.
 */
class Target {
    public requisicao(): string {
        return 'Target: Comportamento padrão do Target.';
    }
}

/**
 * O Adaptee contém algum comportamento útil, mas sua interface é incompatível
 * com o código cliente existente. O Adaptee precisa de alguma adaptação antes
 * que o código cliente possa usá-lo.
 */
class Adaptee {
    public requisicaoEspecifica(): string {
        return '.eetpadA eht fo roivaheb laicepS'; // Frase escrita de trás para frente
    }
}

/**
 * O Adapter torna a interface do Adaptee compatível com a interface do Target.
 */
class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public requisicao(): string {
        const resultado = this.adaptee.requisicaoEspecifica().split('').reverse().join(''); // Inverte a string
        return `Adapter: (TRADUZIDO) ${resultado}`;
    }
}

/**
 * O código cliente funciona com todas as classes que seguem a interface do Target.
 */
function codigoCliente(target: Target) {
    console.log(target.requisicao());
}

console.log('Cliente: Eu posso trabalhar bem com os objetos Target:');
const target = new Target();
codigoCliente(target);

console.log('');

const adaptee = new Adaptee();
console.log('Cliente: A classe Adaptee tem uma interface estranha. Veja, eu não a entendo:');
console.log(`Adaptee: ${adaptee.requisicaoEspecifica()}`);

console.log('');

console.log('Cliente: Mas eu posso trabalhar com ela através do Adapter:');
const adapter = new Adapter(adaptee);
codigoCliente(adapter);
