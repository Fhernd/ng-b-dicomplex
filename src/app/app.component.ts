import { Component, Inject, ReflectiveInjector } from '@angular/core';

/**
 * Services
 */
import {
  ApiService
} from './services/ApiService';
import {
  ViewPortService
} from './services/ViewPortService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private apiService: ApiService, 
    @Inject('ApiServiceAlias') private aliasService: ApiService,
    @Inject('SizeService') private sizeService: any){

    }

    invokeApi() : void {
      this.apiService.get();
      this.aliasService.get();
      this.sizeService.run();
    }

    useInjectors() : void {
      let injector = ReflectiveInjector.resolveAndCreate([
        ViewPortService,
        {
          provide: 'OtherSizeService', 
          useFactory: (viewPort: any) => {
            return viewPort.determineService();
          },
          deps: [ViewPortService]
        }
      ]);

      let sizeService: any = injector.get('OtherSizeService');
      sizeService.run();
    }
}
