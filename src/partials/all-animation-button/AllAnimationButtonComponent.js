'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './AllAnimationButtonComponent.soy';

class AllAnimationButtonComponent extends Component {
	attached() {
	}
	
	_bindEffect(){
		let instance = this;
		let {clear, effect, target} = instance;
		
		target = document.querySelector(target);
		
		if(window.currentAllAnimationEffect){
			target.classList.remove(window.currentAllAnimationEffect);
		}
		
		window.currentAllAnimationEffect = effect;
		
		clearTimeout(window.timeoutAnimation);
		target.classList.add(effect);
		
		if(clear){
			window.timeoutAnimation = setTimeout(function(){
				target.classList.remove(effect);
			}, +clear);
		}
	}
};

AllAnimationButtonComponent.STATE = {
	clear: {
		value: Infinity
	},
	effect: {
		value: 'dance'
	},
	target: {},
	legend: {
		value: 'I love All Animation CSS3'
	}
};

Soy.register(AllAnimationButtonComponent, templates);

export default AllAnimationButtonComponent;