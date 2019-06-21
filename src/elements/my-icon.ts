import { bindable } from 'aurelia-framework';

export class MyIcon {
    @bindable() public name!: string;

    public svgUse!: SVGUseElement;

    public attached(): void {
        this.svgUse.setAttribute('href', `src/assets/stack.svg#${this.name}`);
    }
}
