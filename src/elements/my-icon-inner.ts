import { bindable } from 'aurelia-framework';

export class MyIconInner {
    @bindable() public name!: string;

    public use: string;

    public attached(): void {
        this.use = `<use href="src/assets/stack.svg#${this.name}"></use>`;
    }
}
