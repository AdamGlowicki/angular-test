import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

export interface HandlerMenu {
  isOpenSearch: boolean;
  isOpenMenu: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ToolbarServiceService {
  menuService: HandlerMenu = {
    isOpenSearch: false,
    isOpenMenu: false,
  };

  constructor() {
  }

  handlerMenuStream: Subject<HandlerMenu> = new BehaviorSubject(this.menuService);

  setIsOpenSearch = () => {
    this.menuService = {
      ...this.menuService,
      isOpenSearch: !this.menuService.isOpenSearch
    };
    this.handlerMenuStream.next(this.menuService);
  };

  setIsOpenMenu = () => {
    this.menuService = {
      ...this.menuService,
      isOpenMenu: !this.menuService.isOpenMenu
    };
    this.handlerMenuStream.next(this.menuService);
  };

  getHandlerMenuStream = () => {
    this.handlerMenuStream.next(this.menuService);
    return this.handlerMenuStream.asObservable();
  };
}
