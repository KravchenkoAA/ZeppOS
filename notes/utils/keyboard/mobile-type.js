export class MobileType {
    constructor(keyboard) {
        this.keyboard = keyboard;
        this.rendered = false;
        this.buttons = [];
    }

    render(minX, maxX, minY, maxY) {
        if (this.rendered) {
            this.buttons.forEach(button => {
                button.uiState.setProperty(hmUI.prop.VISIBLE, true);
            });
        } else {
            let width = maxX - minX;
            let height = Number.parseInt((maxY - minY) / 4 / 10) * 10;
            let yMargin = ((maxY - minY) - 4 * height) / 2;

            this.group1 = this.createButtonsGroup(minX, maxY, yMargin, height, width, 4);
            this.group2 = this.createButtonsGroup(minX, maxY, yMargin, height, width, 3);
            this.group3 = this.createButtonsGroup(minX, maxY, yMargin, height, width, 2);
            this.group4 = this.createButtonsGroup(minX, maxY, yMargin, height, width, 1);

            width = Number.parseInt((maxX - minX) / 5 / 10) * 10;
            let xMargin = ((maxX - minX) - 5 * width) / 2;
            let buttonPosition = 0;
            for (let i = 0; i < 5; i++) {
                this.renderButton(this.group1, height, width, xMargin, i, buttonPosition);
                buttonPosition++;
            }

            buttonPosition = 0;
            for (let i = 5; i < 10; i++) {
                this.renderButton(this.group2, height, width, xMargin, i, buttonPosition);
                buttonPosition++;
            }

            buttonPosition = 0;
            for (let i = 10; i < 15; i++) {
                this.renderButton(this.group3, height, width, xMargin, i, buttonPosition);
                buttonPosition++;
            }

            buttonPosition = 0;
            for (let i = 15; i < 20; i++) {
                this.renderButton(this.group4, height, width, xMargin, i, buttonPosition);
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

    renderButton(group, height, width, xMargin, buttonIndex, buttonPosition) {
        // let button = this.getButton(buttonIndex);
        // button.setLanguage(this.language);

        let uiState = group.createWidget(hmUI.widget.BUTTON, {
            text: "0",
            x: width * buttonPosition + xMargin,
            y: 0,
            w: width,
            h: height,
            normal_color: 0xfc6950,
            press_color: 0xfeb4a8,
            radius: 12,
            click_func: () => {
                // button.runAction(this.keyboard);
                this.keyboard.addSymbol("MOB");
            }
        });

        // button.setUIState(uiState);
        this.buttons.push({button: null, uiState: uiState});
    }

    hide() {
        this.buttons.forEach(button => {
            button.uiState.setProperty(hmUI.prop.VISIBLE, false);
        });
    }

    getButtons() {
        return this.buttons;
    }
}