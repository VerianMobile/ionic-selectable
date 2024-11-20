import { AfterViewInit, ElementRef } from '@angular/core';
import { IonContent, IonInfiniteScroll, IonSearchbar, NavParams } from '@ionic/angular';
import { IonicSelectableComponent } from './ionic-selectable.component';
import * as i0 from "@angular/core";
export declare class IonicSelectableModalComponent implements AfterViewInit {
    private navParams;
    _element: ElementRef;
    _content: IonContent;
    _header: HTMLElement;
    selectComponent: IonicSelectableComponent;
    _searchbarComponent: IonSearchbar;
    _infiniteScroll: IonInfiniteScroll;
    _cssClass: boolean;
    get _canClearCssClass(): boolean;
    get _isMultipleCssClass(): boolean;
    get _isSearchingCssClass(): boolean;
    get _isIos(): boolean;
    _isMD(): boolean;
    get _isAddItemTemplateVisibleCssClass(): boolean;
    onResize(): void;
    constructor(navParams: NavParams, _element: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IonicSelectableModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IonicSelectableModalComponent, "ionic-selectable-modal", never, {}, {}, never, never, true, never>;
}
