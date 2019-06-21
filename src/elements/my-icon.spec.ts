import { bootstrap } from 'aurelia-bootstrapper';
import { ComponentTester, StageComponent, waitForDocumentElement } from 'aurelia-testing';

describe('Icon', () => {
    let component: ComponentTester;

    describe('component', () => {
        beforeEach(() => {
            component = StageComponent.withResources('elements/my-icon').inView('<my-icon name="angle-up"></my-icon>');
        });

        it('should render svg icon with href', async () => {
            await component.create(bootstrap);

            expect(await waitForDocumentElement('my-icon')).toMatchSnapshot();
        });

        afterEach(() => component.dispose());
    });
});
