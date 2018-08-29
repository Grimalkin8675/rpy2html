// css
import '../game-engine/base.css';
import './converted.css';

// classes
import { Story, StoryDatas } from '../game-engine/classes/Story';
import { Image, Images } from '../game-engine/classes/Image';
import { Font, Fonts } from '../game-engine/classes/Font';
import { Sound, Sounds } from '../game-engine/classes/Sound';
import { Char, Chars } from '../game-engine/classes/Char';
import { Nodes, Menu, MenuItem, Say, If, IfBlock, PyExpr, Scene, Show, Hide, Play, Stop } from '../game-engine/classes/nodes';


// const
const GAME_NAME: string = ${game_name};

const GAME_VERSION: string = ${game_version};

const SHOW_NAME: boolean = ${show_name};

const MAIN_MENU_BG: string = ${main_menu_bg};

const MAIN_MENU_MUSIC: string = ${main_menu_music};


// images
${import_game_icon}
${import_main_menu_overlay}
${import_textbox}
${import_menu_btn_bg}
${import_menu_btn_hover}
${import_namebox_bg}

${imgs_imports}

const IMAGES: Images = ${imgs_dic};


// fonts
${fonts_imports}

const FONTS: Fonts = ${fonts_dic};


// sounds
${snds_imports}

const SOUNDS: Sounds = ${snds_dic};


// chars
const CHARS: Chars = ${chars};


// story
const STORY: Story = Story.getInstance();
console.log('STORY =', STORY);


// reference ressources in story object
const datas: StoryDatas = {
    name: GAME_NAME,
    version: GAME_VERSION,
    showName: SHOW_NAME,
    icon: GAME_ICON,
    main_menu_bg: MAIN_MENU_BG,
    main_menu_music: MAIN_MENU_MUSIC,
    main_menu_overlay: MAIN_MENU_OVERLAY,
    menu_btn_bg: MENU_BTN_BG,
    menu_btn_hover: MENU_BTN_HOVER,
    textbox_bg: TEXTBOX_BG,
    namebox_bg: NAMEBOX_BG,
    images: IMAGES,
    fonts: FONTS,
    sounds: SOUNDS,
    chars: CHARS
};

STORY.initiateStory(datas);


// nodes
const NODES: Nodes = ${nodes};


// start story
STORY.setNodes(NODES);