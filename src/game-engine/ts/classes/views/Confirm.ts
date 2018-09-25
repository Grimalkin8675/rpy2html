import * as _ from 'lodash';
import * as $ from 'jquery';

import { Channel } from '../Channel';
import { Sound } from '../Sound';
import { Story } from '../Story';
import { View } from './View';
import { translations as transl, Language as Lang } from "../../translations";


class Btn {
    txt: string;
    action: (e: any) => void;

    constructor (txt: string, action: (e: any) => void) {
        this.txt = txt;
        this.action = action;
    }
}


export class Confirm extends View {
    private $message: JQuery<HTMLElement>;
    private $items: JQuery<HTMLElement>;
    private previousView: View;
    private buttons: Array<Btn>;
    private escapeAction: (e: any) => void;
    private confirmAudioShown: boolean;
    private lang: Lang;

    constructor (strLang: string) {
        super();

        this.confirmAudioShown = false;

        this.$message = $("#confirm-msg");
        this.$items = this.story.$.confirm.find(".items").first();
        this.hide();

        this.lang = _.has(transl, strLang)?transl[strLang]:transl["en"];
    }

    show(): void {
        this.previousView = this.story.currentView;
        super.show();

        this.story.$.confirm.show();
    }

    hide(): void {
        super.hide();
        this.story.$.confirm.hide();

        if (this.previousView != undefined) this.previousView.show();
    }

    confirmAudio(chan: Channel, snd: Sound | Array<Sound>): void {
        if (!this.confirmAudioShown) {
            const siht = this;

            this.confirm(
                this.lang.confirm.audio,
                [new Btn(this.lang.confirm.audioBtn, () => chan.play(snd))],
                () => {
                    siht.hide();
                    chan.play(snd); });
        }
    }

    confirmQuit(): void {
        const siht = this;

        this.confirm(
            this.lang.confirm.quit,
            [   new Btn(
                    this.lang.confirm.yes,
                    () => window.location.assign(
                        window.location.protocol+"//"+window.location.host)),
                new Btn(this.lang.confirm.no, () => {})],
            () => siht.hide());
    }

    private confirm(msg: string, buttons: Array<Btn>, escapeAction: (e: any) => void): void {
        this.show();

        this.buttons = buttons;
        this.escapeAction = escapeAction;

        this.$message.text(msg);
        this.$items.empty();

        _.forEach(buttons, (btn: Btn) =>
            this.$items.append($("<button>").text(btn.txt)));
    }

    onClick(story: Story, event: any): void {
        const $btn = $(event.target).closest("button");

        if ($btn.length === 0) {
            const $confirmFrame = $(event.target).closest("#confirm>.frame");

            if ($confirmFrame.length === 0) {
                // if click wasn't on #confirm>.frame
                story.views.confirm.escapeAction(event);
            }
        } else {
            story.views.confirm.buttons[$btn.index()].action(event);
            story.currentView.hide();
        }
    }

    onKeyup(story: Story, event: any): void {
        switch (event.which) {
            case 38: // up arrow
                break;

            case 40: // down arrow
                break;

            case 37: // left arrow
                break;

            case 39: // right arrow
                break;

            case 13: // enter
                break;

            case 27: // escape
                event.preventDefault();
                story.views.confirm.escapeAction(event);
                break;
        }
    }

    onWheel(story: Story, event: any): void {}
}