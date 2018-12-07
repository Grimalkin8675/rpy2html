import * as _ from 'lodash';

import Save from './Save';
import QuickSave from './QuickSave';


export default class Saves {
    /**
     * Wraps quick save and save slots.
     */
    quickSave: QuickSave | null;
    slots: Array<Save | null>;

    constructor (quickSave: QuickSave | null, slots: Array<Save | null>) {
        this.quickSave = quickSave;
        this.slots = slots;
    }

    static fromAny(saves: any): Saves | null {
        if (  _.keys(saves).length === 2
           && _.has(saves, 'quickSave')
           && _.has(saves, 'slots') && _.isArray(saves.slots)) {
            const quickSave: QuickSave | null =
                QuickSave.fromAny(saves.quickSave);
            const slots: Array<Save | null> =
                _.map((saves.slots as any[]), Save.fromAny);
            return new Saves(quickSave, slots);
        } else return null;
    }
}
