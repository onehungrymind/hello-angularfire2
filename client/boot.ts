import 'core-js';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './src/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
