import * as _ from 'lodash';

import Node from './Node';
import IAppDatas from '../IAppDatas';
import Sound from '../Sound';

import GameController from '../GameController';
import { IGameProps } from '../GameProps';


export default class Play extends Node {
    private chanName: string;
    private sndName: string;
    private sound: Sound | null;

    constructor (chanName: string, sndName: string, idNext?: number[] | null) {
        super(idNext);
        this.chanName = chanName;
        this.sndName = sndName;
        this.sound = null;
    }

    toString(): string {
        return `Play("${this.chanName}", "${this.sndName}")`;
    }

    init(game: GameController, datas: IAppDatas) {
        super.init(game, datas);

        if (_.has(datas.sounds, this.sndName)) {
            this.sound = datas.sounds[this.sndName];
        } else console.warn(`Play: invalid sound name: ${this.sndName}`);
    }

    load() {
        super.load();
        if (this.sound !== null) this.sound.load();
    }

    execute(gameProps: IGameProps): Partial<IGameProps> {
        const res = super.execute(gameProps);
        if (this.sound !== null) {
            if (res.sounds === undefined) res.sounds = {};
            res.sounds[this.chanName] = this.sound;
        }
        return res;
    }
}
