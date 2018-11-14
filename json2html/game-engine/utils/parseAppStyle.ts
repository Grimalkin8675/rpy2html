import * as _ from 'lodash';

import { IStyle } from '../../renpy-json-loader/IRenpyJson';

import IObj from '../classes/IObj';
import Font from '../classes/Font';
import Image from '../classes/Image';


export default (style: IStyle, fonts: IObj<Font>, images: IObj<Image>): string => {
    const newStyle = _.has(images, 'main_menu_overlay');

    return (
`${getFonts(fonts)}

.App>* {
    width: ${100 * style.game_width / style.game_height}vh;
}

.MainMenu, .GameMenu, .Confirm {
    font-family: ${style.mmenu_ffamily};
    font-size: ${style.mmenu_fsize_h}vh;
}

.Textbox {
    height: ${style.textbox_height};
    ${style.textbox_yalign}; /* top: 0; or bottom: 0; */
    ${getBgOrElse(images, 'textbox_bg', 'rgba(0,0,0,0.75)')}
}

.Textbox>.namebox {
    top: ${style.namebox_top};
    left: ${style.namebox_left};
    right: ${style.namebox_left};
    font-family: ${style.namebox_ffamily};
    font-size: ${style.namebox_fsize_h}vh;
    width: ${style.namebox_width};
    height: ${style.namebox_height};
    padding: ${style.namebox_padding};
    text-align: ${style.namebox_txtalign};
    ${getBgOrElse(images, 'namebox_bg')}
    ${style.namebox_bgtile};
}

.SaveSlot .Textbox>.namebox {
    font-size: ${style.namebox_fsize_h * style.thumb_height_scale}vh;
}

.Textbox>.dialog {
    top: ${style.dialog_top};
    left: ${style.dialog_left};
    font-family: ${style.dialog_ffamily};
    font-size: ${style.dialog_fsize_h}vh;
    color: ${style.dialog_color};
    width: ${style.dialog_width};
    text-align: ${style.dialog_txtalign};
}

.SaveSlot .Textbox>.dialog {
    font-size: ${style.dialog_fsize_h * style.thumb_height_scale}vh;
}

.MainMenu {
    ${getBgOrElse(images, 'main_menu_bg', '#5f777f')}
}

.main-menu-overlay {
    ${getBgOrElse(images, 'main_menu_overlay')}
}

.game-menu-overlay {
    ${getBgOrElse(images, 'game_menu_overlay', 'rgba(0, 0, 0, 0.75)')}
}

.menu-items {
    width: ${style.mmenuitems_width};${
        newStyle ? '' : `
    background-color: rgba(0, 0, 0, 0.5);`}
}

.submenu {
    width: ${style.submenu_width};
}

.MenuButton, .submenu {
    font-family: ${style.guibtn_ffamily};
    font-size: ${style.guibtn_fsize_h}vh;
}

.Memory>.about {
    border-color: ${style.interface_text_color};
}

.MenuButton {
    color: ${style.guibtn_color};
    width: ${style.guibtn_width};
    text-align: ${style.guibtn_txtalign};
}

.MainMenu .MenuButton, .GameMenu .MenuButton {
    padding: ${style.guibtn_padding};
    height: ${style.guibtn_height};
}

.MenuButton.selected, .MenuButton.selected:hover {
    color: ${style.selected_color};
}

.MenuButton:hover {
    color: ${style.guibtn_color_hover};
}

.MenuButton:disabled .Choices>button:disabled {
    color: ${style.disabledbtn_color};
}

.Help td:first-child, .MemoryGame>.key {
    color: ${style.accent_color};
}

.Choices {
    height: ${style.choice_height};
    ${style.choice_yalign};
}

.Choices>button {
    color: ${style.choicebtn_color};
    width: ${style.choicebtn_width};
    padding: ${style.choicebtn_padding};
    font-family: ${style.choicebtn_ffamily};
    font-size: ${style.choicebtn_fsize_h}vh;
    text-align: ${style.choicebtn_txtalign};
    ${getBgOrElse(images, 'choice_btn_bg', 'rgba(0, 0, 0, 0.75)')}
    ${style.choicebtn_bgtile};
}

.SaveSlot .Choices>button {
    font-size: ${style.choicebtn_fsize_h * style.thumb_height_scale}vh;
}

.Choices>button:hover {
    color: ${style.choicebtn_color_hover};
    ${getBgOrElse(images, 'choice_btn_hover', 'rgba(0, 153, 204, 0.75)')}
}

.SaveSlot {
    ${getBgOrElse(images, 'slot_bg', '#003d51')}
    color: ${style.slot_color};
    width: ${style.slot_width};
    height: ${style.slot_height};
    margin: ${style.slot_padding};
    font-size: ${style.slot_fsize_h}vh;
    text-align: ${style.slot_txtalign};
}

.SaveSlot:hover {
    ${getBgOrElse(images, 'slot_hover', '#005b7a')}
}

.SaveSlot>* {
    width: calc(${style.thumb_width} + 1px);
}

.SaveSlot>.Game, .SaveSlot>.empty-slot {
    height: calc(${style.thumb_height} + 1px);
    margin-top: ${style.thumb_margin_top};
}

.Confirm {
    ${getBgOrElse(images, 'confirm_overlay', 'rgba(0, 0, 0, 0.25)')}
}

.Confirm>.frame {
    padding: ${style.confirmframe_padding};
    ${getBgOrElse(images, 'frame_bg', 'black')};${
        newStyle ? '' : `
    border: 3px solid #0095c7;`}
}

@media (max-aspect-ratio: ${style.game_width} / ${style.game_height}) {
    .App {
        flex-direction: column;
    }

    .App>* {
        width: 100vw;
        height: ${100 * style.game_height / style.game_width}vw;
    }

    .MainMenu, .GameMenu, .Confirm {
        font-size: ${style.mmenu_fsize_v}vw;
    }

    .Textbox>.namebox {
        font-size: ${style.namebox_fsize_v}vw;
    }

    .SaveSlot .Textbox>.namebox {
        font-size: ${style.namebox_fsize_v * style.thumb_width_scale}vw;
    }

    .Textbox>.dialog {
        font-size: ${style.dialog_fsize_v}vw;
    }

    .SaveSlot .Textbox>.dialog {
        font-size: ${style.dialog_fsize_v * style.thumb_width_scale}vw;
    }

    .Choices>button {
        font-size: ${style.choicebtn_fsize_v}vw;
    }

    .SaveSlot .Choices>button {
        font-size: ${style.choicebtn_fsize_v * style.thumb_width_scale}vw;
    }

    .MenuButton, .submenu {
        font-size: ${style.guibtn_fsize_v}vw;
    }

    .SaveSlot {
        font-size: ${style.slot_fsize_v}vw;
    }
}`
    );
};

const getFonts = (fonts: IObj<Font>): string => {
    return _.reduce(
        fonts,
        (acc: string, font: Font, name: string) => {
            if (name === 'dejavusans_bold_ttf') {
                return `${acc}${font.face('dejavusans_ttf')}\n`;
            } else {
                return `${acc}${font.face(name)}\n`;
            }
        },
        ''
    );
};

const getBgOrElse = (images: IObj<Image>, img: string, color?: string): string => {
    if (_.has(images, img)) return (
`background-color: unset;
background-image: url('${images[img].file}');`
    );
    console.warn(`Background image not found: ${img}`);
    if (color !== undefined) return `background-color: ${color};`;
    return '';
};
