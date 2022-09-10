import {DEVICE_HEIGHT, DEVICE_WIDTH} from "../home/index.style";
import {Keyboard} from "../../../utils/keyboard";
import {gettext} from 'i18n'

const logger = DeviceRuntimeCore.HmLogger.getLogger('note-page')
const {messageBuilder} = getApp()._options.globalData
const globalData = getApp()._options.globalData

Page({
    state: {
        backButton: null,
        addButton: null,
        input: null,
        noteText: "",
        isFinishInit: false,
        buttonsGroup: null,
        keyboard: null,
    },
    onInit() {
        logger.log('onInit')
    },
    build() {
        this.state.input = hmUI.createWidget(hmUI.widget.TEXT, {
            x: 30,
            y: 75,
            w: DEVICE_WIDTH - 30 * 2,
            h: 40,
            text_size: 28,
            color: 0xffffff,
            align_h: hmUI.align.CENTER_H,
            text_style: hmUI.text_style.NONE
        });

        this.state.buttonsGroup = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 30,
            y: DEVICE_HEIGHT - 80,
            w: DEVICE_WIDTH - 30 * 2,
            h: 50,
        });

        this.state.buttonsGroup.createWidget(hmUI.widget.BUTTON, {
            text: gettext('back_button'),
            x: 0,
            y: 0,
            w: (DEVICE_WIDTH - 30 * 2) / 2,
            h: 50,
            normal_color: 0xfc6950,
            press_color: 0xfeb4a8,
            radius: 12,
            click_func: () => {
                hmApp.goBack()
            }
        });
        this.state.buttonsGroup.createWidget(hmUI.widget.BUTTON, {
            text: gettext('save_button'),
            x: (DEVICE_WIDTH - 30 * 2) / 2,
            y: 0,
            w: (DEVICE_WIDTH - 30 * 2) / 2,
            h: 50,
            normal_color: 0xfc6950,
            press_color: 0xfeb4a8,
            radius: 12,
            click_func: () => {
                this.addNote();
            }
        });

        this.state.keyboard = new Keyboard(this.state.input);
        this.state.keyboard.render();
    },
    onReady() {
    },

    onShow() {
    },

    onHide() {
    },

    onDestroy() {
    },
    addNote() {
        messageBuilder
            .request({
                method: 'ADD',
                noteText: this.state.keyboard.getText()
            })
            .then(({result}) => {
                hmUI.showToast({
                    text: gettext('success_message')
                });
                this.state.keyboard.clear();
            })
            .catch((res) => {
                hmUI.showToast({
                    text: gettext('error_message')
                });
            })
    },
    createKeyboardV1() {

        let group1 = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 15,
            y: DEVICE_HEIGHT - 280,
            w: DEVICE_WIDTH - 15 * 2,
            h: 45,
        });
        let group2 = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 15,
            y: DEVICE_HEIGHT - 235,
            w: DEVICE_WIDTH - 15 * 2,
            h: 45,
        });
        let group3 = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 15,
            y: DEVICE_HEIGHT - 190,
            w: DEVICE_WIDTH - 15 * 2,
            h: 45,
        });
        let group4 = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 15,
            y: DEVICE_HEIGHT - 145,
            w: DEVICE_WIDTH - 15 * 2,
            h: 45,
        });
        let group5 = hmUI.createWidget(hmUI.widget.GROUP, {
            x: 15,
            y: DEVICE_HEIGHT - 100,
            w: DEVICE_WIDTH - 15 * 2,
            h: 45,
        });

        this.createKeyButton(group1, "Q", 0);
        this.createKeyButton(group1, "W", 1);
        this.createKeyButton(group1, "E", 2);
        this.createKeyButton(group1, "R", 3);
        this.createKeyButton(group1, "T", 4);
        this.createKeyButton(group1, "Y", 5);
        this.createKeyButton(group1, "U", 6);
        this.createKeyButton(group1, "I", 7);
        this.createKeyButton(group1, "O", 8);
        this.createKeyButton(group1, "P", 9);

        this.createKeyButton(group2, "A", 0);
        this.createKeyButton(group2, "S", 1);
        this.createKeyButton(group2, "D", 2);
        this.createKeyButton(group2, "F", 3);
        this.createKeyButton(group2, "G", 4);
        this.createKeyButton(group2, "H", 5);
        this.createKeyButton(group2, "J", 6);
        this.createKeyButton(group2, "K", 7);
        this.createKeyButton(group2, "L", 8);

        this.createKeyButton(group3, "Z", 1);
        this.createKeyButton(group3, "X", 2);
        this.createKeyButton(group3, "C", 3);
        this.createKeyButton(group3, "V", 4);
        this.createKeyButton(group3, "B", 5);
        this.createKeyButton(group3, "N", 6);
        this.createKeyButton(group3, "M", 7);


        this.createKeyButton(group4, "^", 2);
        this.createKeyButton(group4, " ", 3);
        this.createKeyButton(group4, ",", 4);
        this.createKeyButton(group4, ".", 5);
        this.createKeyButton(group4, "<-", 6, () => {
            this.state.noteText = this.state.noteText.substring(0, this.state.noteText.length - 1);
            this.updateInput();
        });
    },
    createKeyButton(group, text, index, callback) {
        group.createWidget(hmUI.widget.BUTTON, {
            text: text,
            x: index * 35,
            y: 0,
            w: 35,
            h: 45,
            normal_color: 0xfc6950,
            press_color: 0xfeb4a8,
            radius: 12,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.BOTTOM,
            click_func: callback !== undefined && callback != null ? callback : () => {
                this.state.noteText = this.state.noteText.concat(text);
                this.updateInput();
            }
        });
    },
    updateInput() {
        this.state.input.setProperty(hmUI.prop.MORE, {
            text: this.state.noteText
        });
    }
})