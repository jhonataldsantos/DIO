let hero = {
    name: "Apollo Woods",
    age: 23,
    type: "Mago"
}
let attackType = attackTypeDefinition(hero);
attack(hero, attackType);

function attackTypeDefinition(hero) {
    let attackType = hero.type;
    if (attackType === "Mago") {
        attackType = "Magia";
    } if (attackType === "Guerreiro") {
        attackType = "Espada";
    } if (attackType === "Monge") {
        attackType = "Artes Marciais";
    } if (attackType === "Ninja") {
        attackType = "Shuriken";
    }
    return attackType
}

function attack (hero, attackType) {
    console.log(`O ${hero.type} atacou usando ${attackType}`)
}