import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/my-icon'),
    PLATFORM.moduleName('./elements/my-icon-inner')
  ]);
}
