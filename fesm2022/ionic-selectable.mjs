import { NgIf, NgTemplateOutlet, NgFor, NgClass, NgStyle } from '@angular/common';
import * as i0 from '@angular/core';
import { Directive, Component, ViewChild, HostBinding, HostListener, EventEmitter, forwardRef, TemplateRef, ViewEncapsulation, Optional, Input, Output, ContentChild } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1 from '@ionic/angular';
import { IonContent, IonInfiniteScroll, IonicModule } from '@ionic/angular';

class IonicSelectableAddItemTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableAddItemTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableAddItemTemplateDirective, isStandalone: true, selector: "[ionicSelectableAddItemTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableAddItemTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableAddItemTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableCloseButtonTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableCloseButtonTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableCloseButtonTemplateDirective, isStandalone: true, selector: "[ionicSelectableCloseButtonTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableCloseButtonTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableCloseButtonTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableFooterTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableFooterTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableFooterTemplateDirective, isStandalone: true, selector: "[ionicSelectableFooterTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableFooterTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableFooterTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableGroupEndTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableGroupEndTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableGroupEndTemplateDirective, isStandalone: true, selector: "[ionicSelectableGroupEndTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableGroupEndTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableGroupEndTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableGroupTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableGroupTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableGroupTemplateDirective, isStandalone: true, selector: "[ionicSelectableGroupTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableGroupTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableGroupTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableHeaderTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableHeaderTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableHeaderTemplateDirective, isStandalone: true, selector: "[ionicSelectableHeaderTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableHeaderTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableHeaderTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableIconTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableIconTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableIconTemplateDirective, isStandalone: true, selector: "[ionicSelectableIconTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableIconTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableIconTemplate]',
                    standalone: true
                }]
        }] });

class IonicSelectableItemEndTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableItemEndTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableItemEndTemplateDirective, isStandalone: true, selector: "[ionicSelectableItemEndTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableItemEndTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableItemEndTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableItemIconTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableItemIconTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableItemIconTemplateDirective, isStandalone: true, selector: "[ionicSelectableItemIconTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableItemIconTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableItemIconTemplate]',
                    standalone: true
                }]
        }] });

class IonicSelectableItemTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableItemTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableItemTemplateDirective, isStandalone: true, selector: "[ionicSelectableItemTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableItemTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableItemTemplate]',
                    standalone: true
                }]
        }] });

class IonicSelectableMessageTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableMessageTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableMessageTemplateDirective, isStandalone: true, selector: "[ionicSelectableMessageTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableMessageTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableMessageTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableModalComponent {
    navParams;
    _element;
    _content;
    _header;
    selectComponent;
    _searchbarComponent;
    _infiniteScroll;
    _cssClass = true;
    get _canClearCssClass() {
        return this.selectComponent.canClear;
    }
    get _isMultipleCssClass() {
        return this.selectComponent.isMultiple;
    }
    get _isSearchingCssClass() {
        return this.selectComponent._isSearching;
    }
    get _isIos() {
        return this.selectComponent._isIos;
    }
    _isMD() {
        return this.selectComponent._isMD;
    }
    get _isAddItemTemplateVisibleCssClass() {
        return this.selectComponent._isAddItemTemplateVisible;
    }
    onResize() {
        // ion-footer inside the template might change its height when
        // device orientation changes.
        this.selectComponent._positionAddItemTemplate();
    }
    constructor(navParams, _element) {
        this.navParams = navParams;
        this._element = _element;
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._modalComponent = this;
        this.selectComponent._selectedItems = [];
        if (!this.selectComponent._isNullOrWhiteSpace(this.selectComponent.value)) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach((item) => {
                    this.selectComponent._selectedItems.push(item);
                });
            }
            else {
                this.selectComponent._selectedItems.push(this.selectComponent.value);
            }
        }
        this.selectComponent._setItemsToConfirm(this.selectComponent._selectedItems);
    }
    ngAfterViewInit() {
        this._header = this._element.nativeElement.querySelector('ion-header');
        if (this._searchbarComponent && this.selectComponent.shouldFocusSearchbar) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout(() => {
                this._searchbarComponent.setFocus();
            }, 1000);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableModalComponent, deps: [{ token: i1.NavParams }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableModalComponent, isStandalone: true, selector: "ionic-selectable-modal", host: { listeners: { "window:resize": "onResize()" }, properties: { "class.ionic-selectable-modal": "this._cssClass", "class.ionic-selectable-modal-can-clear": "this._canClearCssClass", "class.ionic-selectable-modal-is-multiple": "this._isMultipleCssClass", "class.ionic-selectable-modal-is-searching": "this._isSearchingCssClass", "class.ionic-selectable-modal-ios": "this._isIos", "class.ionic-selectable-modal-md": "this._isMD", "class.ionic-selectable-modal-is-add-item-template-visible": "this._isAddItemTemplateVisibleCssClass" } }, viewQueries: [{ propertyName: "_content", first: true, predicate: IonContent, descendants: true }, { propertyName: "_searchbarComponent", first: true, predicate: ["searchbarComponent"], descendants: true }, { propertyName: "_infiniteScroll", first: true, predicate: IonInfiniteScroll, descendants: true }], ngImport: i0, template: "<ion-header>\n  <ion-toolbar *ngIf=\"!selectComponent.headerTemplate\"\n    [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\">\n    <ion-buttons [slot]=\"selectComponent.closeButtonSlot\">\n      <ion-button (click)=\"selectComponent._close()\">\n        <span *ngIf=\"selectComponent.closeButtonTemplate\" [ngTemplateOutlet]=\"selectComponent.closeButtonTemplate\">\n        </span>\n        <span *ngIf=\"!selectComponent.closeButtonTemplate\">\n          {{selectComponent.closeButtonText}}\n        </span>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <!-- Need span for for text ellipsis. -->\n      <span *ngIf=\"selectComponent.titleTemplate\" [ngTemplateOutlet]=\"selectComponent.titleTemplate\">\n      </span>\n      <span *ngIf=\"!selectComponent.titleTemplate\">\n        {{selectComponent.label}}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.headerTemplate\" [ngTemplateOutlet]=\"selectComponent.headerTemplate\">\n  </div>\n  <ion-toolbar *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\">\n    <ion-searchbar *ngIf=\"selectComponent.canSearch\" #searchbarComponent [(ngModel)]=\"selectComponent._searchText\"\n      (ionInput)=\"selectComponent._filterItems()\" (ionClear)=\"selectComponent._onSearchbarClear()\"\n      [placeholder]=\"selectComponent.searchPlaceholder\" [debounce]=\"selectComponent.searchDebounce\">\n    </ion-searchbar>\n    <div class=\"ionic-selectable-message\" *ngIf=\"selectComponent.messageTemplate\">\n      <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ionic-selectable-spinner\" *ngIf=\"selectComponent._isSearching\">\n    <div class=\"ionic-selectable-spinner-background\"></div>\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-list class=\"ion-no-margin\" *ngIf=\"selectComponent._hasFilteredItems\">\n    <ion-item-group *ngFor=\"let group of selectComponent._filteredGroups\" class=\"ionic-selectable-group\">\n      <ion-item-divider *ngIf=\"selectComponent._hasGroups\"\n        [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n        <!-- Need span for for text ellipsis. -->\n        <span *ngIf=\"selectComponent.groupTemplate\" [ngTemplateOutlet]=\"selectComponent.groupTemplate\"\n          [ngTemplateOutletContext]=\"{ group: group }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.groupTemplate\">\n          {{group.text}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.groupEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.groupEndTemplate\" [ngTemplateOutletContext]=\"{ group: group }\">\n          </div>\n        </div>\n      </ion-item-divider>\n      <ion-item button=\"true\" detail=\"false\" *ngFor=\"let item of group.items\" (click)=\"selectComponent._select(item)\"\n        class=\"ionic-selectable-item\" [ngClass]=\"{\n          'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\n          'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n        <!-- Need span for text ellipsis. -->\n        <span *ngIf=\"selectComponent.itemTemplate\" [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n          {{selectComponent._formatItem(item)}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n          </div>\n        </div>\n        <span *ngIf=\"selectComponent.itemIconTemplate\" [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\" [slot]=\"selectComponent.itemIconSlot\">\n        </ion-icon>\n        <ion-button *ngIf=\"selectComponent.canSaveItem\" class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._saveItem($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"create\" md=\"create-sharp\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"selectComponent.canDeleteItem\" class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._deleteItemClick($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"trash\" md=\"trash-sharp\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  <!-- Fail text should be above InfiniteScroll to avoid a gap when no items are found. -->\n  <div *ngIf=\"!selectComponent._hasFilteredItems\">\n    <span *ngIf=\"selectComponent.searchFailTemplate\" [ngTemplateOutlet]=\"selectComponent.searchFailTemplate\">\n    </span>\n    <div *ngIf=\"!selectComponent.searchFailTemplate\" class=\"ion-margin\">\n      {{selectComponent.searchFailText}}\n    </div>\n  </div>\n  <ion-infinite-scroll [disabled]=\"!selectComponent.hasInfiniteScroll\"\n    (ionInfinite)=\"selectComponent._getMoreItems()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<div class=\"ionic-selectable-add-item-template\" *ngIf=\"selectComponent._isAddItemTemplateVisible\"\n  [ngStyle]=\"{ 'top.px': _header.offsetHeight }\">\n  <div class=\"ionic-selectable-add-item-template-inner\"\n    [ngStyle]=\"{ 'height': selectComponent._addItemTemplateFooterHeight }\">\n    <span [ngTemplateOutlet]=\"selectComponent.addItemTemplate\"\n      [ngTemplateOutletContext]=\"{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }\">\n    </span>\n  </div>\n</div>\n<ion-footer *ngIf=\"selectComponent._footerButtonsCount > 0 || selectComponent.footerTemplate\"\n  [ngStyle]=\"{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }\">\n  <ion-toolbar *ngIf=\"!selectComponent.footerTemplate\">\n    <ion-row>\n      <ion-col *ngIf=\"selectComponent.canClear\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._clear()\"\n          [disabled]=\"!selectComponent._selectedItems.length\">\n          {{selectComponent.clearButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col *ngIf=\"selectComponent.canAddItem\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._addItemClick()\">\n          {{selectComponent.addButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col *ngIf=\"selectComponent.isMultiple || selectComponent.hasConfirmButton\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._confirm()\"\n          [disabled]=\"!selectComponent.isConfirmButtonEnabled\">\n          {{selectComponent.confirmButtonText}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.footerTemplate\" [ngTemplateOutlet]=\"selectComponent.footerTemplate\">\n  </div>\n</ion-footer>\n", dependencies: [{ kind: "ngmodule", type: IonicModule }, { kind: "component", type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { kind: "component", type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { kind: "component", type: i1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { kind: "component", type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { kind: "component", type: i1.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }, { kind: "component", type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { kind: "component", type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { kind: "component", type: i1.IonInfiniteScroll, selector: "ion-infinite-scroll", inputs: ["disabled", "position", "threshold"] }, { kind: "component", type: i1.IonInfiniteScrollContent, selector: "ion-infinite-scroll-content", inputs: ["loadingSpinner", "loadingText"] }, { kind: "component", type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { kind: "component", type: i1.IonItemDivider, selector: "ion-item-divider", inputs: ["color", "mode", "sticky"] }, { kind: "component", type: i1.IonItemGroup, selector: "ion-item-group" }, { kind: "component", type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { kind: "component", type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { kind: "component", type: i1.IonRow, selector: "ion-row" }, { kind: "component", type: i1.IonSearchbar, selector: "ion-searchbar", inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"] }, { kind: "component", type: i1.IonSpinner, selector: "ion-spinner", inputs: ["color", "duration", "name", "paused"] }, { kind: "component", type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { kind: "component", type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { kind: "directive", type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ionic-selectable-modal', standalone: true, imports: [IonicModule, NgIf, NgTemplateOutlet, FormsModule, NgFor, NgClass, NgStyle], template: "<ion-header>\n  <ion-toolbar *ngIf=\"!selectComponent.headerTemplate\"\n    [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\">\n    <ion-buttons [slot]=\"selectComponent.closeButtonSlot\">\n      <ion-button (click)=\"selectComponent._close()\">\n        <span *ngIf=\"selectComponent.closeButtonTemplate\" [ngTemplateOutlet]=\"selectComponent.closeButtonTemplate\">\n        </span>\n        <span *ngIf=\"!selectComponent.closeButtonTemplate\">\n          {{selectComponent.closeButtonText}}\n        </span>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <!-- Need span for for text ellipsis. -->\n      <span *ngIf=\"selectComponent.titleTemplate\" [ngTemplateOutlet]=\"selectComponent.titleTemplate\">\n      </span>\n      <span *ngIf=\"!selectComponent.titleTemplate\">\n        {{selectComponent.label}}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.headerTemplate\" [ngTemplateOutlet]=\"selectComponent.headerTemplate\">\n  </div>\n  <ion-toolbar *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\">\n    <ion-searchbar *ngIf=\"selectComponent.canSearch\" #searchbarComponent [(ngModel)]=\"selectComponent._searchText\"\n      (ionInput)=\"selectComponent._filterItems()\" (ionClear)=\"selectComponent._onSearchbarClear()\"\n      [placeholder]=\"selectComponent.searchPlaceholder\" [debounce]=\"selectComponent.searchDebounce\">\n    </ion-searchbar>\n    <div class=\"ionic-selectable-message\" *ngIf=\"selectComponent.messageTemplate\">\n      <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ionic-selectable-spinner\" *ngIf=\"selectComponent._isSearching\">\n    <div class=\"ionic-selectable-spinner-background\"></div>\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-list class=\"ion-no-margin\" *ngIf=\"selectComponent._hasFilteredItems\">\n    <ion-item-group *ngFor=\"let group of selectComponent._filteredGroups\" class=\"ionic-selectable-group\">\n      <ion-item-divider *ngIf=\"selectComponent._hasGroups\"\n        [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n        <!-- Need span for for text ellipsis. -->\n        <span *ngIf=\"selectComponent.groupTemplate\" [ngTemplateOutlet]=\"selectComponent.groupTemplate\"\n          [ngTemplateOutletContext]=\"{ group: group }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.groupTemplate\">\n          {{group.text}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.groupEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.groupEndTemplate\" [ngTemplateOutletContext]=\"{ group: group }\">\n          </div>\n        </div>\n      </ion-item-divider>\n      <ion-item button=\"true\" detail=\"false\" *ngFor=\"let item of group.items\" (click)=\"selectComponent._select(item)\"\n        class=\"ionic-selectable-item\" [ngClass]=\"{\n          'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\n          'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n        <!-- Need span for text ellipsis. -->\n        <span *ngIf=\"selectComponent.itemTemplate\" [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n          {{selectComponent._formatItem(item)}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n          </div>\n        </div>\n        <span *ngIf=\"selectComponent.itemIconTemplate\" [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\" [slot]=\"selectComponent.itemIconSlot\">\n        </ion-icon>\n        <ion-button *ngIf=\"selectComponent.canSaveItem\" class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._saveItem($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"create\" md=\"create-sharp\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"selectComponent.canDeleteItem\" class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._deleteItemClick($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"trash\" md=\"trash-sharp\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  <!-- Fail text should be above InfiniteScroll to avoid a gap when no items are found. -->\n  <div *ngIf=\"!selectComponent._hasFilteredItems\">\n    <span *ngIf=\"selectComponent.searchFailTemplate\" [ngTemplateOutlet]=\"selectComponent.searchFailTemplate\">\n    </span>\n    <div *ngIf=\"!selectComponent.searchFailTemplate\" class=\"ion-margin\">\n      {{selectComponent.searchFailText}}\n    </div>\n  </div>\n  <ion-infinite-scroll [disabled]=\"!selectComponent.hasInfiniteScroll\"\n    (ionInfinite)=\"selectComponent._getMoreItems()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<div class=\"ionic-selectable-add-item-template\" *ngIf=\"selectComponent._isAddItemTemplateVisible\"\n  [ngStyle]=\"{ 'top.px': _header.offsetHeight }\">\n  <div class=\"ionic-selectable-add-item-template-inner\"\n    [ngStyle]=\"{ 'height': selectComponent._addItemTemplateFooterHeight }\">\n    <span [ngTemplateOutlet]=\"selectComponent.addItemTemplate\"\n      [ngTemplateOutletContext]=\"{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }\">\n    </span>\n  </div>\n</div>\n<ion-footer *ngIf=\"selectComponent._footerButtonsCount > 0 || selectComponent.footerTemplate\"\n  [ngStyle]=\"{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }\">\n  <ion-toolbar *ngIf=\"!selectComponent.footerTemplate\">\n    <ion-row>\n      <ion-col *ngIf=\"selectComponent.canClear\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._clear()\"\n          [disabled]=\"!selectComponent._selectedItems.length\">\n          {{selectComponent.clearButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col *ngIf=\"selectComponent.canAddItem\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._addItemClick()\">\n          {{selectComponent.addButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col *ngIf=\"selectComponent.isMultiple || selectComponent.hasConfirmButton\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._confirm()\"\n          [disabled]=\"!selectComponent.isConfirmButtonEnabled\">\n          {{selectComponent.confirmButtonText}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.footerTemplate\" [ngTemplateOutlet]=\"selectComponent.footerTemplate\">\n  </div>\n</ion-footer>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NavParams }, { type: i0.ElementRef }]; }, propDecorators: { _content: [{
                type: ViewChild,
                args: [IonContent]
            }], _searchbarComponent: [{
                type: ViewChild,
                args: ['searchbarComponent']
            }], _infiniteScroll: [{
                type: ViewChild,
                args: [IonInfiniteScroll]
            }], _cssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-modal']
            }], _canClearCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-modal-can-clear']
            }], _isMultipleCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-modal-is-multiple']
            }], _isSearchingCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-modal-is-searching']
            }], _isIos: [{
                type: HostBinding,
                args: ['class.ionic-selectable-modal-ios']
            }], _isMD: [{
                type: HostBinding,
                args: ['class.ionic-selectable-modal-md']
            }], _isAddItemTemplateVisibleCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-modal-is-add-item-template-visible']
            }], onResize: [{
                type: HostListener,
                args: ['window:resize']
            }] } });

class IonicSelectablePlaceholderTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectablePlaceholderTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectablePlaceholderTemplateDirective, isStandalone: true, selector: "[ionicSelectablePlaceholderTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectablePlaceholderTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectablePlaceholderTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableSearchFailTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableSearchFailTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableSearchFailTemplateDirective, isStandalone: true, selector: "[ionicSelectableSearchFailTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableSearchFailTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableSearchFailTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableTitleTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableTitleTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableTitleTemplateDirective, isStandalone: true, selector: "[ionicSelectableTitleTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableTitleTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableTitleTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableValueTemplateDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableValueTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableValueTemplateDirective, isStandalone: true, selector: "[ionicSelectableValueTemplate]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableValueTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicSelectableValueTemplate]',
                    standalone: true,
                }]
        }] });

class IonicSelectableComponent {
    _modalController;
    _platform;
    ionItem;
    _iterableDiffers;
    _element;
    _renderer;
    _cssClass = true;
    _isIos;
    _isMD;
    get _isMultipleCssClass() {
        return this.isMultiple;
    }
    get _hasValueCssClass() {
        return this.hasValue();
    }
    get _hasPlaceholderCssClass() {
        return this._hasPlaceholder;
    }
    get _hasIonLabelCssClass() {
        return this._hasIonLabel;
    }
    get _hasDefaultIonLabelCssClass() {
        return this._ionLabelPosition === 'default';
    }
    get _hasFixedIonLabelCssClass() {
        return this._ionLabelPosition === 'fixed';
    }
    get _hasStackedIonLabelCssClass() {
        return this._ionLabelPosition === 'stacked';
    }
    get _hasFloatingIonLabelCssClass() {
        return this._ionLabelPosition === 'floating';
    }
    _isOnSearchEnabled = true;
    _isEnabled = true;
    _shouldBackdropClose = true;
    _isOpened = false;
    _value = null;
    _modal;
    _itemsDiffer;
    _hasObjects;
    _canClear = false;
    _hasConfirmButton = false;
    _isMultiple = false;
    _canAddItem = false;
    _addItemObservable;
    _deleteItemObservable;
    onItemsChange = new EventEmitter();
    _ionItemElement;
    _ionLabelElement;
    _hasIonLabel = false;
    _ionLabelPosition = null;
    _label = '';
    get _hasInfiniteScroll() {
        return this.isEnabled && this._modalComponent &&
            this._modalComponent._infiniteScroll ? true : false;
    }
    get _shouldStoreItemValue() {
        return this.shouldStoreItemValue && this._hasObjects;
    }
    _valueItems = [];
    _searchText = '';
    _hasSearchText = false;
    _groups = [];
    _itemsToConfirm = [];
    _selectedItems = [];
    _modalComponent;
    _filteredGroups = [];
    _hasGroups;
    _isSearching;
    _hasPlaceholder;
    _isAddItemTemplateVisible = false;
    _isFooterVisible = true;
    _itemToAdd = null;
    _footerButtonsCount = 0;
    _hasFilteredItems = false;
    /**
     * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
     *
     * @readonly
     * @default null
     * @memberof IonicSelectableComponent
     */
    get label() {
        return this._label;
    }
    /**
     * Text that the user has typed in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
     *
     * @readonly
     * @default ''
     * @memberof IonicSelectableComponent
     */
    get searchText() {
        return this._searchText;
    }
    set searchText(searchText) {
        this._searchText = searchText;
        this._setHasSearchText();
    }
    /**
     * Determines whether search is running.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get isSearching() {
        return this._isSearching;
    }
    /**
     * Determines whether user has typed anything in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get hasSearchText() {
        return this._hasSearchText;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        // Set value items.
        this._valueItems.splice(0, this._valueItems.length);
        if (this.isMultiple) {
            if (value && value.length) {
                Array.prototype.push.apply(this._valueItems, value);
            }
        }
        else {
            if (!this._isNullOrWhiteSpace(value)) {
                this._valueItems.push(value);
            }
        }
        this._setIonItemHasValue();
        this._setHasPlaceholder();
    }
    /**
     * A list of items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
     *
     * @default []
     * @memberof IonicSelectableComponent
     */
    items = [];
    itemsChange = new EventEmitter();
    /**
     * Determines whether the component is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = !!isEnabled;
        this.enableIonItem(this._isEnabled);
    }
    /**
     * Determines whether Modal should be closed when backdrop is clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get shouldBackdropClose() {
        return this._shouldBackdropClose;
    }
    set shouldBackdropClose(shouldBackdropClose) {
        this._shouldBackdropClose = !!shouldBackdropClose;
    }
    /**
     * Modal CSS class.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    modalCssClass = '';
    /**
     * Modal enter animation.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    modalEnterAnimation;
    /**
     * Modal leave animation.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    modalLeaveAnimation;
    /**
     * Determines whether Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get isOpened() {
        return this._isOpened;
    }
    /**
     * Determines whether Confirm button is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    isConfirmButtonEnabled = true;
    /**
   * Determines whether Confirm button is visible for single selection.
   * By default Confirm button is visible only for multiple selection.
   * **Note**: It is always true for multiple selection and cannot be changed.
   * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
   *
   * @default true
   * @memberof IonicSelectableComponent
   */
    get hasConfirmButton() {
        return this._hasConfirmButton;
    }
    set hasConfirmButton(hasConfirmButton) {
        this._hasConfirmButton = !!hasConfirmButton;
        this._countFooterButtons();
    }
    /**
     * Item property to use as a unique identifier, e.g, `'id'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    itemValueField = '';
    /**
     * Item property to display, e.g, `'name'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    itemTextField = '';
    /**
     *
     * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    groupValueField = '';
    /**
  * Group property to display, e.g. `'country.name'`.
  * **Note**: `items` should be an object array.
  * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
  *
  * @default null
  * @memberof IonicSelectableComponent
  */
    groupTextField = '';
    /**
     * Determines whether to show Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    canSearch = false;
    /**
     * Determines whether `onSearch` event is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get isOnSearchEnabled() {
        return this._isOnSearchEnabled;
    }
    set isOnSearchEnabled(isOnSearchEnabled) {
        this._isOnSearchEnabled = !!isOnSearchEnabled;
    }
    /**
     * Determines whether to show Clear button.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get canClear() {
        return this._canClear;
    }
    set canClear(canClear) {
        this._canClear = !!canClear;
        this._countFooterButtons();
    }
    /**
     * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
     * **Note**: Infinite scroll cannot be used together with virtual scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    hasInfiniteScroll = false;
    /**
     * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
     * **Note**: Virtual scroll cannot be used together with infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    hasVirtualScroll = false;
    /**
     * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
     *
     * @default '40px'
     * @memberof IonicSelectableComponent
     */
    virtualScrollApproxItemHeight = '40px';
    /**
     * A placeholder for Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
     *
     * @default 'Search'
     * @memberof IonicSelectableComponent
     */
    searchPlaceholder = 'Search';
    /**
     * A placeholder.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    placeholder = '';
    /**
     * Determines whether multiple items can be selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get isMultiple() {
        return this._isMultiple;
    }
    set isMultiple(isMultiple) {
        this._isMultiple = !!isMultiple;
        this._countFooterButtons();
    }
    /**
     * Text to display when no items have been found during search.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
     *
     * @default 'No items found.'
     * @memberof IonicSelectableComponent
     */
    searchFailText = 'No items found.';
    /**
     * Clear button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
     *
     * @default 'Clear'
     * @memberof IonicSelectableComponent
     */
    clearButtonText = 'Clear';
    /**
     * Add button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
     *
     * @default 'Add'
     * @memberof IonicSelectableComponent
     */
    addButtonText = 'Add';
    /**
     * Confirm button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
     *
     * @default 'OK'
     * @memberof IonicSelectableComponent
     */
    confirmButtonText = 'OK';
    /**
     * Close button text.
     * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
     *
     * @default 'Cancel'
     * @memberof IonicSelectableComponent
     */
    closeButtonText = 'Cancel';
    /**
     * Determines whether Searchbar should receive focus when Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldfocussearchbar).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    shouldFocusSearchbar = false;
    /**
     * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    headerColor = '';
    /**
     * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
     *
     * @default null
     * @memberof IonicSelectableComponent
     */
    groupColor = '';
    /**
     * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttonslot).
     *
     * @default 'start'
     * @memberof IonicSelectableComponent
     */
    closeButtonSlot = 'start';
    /**
     * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemiconslot).
     *
     * @default 'start'
     * @memberof IonicSelectableComponent
     */
    itemIconSlot = 'start';
    /**
     * Fires when item/s has been selected and Modal closed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
     *
     * @memberof IonicSelectableComponent
     */
    onChange = new EventEmitter();
    /**
     * Fires when the user is typing in Searchbar.
     * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
     *
     * @memberof IonicSelectableComponent
     */
    onSearch = new EventEmitter();
    /**
     * Fires when no items have been found.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
     *
     * @memberof IonicSelectableComponent
     */
    onSearchFail = new EventEmitter();
    /**
     * Fires when some items have been found.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
     *
     * @memberof IonicSelectableComponent
     */
    onSearchSuccess = new EventEmitter();
    /**
     * Fires when the user has scrolled to the end of the list.
     * **Note**: `hasInfiniteScroll` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    onInfiniteScroll = new EventEmitter();
    /**
     * Fires when Modal has been opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
     *
     * @memberof IonicSelectableComponent
     */
    onOpen = new EventEmitter();
    /**
     * Fires when Modal has been closed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
     *
     * @memberof IonicSelectableComponent
     */
    onClose = new EventEmitter();
    /**
     * Fires when an item has been selected or unselected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
     *
     * @memberof IonicSelectableComponent
     */
    onSelect = new EventEmitter();
    /**
     * Fires when Clear button has been clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
     *
     * @memberof IonicSelectableComponent
     */
    onClear = new EventEmitter();
    /**
     * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
     * After the user has clicked Confirm button items to confirm are cleared.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
     *
     * @default []
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get itemsToConfirm() {
        return this._itemsToConfirm;
    }
    /**
     * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
     *
     * @default 250
     * @memberof IonicSelectableComponent
     */
    searchDebounce = 250;
    /**
     * A list of items to disable.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableditems).
     *
     * @default []
     * @memberof IonicSelectableComponent
     */
    disabledItems = [];
    /**
     * Determines whether item value only should be stored in `ngModel`, not the entire item.
     * **Note**: Item value is defined by `itemValueField`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    shouldStoreItemValue = false;
    /**
     * Determines whether to allow editing items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    canSaveItem = false;
    /**
     * Determines whether to allow deleting items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    canDeleteItem = false;
    /**
     * Determines whether to allow adding items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get canAddItem() {
        return this._canAddItem;
    }
    set canAddItem(canAddItem) {
        this._canAddItem = !!canAddItem;
        this._countFooterButtons();
    }
    /**
     * Fires when Edit item button has been clicked.
     * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
     * **Note**: `canSaveItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
     *
     * @memberof IonicSelectableComponent
     */
    onSaveItem = new EventEmitter();
    /**
     * Fires when Delete item button has been clicked.
     * **Note**: `canDeleteItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
     *
     * @memberof IonicSelectableComponent
     */
    onDeleteItem = new EventEmitter();
    /**
     * Fires when Add item button has been clicked.
     * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
     * **Note**: `canAddItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
     *
     * @memberof IonicSelectableComponent
     */
    onAddItem = new EventEmitter();
    valueTemplate;
    itemTemplate;
    itemEndTemplate;
    titleTemplate;
    placeholderTemplate;
    messageTemplate;
    groupTemplate;
    groupEndTemplate;
    closeButtonTemplate;
    searchFailTemplate;
    addItemTemplate;
    footerTemplate;
    _addItemTemplateFooterHeight;
    headerTemplate;
    itemIconTemplate;
    iconTemplate;
    /**
     * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
     *
     * @memberof IonicSelectableComponent
     */
    virtualScrollHeaderFn = () => {
        return null;
    };
    constructor(_modalController, _platform, ionItem, _iterableDiffers, _element, _renderer) {
        this._modalController = _modalController;
        this._platform = _platform;
        this.ionItem = ionItem;
        this._iterableDiffers = _iterableDiffers;
        this._element = _element;
        this._renderer = _renderer;
        if (!this.items?.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    initFocus() { }
    enableIonItem(isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.disabled = !isEnabled;
    }
    _isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    }
    _setHasSearchText() {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    }
    _hasOnSearch() {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    }
    _hasOnSaveItem() {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    }
    _hasOnAddItem() {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    }
    _hasOnDeleteItem() {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    }
    _emitValueChange() {
        this.propagateOnChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    }
    _emitSearch() {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    }
    _emitOnSelect(item, isSelected) {
        this.onSelect.emit({
            component: this,
            item: item,
            isSelected: isSelected
        });
    }
    _emitOnClear(items) {
        this.onClear.emit({
            component: this,
            items: items
        });
    }
    _emitOnSearchSuccessOrFail(isSuccess) {
        const eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    }
    _formatItem(item) {
        if (this._isNullOrWhiteSpace(item)) {
            return '';
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    }
    _formatValueItem(item) {
        if (this._shouldStoreItemValue) {
            // Get item text from the list as we store it's value only.
            const selectedItem = this.items.find(_item => {
                return _item[this.itemValueField] === item;
            });
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    }
    _getItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    }
    _getStoredItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    }
    _onSearchbarClear() {
        // Ionic Searchbar doesn't clear bind with ngModel value.
        // Do it ourselves.
        this._searchText = '';
    }
    _filterItems() {
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            let groups = [];
            if (!this._searchText?.trim()) {
                groups = this._groups;
            }
            else {
                const filterText = this._searchText.trim().toLowerCase();
                this._groups.forEach(group => {
                    const items = group.items.filter((item) => {
                        const itemText = (this.itemTextField ?
                            item[this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText) !== -1;
                    });
                    if (items.length) {
                        groups.push({
                            value: group.value,
                            text: group.text,
                            items: items
                        });
                    }
                });
                // No items found.
                if (!groups.length) {
                    groups.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups;
            this._hasFilteredItems = !this._areGroupsEmpty(groups);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
        }
    }
    _isItemDisabled(item) {
        if (!this.disabledItems) {
            return false;
        }
        return this.disabledItems.some(_item => {
            return this._getItemValue(_item) === this._getItemValue(item);
        });
    }
    _isItemSelected(item) {
        return this._selectedItems.find(selectedItem => {
            return this._getItemValue(item) === this._getStoredItemValue(selectedItem);
        }) !== undefined;
    }
    _addSelectedItem(item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    }
    _deleteSelectedItem(item) {
        let itemToDeleteIndex = -1;
        this._selectedItems.forEach((selectedItem, itemIndex) => {
            if (this._getItemValue(item) ===
                this._getStoredItemValue(selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this._selectedItems.splice(itemToDeleteIndex, 1);
    }
    _click() {
        if (!this.isEnabled) {
            return;
        }
        this._label = this._getLabelText();
        this.open().then(() => {
            this.onOpen.emit({
                component: this
            });
        });
    }
    _saveItem(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnSaveItem()) {
            this.onSaveItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    _deleteItemClick(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            // Delegate logic to event.
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd);
        }
    }
    _addItemClick() {
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    _positionAddItemTemplate() {
        // Wait for the template to render.
        setTimeout(() => {
            const footer = this._modalComponent._element.nativeElement
                .querySelector('.ionic-selectable-add-item-template ion-footer');
            this._addItemTemplateFooterHeight = footer ? `calc(100% - ${footer.offsetHeight}px)` : '100%';
        }, 100);
    }
    _close() {
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
        if (!this._hasOnSearch()) {
            this._searchText = '';
            this._setHasSearchText();
        }
    }
    _clear() {
        const selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
    }
    _getMoreItems() {
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    }
    _setItemsToConfirm(items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this._itemsToConfirm = [].concat(items);
    }
    _doSelect(selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    }
    _select(item) {
        const isItemSelected = this._isItemSelected(item);
        if (this.isMultiple) {
            if (isItemSelected) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this._selectedItems);
            // Emit onSelect event after setting items to confirm so they could be used
            // inside the event.
            this._emitOnSelect(item, !isItemSelected);
        }
        else {
            if (this.hasConfirmButton || this.footerTemplate) {
                // Don't close Modal and keep track on items to confirm.
                // When footer template is used it's up to developer to close Modal.
                this._selectedItems = [];
                if (isItemSelected) {
                    this._deleteSelectedItem(item);
                }
                else {
                    this._addSelectedItem(item);
                }
                this._setItemsToConfirm(this._selectedItems);
                // Emit onSelect event after setting items to confirm so they could be used
                // inside the event.
                this._emitOnSelect(item, !isItemSelected);
            }
            else {
                if (!isItemSelected) {
                    this._selectedItems = [];
                    this._addSelectedItem(item);
                    // Emit onSelect before onChange.
                    this._emitOnSelect(item, true);
                    if (this._shouldStoreItemValue) {
                        this._doSelect(this._getItemValue(item));
                    }
                    else {
                        this._doSelect(item);
                    }
                }
                this._close();
            }
        }
    }
    _confirm() {
        this.confirm();
        this._close();
    }
    _getLabelText() {
        return this._ionLabelElement ? this._ionLabelElement.textContent : null;
    }
    _areGroupsEmpty(groups) {
        return groups.length === 0 || groups.every((group) => {
            return !group.items?.length;
        });
    }
    _countFooterButtons() {
        let footerButtonsCount = 0;
        if (this.canClear) {
            footerButtonsCount++;
        }
        if (this.isMultiple || this._hasConfirmButton) {
            footerButtonsCount++;
        }
        if (this.canAddItem) {
            footerButtonsCount++;
        }
        this._footerButtonsCount = footerButtonsCount;
    }
    _setItems(items) {
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/eakoriakin/ionic-selectable/issues/70.
        let groups = [{
                items: items || []
            }];
        if (items?.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach(item => {
                    const groupValue = this._getPropertyValue(item, this.groupValueField), group = groups.find(_group => _group.value === groupValue);
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: this._getPropertyValue(item, this.groupTextField),
                            items: [item]
                        });
                    }
                });
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !this._areGroupsEmpty(this._filteredGroups);
    }
    _getPropertyValue(object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce((_object, _property) => {
            return _object ? _object[_property] : null;
        }, object);
    }
    _setIonItemHasFocus(hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-focus', hasFocus);
    }
    _setIonItemHasValue() {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-value', this.hasValue());
    }
    _setHasPlaceholder() {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    }
    propagateOnChange = (_) => { };
    propagateOnTouched = () => { };
    _setIonItemCssClass(cssClass, shouldAdd) {
        if (!this._ionItemElement) {
            return;
        }
        // Change to Renderer2
        if (shouldAdd) {
            this._renderer.addClass(this._ionItemElement, cssClass);
        }
        else {
            this._renderer.removeClass(this._ionItemElement, cssClass);
        }
    }
    _toggleAddItemTemplate(isVisible) {
        // It should be possible to show/hide the template regardless
        // canAddItem or canSaveItem parameters, so we could implement some
        // custom behavior. E.g. adding item when search fails using onSearchFail event.
        if (!this.addItemTemplate) {
            return;
        }
        // To make SaveItemTemplate visible we just position it over list using CSS.
        // We don't hide list with *ngIf or [hidden] to prevent its scroll position.
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
    }
    /* ControlValueAccessor */
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(method) {
        this.propagateOnChange = method;
    }
    registerOnTouched(method) {
        this.propagateOnTouched = method;
    }
    setDisabledState(isDisabled) {
        this.isEnabled = !isDisabled;
    }
    /* .ControlValueAccessor */
    ngOnInit() {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !this._isNullOrWhiteSpace(this.itemValueField);
        // Grouping is supported for objects only.
        // Ionic VirtualScroll has it's own implementation of grouping.
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        if (this.ionItem) {
            this._ionItemElement = this._element.nativeElement.closest('ion-item');
            this._setIonItemCssClass('item-interactive', true);
            this._setIonItemCssClass('item-ionic-selectable', true);
            if (this._ionItemElement) {
                this._ionLabelElement = this._ionItemElement.querySelector('ion-label');
                if (this._ionLabelElement) {
                    this._hasIonLabel = true;
                    this._ionLabelPosition = this._ionLabelElement.getAttribute('position') || 'default';
                }
            }
        }
        this.enableIonItem(this.isEnabled);
    }
    ngDoCheck() {
        const itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.onItemsChange.emit({
                component: this
            });
        }
    }
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * @param item Item to add.
     * @returns Promise that resolves when item has been added.
     * @memberof IonicSelectableComponent
     */
    addItem(item) {
        const self = this;
        // Adding item triggers onItemsChange.
        // Return a promise that resolves when onItemsChange finishes.
        // We need a promise or user could do something after item has been added,
        // e.g. use search() method to find the added item.
        this.items.unshift(item);
        // Close any running subscription.
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._addItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._addItemObservable.unsubscribe();
                resolve('');
            }, () => {
                self._addItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
   * Deletes item.
   * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
   * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
   *
   * @param item Item to delete.
   * @returns Promise that resolves when item has been deleted.
   * @memberof IonicSelectableComponent
   */
    deleteItem(item) {
        const self = this;
        let hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter(_item => {
                return this._getItemValue(item) !== this._getStoredItemValue(_item);
            });
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                const values = this.value.filter((value) => {
                    return value.id !== item.id;
                });
                if (values.length !== this.value.length) {
                    this.value = values;
                    hasValueChanged = true;
                }
            }
            else {
                if (item === this.value) {
                    this.value = null;
                    hasValueChanged = true;
                }
            }
        }
        if (hasValueChanged) {
            this._emitValueChange();
        }
        // Remove deleted item from list.
        const items = this.items.filter(_item => {
            return _item.id !== item.id;
        });
        // Refresh items on parent component.
        this.itemsChange.emit(items);
        // Refresh list.
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        // Close any running subscription.
        if (this._deleteItemObservable) {
            this._deleteItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._deleteItemObservable.unsubscribe();
                resolve('');
            }, () => {
                self._deleteItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * @returns A boolean determining whether any item has been selected.
     * @memberof IonicSelectableComponent
     */
    hasValue() {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    }
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * @returns Promise that resolves when Modal has been opened.
     * @memberof IonicSelectableComponent
     */
    open() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('IonicSelectable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            const modalOptions = {
                component: IonicSelectableModalComponent,
                componentProps: { selectComponent: self },
                backdropDismiss: self._shouldBackdropClose
            };
            if (self.modalCssClass) {
                modalOptions.cssClass = self.modalCssClass;
            }
            if (self.modalEnterAnimation) {
                modalOptions.enterAnimation = self.modalEnterAnimation;
            }
            if (self.modalLeaveAnimation) {
                modalOptions.leaveAnimation = self.modalLeaveAnimation;
            }
            self._modalController.create(modalOptions).then(modal => {
                self._modal = modal;
                modal.present().then(() => {
                    // Set focus after Modal has opened to avoid flickering of focus highlighting
                    // before Modal opening.
                    self._setIonItemHasFocus(true);
                    resolve();
                });
                modal.onWillDismiss().then(() => {
                    self._setIonItemHasFocus(false);
                });
                modal.onDidDismiss().then(event => {
                    self._isOpened = false;
                    self._itemsToConfirm = [];
                    // Closed by clicking on backdrop outside modal.
                    if (event.role === 'backdrop') {
                        self.onClose.emit({
                            component: self
                        });
                    }
                });
            });
        });
    }
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * @returns Promise that resolves when Modal has been closed.
     * @memberof IonicSelectableComponent
     */
    close() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('IonicSelectable is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then(() => {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            });
        });
    }
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * @memberof IonicSelectableComponent
     */
    clear() {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
    }
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * @memberof IonicSelectableComponent
     */
    confirm() {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton || this.footerTemplate) {
            this._doSelect(this._selectedItems[0] || null);
        }
    }
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * @param isSelect Determines whether to select or deselect items.
     * @param [items] Items to toggle. If items are not set all items will be toggled.
     * @memberof IonicSelectableComponent
     */
    toggleItems(isSelect, items) {
        if (isSelect) {
            const hasItems = items?.length;
            let itemsToToggle = this._groups.reduce((allItems, group) => {
                return allItems.concat(group.items);
            }, []);
            // Don't allow to select all items in single mode.
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            // Toggle specific items.
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter((itemToToggle) => {
                    return items.find(item => {
                        return this._getItemValue(itemToToggle) === this._getItemValue(item);
                    }) !== undefined;
                });
                // Take the first item for single mode.
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach((item) => {
                this._addSelectedItem(item);
            });
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
    }
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    scrollToTop() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then(() => {
                resolve('');
            });
        });
    }
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    scrollToBottom() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then(() => {
                resolve('');
            });
        });
    }
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * @memberof IonicSelectableComponent
     */
    startSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    }
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * @memberof IonicSelectableComponent
     */
    endSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        // When inside Ionic Modal and onSearch event is used,
        // ngDoCheck() doesn't work as _itemsDiffer fails to detect changes.
        // See https://github.com/eakoriakin/ionic-selectable/issues/44.
        // Refresh items manually.
        this._setItems(this.items);
        this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
    }
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    enableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = false;
    }
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    disableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = true;
    }
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    endInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.complete();
        this._setItems(this.items);
    }
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * @param text Text to search items by.
     * @memberof IonicSelectableComponent
     */
    search(text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    }
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * @memberof IonicSelectableComponent
     */
    showLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    }
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * @memberof IonicSelectableComponent
     */
    hideLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    }
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    showAddItemTemplate() {
        this._toggleAddItemTemplate(true);
        // Position the template only when it shous up.
        this._positionAddItemTemplate();
    }
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    hideAddItemTemplate() {
        // Clean item to add as it's no longer needed once Add Item Modal has been closed.
        this._itemToAdd = null;
        this._toggleAddItemTemplate(false);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableComponent, deps: [{ token: i1.ModalController }, { token: i1.Platform }, { token: i1.IonItem, optional: true }, { token: i0.IterableDiffers }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.4", type: IonicSelectableComponent, isStandalone: true, selector: "ionic-selectable", inputs: { items: "items", isEnabled: "isEnabled", shouldBackdropClose: "shouldBackdropClose", modalCssClass: "modalCssClass", modalEnterAnimation: "modalEnterAnimation", modalLeaveAnimation: "modalLeaveAnimation", isConfirmButtonEnabled: "isConfirmButtonEnabled", hasConfirmButton: "hasConfirmButton", itemValueField: "itemValueField", itemTextField: "itemTextField", groupValueField: "groupValueField", groupTextField: "groupTextField", canSearch: "canSearch", isOnSearchEnabled: "isOnSearchEnabled", canClear: "canClear", hasInfiniteScroll: "hasInfiniteScroll", hasVirtualScroll: "hasVirtualScroll", virtualScrollApproxItemHeight: "virtualScrollApproxItemHeight", searchPlaceholder: "searchPlaceholder", placeholder: "placeholder", isMultiple: "isMultiple", searchFailText: "searchFailText", clearButtonText: "clearButtonText", addButtonText: "addButtonText", confirmButtonText: "confirmButtonText", closeButtonText: "closeButtonText", shouldFocusSearchbar: "shouldFocusSearchbar", headerColor: "headerColor", groupColor: "groupColor", closeButtonSlot: "closeButtonSlot", itemIconSlot: "itemIconSlot", searchDebounce: "searchDebounce", disabledItems: "disabledItems", shouldStoreItemValue: "shouldStoreItemValue", canSaveItem: "canSaveItem", canDeleteItem: "canDeleteItem", canAddItem: "canAddItem", virtualScrollHeaderFn: "virtualScrollHeaderFn" }, outputs: { itemsChange: "itemsChange", onChange: "onChange", onSearch: "onSearch", onSearchFail: "onSearchFail", onSearchSuccess: "onSearchSuccess", onInfiniteScroll: "onInfiniteScroll", onOpen: "onOpen", onClose: "onClose", onSelect: "onSelect", onClear: "onClear", onSaveItem: "onSaveItem", onDeleteItem: "onDeleteItem", onAddItem: "onAddItem" }, host: { properties: { "class.ionic-selectable": "this._cssClass", "class.ionic-selectable-ios": "this._isIos", "class.ionic-selectable-md": "this._isMD", "class.ionic-selectable-is-multiple": "this._isMultipleCssClass", "class.ionic-selectable-has-value": "this._hasValueCssClass", "class.ionic-selectable-has-placeholder": "this._hasPlaceholderCssClass", "class.ionic-selectable-has-label": "this._hasIonLabelCssClass", "class.ionic-selectable-label-default": "this._hasDefaultIonLabelCssClass", "class.ionic-selectable-label-fixed": "this._hasFixedIonLabelCssClass", "class.ionic-selectable-label-stacked": "this._hasStackedIonLabelCssClass", "class.ionic-selectable-label-floating": "this._hasFloatingIonLabelCssClass", "class.ionic-selectable-is-enabled": "this.isEnabled", "class.ionic-selectable-can-clear": "this.canClear" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => IonicSelectableComponent),
                multi: true
            }], queries: [{ propertyName: "valueTemplate", first: true, predicate: IonicSelectableValueTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "itemTemplate", first: true, predicate: IonicSelectableItemTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "itemEndTemplate", first: true, predicate: IonicSelectableItemEndTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "titleTemplate", first: true, predicate: IonicSelectableTitleTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "placeholderTemplate", first: true, predicate: IonicSelectablePlaceholderTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "messageTemplate", first: true, predicate: IonicSelectableMessageTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "groupTemplate", first: true, predicate: IonicSelectableGroupTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "groupEndTemplate", first: true, predicate: IonicSelectableGroupEndTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "closeButtonTemplate", first: true, predicate: IonicSelectableCloseButtonTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "searchFailTemplate", first: true, predicate: IonicSelectableSearchFailTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "addItemTemplate", first: true, predicate: IonicSelectableAddItemTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "footerTemplate", first: true, predicate: IonicSelectableFooterTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "headerTemplate", first: true, predicate: IonicSelectableHeaderTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "itemIconTemplate", first: true, predicate: IonicSelectableItemIconTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "iconTemplate", first: true, predicate: IonicSelectableIconTemplateDirective, descendants: true, read: TemplateRef }], ngImport: i0, template: "<div class=\"ionic-selectable-inner\">\n  <div class=\"ionic-selectable-value\">\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n      [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n      <div [ngTemplateOutlet]=\"valueTemplate\"\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n      </div>\n    </div>\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\n      <div class=\"ionic-selectable-value-item\"\n        *ngFor=\"let valueItem of _valueItems\">\n        {{_formatValueItem(valueItem)}}\n      </div>\n    </span>\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n      class=\"ionic-selectable-value-item\">\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\n      </div>\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n      {{placeholder}}\n    </div>\n    <!-- Fix icon allignment when there's no value or placeholder. -->\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\n  </div>\n  <div *ngIf=\"iconTemplate\" class=\"ionic-selectable-icon-template\">\n      <div [ngTemplateOutlet]=\"iconTemplate\"></div>\n  </div>\n  <div *ngIf=\"!iconTemplate\" class=\"ionic-selectable-icon\">\n    <div class=\"ionic-selectable-icon-inner\"></div>\n  </div>\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\n  <button class=\"ionic-selectable-cover\" [disabled]=\"!isEnabled\"\n    (click)=\"_click()\" type=\"button\">\n  </button>\n</div>\n", styles: [".item-ionic-selectable .item-inner .input-wrapper{align-items:normal}.item-ionic-selectable ion-label{flex:1;max-width:initial}.ionic-selectable{display:block;max-width:45%}.ionic-selectable-inner{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end}.ionic-selectable-has-placeholder .ionic-selectable-value-item{color:var(--placeholder-color, #999)}.ionic-selectable-value{flex:1;padding-top:13px;padding-bottom:13px;overflow:hidden}.ionic-selectable-value-item{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ionic-selectable-value-item:not(:last-child){margin-bottom:5px}.ionic-selectable-icon{position:relative;width:20px}.ionic-selectable-icon-inner{position:absolute;top:20px;left:5px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;pointer-events:none;color:var(--icon-color, #999)}.ionic-selectable-icon-template{align-self:center;margin-left:5px}.ionic-selectable-ios .ionic-selectable-value{padding-top:11px;padding-bottom:11px}.ionic-selectable-ios .ionic-selectable-icon-inner{top:19px}.ionic-selectable-spinner{position:fixed;inset:0;z-index:1}.ionic-selectable-spinner-background{inset:0;position:absolute;background-color:#000;opacity:.05}.ionic-selectable-spinner ion-spinner{position:absolute;top:50%;left:50%;z-index:10;margin-top:-14px;margin-left:-14px}.ionic-selectable-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;appearance:none;outline:0}.ionic-selectable-add-item-template{position:fixed;bottom:0;left:0;right:0;background-color:#fff}.ionic-selectable-add-item-template-inner{overflow-y:auto}.ionic-selectable-add-item-template-inner>ion-footer{bottom:0;position:absolute}.ionic-selectable-label-stacked,.ionic-selectable-label-floating{align-self:stretch;max-width:100%;padding-left:0;padding-top:8px;padding-bottom:8px}.ionic-selectable-label-stacked .ionic-selectable-value,.ionic-selectable-label-floating .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:19px}.ionic-selectable-label-stacked .ionic-selectable-icon-inner,.ionic-selectable-label-floating .ionic-selectable-icon-inner{top:7px}.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-value,.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:20px}.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-icon-inner,.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-icon-inner{top:8px}.ionic-selectable-label-default .ionic-selectable-value,.ionic-selectable-label-fixed .ionic-selectable-value{padding-left:var(--padding-start, 16px)}.ionic-selectable-label-fixed:not(.ionic-selectable-has-value) .ionic-selectable-value{padding-left:calc(var(--padding-start, 16px) + 11px)}.ionic-selectable-modal .ionic-selectable-group ion-item-divider{padding-right:16px}.ionic-selectable-modal .ionic-selectable-item-button{margin-left:8px;margin-right:8px}.ionic-selectable-modal-ios .ionic-selectable-message{padding:8px}.ionic-selectable-modal-ios .ionic-selectable-group ion-item-divider{padding-right:8px}.ionic-selectable-modal-md .ionic-selectable-message{padding:8px 12px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:first-child{padding-right:8px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:last-child{padding-left:8px}.ionic-selectable-modal.ionic-selectable-modal-is-searching .scroll-content{overflow-y:hidden}.ionic-selectable-modal.ionic-selectable-modal-is-add-item-template-visible>.content>.scroll-content{overflow-y:hidden}.ionic-selectable-modal ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: IonicSelectableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ionic-selectable', encapsulation: ViewEncapsulation.None, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => IonicSelectableComponent),
                            multi: true
                        }], standalone: true, imports: [NgIf, NgTemplateOutlet, NgFor], template: "<div class=\"ionic-selectable-inner\">\n  <div class=\"ionic-selectable-value\">\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n      [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n      <div [ngTemplateOutlet]=\"valueTemplate\"\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n      </div>\n    </div>\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\n      <div class=\"ionic-selectable-value-item\"\n        *ngFor=\"let valueItem of _valueItems\">\n        {{_formatValueItem(valueItem)}}\n      </div>\n    </span>\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n      class=\"ionic-selectable-value-item\">\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\n      </div>\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n      {{placeholder}}\n    </div>\n    <!-- Fix icon allignment when there's no value or placeholder. -->\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\n  </div>\n  <div *ngIf=\"iconTemplate\" class=\"ionic-selectable-icon-template\">\n      <div [ngTemplateOutlet]=\"iconTemplate\"></div>\n  </div>\n  <div *ngIf=\"!iconTemplate\" class=\"ionic-selectable-icon\">\n    <div class=\"ionic-selectable-icon-inner\"></div>\n  </div>\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\n  <button class=\"ionic-selectable-cover\" [disabled]=\"!isEnabled\"\n    (click)=\"_click()\" type=\"button\">\n  </button>\n</div>\n", styles: [".item-ionic-selectable .item-inner .input-wrapper{align-items:normal}.item-ionic-selectable ion-label{flex:1;max-width:initial}.ionic-selectable{display:block;max-width:45%}.ionic-selectable-inner{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end}.ionic-selectable-has-placeholder .ionic-selectable-value-item{color:var(--placeholder-color, #999)}.ionic-selectable-value{flex:1;padding-top:13px;padding-bottom:13px;overflow:hidden}.ionic-selectable-value-item{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ionic-selectable-value-item:not(:last-child){margin-bottom:5px}.ionic-selectable-icon{position:relative;width:20px}.ionic-selectable-icon-inner{position:absolute;top:20px;left:5px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;pointer-events:none;color:var(--icon-color, #999)}.ionic-selectable-icon-template{align-self:center;margin-left:5px}.ionic-selectable-ios .ionic-selectable-value{padding-top:11px;padding-bottom:11px}.ionic-selectable-ios .ionic-selectable-icon-inner{top:19px}.ionic-selectable-spinner{position:fixed;inset:0;z-index:1}.ionic-selectable-spinner-background{inset:0;position:absolute;background-color:#000;opacity:.05}.ionic-selectable-spinner ion-spinner{position:absolute;top:50%;left:50%;z-index:10;margin-top:-14px;margin-left:-14px}.ionic-selectable-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;appearance:none;outline:0}.ionic-selectable-add-item-template{position:fixed;bottom:0;left:0;right:0;background-color:#fff}.ionic-selectable-add-item-template-inner{overflow-y:auto}.ionic-selectable-add-item-template-inner>ion-footer{bottom:0;position:absolute}.ionic-selectable-label-stacked,.ionic-selectable-label-floating{align-self:stretch;max-width:100%;padding-left:0;padding-top:8px;padding-bottom:8px}.ionic-selectable-label-stacked .ionic-selectable-value,.ionic-selectable-label-floating .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:19px}.ionic-selectable-label-stacked .ionic-selectable-icon-inner,.ionic-selectable-label-floating .ionic-selectable-icon-inner{top:7px}.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-value,.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:20px}.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-icon-inner,.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-icon-inner{top:8px}.ionic-selectable-label-default .ionic-selectable-value,.ionic-selectable-label-fixed .ionic-selectable-value{padding-left:var(--padding-start, 16px)}.ionic-selectable-label-fixed:not(.ionic-selectable-has-value) .ionic-selectable-value{padding-left:calc(var(--padding-start, 16px) + 11px)}.ionic-selectable-modal .ionic-selectable-group ion-item-divider{padding-right:16px}.ionic-selectable-modal .ionic-selectable-item-button{margin-left:8px;margin-right:8px}.ionic-selectable-modal-ios .ionic-selectable-message{padding:8px}.ionic-selectable-modal-ios .ionic-selectable-group ion-item-divider{padding-right:8px}.ionic-selectable-modal-md .ionic-selectable-message{padding:8px 12px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:first-child{padding-right:8px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:last-child{padding-left:8px}.ionic-selectable-modal.ionic-selectable-modal-is-searching .scroll-content{overflow-y:hidden}.ionic-selectable-modal.ionic-selectable-modal-is-add-item-template-visible>.content>.scroll-content{overflow-y:hidden}.ionic-selectable-modal ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }, { type: i1.Platform }, { type: i1.IonItem, decorators: [{
                    type: Optional
                }] }, { type: i0.IterableDiffers }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { _cssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable']
            }], _isIos: [{
                type: HostBinding,
                args: ['class.ionic-selectable-ios']
            }], _isMD: [{
                type: HostBinding,
                args: ['class.ionic-selectable-md']
            }], _isMultipleCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-is-multiple']
            }], _hasValueCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-has-value']
            }], _hasPlaceholderCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-has-placeholder']
            }], _hasIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-has-label']
            }], _hasDefaultIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-label-default']
            }], _hasFixedIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-label-fixed']
            }], _hasStackedIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-label-stacked']
            }], _hasFloatingIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-label-floating']
            }], items: [{
                type: Input
            }], itemsChange: [{
                type: Output
            }], isEnabled: [{
                type: HostBinding,
                args: ['class.ionic-selectable-is-enabled']
            }, {
                type: Input,
                args: ['isEnabled']
            }], shouldBackdropClose: [{
                type: Input,
                args: ['shouldBackdropClose']
            }], modalCssClass: [{
                type: Input
            }], modalEnterAnimation: [{
                type: Input
            }], modalLeaveAnimation: [{
                type: Input
            }], isConfirmButtonEnabled: [{
                type: Input
            }], hasConfirmButton: [{
                type: Input,
                args: ['hasConfirmButton']
            }], itemValueField: [{
                type: Input
            }], itemTextField: [{
                type: Input
            }], groupValueField: [{
                type: Input
            }], groupTextField: [{
                type: Input
            }], canSearch: [{
                type: Input
            }], isOnSearchEnabled: [{
                type: Input,
                args: ['isOnSearchEnabled']
            }], canClear: [{
                type: HostBinding,
                args: ['class.ionic-selectable-can-clear']
            }, {
                type: Input,
                args: ['canClear']
            }], hasInfiniteScroll: [{
                type: Input
            }], hasVirtualScroll: [{
                type: Input
            }], virtualScrollApproxItemHeight: [{
                type: Input
            }], searchPlaceholder: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], isMultiple: [{
                type: Input,
                args: ['isMultiple']
            }], searchFailText: [{
                type: Input
            }], clearButtonText: [{
                type: Input
            }], addButtonText: [{
                type: Input
            }], confirmButtonText: [{
                type: Input
            }], closeButtonText: [{
                type: Input
            }], shouldFocusSearchbar: [{
                type: Input
            }], headerColor: [{
                type: Input
            }], groupColor: [{
                type: Input
            }], closeButtonSlot: [{
                type: Input
            }], itemIconSlot: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onSearch: [{
                type: Output
            }], onSearchFail: [{
                type: Output
            }], onSearchSuccess: [{
                type: Output
            }], onInfiniteScroll: [{
                type: Output
            }], onOpen: [{
                type: Output
            }], onClose: [{
                type: Output
            }], onSelect: [{
                type: Output
            }], onClear: [{
                type: Output
            }], searchDebounce: [{
                type: Input
            }], disabledItems: [{
                type: Input
            }], shouldStoreItemValue: [{
                type: Input
            }], canSaveItem: [{
                type: Input
            }], canDeleteItem: [{
                type: Input
            }], canAddItem: [{
                type: Input,
                args: ['canAddItem']
            }], onSaveItem: [{
                type: Output
            }], onDeleteItem: [{
                type: Output
            }], onAddItem: [{
                type: Output
            }], valueTemplate: [{
                type: ContentChild,
                args: [IonicSelectableValueTemplateDirective, { read: TemplateRef }]
            }], itemTemplate: [{
                type: ContentChild,
                args: [IonicSelectableItemTemplateDirective, { read: TemplateRef }]
            }], itemEndTemplate: [{
                type: ContentChild,
                args: [IonicSelectableItemEndTemplateDirective, { read: TemplateRef }]
            }], titleTemplate: [{
                type: ContentChild,
                args: [IonicSelectableTitleTemplateDirective, { read: TemplateRef }]
            }], placeholderTemplate: [{
                type: ContentChild,
                args: [IonicSelectablePlaceholderTemplateDirective, { read: TemplateRef }]
            }], messageTemplate: [{
                type: ContentChild,
                args: [IonicSelectableMessageTemplateDirective, { read: TemplateRef }]
            }], groupTemplate: [{
                type: ContentChild,
                args: [IonicSelectableGroupTemplateDirective, { read: TemplateRef }]
            }], groupEndTemplate: [{
                type: ContentChild,
                args: [IonicSelectableGroupEndTemplateDirective, { read: TemplateRef }]
            }], closeButtonTemplate: [{
                type: ContentChild,
                args: [IonicSelectableCloseButtonTemplateDirective, { read: TemplateRef }]
            }], searchFailTemplate: [{
                type: ContentChild,
                args: [IonicSelectableSearchFailTemplateDirective, { read: TemplateRef }]
            }], addItemTemplate: [{
                type: ContentChild,
                args: [IonicSelectableAddItemTemplateDirective, { read: TemplateRef }]
            }], footerTemplate: [{
                type: ContentChild,
                args: [IonicSelectableFooterTemplateDirective, { read: TemplateRef }]
            }], headerTemplate: [{
                type: ContentChild,
                args: [IonicSelectableHeaderTemplateDirective, { read: TemplateRef }]
            }], itemIconTemplate: [{
                type: ContentChild,
                args: [IonicSelectableItemIconTemplateDirective, { read: TemplateRef }]
            }], iconTemplate: [{
                type: ContentChild,
                args: [IonicSelectableIconTemplateDirective, { read: TemplateRef }]
            }], virtualScrollHeaderFn: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { IonicSelectableAddItemTemplateDirective, IonicSelectableCloseButtonTemplateDirective, IonicSelectableComponent, IonicSelectableFooterTemplateDirective, IonicSelectableGroupEndTemplateDirective, IonicSelectableGroupTemplateDirective, IonicSelectableHeaderTemplateDirective, IonicSelectableIconTemplateDirective, IonicSelectableItemEndTemplateDirective, IonicSelectableItemIconTemplateDirective, IonicSelectableItemTemplateDirective, IonicSelectableMessageTemplateDirective, IonicSelectableModalComponent, IonicSelectablePlaceholderTemplateDirective, IonicSelectableSearchFailTemplateDirective, IonicSelectableTitleTemplateDirective, IonicSelectableValueTemplateDirective };
//# sourceMappingURL=ionic-selectable.mjs.map
