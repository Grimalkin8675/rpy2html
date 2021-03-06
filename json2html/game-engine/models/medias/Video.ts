import { some } from 'fp-ts/lib/Option';
import * as t from 'io-ts';

import { Either } from 'fp-ts/lib/Either';
import Media from './Media';

export default class Video extends Media<HTMLVideoElement> {
    load = () => {
        if (!this.isLoaded()) {
            const elt = document.createElement('video');
            elt.setAttribute('src', this.file);
            elt.setAttribute('preload', 'auto');
            this.elt = some(elt);
        }
    }

    play = () => this.getElt().play();

    pause = () => this.elt.map(_ => _.pause());

    stop = () =>
        this.elt.map(elt => {
            elt.pause();
            elt.currentTime = 0;
        })

    clone = (): Video => {
        const res = new Video(this.file);
        res.load();
        return res;
    }

    onEnded = (f: () => void) => (this.getElt().onended = f);

    static decode = (video: unknown): Either<t.Errors, Video> =>
        Media.decodeFile(video).map(_ => new Video(_))
}
