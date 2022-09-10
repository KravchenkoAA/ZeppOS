// const _1 = new BoardButton({
//     "en-US": "q",
//     "ru-RU": "й",
//     "uk-UA": "й"
// })
// export const _2 = new BoardButton({
//     "en-US": "w",
//     "ru-RU": "ц",
//     "uk-UA": "ц"
// })
// export const _3 = new BoardButton({
//     "en-US": "e",
//     "ru-RU": "у",
//     "uk-UA": "у"
// })
// export const _4 = new BoardButton({
//     "en-US": "r",
//     "ru-RU": "к",
//     "uk-UA": "к"
// })
// export const _5 = new BoardButton({
//     "en-US": "t",
//     "ru-RU": "е",
//     "uk-UA": "е"
// })
// export const _6 = new BoardButton({
//     "en-US": "y",
//     "ru-RU": "н",
//     "uk-UA": "н"
// })
// export const _7 = new BoardButton({
//     "en-US": "u",
//     "ru-RU": "г",
//     "uk-UA": "г"
// })
// export const _8 = new BoardButton({
//     "en-US": "i",
//     "ru-RU": "ш",
//     "uk-UA": "ш"
// })
// export const _9 = new BoardButton({
//     "en-US": "o",
//     "ru-RU": "щ",
//     "uk-UA": "щ"
// })
// export const _10 = new BoardButton({
//     "en-US": "p",
//     "ru-RU": "з",
//     "uk-UA": "з"
// })
// export const _11 = new BoardButton({
//     "en-US": "",
//     "ru-RU": "х",
//     "uk-UA": "х"
// })
// export const _12 = new BoardButton({
//     "en-US": "",
//     "ru-RU": "ъ",
//     "uk-UA": "ї"
// })
// export const _13 = new BoardButton({
//     "en-US": "a",
//     "ru-RU": "ф",
//     "uk-UA": "ф"
// })
// export const _14 = new BoardButton({
//     "en-US": "s",
//     "ru-RU": "ы",
//     "uk-UA": "і"
// })
// export const _15 = new BoardButton({
//     "en-US": "d",
//     "ru-RU": "в",
//     "uk-UA": "в"
// })
// export const _16 = new BoardButton({
//     "en-US": "f",
//     "ru-RU": "а",
//     "uk-UA": "а"
// })
// export const _17 = new BoardButton({
//     "en-US": "g",
//     "ru-RU": "п",
//     "uk-UA": "п"
// })
// export const _18 = new BoardButton({
//     "en-US": "h",
//     "ru-RU": "р",
//     "uk-UA": "р"
// })
// export const _19 = new BoardButton({
//     "en-US": "j",
//     "ru-RU": "о",
//     "uk-UA": "о"
// })
// export const _20 = new BoardButton({
//     "en-US": "k",
//     "ru-RU": "л",
//     "uk-UA": "л"
// })
// export const _21 = new BoardButton({
//     "en-US": "l",
//     "ru-RU": "д",
//     "uk-UA": "д"
// })
// export const _22 = new BoardButton({
//     "en-US": "",
//     "ru-RU": "ж",
//     "uk-UA": "ж"
// })
// export const _23 = new BoardButton({
//     "en-US": "",
//     "ru-RU": "э",
//     "uk-UA": "є"
// })
// export const _24 = new BoardButton({
//     "en-US": "z",
//     "ru-RU": "я",
//     "uk-UA": "я"
// })
// export const _25 = new BoardButton({
//     "en-US": "x",
//     "ru-RU": "ч",
//     "uk-UA": "ч"
// })
// export const _26 = new BoardButton({
//     "en-US": "c",
//     "ru-RU": "с",
//     "uk-UA": "с"
// })
// export const _27 = new BoardButton({
//     "en-US": "v",
//     "ru-RU": "м",
//     "uk-UA": "м"
// })
// export const _28 = new BoardButton({
//     "en-US": "b",
//     "ru-RU": "и",
//     "uk-UA": "и"
// })
// export const _29 = new BoardButton({
//     "en-US": "n",
//     "ru-RU": "т",
//     "uk-UA": "т"
// })
// export const _30 = new BoardButton({
//     "en-US": "m",
//     "ru-RU": "ь",
//     "uk-UA": "ь"
// })
// export const _31 = new BoardButton({
//     "en-US": "",
//     "ru-RU": "б",
//     "uk-UA": "б"
// })
// export const _32 = new BoardButton({
//     "en-US": "",
//     "ru-RU": "ю",
//     "uk-UA": "ю"
// })
// export const _33 = new BoardButton({
//     "en-US": "",
//     "ru-RU": "ё",
//     "uk-UA": ""
// })
// export const _UPPER_CASE = new BoardButton({
//     "en-US": "^",
//     "ru-RU": "^",
//     "uk-UA": "^"
// })
// export const _SPACE = new BoardButton({
//     "en-US": " ",
//     "ru-RU": " ",
//     "uk-UA": " "
// })
// export const _COMA = new BoardButton({
//     "en-US": ",",
//     "ru-RU": ",",
//     "uk-UA": ","
// })
// export const _DOT = new BoardButton({
//     "en-US": ".",
//     "ru-RU": ".",
//     "uk-UA": "."
// })
// export const _BACK = new BoardButton({
//     "en-US": "<-",
//     "ru-RU": "<-",
//     "uk-UA": "<-"
// })

