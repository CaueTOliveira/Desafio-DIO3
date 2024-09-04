//Desafio 3 de Classes

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let ataque;
        switch (this.type) {
            case 'Guerreiro':
                ataque = 'usou espada';
                break;
            case 'Mago':
                ataque = 'usou magia';
                break;
            case 'Monge':
                ataque = 'usou artes marciais';
                break;
            case 'Ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'realizou um ataque desconhecido';
        }
        return ataque;
    }

    message() {
        const ataque = this.attack();
        console.log(`O ${this.type}, sendo seu nome ${this.name}, 
        com ${this.age} anos, ${ataque} para te atacar`);
            
    }
}

// Exemplo de uso:
let heroG = new Hero('Kratos', 3123, 'Guerreiro');
heroG.message();

let heroMa = new Hero('JoazinhoDoGrau', 103, 'Mago')
heroMa.message();

let heroMo = new Hero('JoazinhoDoGrau', 103, 'Monge')
heroMo.message();

let heroN = new Hero('EspadaChin', 10223, 'Ninja')
heroN.message();