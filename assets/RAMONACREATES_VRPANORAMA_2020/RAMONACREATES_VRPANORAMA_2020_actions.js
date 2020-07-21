var mc_symbol_Lantern_19_0_fn = function() {
var _this = this;
_this.gotoAndPlay(6);
};
var sc_AnSceneNodeInside_0_0_fn = function() {
{
var _this = this;
	_this.light.stop();
	_this.light.addEventListener(AnEvent.CLICK, function() {
		if(_this.light.currentFrame < 2){
			_this.light.play();
		}else{
			_this.light.gotoAndStop(1);
		}
});
}


};
var sc_AnSceneNodeOutside_0_0_fn = function() {

{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.door.addEventListener(AnEvent.CLICK, function() {

//Go to next scene and play
anWebgl.nextScene();
});
}

};
