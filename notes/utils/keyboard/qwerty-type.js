import {Languages} from "./languages";

export class QwertyType {
    constructor(keyboard) {
        this.keyboard = keyboard;
        this.languages = ["en-US", "ru-RU", "uk-UA"];
        this.buttons = new BoardButtons();
        this.language = hmSetting.getLanguage();
        this.rendered = false;
    }

    render(minX, maxX, minY, maxY) {
        if (this.rendered) {
            this.buttons.show();
        } else {
            let width = maxX - minX;
            let height = Number.parseInt((maxY - minY) / 4 / 10) * 10;
            let yMargin = ((maxY - minY) - 4 * height) / 2;

            this.group1 = this.createButtonsGroup(minX, maxY, yMargin, height, width, 4);
            this.group2 = this.createButtonsGroup(minX, maxY, yMargin, height, width, 3);
            this.group3 = this.createButtonsGroup(minX, maxY, yMargin, height, width, 2);
            this.group4 = this.createButtonsGroup(minX, maxY, yMargin, height, width, 1);

            let buttonPosition = 0;
            for (let i = 0; i < 11; i++) {
                this.renderButton(this.group1, i, buttonPosition, height);
                buttonPosition++;
            }

            buttonPosition = 0;
            for (let i = 11; i < 22; i++) {
                this.renderButton(this.group2, i, buttonPosition, height);
                buttonPosition++;
            }

            buttonPosition = 0;
            for (let i = 22; i < 33; i++) {
                this.renderButton(this.group3, i, buttonPosition, height);
                buttonPosition++;
            }

            buttonPosition = 3;
            for (let i = 33; i < this.buttonsNumber(); i++) {
                this.renderButton(this.group4, i, buttonPosition, height);
                buttonPosition++;
            }

            this.rendered = true;
        }
    }

    createButtonsGroup(minX, maxY, yMargin, height, width, index) {
        return hmUI.createWidget(hmUI.widget.GROUP, {
            x: minX,
            y: maxY - yMargin - height * index,
            w: width,
            h: height,
            align_h: hmUI.align.CENTER_H
        });
    }

    renderButton(group, buttonIndex, buttonPosition, height) {
        let button = this.getButton(buttonIndex);
        button.setLanguage(this.language);

        let uiState = group.createWidget(hmUI.widget.BUTTON, {
            text: button.getSymbol(),
            x: buttonPosition * 30,
            y: 0,
            w: 30,
            h: height,
            normal_color: 0xfc6950,
            press_color: 0xfeb4a8,
            radius: 12,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.BOTTOM,
            click_func: () => {
                button.runAction(this.keyboard);
            }
        });

        button.setUIState(uiState);
    }

    hide() {
        this.buttons.hide();
    }

    getButtons() {
        return this.buttons.buttons;
    }

    getButton(index) {
        return this.buttons.get(index);
    }

    buttonsNumber() {
        return this.buttons.buttons.length;
    }

    nextLanguage() {
        let languageMapping = Languages.mapping();

        let languageKey = languageMapping[this.language];
        let currentLanguages = this.languages.indexOf(languageKey);

        let nextSupportLanguageOrdinal = (currentLanguages + 1) >= this.languages.length ? 0 : (currentLanguages + 1);
        let nextSupportLanguageKey = this.languages[nextSupportLanguageOrdinal];

        let nextLanguage = languageMapping.indexOf(nextSupportLanguageKey);
        this.language = nextLanguage;
        return nextLanguage;
    }
}

export class BoardButton {
    constructor(letters, disableFor, action) {
        this.letters = letters;
        this.disableFor = disableFor;
        this.action = function (keyboard, button) {
            action(keyboard, button);
        };
    }

    getSymbol(language) {
        language = language !== undefined && language != null ? language : this.language;
        return this.letters[Languages.mapping()[language]];
    }

    runAction(keyboard) {
        let languageKey = Languages.mapping()[keyboard.getType().language];
        if (this.disableFor.includes(languageKey)) {
            return;
        }

        this.action(keyboard, this);

        keyboard.getButtons().forEach(elem => {
            elem.updateUI(keyboard.getType().language, keyboard.upperCase);
        })
    }

    setUIState(uiState) {
        this.uiState = uiState;
    }

    setLanguage(language) {
        this.language = language;
    }

    updateUI(language, upperCase) {
        language = language !== undefined && language != null ? language : this.language;
        upperCase = upperCase !== undefined && upperCase != null ? upperCase : false;

        let symbol = upperCase ? this.getSymbol(language).toUpperCase() : this.getSymbol(language);
        this.uiState.setProperty(hmUI.prop.TEXT, symbol);
    }

    show() {
        this.uiState.setProperty(hmUI.prop.VISIBLE, true);
    }

    hide() {
        this.uiState.setProperty(hmUI.prop.VISIBLE, false);
    }
}

class BoardButtons {
    constructor() {
        this.buttons = [];

        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "q",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "w",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "e",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "r",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "t",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "y",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "u",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "i",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "o",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "p",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "a",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "s",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "d",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "f",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "g",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "h",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "j",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "k",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "l",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "z",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "x",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "c",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "v",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "b",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "n",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "m",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "??",
                    "uk-UA": "??"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "??",
                    "uk-UA": ""
                },
                ["en-US", "uk-UA"],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "^",
                    "ru-RU": "^",
                    "uk-UA": "^"
                },
                [],
                function (keyboard, button) {
                    keyboard.toUpperCase();
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "EN",
                    "ru-RU": "RU",
                    "uk-UA": "UA"
                },
                [],
                function (keyboard, button) {
                    let nextLanguage = keyboard.getType().nextLanguage();
                    keyboard.getButtons().forEach(elem => {
                        elem.updateUI(nextLanguage, keyboard.upperCase);
                        elem.setLanguage(nextLanguage);
                    })
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": " ",
                    "ru-RU": " ",
                    "uk-UA": " "
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": ",",
                    "ru-RU": ",",
                    "uk-UA": ","
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": ".",
                    "ru-RU": ".",
                    "uk-UA": "."
                },
                [],
                function (keyboard, button) {
                    keyboard.addSymbol(button.getSymbol());
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "<-",
                    "ru-RU": "<-",
                    "uk-UA": "<-"
                },
                [],
                function (keyboard, button) {
                    keyboard.deleteSymbol();
                }
            ));
    }

    enableLanguage(language) {
        // todo
        this.buttons.forEach(button => {
            button.language = language
        });
    }

    get(index) {
        return this.buttons[index];
    }

    show() {
        this.buttons.forEach(button => {
            button.show();
        });
    }

    hide() {
        this.buttons.forEach(button => {
            button.hide();
        });
    }
}