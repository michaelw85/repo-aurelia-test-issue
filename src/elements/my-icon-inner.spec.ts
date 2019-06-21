import { bootstrap } from 'aurelia-bootstrapper';
import { ComponentTester, StageComponent, waitForDocumentElement } from 'aurelia-testing';

describe('Icon inner html setup', () => {
    let component: ComponentTester;

    describe('component', () => {
        beforeEach(() => {
            component = StageComponent.withResources('elements/my-icon-inner').inView('<my-icon-inner name="angle-up"></my-icon-inner>');
        });

        it('should render svg icon with href', async () => {
            await component.create(bootstrap);

            expect(await waitForDocumentElement('my-icon-inner')).toMatchSnapshot();
        });

        afterEach(() => component.dispose());
    });
});
