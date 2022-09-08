import { WeaponItem } from './share/types';
import { action, makeObservable, observable } from 'mobx';

export class WeaponStore {
    data: WeaponItem[] = [];
    step: number = 0;

    constructor() {
        makeObservable(this, {
            step: observable,
            data: observable,
            updateStep: action,
            addStep: action,
            reduceStep: action,
            updateData: action,
        });
    }

    updateStep(next: number) {
        this.step = next;
    }

    addStep() {
        this.step += 1;
    }

    reduceStep() {
        this.step -= 1;
    }

    updateData(next: WeaponItem[]) {
        this.data = next;
    }
}
