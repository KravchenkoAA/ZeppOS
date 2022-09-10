import {gettext} from 'i18n'

export const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = hmSetting.getDeviceInfo()

const STATUS_BAR_HEIGHT = 65;
const ADD_BUTTON_SIDE_SIZE = 70
const SCROLL_LIST_HEIGHT = DEVICE_HEIGHT - 180;

export const ADD_BUTTON = {
    x: DEVICE_WIDTH - ADD_BUTTON_SIDE_SIZE - 30,
    y: STATUS_BAR_HEIGHT + SCROLL_LIST_HEIGHT + 5,
    w: ADD_BUTTON_SIDE_SIZE,
    h: ADD_BUTTON_SIDE_SIZE,
    normal_src: "plus.png",
    press_src: "plus.png"
}

export const SCROLL_LIST = {
    x: 30,
    y: STATUS_BAR_HEIGHT,
    w: DEVICE_WIDTH - 30 * 2,
    h: SCROLL_LIST_HEIGHT,
    item_config_count: 2,
    item_height: 80,
    item_space: 6,
    item_config: [
        {
            type_id: 1,
            item_bg_color: 0x333333,
            item_bg_radius: 10,
            text_view: [
                {
                    x: 80,
                    y: 0,
                    w: 360,
                    h: 80,
                    key: 'name',
                    color: 0xffffff,
                    text_size: 36,
                    align_h: hmUI.align.LEFT,
                },
            ],
            text_view_count: 1,
            item_height: 80,
        },
        {
            type_id: 2,
            item_bg_color: 0x333333,
            item_bg_radius: 10,
            text_view: [
                {
                    x: 80,
                    y: 0,
                    w: 360,
                    h: 80,
                    key: 'name',
                    color: 0xff0000,
                    text_size: 36,
                    align_h: hmUI.align.LEFT,
                },
            ],
            text_view_count: 1,
            item_height: 80,
        },
    ]
}

export const TIPS_TEXT_STYLE = {
    text: gettext('no_notes_message'),
    x: 30,
    y: STATUS_BAR_HEIGHT,
    w: DEVICE_WIDTH - 30 * 2,
    h: SCROLL_LIST_HEIGHT,
    color: 0xffffff,
    text_size: 32,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
}