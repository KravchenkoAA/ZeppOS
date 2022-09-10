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
            x: 0,
            y: DEVICE_HEIGHT - 50,
            w: DEVICE_WIDTH,
            h: 50,
        });

        let modeButton = 60;
        this.state.buttonsGroup.createWidget(hmUI.widget.BUTTON, {
            text: gettext("back_button"),
            x: 0,
            y: 0,
            w: (DEVICE_WIDTH - modeButton) / 2,
            h: 50,
            normal_color: 0xfc6950,
            press_color: 0xfeb4a8,
            click_func: () => {
                hmApp.goBack()
            }
        });
        this.state.buttonsGroup.createWidget(hmUI.widget.BUTTON, {
            text: "MODE",
            x: (DEVICE_WIDTH - modeButton) / 2,
            y: 0,
            w: modeButton,
            h: 50,
            normal_color: 0xfc6950,
            press_color: 0xfeb4a8,
            click_func: () => {
                this.state.keyboard.changeMode();
            }
        });
        this.state.buttonsGroup.createWidget(hmUI.widget.BUTTON, {
            text: gettext("save_button"),
            x: (DEVICE_WIDTH + modeButton) / 2,
            y: 0,
            w: (DEVICE_WIDTH - modeButton) / 2,
            h: 50,
            normal_color: 0xfc6950,
            press_color: 0xfeb4a8,
            click_func: () => {
                this.addNote();
            }
        });

        this.state.keyboard = new Keyboard(this.state.input);
        this.state.keyboard.render(30, DEVICE_WIDTH - 30, 130, DEVICE_HEIGHT - 70);
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
    }
})