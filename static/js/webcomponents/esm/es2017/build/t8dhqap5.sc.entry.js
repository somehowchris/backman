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
    static get style() { return "\@charset \"UTF-8\";.sc-sdx-price-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-price, .sc-sdx-price:after, .sc-sdx-price:before{-webkit-box-sizing:inherit;box-sizing:inherit}.text-body-1.sc-sdx-price{line-height:24px;letter-spacing:-.1px;font-size:18px}.text-body-2.sc-sdx-price{line-height:24px;letter-spacing:0;font-size:16px}h1.sc-sdx-price, h2.sc-sdx-price, h3.sc-sdx-price, h4.sc-sdx-price, h5.sc-sdx-price, h6.sc-sdx-price, p.sc-sdx-price{font-family:TheSans,sans-serif;margin:0 0 32px;padding:0;text-align:left;word-wrap:break-word}h1.sc-sdx-price:last-child, h2.sc-sdx-price:last-child, h3.sc-sdx-price:last-child, h4.sc-sdx-price:last-child, h5.sc-sdx-price:last-child, h6.sc-sdx-price:last-child, p.sc-sdx-price:last-child{margin-bottom:0}.text-compact.sc-sdx-price{line-height:21px}.text-h1.sc-sdx-price, h1.sc-sdx-price{line-height:48px;letter-spacing:-1.2px;font-size:40px;font-weight:300}.text-h2.sc-sdx-price, h2.sc-sdx-price{line-height:40px;letter-spacing:-1px;font-size:32px;font-weight:300}.text-h3.sc-sdx-price, h3.sc-sdx-price{line-height:32px;letter-spacing:-.75px;font-size:28px}.text-h3.sc-sdx-price, .text-h3--light.sc-sdx-price, h3.sc-sdx-price, h3--light.sc-sdx-price{font-weight:300}.text-h3--semi-light.sc-sdx-price, h3--semi-light.sc-sdx-price{font-weight:400}.text-h3--semi-bold.sc-sdx-price, h3--semi-bold.sc-sdx-price{font-weight:600}.text-h3.text-compact.sc-sdx-price, h3.text-compact.sc-sdx-price{line-height:31px}.text-h4.sc-sdx-price, h4.sc-sdx-price{line-height:32px;letter-spacing:-.35px;font-size:24px}.text-h4.sc-sdx-price, .text-h4--light.sc-sdx-price, h4.sc-sdx-price, h4--light.sc-sdx-price{font-weight:300}.text-h4--semi-light.sc-sdx-price, h4--semi-light.sc-sdx-price{font-weight:400}.text-h4--semi-bold.sc-sdx-price, h4--semi-bold.sc-sdx-price{font-weight:600}.text-h4.text-compact.sc-sdx-price, h4.text-compact.sc-sdx-price{line-height:27px}.text-h5.sc-sdx-price, h5.sc-sdx-price{line-height:24px;letter-spacing:-.1px;font-size:18px}.text-h5.sc-sdx-price, .text-h5--semi-light.sc-sdx-price, h5.sc-sdx-price, h5--semi-light.sc-sdx-price{font-weight:400}.text-h5--semi-bold.sc-sdx-price, h5--semi-bold.sc-sdx-price{font-weight:600}.text-h6.sc-sdx-price, h6.sc-sdx-price{line-height:24px;letter-spacing:-.1px;font-size:16px}.text-h6.sc-sdx-price, .text-h6--semi-light.sc-sdx-price, h6.sc-sdx-price, h6--semi-light.sc-sdx-price{font-weight:400}.text-h6--semi-bold.sc-sdx-price, h6--semi-bold.sc-sdx-price{font-weight:600}.d1.sc-sdx-price, .text-d1.sc-sdx-price{line-height:48px;letter-spacing:-1.2px;font-size:40px;font-weight:300}\@media (min-width:1024px){.d1.sc-sdx-price, .text-d1.sc-sdx-price{line-height:80px;letter-spacing:-1.75px;font-size:70px}}.d2.sc-sdx-price, .text-d2.sc-sdx-price{line-height:40px;letter-spacing:-1px;font-size:32px;font-weight:300}\@media (min-width:1024px){.d2.sc-sdx-price, .text-d2.sc-sdx-price{line-height:64px;letter-spacing:-1.35px;font-size:54px}}.d3.sc-sdx-price, .text-d3.sc-sdx-price{line-height:32px;letter-spacing:-.75px;font-size:28px;font-weight:300}\@media (min-width:1024px){.d3.sc-sdx-price, .text-d3.sc-sdx-price{line-height:56px;letter-spacing:-1.2px;font-size:48px}}.text-b1.sc-sdx-price, p.sc-sdx-price{letter-spacing:-.1px;font-size:18px}.text-b1.sc-sdx-price, .text-b2.sc-sdx-price, p.sc-sdx-price{line-height:24px;font-weight:400}.text-b2.sc-sdx-price{letter-spacing:0;font-size:16px}.text-sm.sc-sdx-price{line-height:24px;letter-spacing:.1px;font-size:14px;font-weight:400}address.sc-sdx-price{font-style:normal}strong.sc-sdx-price{font-weight:600}em.sc-sdx-price{font-style:italic}.font.sc-sdx-price, .font--sans.sc-sdx-price{font-family:TheSans,sans-serif}.font--serif.sc-sdx-price{font-family:\"TheSerif\",serif}.font--light.sc-sdx-price{font-weight:300}.font--semi-light.sc-sdx-price{font-weight:400}.font--semi-bold.sc-sdx-price{font-weight:600}.sr-only.sc-sdx-price{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable.sc-sdx-price:active, .sr-only-focusable.sc-sdx-price:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.period.sc-sdx-price{font-size:50%;letter-spacing:0}.integer.sc-sdx-price   .period.sc-sdx-price{font-size:26%;position:absolute;margin-left:-2em;margin-top:-.8em}.integer.text-d1.sc-sdx-price   .period.sc-sdx-price, .integer.text-d2.sc-sdx-price   .period.sc-sdx-price, .integer.text-d3.sc-sdx-price   .period.sc-sdx-price{margin-top:.55em}.text-d1.sc-sdx-price, .text-d2.sc-sdx-price, .text-d3.sc-sdx-price{line-height:1}"; }
}

export { Price as SdxPrice };