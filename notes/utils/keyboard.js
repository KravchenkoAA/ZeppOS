import {QwertyType} from "./keyboard/qwerty-type";
import {MobileType} from "./keyboard/mobile-type";

export class Keyboard {
    constructor(input) {
        this.input = input;
        this.text = "";
        this.upperCase = false;
        this.types = [new QwertyType(this), new MobileType(this)];
        this.currentType = 0;
    }

    render(minX, maxX, minY, maxY) {
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;

        this.types[this.currentType].render(this.minX, this.maxX, this.minY, this.maxY);
    }

    addSymbol(symbol) {
        this.text = this.concatSymbol(this.text, this.upperCase ? symbol.toUpperCase() : symbol);
        this.updateInput();
        this.upperCase = false;
    }

    deleteSymbol() {
        this.text = this.removeSymbol(this.text);
        this.updateInput();
        this.upperCase = false;
    }

    toUpperCase() {
        this.upperCase = true;
    }

    updateInput() {
        this.input.setProperty(hmUI.prop.MORE, {
            text: this.text
        });
    }

    getText() {
        return this.text;
    }

    setText(text) {
        this.text = text;
        this.updateInput();
    }

    clear() {
        this.setText("");
    }

    changeMode() {
        let newType = (this.currentType + 1) >= this.types.length ? 0 : (this.currentType + 1);

        this.types[this.currentType].hide();
        this.types[newType].render(this.minX, this.maxX, this.minY, this.maxY);
        this.currentType = newType;
    }

    getButtons() {
        return this.types[this.currentType].getButtons();
    }

    getType() {
        return this.types[this.currentType];
    }

    toast(text) {
        hmUI.showToast({
            text: text
        });
    }

    concatSymbol(text, letter) {
        return text + letter;
    }

    removeSymbol(text) {
        return text.substring(0, text.length - 1);
    }
}