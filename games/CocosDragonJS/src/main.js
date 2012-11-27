// Autogenerated main.js file

require("jsb_constants.js");
require("Bomb.js");
require("Coin.js");
require("Dragon.js");
require("EndCoin.js");
require("Explosion.js");
require("GameScene.js");
require("Level.js");
require("MainMenuScene.js");

function main()
{
	var scene = cc.Reader.loadAsScene("MainMenuScene");
	var director = cc.Director.getInstance();
	var runningScene = director.getRunningScene();
	if (runningScene === null) director.runWithScene(scene);
	else director.replaceScene(scene);
}

main();
