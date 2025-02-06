var config = {
    type:Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload(){
    this.load.image('tartaruga','assets/tartaruga.png');

    //carregar o logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    //carregar o peixe
    this.load.image('peixe', 'assets/peixes/baiacu.png');

    this.load.image('porta', 'assets/ola.png...png');


}
function create(){
    this.add.image(400, 300, 'porta');

    //adicionar o logo na tela
    const logointeli = this.add.image(420,525,'logo').setScale(0.5);
    logointeli.setDepth(10);
    //transformando peixe em variavel
    const peixe = peixinho = this.add.image(400,300,'peixe');
    peixe.setDepth(10);

    this.add.image(420,525,'logo').setScale(0.5);

    //transformando a variavel
    peixinho.setFlip(true, false);

    const imagem = this.add.image(600,445,'tartaruga').setScale(0.4);
    imagem.setDepth(1);
}
function update(){

    //adicionando controles no peixe
    peixinho.x=this.input.x;
    peixinho.y=this.input.y;
}