import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../page/gts-3/home/index.style";

export class Keyboard {
    constructor(input) {
        this.languages = ["en-US", "ru-RU", "uk-UA"];
        this.buttons = new BoardButtons();
        this.input = input;
        this.text = "";
        this.upperCase = false;
        this.language = hmSetting.getLanguage();
    }

    render() {
        let group1 = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 30,
            y: DEVICE_HEIGHT - 300,
            w: DEVICE_WIDTH - 30 * 2,
            h: 45,
            align_h: hmUI.align.CENTER_H
        });
        let group2 = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 30,
            y: DEVICE_HEIGHT - 250,
            w: DEVICE_WIDTH - 30 * 2,
            h: 45,
            align_h: hmUI.align.CENTER_H
        });
        let group3 = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 30,
            y: DEVICE_HEIGHT - 200,
            w: DEVICE_WIDTH - 30 * 2,
            h: 45,
            align_h: hmUI.align.CENTER_H
        });
        let group4 = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 30,
            y: DEVICE_HEIGHT - 150,
            w: DEVICE_WIDTH - 30 * 2,
            h: 45,
            align_h: hmUI.align.CENTER_H
        });

        let buttonPosition = 0;
        for (let i = 0; i < 11; i++) {
            this.renderButton(group1, i, buttonPosition);
            buttonPosition++;
        }

        buttonPosition = 0;
        for (let i = 11; i < 22; i++) {
            this.renderButton(group2, i, buttonPosition);
            buttonPosition++;
        }

        buttonPosition = 0;
        for (let i = 22; i < 33; i++) {
            this.renderButton(group3, i, buttonPosition);
            buttonPosition++;
        }

        buttonPosition = 3;
        for (let i = 33; i < this.buttonsNumber(); i++) {
            this.renderButton(group4, i, buttonPosition);
            buttonPosition++;
        }
    }

    renderButton(group, buttonIndex, buttonPosition) {
        let button = this.getButton(buttonIndex);
        button.setLanguage(this.language);

        let uiState = group.createWidget(hmUI.widget.BUTTON, {
            text: button.getSymbol(),
            x: buttonPosition * 30,
            y: 0,
            w: 30,
            h: 45,
            normal_color: 0xfc6950,
            press_color: 0xfeb4a8,
            radius: 12,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.BOTTOM,
            click_func: () => {
                button.runAction(this);
            }
        });

        button.setUIState(uiState);
    }

    updateInput() {
        this.input.setProperty(hmUI.prop.MORE, {
            text: this.text
        });
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
        let languageMapping = Keyboard.languageMapping();

        let languageKey = languageMapping[this.language];
        let currentLanguages = this.languages.indexOf(languageKey);

        let nextSupportLanguageOrdinal = (currentLanguages + 1) >= this.languages.length ? 0 : (currentLanguages + 1);
        let nextSupportLanguageKey = this.languages[nextSupportLanguageOrdinal];

        let nextLanguage = languageMapping.indexOf(nextSupportLanguageKey);
        this.language = nextLanguage;
        return nextLanguage;
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

    toast(text) {
        hmUI.showToast({
            text: text
        });
    }

    static languageMapping() {
        return [
            "zh-CN",   //	Simplified Chinese
            "zh-TW",   //	Traditional Chinese (Taiwan, China)
            "en-US",   //	English (USA)
            "es-ES",   //	Spanish (Spain)
            "ru-RU",   //	Russian (Russia)
            "ko-KR",   //	Korean (Korea)
            "fr-FR",   //	French (France)
            "de-DE",   //	German (Germany)
            "id-ID",   //	Indonesian
            "pl-PL",   //	Polish (Poland)
            "it-IT",   //	Italian (Italy)
            "ja-JP",   //	Japanese (Japan)
            "th-TH",   //	Thai
            "ar-EG",   //   Arabic (Egypt)
            "vi-VN",   //	Vietnamese
            "pt-PT",   //	Portuguese (Portugal)
            "nl-NL",   //	Dutch
            "tr-TR",   //	Turkish (Turkey)
            "uk-UA",   //	Ukrainian
            "iw-IL",   //	Hebrew (Israel)
            "pt-BR",   //	Portuguese (Brazil)
            "ro-RO",   //	Romanian
            "cs-CZ",   //	Czech
            "el-GR",   //	Greek
            "sr-RS",   //	Serbian (Latin)
            "ca-ES",   //	Catalan
            "fi-FI",   //	Finnish
            "nb-NO",   //	Norwegian
            "da-DK",   //	Danish
            "sv-SE",   //	Swedish
            "hu-HU",   //	Hungarian
            "ms-MY",   //	Malay
            "sk-SK",   //	Slovakian
            "hi-IN"    //	Hindi
        ];
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
        return this.letters[Keyboard.languageMapping()[language]];
    }

    runAction(keyboard) {
        let languageKey = Keyboard.languageMapping()[keyboard.language];
        if (this.disableFor.includes(languageKey)) {
            return;
        }

        this.action(keyboard, this);

        keyboard.getButtons().forEach(elem => {
            elem.updateUI(keyboard.language, keyboard.upperCase);
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
        upperCase = upperCase !== undefined && language != null ? upperCase : false;
        let symbol = upperCase ? this.getSymbol(language).toUpperCase() : this.getSymbol(language);
        this.uiState.setProperty(hmUI.prop.TEXT, symbol);
    }

    addLetter(languageKey, letter) {
        this.letters.set(languageKey, letter);
        return this;
    }
}

class BoardButtons {
    constructor() {
        this.buttons = [];

        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "q",
                    "ru-RU": "й",
                    "uk-UA": "й"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "w",
                    "ru-RU": "ц",
                    "uk-UA": "ц"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "e",
                    "ru-RU": "у",
                    "uk-UA": "у"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "r",
                    "ru-RU": "к",
                    "uk-UA": "к"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "t",
                    "ru-RU": "е",
                    "uk-UA": "е"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "y",
                    "ru-RU": "н",
                    "uk-UA": "н"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "u",
                    "ru-RU": "г",
                    "uk-UA": "г"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "i",
                    "ru-RU": "ш",
                    "uk-UA": "ш"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "o",
                    "ru-RU": "щ",
                    "uk-UA": "щ"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "p",
                    "ru-RU": "з",
                    "uk-UA": "з"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "х",
                    "uk-UA": "х"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "ъ",
                    "uk-UA": "ї"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "a",
                    "ru-RU": "ф",
                    "uk-UA": "ф"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "s",
                    "ru-RU": "ы",
                    "uk-UA": "і"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "d",
                    "ru-RU": "в",
                    "uk-UA": "в"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "f",
                    "ru-RU": "а",
                    "uk-UA": "а"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "g",
                    "ru-RU": "п",
                    "uk-UA": "п"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "h",
                    "ru-RU": "р",
                    "uk-UA": "р"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "j",
                    "ru-RU": "о",
                    "uk-UA": "о"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "k",
                    "ru-RU": "л",
                    "uk-UA": "л"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "l",
                    "ru-RU": "д",
                    "uk-UA": "д"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "ж",
                    "uk-UA": "ж"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "э",
                    "uk-UA": "є"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "z",
                    "ru-RU": "я",
                    "uk-UA": "я"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "x",
                    "ru-RU": "ч",
                    "uk-UA": "ч"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "c",
                    "ru-RU": "с",
                    "uk-UA": "с"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "v",
                    "ru-RU": "м",
                    "uk-UA": "м"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "b",
                    "ru-RU": "и",
                    "uk-UA": "и"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "n",
                    "ru-RU": "т",
                    "uk-UA": "т"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "m",
                    "ru-RU": "ь",
                    "uk-UA": "ь"
                },
                [],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "б",
                    "uk-UA": "б"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "ю",
                    "uk-UA": "ю"
                },
                ["en-US"],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
                }
            ));
        this.buttons.push(
            new BoardButton(
                {
                    "en-US": "",
                    "ru-RU": "ё",
                    "uk-UA": ""
                },
                ["en-US", "uk-UA"],
                function (keyboard, button) {
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, keyboard.upperCase ? button.getSymbol().toUpperCase() : button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
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
                    keyboard.upperCase = true;
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
                    let nextLanguage = keyboard.nextLanguage();
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
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
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
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
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
                    keyboard.text = BoardButtons.addSymbol(keyboard.text, button.getSymbol());
                    keyboard.updateInput();
                    keyboard.upperCase = false;
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
                    keyboard.text = BoardButtons.removeSymbol(keyboard.text);
                    keyboard.updateInput();
                    keyboard.upperCase = false;
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
                    keyboard.text = BoardButtons.removeSymbol(keyboard.text);
                    keyboard.updateInput();
                    keyboard.upperCase = false;
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

    static addSymbol(text, letter) {
        return text + letter;
    }

    static removeSymbol(text) {
        return text.substring(0, text.length - 1);
    }
}