import { StrMap } from 'fp-ts/lib/StrMap';

export interface Translation {
    menu: {
        pause: string;
        // main menu buttons
        start: string;
        load: string;
        prefs: string;
        memory: string;
        help: string;
        quit: string;
        // game menu buttons
        resume: string;
        history: string;
        save: string;
        mmenu: string;
        // armless wanker menu
        back: string;
        qSave: string;
        qLoad: string;
        saved: string;
    };
    confirm: {
        // diverse confirm translations
        audio: string; // the message for the pop up about playing sound
        audioBtn: string; // the button associated
        quit: string; // quit game confirm
        unsaved: string; // any action which will lose unsaved progress
        override: string; // overriding an existing save confirm
        yes: string;
        no: string;
    };
    memory: {
        about: string;
        delete: string;
        deleteAll: string;
        total: string;
    };
    emptySlot: string;
    bytes: string;
    noGamesYet: string;
}

const translations: StrMap<Translation> = new StrMap({
    en: {
        menu: {
            pause: 'Pause',
            start: 'Start',
            load: 'Load',
            prefs: 'Preferences',
            memory: 'Memory',
            help: 'Help',
            quit: 'Quit',
            resume: 'Resume',
            history: 'History',
            save: 'Save',
            mmenu: 'Main Menu',
            back: 'Back',
            qSave: 'Quick save',
            qLoad: 'Quick load',
            saved: 'Saved!'
        },
        confirm: {
            audio: 'Be aware that this page is playing audio.',
            audioBtn: 'STFU and take me to the game',
            quit: 'Are you sure you want to quit?',
            unsaved: 'Are you sure?<br>Unsaved progress will be lost.',
            override: 'Are you sure you want to override the existing save?',
            yes: 'Yes',
            no: 'No'
        },
        memory: {
            about:
                'Jean Plank games are saved on local browser storage. They are only avaible on this computer.',
            delete: 'delete',
            deleteAll: 'delete all',
            total: 'total'
        },
        emptySlot: 'empty slot',
        bytes: 'Bytes',
        noGamesYet: 'No games saved yet.'
    },
    fr: {
        menu: {
            pause: 'Pause',
            start: 'Commencer',
            load: 'Charger une partie',
            prefs: 'Préférences',
            memory: 'Mémoire',
            help: 'Aide',
            quit: 'Quitter',
            resume: 'Continuer',
            history: 'Historique',
            save: 'Sauvegarder',
            mmenu: 'Menu Principal',
            back: 'Retour',
            qSave: 'Sauvegarde rapide',
            qLoad: 'Chargement rapide',
            saved: 'Sauvegardé !'
        },
        confirm: {
            audio: 'Attention ! Cette page joue du son...',
            audioBtn: 'OSEF ! Je veux jouer au jeu.',
            quit: 'Êtes-vous sûr de vouloir quitter ?',
            unsaved:
                'Êtes vous sûr ?<br>Toute progression non sauvegardée sera perdue.',
            override:
                'Êtes vous sûr de vouloir écraser la sauvegarde existante ?',
            yes: 'Oui',
            no: 'Non'
        },
        memory: {
            about:
                'Les sauvegardes des jeux Jean Plank se trouvent dans les fichiers locaux du navigateur. Elles ne sont disponibles que sur cet ordinateur.',
            delete: 'supprimer',
            deleteAll: 'tout supprimer',
            total: 'total'
        },
        emptySlot: 'emplacement vide',
        bytes: 'Octets',
        noGamesYet: 'Aucune jeu sauvegardé'
    }
});
export default translations;
