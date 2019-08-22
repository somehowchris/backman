/*! Built with http://stenciljs.com */
import { h } from '../webcomponents.core.js';

class Price {
    constructor() {
        this.amount = 0;
        this.period = "";
        this.size = 2;
        this.srHint = "";
    }
    getFormattedAmount() {
        return String(Math.round(this.amount * 100))
            .replace(/^0$/, "000")
            .replace(/^(.)$/, "0$1")
            .replace(/(..)$/, ".$1")
            .replace(/00$|^(?=[.])/, "–");
    }
    isInteger() {
        return this.amount === Math.floor(this.amount);
    }
    getClassNames() {
        return {
            integer: this.isInteger(),
            [`text-${this.size > 6 ? "d" : "h"}${(this.size > 6 ? 9 : 6) - this.size + 1}`]: true
        };
    }
    render() {
        return [
            h("span", { class: this.getClassNames(), "aria-hidden": "true" },
                this.getFormattedAmount(),
                h("span", { class: "period" }, this.period)),
            h("span", { class: "sr-only" }, this.srHint)
        ];
    }
    static get is() { return "sdx-price"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "amount": {
            "type": Number,
            "attr": "amount"
        },
        "period": {
            "type": String,
            "attr": "period"
        },
        "size": {
            "type": Number,
            "attr": "size"
        },
        "srHint": {
            "type": String,
            "attr": "sr-hint"
        }
    }; }
    static get style() { return "\@charset \"UTF-8\";:host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.text-body-1{line-height:24px;letter-spacing:-.1px;font-size:18px}.text-body-2{line-height:24px;letter-spacing:0;font-size:16px}h1,h2,h3,h4,h5,h6,p{font-family:TheSans,sans-serif;margin:0 0 32px;padding:0;text-align:left;word-wrap:break-word}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child,p:last-child{margin-bottom:0}.text-compact{line-height:21px}.text-h1,h1{line-height:48px;letter-spacing:-1.2px;font-size:40px;font-weight:300}.text-h2,h2{line-height:40px;letter-spacing:-1px;font-size:32px;font-weight:300}.text-h3,h3{line-height:32px;letter-spacing:-.75px;font-size:28px}.text-h3,.text-h3--light,h3,h3--light{font-weight:300}.text-h3--semi-light,h3--semi-light{font-weight:400}.text-h3--semi-bold,h3--semi-bold{font-weight:600}.text-h3.text-compact,h3.text-compact{line-height:31px}.text-h4,h4{line-height:32px;letter-spacing:-.35px;font-size:24px}.text-h4,.text-h4--light,h4,h4--light{font-weight:300}.text-h4--semi-light,h4--semi-light{font-weight:400}.text-h4--semi-bold,h4--semi-bold{font-weight:600}.text-h4.text-compact,h4.text-compact{line-height:27px}.text-h5,h5{line-height:24px;letter-spacing:-.1px;font-size:18px}.text-h5,.text-h5--semi-light,h5,h5--semi-light{font-weight:400}.text-h5--semi-bold,h5--semi-bold{font-weight:600}.text-h6,h6{line-height:24px;letter-spacing:-.1px;font-size:16px}.text-h6,.text-h6--semi-light,h6,h6--semi-light{font-weight:400}.text-h6--semi-bold,h6--semi-bold{font-weight:600}.d1,.text-d1{line-height:48px;letter-spacing:-1.2px;font-size:40px;font-weight:300}\@media (min-width:1024px){.d1,.text-d1{line-height:80px;letter-spacing:-1.75px;font-size:70px}}.d2,.text-d2{line-height:40px;letter-spacing:-1px;font-size:32px;font-weight:300}\@media (min-width:1024px){.d2,.text-d2{line-height:64px;letter-spacing:-1.35px;font-size:54px}}.d3,.text-d3{line-height:32px;letter-spacing:-.75px;font-size:28px;font-weight:300}\@media (min-width:1024px){.d3,.text-d3{line-height:56px;letter-spacing:-1.2px;font-size:48px}}.text-b1,p{letter-spacing:-.1px;font-size:18px}.text-b1,.text-b2,p{line-height:24px;font-weight:400}.text-b2{letter-spacing:0;font-size:16px}.text-sm{line-height:24px;letter-spacing:.1px;font-size:14px;font-weight:400}address{font-style:normal}strong{font-weight:600}em{font-style:italic}.font,.font--sans{font-family:TheSans,sans-serif}.font--serif{font-family:\"TheSerif\",serif}.font--light{font-weight:300}.font--semi-light{font-weight:400}.font--semi-bold{font-weight:600}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.period{font-size:50%;letter-spacing:0}.integer .period{font-size:26%;position:absolute;margin-left:-2em;margin-top:-.8em}.integer.text-d1 .period,.integer.text-d2 .period,.integer.text-d3 .period{margin-top:.55em}.text-d1,.text-d2,.text-d3{line-height:1}"; }
}

export { Price as SdxPrice };