/*! Built with http://stenciljs.com */
const{h:t}=window.webcomponents;import{b as s}from"./chunk-bc34555f.js";import{b as e,c as i}from"./chunk-6a8011c5.js";class o{constructor(){this.size="auto"}componentWillLoad(){this.store=i(this),this.unsubscribe=e(this,this.store,["directionState"]),this.dispatch({type:s.setContentEl,contentEl:this.el})}componentDidUnload(){this.dispatch({type:s.setContentEl,contentEl:void 0}),this.unsubscribe()}dispatch(t){this.store&&this.store.dispatch(t)}hostData(){return{class:{[this.size]:!0,[this.directionState]:!0}}}render(){return t("div",{class:"item"},t("div",{class:"arrow"}),t("div",{class:"body"},t("slot",null)))}static get is(){return"sdx-menu-flyout-cta"}static get encapsulation(){return"shadow"}static get properties(){return{directionState:{state:!0},el:{elementRef:!0},size:{type:String,attr:"size"}}}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host>.item>.arrow{display:none;position:absolute;background-color:#fff;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host{display:block;position:absolute;top:0;left:0;z-index:60000;-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.2);box-shadow:0 0 4px 0 rgba(0,0,0,.2);min-width:254px;max-width:850px}:host>.item>.body{position:relative;background-color:#fff;padding:12px 24px;-webkit-transition:border-bottom .2s cubic-bezier(.4,0,.6,1),color .2s cubic-bezier(.4,0,.6,1);transition:border-bottom .2s cubic-bezier(.4,0,.6,1),color .2s cubic-bezier(.4,0,.6,1)}:host(:not(:last-of-type))>.item>.body{border-bottom:1px solid #e4e9ec}:host(.bottom-left)>.item>.arrow,:host(.bottom-right)>.item>.arrow{display:block;top:-7px;-webkit-box-shadow:-1px -1px 2px 0 rgba(0,0,0,.15);box-shadow:-1px -1px 2px 0 rgba(0,0,0,.15)}:host(.top-left)>.item>.arrow,:host(.top-right)>.item>.arrow{display:block;bottom:-7px;-webkit-box-shadow:1px 1px 2px 0 rgba(0,0,0,.15);box-shadow:1px 1px 2px 0 rgba(0,0,0,.15)}:host(.bottom-left)>.item>.arrow,:host(.top-left)>.item>.arrow{right:24px}:host(.bottom-right)>.item>.arrow,:host(.top-right)>.item>.arrow{left:24px}:host(.small)>.item>.body{width:254px}:host(.medium)>.item>.body{width:480px}:host(.large)>.item>.body{width:850px}"}}export{o as SdxMenuFlyoutCta};