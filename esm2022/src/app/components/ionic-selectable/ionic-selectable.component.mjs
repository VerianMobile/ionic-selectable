import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, EventEmitter, HostBinding, Input, Optional, Output, TemplateRef, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonicSelectableAddItemTemplateDirective } from './ionic-selectable-add-item-template.directive';
import { IonicSelectableCloseButtonTemplateDirective } from './ionic-selectable-close-button-template.directive';
import { IonicSelectableFooterTemplateDirective } from './ionic-selectable-footer-template.directive';
import { IonicSelectableGroupEndTemplateDirective } from './ionic-selectable-group-end-template.directive';
import { IonicSelectableGroupTemplateDirective } from './ionic-selectable-group-template.directive';
import { IonicSelectableHeaderTemplateDirective } from './ionic-selectable-header-template.directive';
import { IonicSelectableIconTemplateDirective } from './ionic-selectable-icon-template.directive';
import { IonicSelectableItemEndTemplateDirective } from './ionic-selectable-item-end-template.directive';
import { IonicSelectableItemIconTemplateDirective } from './ionic-selectable-item-icon-template.directive';
import { IonicSelectableItemTemplateDirective } from './ionic-selectable-item-template.directive';
import { IonicSelectableMessageTemplateDirective } from './ionic-selectable-message-template.directive';
import { IonicSelectableModalComponent } from './ionic-selectable-modal.component';
import { IonicSelectablePlaceholderTemplateDirective } from './ionic-selectable-placeholder-template.directive';
import { IonicSelectableSearchFailTemplateDirective } from './ionic-selectable-search-fail-template.directive';
import { IonicSelectableTitleTemplateDirective } from './ionic-selectable-title-template.directive';
import { IonicSelectableValueTemplateDirective } from './ionic-selectable-value-template.directive';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
export class IonicSelectableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvaW9uaWMtc2VsZWN0YWJsZS9pb25pYy1zZWxlY3RhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9pb25pYy1zZWxlY3RhYmxlL2lvbmljLXNlbGVjdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBdUIsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQTJDLFFBQVEsRUFBRSxNQUFNLEVBQWEsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqTyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJekUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDekcsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDakgsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0csT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEcsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDekcsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0csT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEgsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0csT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7OztBQWVwRyxNQUFNLE9BQU8sd0JBQXdCO0lBK3ZCekI7SUFDQTtJQUNZO0lBQ1o7SUFDQTtJQUNBO0lBbHdCVixTQUFTLEdBQUcsSUFBSSxDQUFDO0lBRWpCLE1BQU0sQ0FBVztJQUVqQixLQUFLLENBQVc7SUFDaEIsSUFDSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUNJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFDSSx1QkFBdUI7UUFDekIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNJLG9CQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQ0ksMkJBQTJCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFDSSx5QkFBeUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUNJLDJCQUEyQjtRQUM3QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQ0ksNEJBQTRCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixLQUFLLFVBQVUsQ0FBQztJQUMvQyxDQUFDO0lBQ08sa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQzFCLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDbEIsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO0lBQzVCLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEIsTUFBTSxHQUFRLElBQUksQ0FBQztJQUNuQixNQUFNLENBQXVCO0lBQzdCLFlBQVksQ0FBc0I7SUFDbEMsV0FBVyxDQUFXO0lBQ3RCLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEIsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQzFCLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDcEIsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNwQixrQkFBa0IsQ0FBZ0I7SUFDbEMscUJBQXFCLENBQWdCO0lBQ3JDLGFBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN0RCxlQUFlLENBQU07SUFDckIsZ0JBQWdCLENBQU07SUFDdEIsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUNyQixpQkFBaUIsR0FBd0QsSUFBSSxDQUFDO0lBQzlFLE1BQU0sR0FBVyxFQUFFLENBQUM7SUFDNUIsSUFBWSxrQkFBa0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxlQUFlO1lBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN4RCxDQUFDO0lBQ0QsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsV0FBVyxHQUFVLEVBQUUsQ0FBQztJQUN4QixXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDdkIsT0FBTyxHQUFVLEVBQUUsQ0FBQztJQUNwQixlQUFlLEdBQVUsRUFBRSxDQUFDO0lBQzVCLGNBQWMsR0FBVSxFQUFFLENBQUM7SUFDM0IsZUFBZSxDQUFpQztJQUNoRCxlQUFlLEdBQVUsRUFBRSxDQUFDO0lBQzVCLFVBQVUsQ0FBVztJQUNyQixZQUFZLENBQVc7SUFDdkIsZUFBZSxDQUFXO0lBQzFCLHlCQUF5QixHQUFHLEtBQUssQ0FBQztJQUNsQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDeEIsVUFBVSxHQUFRLElBQUksQ0FBQztJQUN2QixtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDeEIsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBRTFCOzs7Ozs7O09BT0c7SUFDSCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLFVBQWtCO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQVU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFcEIsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUN6QixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyRDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUVILEtBQUssR0FBVSxFQUFFLENBQUM7SUFFbEIsV0FBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBEOzs7Ozs7T0FNRztJQUNILElBRUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsU0FBa0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUNJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxtQkFBbUIsQ0FBQyxtQkFBNEI7UUFDbEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBRUgsYUFBYSxHQUFXLEVBQUUsQ0FBQztJQUUzQjs7Ozs7O09BTUc7SUFFSCxtQkFBbUIsQ0FBb0I7SUFFdkM7Ozs7OztPQU1HO0lBRUgsbUJBQW1CLENBQW9CO0lBRXZDOzs7Ozs7O09BT0c7SUFDSCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUVILHNCQUFzQixHQUFHLElBQUksQ0FBQztJQUU5Qjs7Ozs7Ozs7S0FRQztJQUNELElBQ0ksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLGdCQUF5QjtRQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQzVDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBRUgsY0FBYyxHQUFXLEVBQUUsQ0FBQztJQUU1Qjs7Ozs7OztPQU9HO0lBRUgsYUFBYSxHQUFXLEVBQUUsQ0FBQztJQUUzQjs7Ozs7Ozs7T0FRRztJQUVILGVBQWUsR0FBVyxFQUFFLENBQUM7SUFFN0I7Ozs7Ozs7SUFPQTtJQUVBLGNBQWMsR0FBVyxFQUFFLENBQUM7SUFFNUI7Ozs7OztPQU1HO0lBRUgsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUVsQjs7Ozs7O09BTUc7SUFDSCxJQUNJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxpQkFBaUIsQ0FBQyxpQkFBMEI7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFFSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxRQUFpQjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFFSCxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFFMUI7Ozs7Ozs7T0FPRztJQUVILGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUV6Qjs7Ozs7O09BTUc7SUFFSCw2QkFBNkIsR0FBRyxNQUFNLENBQUM7SUFFdkM7Ozs7OztPQU1HO0lBRUgsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO0lBRTdCOzs7Ozs7T0FNRztJQUVILFdBQVcsR0FBVyxFQUFFLENBQUM7SUFFekI7Ozs7OztPQU1HO0lBQ0gsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxVQUFtQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUVILGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztJQUVuQzs7Ozs7O09BTUc7SUFFSCxlQUFlLEdBQUcsT0FBTyxDQUFDO0lBRTFCOzs7Ozs7T0FNRztJQUVILGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFdEI7Ozs7OztPQU1HO0lBRUgsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBRXpCOzs7Ozs7O09BT0c7SUFFSCxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBRTNCOzs7Ozs7T0FNRztJQUVILG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUU3Qjs7Ozs7O09BTUc7SUFFSCxXQUFXLEdBQVcsRUFBRSxDQUFDO0lBRXpCOzs7Ozs7T0FNRztJQUVILFVBQVUsR0FBVyxFQUFFLENBQUM7SUFFeEI7Ozs7OztPQU1HO0lBRUgsZUFBZSxHQUFHLE9BQU8sQ0FBQztJQUUxQjs7Ozs7O09BTUc7SUFFSCxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBRXZCOzs7OztPQUtHO0lBRUgsUUFBUSxHQUFzRSxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRWpHOzs7Ozs7T0FNRztJQUVILFFBQVEsR0FBd0UsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVuRzs7Ozs7T0FLRztJQUVILFlBQVksR0FBd0UsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV2Rzs7Ozs7T0FLRztJQUVILGVBQWUsR0FBd0UsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUxRzs7Ozs7O09BTUc7SUFFSCxnQkFBZ0IsR0FBd0UsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUzRzs7Ozs7T0FLRztJQUVILE1BQU0sR0FBMEQsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVuRjs7Ozs7T0FLRztJQUVILE9BQU8sR0FBMEQsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVwRjs7Ozs7T0FLRztJQUVILFFBQVEsR0FBMEYsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVySDs7Ozs7T0FLRztJQUVILE9BQU8sR0FBd0UsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVsRzs7Ozs7Ozs7T0FRRztJQUNILElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUVILGNBQWMsR0FBVyxHQUFHLENBQUM7SUFFN0I7Ozs7OztPQU1HO0lBRUgsYUFBYSxHQUFVLEVBQUUsQ0FBQztJQUUxQjs7Ozs7OztPQU9HO0lBRUgsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBRTdCOzs7Ozs7T0FNRztJQUVILFdBQVcsR0FBRyxLQUFLLENBQUM7SUFFcEI7Ozs7OztPQU1HO0lBRUgsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUV0Qjs7Ozs7O09BTUc7SUFDSCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUVILFVBQVUsR0FBcUUsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVsRzs7Ozs7O09BTUc7SUFFSCxZQUFZLEdBQXFFLElBQUksWUFBWSxFQUFFLENBQUM7SUFFcEc7Ozs7Ozs7T0FPRztJQUVILFNBQVMsR0FBMEQsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUd0RixhQUFhLENBQW9CO0lBRWpDLFlBQVksQ0FBb0I7SUFFaEMsZUFBZSxDQUFvQjtJQUVuQyxhQUFhLENBQW9CO0lBRWpDLG1CQUFtQixDQUFvQjtJQUV2QyxlQUFlLENBQW9CO0lBRW5DLGFBQWEsQ0FBb0I7SUFFakMsZ0JBQWdCLENBQW9CO0lBRXBDLG1CQUFtQixDQUFvQjtJQUV2QyxrQkFBa0IsQ0FBb0I7SUFFdEMsZUFBZSxDQUFvQjtJQUVuQyxjQUFjLENBQW9CO0lBQ2xDLDRCQUE0QixDQUFVO0lBRXRDLGNBQWMsQ0FBb0I7SUFFbEMsZ0JBQWdCLENBQW9CO0lBRXBDLFlBQVksQ0FBb0I7SUFFaEM7Ozs7O09BS0c7SUFFSCxxQkFBcUIsR0FBRyxHQUFHLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUE7SUFFRCxZQUNVLGdCQUFpQyxFQUNqQyxTQUFtQixFQUNQLE9BQWdCLEVBQzVCLGdCQUFpQyxFQUNqQyxRQUFvQixFQUNwQixTQUFvQjtRQUxwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDUCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEUsQ0FBQztJQUVELFNBQVMsS0FBSyxDQUFDO0lBRWYsYUFBYSxDQUFDLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFVO1FBQzVCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCwrQ0FBK0M7UUFDL0MsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBUyxFQUFFLFVBQW1CO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVk7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDaEIsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxTQUFrQjtRQUMzQyxNQUFNLFNBQVMsR0FBRztZQUNoQixTQUFTLEVBQUUsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztTQUN2QixDQUFDO1FBRUYsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVM7UUFDbkIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ3hCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLDJEQUEyRDtZQUMzRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFTO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQVM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELGlCQUFpQjtRQUNmLHlEQUF5RDtRQUN6RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixtQ0FBbUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxxQkFBcUI7WUFDckIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUM3QixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUV6RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDM0IsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTt3QkFDN0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7NEJBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUM1RCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO29CQUVILElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7NEJBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTs0QkFDaEIsS0FBSyxFQUFFLEtBQUs7eUJBQ2IsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUVILGtCQUFrQjtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ1YsS0FBSyxFQUFFLEVBQUU7cUJBQ1YsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsSUFBUztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBUztRQUN2QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ3hCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBUztRQUMzQixJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxFQUFFO1lBQ3RELElBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsRUFDdEM7Z0JBQ0EsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNmLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsSUFBUztRQUMvQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLFNBQVMsRUFBRSxJQUFJO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTthQUN0QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBWSxFQUFFLElBQVM7UUFDdEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7WUFDM0IsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNyQixTQUFTLEVBQUUsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDdEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDbEIsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELHdCQUF3QjtRQUN0QixtQ0FBbUM7UUFDbkMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGFBQWE7aUJBQ3ZELGFBQWEsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1lBRW5FLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWUsTUFBTSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDaEcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEIsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRTFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFZO1FBQzdCLDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFNBQVMsQ0FBQyxZQUFpQjtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVM7UUFDZixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLGNBQWMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtZQUVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFN0MsMkVBQTJFO1lBQzNFLG9CQUFvQjtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNoRCx3REFBd0Q7Z0JBQ3hELG9FQUFvRTtnQkFDcEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7Z0JBRXpCLElBQUksY0FBYyxFQUFFO29CQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0I7Z0JBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFFN0MsMkVBQTJFO2dCQUMzRSxvQkFBb0I7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFNUIsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFL0IsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7d0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUMxQzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN0QjtpQkFDRjtnQkFFRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtTQUNGO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLGFBQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDO0lBRU8sZUFBZSxDQUFDLE1BQVc7UUFDakMsT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsa0JBQWtCLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDN0Msa0JBQWtCLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixrQkFBa0IsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDO0lBQ2hELENBQUM7SUFFTyxTQUFTLENBQUMsS0FBWTtRQUM1QixxRkFBcUY7UUFDckYsa0RBQWtEO1FBQ2xELGdFQUFnRTtRQUNoRSxJQUFJLE1BQU0sR0FBVSxDQUFDO2dCQUNuQixLQUFLLEVBQUUsS0FBSyxJQUFJLEVBQUU7YUFDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFWixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFDbkUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQyxDQUFDO29CQUU3RCxJQUFJLEtBQUssRUFBRTt3QkFDVCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDeEI7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDVixLQUFLLEVBQUUsVUFBVTs0QkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQzs0QkFDdkQsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO3lCQUNkLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVPLGlCQUFpQixDQUFDLE1BQVcsRUFBRSxRQUFnQjtRQUNyRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUU7WUFDdkQsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxRQUFpQjtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsbUVBQW1FO1FBQ25FLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVPLGlCQUFpQixHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEMsa0JBQWtCLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRS9CLG1CQUFtQixDQUFDLFFBQWdCLEVBQUUsU0FBa0I7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxTQUFrQjtRQUMvQyw2REFBNkQ7UUFDN0QsbUVBQW1FO1FBQ25FLGdGQUFnRjtRQUNoRixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFFRCw0RUFBNEU7UUFDNUUsNEVBQTRFO1FBQzVFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQVc7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBa0I7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsMkJBQTJCO0lBRTNCLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xFLDBDQUEwQztRQUMxQywrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFOUYsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFeEQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXhFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksU0FBUyxDQUFDO2lCQUN0RjthQUNGO1NBQ0Y7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RCxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDdEIsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxPQUFPLENBQUMsSUFBUztRQUNmLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixzQ0FBc0M7UUFDdEMsOERBQThEO1FBQzlELDBFQUEwRTtRQUMxRSxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekIsa0NBQWtDO1FBQ2xDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUMxQyxpREFBaUQ7WUFDakQsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQkFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RDLE1BQU0sRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7S0FRQztJQUNELFVBQVUsQ0FBQyxJQUFTO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFFNUIsMkNBQTJDO1FBQzNDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN2RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO29CQUM5QyxPQUFPLEtBQUssQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztvQkFDcEIsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDeEI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDbEIsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDeEI7YUFDRjtTQUNGO1FBRUQsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7UUFFRCxpQ0FBaUM7UUFDakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxLQUFLLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0IsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsa0NBQWtDO1FBQ2xDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxQztRQUVELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUMxQyxpREFBaUQ7WUFDakQsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDekMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQkFDTixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3pDLE1BQU0sRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEY7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7Z0JBQ3pELE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUV0QixNQUFNLFlBQVksR0FBaUI7Z0JBQ2pDLFNBQVMsRUFBRSw2QkFBNkI7Z0JBQ3hDLGNBQWMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUU7Z0JBQ3pDLGVBQWUsRUFBRSxJQUFJLENBQUMsb0JBQW9CO2FBQzNDLENBQUM7WUFFRixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUM1QztZQUVELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUM1QixZQUFZLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzthQUN4RDtZQUVELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUM1QixZQUFZLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzthQUN4RDtZQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ3hCLDZFQUE2RTtvQkFDN0Usd0JBQXdCO29CQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsQ0FBQyxDQUFDO2dCQUVILEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUVILEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztvQkFFMUIsZ0RBQWdEO29CQUNoRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDaEIsU0FBUyxFQUFFLElBQUk7eUJBQ2hCLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsS0FBSztRQUNILE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QyxNQUFNLENBQUMsZ0RBQWdELENBQUMsQ0FBQztnQkFDekQsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsV0FBVyxDQUFDLFFBQWlCLEVBQUUsS0FBYTtRQUMxQyxJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sUUFBUSxHQUFHLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDL0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzFELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRVAsa0RBQWtEO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2FBQ3BCO1lBRUQseUJBQXlCO1lBQ3pCLElBQUksUUFBUSxFQUFFO2dCQUNaLGFBQWEsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBaUIsRUFBRSxFQUFFO29CQUN6RCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2RSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUVILHVDQUF1QztnQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ3BCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM1QjthQUNGO1lBRUQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxXQUFXO1FBQ1QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsTUFBTSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Z0JBQ3RELE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3BELE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsY0FBYztRQUNaLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLE1BQU0sQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN2RCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFNBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsc0RBQXNEO1FBQ3RELG9FQUFvRTtRQUNwRSxnRUFBZ0U7UUFDaEUsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUQsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQywrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbUJBQW1CO1FBQ2pCLGtGQUFrRjtRQUNsRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzt1R0E3eERVLHdCQUF3QjsyRkFBeEIsd0JBQXdCLHVpRkFSeEIsQ0FBQztnQkFDVixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUN2RCxLQUFLLEVBQUUsSUFBSTthQUNaLENBQUMscUVBdXRCWSxxQ0FBcUMsMkJBQVUsV0FBVyw0REFFMUQsb0NBQW9DLDJCQUFVLFdBQVcsK0RBRXpELHVDQUF1QywyQkFBVSxXQUFXLDZEQUU1RCxxQ0FBcUMsMkJBQVUsV0FBVyxtRUFFMUQsMkNBQTJDLDJCQUFVLFdBQVcsK0RBRWhFLHVDQUF1QywyQkFBVSxXQUFXLDZEQUU1RCxxQ0FBcUMsMkJBQVUsV0FBVyxnRUFFMUQsd0NBQXdDLDJCQUFVLFdBQVcsbUVBRTdELDJDQUEyQywyQkFBVSxXQUFXLGtFQUVoRSwwQ0FBMEMsMkJBQVUsV0FBVywrREFFL0QsdUNBQXVDLDJCQUFVLFdBQVcsOERBRTVELHNDQUFzQywyQkFBVSxXQUFXLDhEQUczRCxzQ0FBc0MsMkJBQVUsV0FBVyxnRUFFM0Qsd0NBQXdDLDJCQUFVLFdBQVcsNERBRTdELG9DQUFvQywyQkFBVSxXQUFXLDZCQ3B4QnpFLGdzREF5Q0EseXpIRFBZLElBQUksNkZBQUUsZ0JBQWdCLG9KQUFFLEtBQUs7OzJGQUU1Qix3QkFBd0I7a0JBYnBDLFNBQVM7K0JBQ0Usa0JBQWtCLGlCQUdiLGlCQUFpQixDQUFDLElBQUksYUFDMUIsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSx5QkFBeUIsQ0FBQzs0QkFDdkQsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQyxjQUNVLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7OzBCQW13QnJDLFFBQVE7MkhBL3ZCWCxTQUFTO3NCQURSLFdBQVc7dUJBQUMsd0JBQXdCO2dCQUdyQyxNQUFNO3NCQURMLFdBQVc7dUJBQUMsNEJBQTRCO2dCQUd6QyxLQUFLO3NCQURKLFdBQVc7dUJBQUMsMkJBQTJCO2dCQUdwQyxtQkFBbUI7c0JBRHRCLFdBQVc7dUJBQUMsb0NBQW9DO2dCQUs3QyxpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsa0NBQWtDO2dCQUszQyx1QkFBdUI7c0JBRDFCLFdBQVc7dUJBQUMsd0NBQXdDO2dCQUtqRCxvQkFBb0I7c0JBRHZCLFdBQVc7dUJBQUMsa0NBQWtDO2dCQUszQywyQkFBMkI7c0JBRDlCLFdBQVc7dUJBQUMsc0NBQXNDO2dCQUsvQyx5QkFBeUI7c0JBRDVCLFdBQVc7dUJBQUMsb0NBQW9DO2dCQUs3QywyQkFBMkI7c0JBRDlCLFdBQVc7dUJBQUMsc0NBQXNDO2dCQUsvQyw0QkFBNEI7c0JBRC9CLFdBQVc7dUJBQUMsdUNBQXVDO2dCQW1JcEQsS0FBSztzQkFESixLQUFLO2dCQUdOLFdBQVc7c0JBRFYsTUFBTTtnQkFZSCxTQUFTO3NCQUZaLFdBQVc7dUJBQUMsbUNBQW1DOztzQkFDL0MsS0FBSzt1QkFBQyxXQUFXO2dCQWlCZCxtQkFBbUI7c0JBRHRCLEtBQUs7dUJBQUMscUJBQXFCO2dCQWdCNUIsYUFBYTtzQkFEWixLQUFLO2dCQVdOLG1CQUFtQjtzQkFEbEIsS0FBSztnQkFXTixtQkFBbUI7c0JBRGxCLEtBQUs7Z0JBdUJOLHNCQUFzQjtzQkFEckIsS0FBSztnQkFhRixnQkFBZ0I7c0JBRG5CLEtBQUs7dUJBQUMsa0JBQWtCO2dCQWtCekIsY0FBYztzQkFEYixLQUFLO2dCQVlOLGFBQWE7c0JBRFosS0FBSztnQkFhTixlQUFlO3NCQURkLEtBQUs7Z0JBWU4sY0FBYztzQkFEYixLQUFLO2dCQVdOLFNBQVM7c0JBRFIsS0FBSztnQkFXRixpQkFBaUI7c0JBRHBCLEtBQUs7dUJBQUMsbUJBQW1CO2dCQWlCdEIsUUFBUTtzQkFGWCxXQUFXO3VCQUFDLGtDQUFrQzs7c0JBQzlDLEtBQUs7dUJBQUMsVUFBVTtnQkFrQmpCLGlCQUFpQjtzQkFEaEIsS0FBSztnQkFZTixnQkFBZ0I7c0JBRGYsS0FBSztnQkFXTiw2QkFBNkI7c0JBRDVCLEtBQUs7Z0JBV04saUJBQWlCO3NCQURoQixLQUFLO2dCQVdOLFdBQVc7c0JBRFYsS0FBSztnQkFXRixVQUFVO3NCQURiLEtBQUs7dUJBQUMsWUFBWTtnQkFpQm5CLGNBQWM7c0JBRGIsS0FBSztnQkFXTixlQUFlO3NCQURkLEtBQUs7Z0JBV04sYUFBYTtzQkFEWixLQUFLO2dCQVdOLGlCQUFpQjtzQkFEaEIsS0FBSztnQkFZTixlQUFlO3NCQURkLEtBQUs7Z0JBV04sb0JBQW9CO3NCQURuQixLQUFLO2dCQVdOLFdBQVc7c0JBRFYsS0FBSztnQkFXTixVQUFVO3NCQURULEtBQUs7Z0JBV04sZUFBZTtzQkFEZCxLQUFLO2dCQVdOLFlBQVk7c0JBRFgsS0FBSztnQkFVTixRQUFRO3NCQURQLE1BQU07Z0JBV1AsUUFBUTtzQkFEUCxNQUFNO2dCQVVQLFlBQVk7c0JBRFgsTUFBTTtnQkFVUCxlQUFlO3NCQURkLE1BQU07Z0JBV1AsZ0JBQWdCO3NCQURmLE1BQU07Z0JBVVAsTUFBTTtzQkFETCxNQUFNO2dCQVVQLE9BQU87c0JBRE4sTUFBTTtnQkFVUCxRQUFRO3NCQURQLE1BQU07Z0JBVVAsT0FBTztzQkFETixNQUFNO2dCQXdCUCxjQUFjO3NCQURiLEtBQUs7Z0JBV04sYUFBYTtzQkFEWixLQUFLO2dCQVlOLG9CQUFvQjtzQkFEbkIsS0FBSztnQkFXTixXQUFXO3NCQURWLEtBQUs7Z0JBV04sYUFBYTtzQkFEWixLQUFLO2dCQVdGLFVBQVU7c0JBRGIsS0FBSzt1QkFBQyxZQUFZO2dCQWtCbkIsVUFBVTtzQkFEVCxNQUFNO2dCQVdQLFlBQVk7c0JBRFgsTUFBTTtnQkFZUCxTQUFTO3NCQURSLE1BQU07Z0JBSVAsYUFBYTtzQkFEWixZQUFZO3VCQUFDLHFDQUFxQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFHMUUsWUFBWTtzQkFEWCxZQUFZO3VCQUFDLG9DQUFvQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFHekUsZUFBZTtzQkFEZCxZQUFZO3VCQUFDLHVDQUF1QyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFHNUUsYUFBYTtzQkFEWixZQUFZO3VCQUFDLHFDQUFxQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFHMUUsbUJBQW1CO3NCQURsQixZQUFZO3VCQUFDLDJDQUEyQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFHaEYsZUFBZTtzQkFEZCxZQUFZO3VCQUFDLHVDQUF1QyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFHNUUsYUFBYTtzQkFEWixZQUFZO3VCQUFDLHFDQUFxQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFHMUUsZ0JBQWdCO3NCQURmLFlBQVk7dUJBQUMsd0NBQXdDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUc3RSxtQkFBbUI7c0JBRGxCLFlBQVk7dUJBQUMsMkNBQTJDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUdoRixrQkFBa0I7c0JBRGpCLFlBQVk7dUJBQUMsMENBQTBDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUcvRSxlQUFlO3NCQURkLFlBQVk7dUJBQUMsdUNBQXVDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUc1RSxjQUFjO3NCQURiLFlBQVk7dUJBQUMsc0NBQXNDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUkzRSxjQUFjO3NCQURiLFlBQVk7dUJBQUMsc0NBQXNDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUczRSxnQkFBZ0I7c0JBRGYsWUFBWTt1QkFBQyx3Q0FBd0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBRzdFLFlBQVk7c0JBRFgsWUFBWTt1QkFBQyxvQ0FBb0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBVXpFLHFCQUFxQjtzQkFEcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nRm9yLCBOZ0lmLCBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgSXRlcmFibGVEaWZmZXIsIEl0ZXJhYmxlRGlmZmVycywgT25Jbml0LCBPcHRpb25hbCwgT3V0cHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW9uSXRlbSwgTW9kYWxDb250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIE1vZGFsT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWFkZC1pdGVtLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVDbG9zZUJ1dHRvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWNsb3NlLWJ1dHRvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtZm9vdGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVHcm91cEVuZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWdyb3VwLWVuZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlR3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1ncm91cC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJY29uVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaWNvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSXRlbUVuZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0tZW5kLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJdGVtSWNvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0taWNvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSXRlbVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZU1lc3NhZ2VUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1tZXNzYWdlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlUGxhY2Vob2xkZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1wbGFjZWhvbGRlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlU2VhcmNoRmFpbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXNlYXJjaC1mYWlsLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVUaXRsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXRpdGxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVWYWx1ZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXZhbHVlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbmljLXNlbGVjdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lvbmljLXNlbGVjdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbiAgfV0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBOZ1RlbXBsYXRlT3V0bGV0LCBOZ0Zvcl1cbn0pXG5leHBvcnQgY2xhc3MgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgRG9DaGVjayB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZScpXG4gIF9jc3NDbGFzcyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1pb3MnKVxuICBfaXNJb3MhOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbWQnKVxuICBfaXNNRCE6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1pcy1tdWx0aXBsZScpXG4gIGdldCBfaXNNdWx0aXBsZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzTXVsdGlwbGU7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWhhcy12YWx1ZScpXG4gIGdldCBfaGFzVmFsdWVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNWYWx1ZSgpO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1oYXMtcGxhY2Vob2xkZXInKVxuICBnZXQgX2hhc1BsYWNlaG9sZGVyQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1BsYWNlaG9sZGVyO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1oYXMtbGFiZWwnKVxuICBnZXQgX2hhc0lvbkxhYmVsQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0lvbkxhYmVsO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1kZWZhdWx0JylcbiAgZ2V0IF9oYXNEZWZhdWx0SW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ2RlZmF1bHQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1maXhlZCcpXG4gIGdldCBfaGFzRml4ZWRJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnZml4ZWQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1zdGFja2VkJylcbiAgZ2V0IF9oYXNTdGFja2VkSW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ3N0YWNrZWQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1mbG9hdGluZycpXG4gIGdldCBfaGFzRmxvYXRpbmdJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnZmxvYXRpbmcnO1xuICB9XG4gIHByaXZhdGUgX2lzT25TZWFyY2hFbmFibGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaXNFbmFibGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfc2hvdWxkQmFja2Ryb3BDbG9zZSA9IHRydWU7XG4gIHByaXZhdGUgX2lzT3BlbmVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9tb2RhbCE6IEhUTUxJb25Nb2RhbEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zRGlmZmVyOiBJdGVyYWJsZURpZmZlcjxhbnk+O1xuICBwcml2YXRlIF9oYXNPYmplY3RzITogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2FuQ2xlYXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGFzQ29uZmlybUJ1dHRvbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc011bHRpcGxlID0gZmFsc2U7XG4gIHByaXZhdGUgX2NhbkFkZEl0ZW0gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYWRkSXRlbU9ic2VydmFibGUhOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG9uSXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIF9pb25JdGVtRWxlbWVudDogYW55O1xuICBwcml2YXRlIF9pb25MYWJlbEVsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBfaGFzSW9uTGFiZWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW9uTGFiZWxQb3NpdGlvbjogJ2ZpeGVkJyB8ICdzdGFja2VkJyB8ICdmbG9hdGluZycgfCAnZGVmYXVsdCcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGdldCBfaGFzSW5maW5pdGVTY3JvbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFbmFibGVkICYmIHRoaXMuX21vZGFsQ29tcG9uZW50ICYmXG4gICAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5faW5maW5pdGVTY3JvbGwgPyB0cnVlIDogZmFsc2U7XG4gIH1cbiAgZ2V0IF9zaG91bGRTdG9yZUl0ZW1WYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG91bGRTdG9yZUl0ZW1WYWx1ZSAmJiB0aGlzLl9oYXNPYmplY3RzO1xuICB9XG4gIF92YWx1ZUl0ZW1zOiBhbnlbXSA9IFtdO1xuICBfc2VhcmNoVGV4dCA9ICcnO1xuICBfaGFzU2VhcmNoVGV4dCA9IGZhbHNlO1xuICBfZ3JvdXBzOiBhbnlbXSA9IFtdO1xuICBfaXRlbXNUb0NvbmZpcm06IGFueVtdID0gW107XG4gIF9zZWxlY3RlZEl0ZW1zOiBhbnlbXSA9IFtdO1xuICBfbW9kYWxDb21wb25lbnQhOiBJb25pY1NlbGVjdGFibGVNb2RhbENvbXBvbmVudDtcbiAgX2ZpbHRlcmVkR3JvdXBzOiBhbnlbXSA9IFtdO1xuICBfaGFzR3JvdXBzITogYm9vbGVhbjtcbiAgX2lzU2VhcmNoaW5nITogYm9vbGVhbjtcbiAgX2hhc1BsYWNlaG9sZGVyITogYm9vbGVhbjtcbiAgX2lzQWRkSXRlbVRlbXBsYXRlVmlzaWJsZSA9IGZhbHNlO1xuICBfaXNGb290ZXJWaXNpYmxlID0gdHJ1ZTtcbiAgX2l0ZW1Ub0FkZDogYW55ID0gbnVsbDtcbiAgX2Zvb3RlckJ1dHRvbnNDb3VudCA9IDA7XG4gIF9oYXNGaWx0ZXJlZEl0ZW1zID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRleHQgb2YgW0lvbmljIExhYmVsXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9sYWJlbCkuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2xhYmVsKS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRleHQgdGhhdCB0aGUgdXNlciBoYXMgdHlwZWQgaW4gU2VhcmNoYmFyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2h0ZXh0KS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBzZWFyY2hUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFRleHQ7XG4gIH1cbiAgc2V0IHNlYXJjaFRleHQoc2VhcmNoVGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgdGhpcy5fc2V0SGFzU2VhcmNoVGV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBzZWFyY2ggaXMgcnVubmluZy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNzZWFyY2hpbmcpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGlzU2VhcmNoaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1NlYXJjaGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdXNlciBoYXMgdHlwZWQgYW55dGhpbmcgaW4gU2VhcmNoYmFyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXNzZWFyY2h0ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQHJlYWRvbmx5XG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBoYXNTZWFyY2hUZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNTZWFyY2hUZXh0O1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIC8vIFNldCB2YWx1ZSBpdGVtcy5cbiAgICB0aGlzLl92YWx1ZUl0ZW1zLnNwbGljZSgwLCB0aGlzLl92YWx1ZUl0ZW1zLmxlbmd0aCk7XG5cbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMuX3ZhbHVlSXRlbXMsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlSXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0SW9uSXRlbUhhc1ZhbHVlKCk7XG4gICAgdGhpcy5fc2V0SGFzUGxhY2Vob2xkZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaXRlbXMuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW1zKS5cbiAgICpcbiAgICogQGRlZmF1bHQgW11cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaXRlbXM6IGFueVtdID0gW107XG4gIEBPdXRwdXQoKVxuICBpdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzZW5hYmxlZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWlzLWVuYWJsZWQnKVxuICBASW5wdXQoJ2lzRW5hYmxlZCcpXG4gIGdldCBpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRW5hYmxlZDtcbiAgfVxuICBzZXQgaXNFbmFibGVkKGlzRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICEhaXNFbmFibGVkO1xuICAgIHRoaXMuZW5hYmxlSW9uSXRlbSh0aGlzLl9pc0VuYWJsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBNb2RhbCBzaG91bGQgYmUgY2xvc2VkIHdoZW4gYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvdWxkYmFja2Ryb3BjbG9zZSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdzaG91bGRCYWNrZHJvcENsb3NlJylcbiAgZ2V0IHNob3VsZEJhY2tkcm9wQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZEJhY2tkcm9wQ2xvc2U7XG4gIH1cbiAgc2V0IHNob3VsZEJhY2tkcm9wQ2xvc2Uoc2hvdWxkQmFja2Ryb3BDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3VsZEJhY2tkcm9wQ2xvc2UgPSAhIXNob3VsZEJhY2tkcm9wQ2xvc2U7XG4gIH1cblxuICAvKipcbiAgICogTW9kYWwgQ1NTIGNsYXNzLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNtb2RhbGNzc2NsYXNzKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENzc0NsYXNzOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogTW9kYWwgZW50ZXIgYW5pbWF0aW9uLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNtb2RhbGVudGVyYW5pbWF0aW9uKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbEVudGVyQW5pbWF0aW9uITogQW5pbWF0aW9uQnVpbGRlcjtcblxuICAvKipcbiAgICogTW9kYWwgbGVhdmUgYW5pbWF0aW9uLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNtb2RhbGxlYXZlYW5pbWF0aW9uKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbExlYXZlQW5pbWF0aW9uITogQW5pbWF0aW9uQnVpbGRlcjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIE1vZGFsIGlzIG9wZW5lZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNvcGVuZWQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgQ29uZmlybSBidXR0b24gaXMgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNjb25maXJtYnV0dG9uZW5hYmxlZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaXNDb25maXJtQnV0dG9uRW5hYmxlZCA9IHRydWU7XG5cbiAgLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgQ29uZmlybSBidXR0b24gaXMgdmlzaWJsZSBmb3Igc2luZ2xlIHNlbGVjdGlvbi5cbiAqIEJ5IGRlZmF1bHQgQ29uZmlybSBidXR0b24gaXMgdmlzaWJsZSBvbmx5IGZvciBtdWx0aXBsZSBzZWxlY3Rpb24uXG4gKiAqKk5vdGUqKjogSXQgaXMgYWx3YXlzIHRydWUgZm9yIG11bHRpcGxlIHNlbGVjdGlvbiBhbmQgY2Fubm90IGJlIGNoYW5nZWQuXG4gKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXNjb25maXJtYnV0dG9uKS5cbiAqXG4gKiBAZGVmYXVsdCB0cnVlXG4gKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gKi9cbiAgQElucHV0KCdoYXNDb25maXJtQnV0dG9uJylcbiAgZ2V0IGhhc0NvbmZpcm1CdXR0b24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0NvbmZpcm1CdXR0b247XG4gIH1cbiAgc2V0IGhhc0NvbmZpcm1CdXR0b24oaGFzQ29uZmlybUJ1dHRvbjogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc0NvbmZpcm1CdXR0b24gPSAhIWhhc0NvbmZpcm1CdXR0b247XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuICAvKipcbiAgICogSXRlbSBwcm9wZXJ0eSB0byB1c2UgYXMgYSB1bmlxdWUgaWRlbnRpZmllciwgZS5nLCBgJ2lkJ2AuXG4gICAqICoqTm90ZSoqOiBgaXRlbXNgIHNob3VsZCBiZSBhbiBvYmplY3QgYXJyYXkuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW12YWx1ZWZpZWxkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpdGVtVmFsdWVGaWVsZDogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIEl0ZW0gcHJvcGVydHkgdG8gZGlzcGxheSwgZS5nLCBgJ25hbWUnYC5cbiAgICogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXRlbXRleHRmaWVsZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGl0ZW1UZXh0RmllbGQ6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKlxuICAgKiBHcm91cCBwcm9wZXJ0eSB0byB1c2UgYXMgYSB1bmlxdWUgaWRlbnRpZmllciB0byBncm91cCBpdGVtcywgZS5nLiBgJ2NvdW50cnkuaWQnYC5cbiAgICogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZ3JvdXB2YWx1ZWZpZWxkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBncm91cFZhbHVlRmllbGQ6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuKiBHcm91cCBwcm9wZXJ0eSB0byBkaXNwbGF5LCBlLmcuIGAnY291bnRyeS5uYW1lJ2AuXG4qICoqTm90ZSoqOiBgaXRlbXNgIHNob3VsZCBiZSBhbiBvYmplY3QgYXJyYXkuXG4qIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2dyb3VwdGV4dGZpZWxkKS5cbipcbiogQGRlZmF1bHQgbnVsbFxuKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4qL1xuICBASW5wdXQoKVxuICBncm91cFRleHRGaWVsZDogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IFNlYXJjaGJhci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2Fuc2VhcmNoKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2FuU2VhcmNoID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBgb25TZWFyY2hgIGV2ZW50IGlzIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzb25zZWFyY2hlbmFibGVkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoJ2lzT25TZWFyY2hFbmFibGVkJylcbiAgZ2V0IGlzT25TZWFyY2hFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc09uU2VhcmNoRW5hYmxlZDtcbiAgfVxuICBzZXQgaXNPblNlYXJjaEVuYWJsZWQoaXNPblNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc09uU2VhcmNoRW5hYmxlZCA9ICEhaXNPblNlYXJjaEVuYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgQ2xlYXIgYnV0dG9uLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5jbGVhcikuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1jYW4tY2xlYXInKVxuICBASW5wdXQoJ2NhbkNsZWFyJylcbiAgZ2V0IGNhbkNsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jYW5DbGVhcjtcbiAgfVxuICBzZXQgY2FuQ2xlYXIoY2FuQ2xlYXI6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jYW5DbGVhciA9ICEhY2FuQ2xlYXI7XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIElvbmljIFtJbmZpbml0ZVNjcm9sbF0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy9pbmZpbml0ZS1zY3JvbGwvSW5maW5pdGVTY3JvbGwvKSBpcyBlbmFibGVkLlxuICAgKiAqKk5vdGUqKjogSW5maW5pdGUgc2Nyb2xsIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggdmlydHVhbCBzY3JvbGwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hhc2luZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaGFzSW5maW5pdGVTY3JvbGwgPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIElvbmljIFtWaXJ0dWFsU2Nyb2xsXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1ZpcnR1YWxTY3JvbGwvKSBpcyBlbmFibGVkLlxuICAgKiAqKk5vdGUqKjogVmlydHVhbCBzY3JvbGwgY2Fubm90IGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBpbmZpbml0ZSBzY3JvbGwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hhc3ZpcnR1YWxzY3JvbGwpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBoYXNWaXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNlZSBJb25pYyBWaXJ0dWFsU2Nyb2xsIFthcHByb3hJdGVtSGVpZ2h0XShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1ZpcnR1YWxTY3JvbGwvKS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jdmlydHVhbHNjcm9sbGFwcHJveGl0ZW1oZWlnaHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnNDBweCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgdmlydHVhbFNjcm9sbEFwcHJveEl0ZW1IZWlnaHQgPSAnNDBweCc7XG5cbiAgLyoqXG4gICAqIEEgcGxhY2Vob2xkZXIgZm9yIFNlYXJjaGJhci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2VhcmNocGxhY2Vob2xkZXIpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnU2VhcmNoJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzZWFyY2hQbGFjZWhvbGRlciA9ICdTZWFyY2gnO1xuXG4gIC8qKlxuICAgKiBBIHBsYWNlaG9sZGVyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNwbGFjZWhvbGRlcikuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgbXVsdGlwbGUgaXRlbXMgY2FuIGJlIHNlbGVjdGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc211bHRpcGxlKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdpc011bHRpcGxlJylcbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTXVsdGlwbGU7XG4gIH1cbiAgc2V0IGlzTXVsdGlwbGUoaXNNdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzTXVsdGlwbGUgPSAhIWlzTXVsdGlwbGU7XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gbm8gaXRlbXMgaGF2ZSBiZWVuIGZvdW5kIGR1cmluZyBzZWFyY2guXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaGZhaWx0ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ05vIGl0ZW1zIGZvdW5kLidcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VhcmNoRmFpbFRleHQgPSAnTm8gaXRlbXMgZm91bmQuJztcblxuICAvKipcbiAgICogQ2xlYXIgYnV0dG9uIHRleHQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NsZWFyYnV0dG9udGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdDbGVhcidcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2xlYXJCdXR0b25UZXh0ID0gJ0NsZWFyJztcblxuICAvKipcbiAgICogQWRkIGJ1dHRvbiB0ZXh0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNhZGRidXR0b250ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0FkZCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgYWRkQnV0dG9uVGV4dCA9ICdBZGQnO1xuXG4gIC8qKlxuICAgKiBDb25maXJtIGJ1dHRvbiB0ZXh0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjb25maXJtYnV0dG9udGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdPSydcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY29uZmlybUJ1dHRvblRleHQgPSAnT0snO1xuXG4gIC8qKlxuICAgKiBDbG9zZSBidXR0b24gdGV4dC5cbiAgICogVGhlIGZpZWxkIGlzIG9ubHkgYXBwbGljYWJsZSB0byAqKmlPUyoqIHBsYXRmb3JtLCBvbiAqKkFuZHJvaWQqKiBvbmx5IENyb3NzIGljb24gaXMgZGlzcGxheWVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjbG9zZWJ1dHRvbnRleHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnQ2FuY2VsJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjbG9zZUJ1dHRvblRleHQgPSAnQ2FuY2VsJztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIFNlYXJjaGJhciBzaG91bGQgcmVjZWl2ZSBmb2N1cyB3aGVuIE1vZGFsIGlzIG9wZW5lZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvdWxkZm9jdXNzZWFyY2hiYXIpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG91bGRGb2N1c1NlYXJjaGJhciA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBIZWFkZXIgY29sb3IuIFtJb25pYyBjb2xvcnNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9hZHZhbmNlZCNjb2xvcnMpIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hlYWRlcmNvbG9yKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBoZWFkZXJDb2xvcjogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIEdyb3VwIGNvbG9yLiBbSW9uaWMgY29sb3JzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvYWR2YW5jZWQjY29sb3JzKSBhcmUgc3VwcG9ydGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNncm91cGNvbG9yKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBncm91cENvbG9yOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQ2xvc2UgYnV0dG9uIHNsb3QuIFtJb25pYyBzbG90c10oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvYnV0dG9ucykgYXJlIHN1cHBvcnRlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2xvc2VidXR0b25zbG90KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3N0YXJ0J1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjbG9zZUJ1dHRvblNsb3QgPSAnc3RhcnQnO1xuXG4gIC8qKlxuICAgKiBJdGVtIGljb24gc2xvdC4gW0lvbmljIHNsb3RzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9pdGVtKSBhcmUgc3VwcG9ydGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtaWNvbnNsb3QpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnc3RhcnQnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGl0ZW1JY29uU2xvdCA9ICdzdGFydCc7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gaXRlbS9zIGhhcyBiZWVuIHNlbGVjdGVkIGFuZCBNb2RhbCBjbG9zZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uY2hhbmdlKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgdmFsdWU6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gU2VhcmNoYmFyLlxuICAgKiAqKk5vdGUqKjogYGNhblNlYXJjaGAgYW5kIGBpc09uU2VhcmNoRW5hYmxlZGAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2VhcmNoKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgdGV4dDogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIG5vIGl0ZW1zIGhhdmUgYmVlbiBmb3VuZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25zZWFyY2hmYWlsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2VhcmNoRmFpbDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBzb21lIGl0ZW1zIGhhdmUgYmVlbiBmb3VuZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25zZWFyY2hzdWNjZXNzKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2VhcmNoU3VjY2VzczogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdXNlciBoYXMgc2Nyb2xsZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICogKipOb3RlKio6IGBoYXNJbmZpbml0ZVNjcm9sbGAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25JbmZpbml0ZVNjcm9sbDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29ub3BlbikuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbk9wZW46IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIE1vZGFsIGhhcyBiZWVuIGNsb3NlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25jbG9zZSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhbiBpdGVtIGhhcyBiZWVuIHNlbGVjdGVkIG9yIHVuc2VsZWN0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2VsZWN0KS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgaXRlbTogYW55LCBpc1NlbGVjdGVkOiBib29sZWFuIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIENsZWFyIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmNsZWFyKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uQ2xlYXI6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCBpdGVtczogYW55W10gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBpdGVtcyB0aGF0IGFyZSBzZWxlY3RlZCBhbmQgYXdhaXRpbmcgY29uZmlybWF0aW9uIGJ5IHVzZXIsIHdoZW4gaGUgaGFzIGNsaWNrZWQgQ29uZmlybSBidXR0b24uXG4gICAqIEFmdGVyIHRoZSB1c2VyIGhhcyBjbGlja2VkIENvbmZpcm0gYnV0dG9uIGl0ZW1zIHRvIGNvbmZpcm0gYXJlIGNsZWFyZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW1zdG9jb25maXJtKS5cbiAgICpcbiAgICogQGRlZmF1bHQgW11cbiAgICogQHJlYWRvbmx5XG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBpdGVtc1RvQ29uZmlybSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zVG9Db25maXJtO1xuICB9XG5cbiAgLyoqXG4gICAqIEhvdyBsb25nLCBpbiBtaWxsaXNlY29uZHMsIHRvIHdhaXQgdG8gZmlsdGVyIGl0ZW1zIG9yIHRvIHRyaWdnZXIgYG9uU2VhcmNoYCBldmVudCBhZnRlciBlYWNoIGtleXN0cm9rZS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2VhcmNoZGVib3VuY2UpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAyNTBcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VhcmNoRGVib3VuY2U6IE51bWJlciA9IDI1MDtcblxuICAvKipcbiAgICogQSBsaXN0IG9mIGl0ZW1zIHRvIGRpc2FibGUuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2Rpc2FibGVkaXRlbXMpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBbXVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBkaXNhYmxlZEl0ZW1zOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgaXRlbSB2YWx1ZSBvbmx5IHNob3VsZCBiZSBzdG9yZWQgaW4gYG5nTW9kZWxgLCBub3QgdGhlIGVudGlyZSBpdGVtLlxuICAgKiAqKk5vdGUqKjogSXRlbSB2YWx1ZSBpcyBkZWZpbmVkIGJ5IGBpdGVtVmFsdWVGaWVsZGAuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Nob3VsZHN0b3JlaXRlbXZhbHVlKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvdWxkU3RvcmVJdGVtVmFsdWUgPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGFsbG93IGVkaXRpbmcgaXRlbXMuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NhbnNhdmVpdGVtKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2FuU2F2ZUl0ZW0gPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGFsbG93IGRlbGV0aW5nIGl0ZW1zLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5kZWxldGVpdGVtKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2FuRGVsZXRlSXRlbSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gYWxsb3cgYWRkaW5nIGl0ZW1zLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5hZGRpdGVtKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdjYW5BZGRJdGVtJylcbiAgZ2V0IGNhbkFkZEl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbkFkZEl0ZW07XG4gIH1cbiAgc2V0IGNhbkFkZEl0ZW0oY2FuQWRkSXRlbTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NhbkFkZEl0ZW0gPSAhIWNhbkFkZEl0ZW07XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBFZGl0IGl0ZW0gYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqIFdoZW4gdGhlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkIGBpb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVgIHdpbGwgYmUgc2hvd24uIFVzZSB0aGUgdGVtcGxhdGUgdG8gY3JlYXRlIGEgZm9ybSB0byBlZGl0IGl0ZW0uXG4gICAqICoqTm90ZSoqOiBgY2FuU2F2ZUl0ZW1gIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNhdmVpdGVtKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2F2ZUl0ZW06IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCBpdGVtOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gRGVsZXRlIGl0ZW0gYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqICoqTm90ZSoqOiBgY2FuRGVsZXRlSXRlbWAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uZGVsZXRlaXRlbSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkRlbGV0ZUl0ZW06IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCBpdGVtOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gQWRkIGl0ZW0gYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqIFdoZW4gdGhlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkIGBpb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVgIHdpbGwgYmUgc2hvd24uIFVzZSB0aGUgdGVtcGxhdGUgdG8gY3JlYXRlIGEgZm9ybSB0byBhZGQgaXRlbS5cbiAgICogKipOb3RlKio6IGBjYW5BZGRJdGVtYCBoYXMgdG8gYmUgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25hZGRpdGVtKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uQWRkSXRlbTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVWYWx1ZVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHZhbHVlVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBpdGVtVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUl0ZW1FbmRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBpdGVtRW5kVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZVRpdGxlVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgdGl0bGVUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlUGxhY2Vob2xkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBwbGFjZWhvbGRlclRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVNZXNzYWdlVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgbWVzc2FnZVRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVHcm91cFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGdyb3VwVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUdyb3VwRW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgZ3JvdXBFbmRUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlQ2xvc2VCdXR0b25UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBjbG9zZUJ1dHRvblRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVTZWFyY2hGYWlsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgc2VhcmNoRmFpbFRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgYWRkSXRlbVRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBmb290ZXJUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG4gIF9hZGRJdGVtVGVtcGxhdGVGb290ZXJIZWlnaHQhOiBzdHJpbmc7XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaGVhZGVyVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUl0ZW1JY29uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaXRlbUljb25UZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSWNvblRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGljb25UZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFNlZSBJb25pYyBWaXJ0dWFsU2Nyb2xsIFtoZWFkZXJGbl0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC9WaXJ0dWFsU2Nyb2xsLykuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3ZpcnR1YWxzY3JvbGxoZWFkZXJmbikuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpcnR1YWxTY3JvbGxIZWFkZXJGbiA9ICgpID0+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21vZGFsQ29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGlvbkl0ZW06IElvbkl0ZW0sXG4gICAgcHJpdmF0ZSBfaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIGlmICghdGhpcy5pdGVtcz8ubGVuZ3RoKSB7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5faXRlbXNEaWZmZXIgPSB0aGlzLl9pdGVyYWJsZURpZmZlcnMuZmluZCh0aGlzLml0ZW1zKS5jcmVhdGUoKTtcbiAgfVxuXG4gIGluaXRGb2N1cygpIHsgfVxuXG4gIGVuYWJsZUlvbkl0ZW0oaXNFbmFibGVkOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmlvbkl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlvbkl0ZW0uZGlzYWJsZWQgPSAhaXNFbmFibGVkO1xuICB9XG5cbiAgX2lzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdmFsdWUgdG8gc3RyaW5nIGluIGNhc2UgaWYgaXQncyBub3QuXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzL2csICcnKS5sZW5ndGggPCAxO1xuICB9XG5cbiAgX3NldEhhc1NlYXJjaFRleHQoKSB7XG4gICAgdGhpcy5faGFzU2VhcmNoVGV4dCA9ICF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5fc2VhcmNoVGV4dCk7XG4gIH1cblxuICBfaGFzT25TZWFyY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNPblNlYXJjaEVuYWJsZWQgJiYgdGhpcy5vblNlYXJjaC5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9oYXNPblNhdmVJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhblNhdmVJdGVtICYmIHRoaXMub25TYXZlSXRlbS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9oYXNPbkFkZEl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWRkSXRlbSAmJiB0aGlzLm9uQWRkSXRlbS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9oYXNPbkRlbGV0ZUl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlSXRlbSAmJiB0aGlzLm9uRGVsZXRlSXRlbS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9lbWl0VmFsdWVDaGFuZ2UoKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVPbkNoYW5nZSh0aGlzLnZhbHVlKTtcblxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgX2VtaXRTZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLmNhblNlYXJjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25TZWFyY2guZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB0ZXh0OiB0aGlzLl9zZWFyY2hUZXh0XG4gICAgfSk7XG4gIH1cblxuICBfZW1pdE9uU2VsZWN0KGl0ZW06IGFueSwgaXNTZWxlY3RlZDogYm9vbGVhbikge1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBpdGVtOiBpdGVtLFxuICAgICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZFxuICAgIH0pO1xuICB9XG5cbiAgX2VtaXRPbkNsZWFyKGl0ZW1zOiBhbnlbXSkge1xuICAgIHRoaXMub25DbGVhci5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGl0ZW1zOiBpdGVtc1xuICAgIH0pO1xuICB9XG5cbiAgX2VtaXRPblNlYXJjaFN1Y2Nlc3NPckZhaWwoaXNTdWNjZXNzOiBib29sZWFuKSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdGV4dDogdGhpcy5fc2VhcmNoVGV4dFxuICAgIH07XG5cbiAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoU3VjY2Vzcy5lbWl0KGV2ZW50RGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25TZWFyY2hGYWlsLmVtaXQoZXZlbnREYXRhKTtcbiAgICB9XG4gIH1cblxuICBfZm9ybWF0SXRlbShpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9pc051bGxPcldoaXRlU3BhY2UoaXRlbSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pdGVtVGV4dEZpZWxkID8gaXRlbVt0aGlzLml0ZW1UZXh0RmllbGRdIDogaXRlbS50b1N0cmluZygpO1xuICB9XG5cbiAgX2Zvcm1hdFZhbHVlSXRlbShpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9zaG91bGRTdG9yZUl0ZW1WYWx1ZSkge1xuICAgICAgLy8gR2V0IGl0ZW0gdGV4dCBmcm9tIHRoZSBsaXN0IGFzIHdlIHN0b3JlIGl0J3MgdmFsdWUgb25seS5cbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXMuZmluZChfaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBfaXRlbVt0aGlzLml0ZW1WYWx1ZUZpZWxkXSA9PT0gaXRlbTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5fZm9ybWF0SXRlbShzZWxlY3RlZEl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fZm9ybWF0SXRlbShpdGVtKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbVZhbHVlKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9oYXNPYmplY3RzKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVt0aGlzLml0ZW1WYWx1ZUZpZWxkXTtcbiAgfVxuXG4gIF9nZXRTdG9yZWRJdGVtVmFsdWUoaXRlbTogYW55KTogYW55IHtcbiAgICBpZiAoIXRoaXMuX2hhc09iamVjdHMpIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zaG91bGRTdG9yZUl0ZW1WYWx1ZSA/IGl0ZW0gOiBpdGVtW3RoaXMuaXRlbVZhbHVlRmllbGRdO1xuICB9XG5cbiAgX29uU2VhcmNoYmFyQ2xlYXIoKSB7XG4gICAgLy8gSW9uaWMgU2VhcmNoYmFyIGRvZXNuJ3QgY2xlYXIgYmluZCB3aXRoIG5nTW9kZWwgdmFsdWUuXG4gICAgLy8gRG8gaXQgb3Vyc2VsdmVzLlxuICAgIHRoaXMuX3NlYXJjaFRleHQgPSAnJztcbiAgfVxuXG4gIF9maWx0ZXJJdGVtcygpIHtcbiAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XG5cbiAgICBpZiAodGhpcy5faGFzT25TZWFyY2goKSkge1xuICAgICAgLy8gRGVsZWdhdGUgZmlsdGVyaW5nIHRvIHRoZSBldmVudC5cbiAgICAgIHRoaXMuX2VtaXRTZWFyY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmYXVsdCBmaWx0ZXJpbmcuXG4gICAgICBsZXQgZ3JvdXBzID0gW107XG5cbiAgICAgIGlmICghdGhpcy5fc2VhcmNoVGV4dD8udHJpbSgpKSB7XG4gICAgICAgIGdyb3VwcyA9IHRoaXMuX2dyb3VwcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclRleHQgPSB0aGlzLl9zZWFyY2hUZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuX2dyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwLml0ZW1zLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVGV4dCA9ICh0aGlzLml0ZW1UZXh0RmllbGQgP1xuICAgICAgICAgICAgICBpdGVtW3RoaXMuaXRlbVRleHRGaWVsZF0gOiBpdGVtKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVRleHQuaW5kZXhPZihmaWx0ZXJUZXh0KSAhPT0gLTE7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBncm91cHMucHVzaCh7XG4gICAgICAgICAgICAgIHZhbHVlOiBncm91cC52YWx1ZSxcbiAgICAgICAgICAgICAgdGV4dDogZ3JvdXAudGV4dCxcbiAgICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5vIGl0ZW1zIGZvdW5kLlxuICAgICAgICBpZiAoIWdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgICAgICBncm91cHMucHVzaCh7XG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9maWx0ZXJlZEdyb3VwcyA9IGdyb3VwcztcbiAgICAgIHRoaXMuX2hhc0ZpbHRlcmVkSXRlbXMgPSAhdGhpcy5fYXJlR3JvdXBzRW1wdHkoZ3JvdXBzKTtcbiAgICAgIHRoaXMuX2VtaXRPblNlYXJjaFN1Y2Nlc3NPckZhaWwodGhpcy5faGFzRmlsdGVyZWRJdGVtcyk7XG4gICAgfVxuICB9XG5cbiAgX2lzSXRlbURpc2FibGVkKGl0ZW06IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZEl0ZW1zKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRJdGVtcy5zb21lKF9pdGVtID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoX2l0ZW0pID09PSB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBfaXNJdGVtU2VsZWN0ZWQoaXRlbTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbXMuZmluZChzZWxlY3RlZEl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSA9PT0gdGhpcy5fZ2V0U3RvcmVkSXRlbVZhbHVlKHNlbGVjdGVkSXRlbSk7XG4gICAgfSkgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIF9hZGRTZWxlY3RlZEl0ZW0oaXRlbTogYW55KSB7XG4gICAgaWYgKHRoaXMuX3Nob3VsZFN0b3JlSXRlbVZhbHVlKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIF9kZWxldGVTZWxlY3RlZEl0ZW0oaXRlbTogYW55KSB7XG4gICAgbGV0IGl0ZW1Ub0RlbGV0ZUluZGV4ID0gLTE7XG5cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLmZvckVhY2goKHNlbGVjdGVkSXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSA9PT1cbiAgICAgICAgdGhpcy5fZ2V0U3RvcmVkSXRlbVZhbHVlKHNlbGVjdGVkSXRlbSlcbiAgICAgICkge1xuICAgICAgICBpdGVtVG9EZWxldGVJbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMuc3BsaWNlKGl0ZW1Ub0RlbGV0ZUluZGV4LCAxKTtcbiAgfVxuXG4gIF9jbGljaygpIHtcbiAgICBpZiAoIXRoaXMuaXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbGFiZWwgPSB0aGlzLl9nZXRMYWJlbFRleHQoKTtcbiAgICB0aGlzLm9wZW4oKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub25PcGVuLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3NhdmVJdGVtKGV2ZW50OiBFdmVudCwgaXRlbTogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5faXRlbVRvQWRkID0gaXRlbTtcblxuICAgIGlmICh0aGlzLl9oYXNPblNhdmVJdGVtKCkpIHtcbiAgICAgIHRoaXMub25TYXZlSXRlbS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBpdGVtOiB0aGlzLl9pdGVtVG9BZGRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dBZGRJdGVtVGVtcGxhdGUoKTtcbiAgICB9XG4gIH1cblxuICBfZGVsZXRlSXRlbUNsaWNrKGV2ZW50OiBFdmVudCwgaXRlbTogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5faXRlbVRvQWRkID0gaXRlbTtcblxuICAgIGlmICh0aGlzLl9oYXNPbkRlbGV0ZUl0ZW0oKSkge1xuICAgICAgLy8gRGVsZWdhdGUgbG9naWMgdG8gZXZlbnQuXG4gICAgICB0aGlzLm9uRGVsZXRlSXRlbS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBpdGVtOiB0aGlzLl9pdGVtVG9BZGRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlbGV0ZUl0ZW0odGhpcy5faXRlbVRvQWRkKTtcbiAgICB9XG4gIH1cblxuICBfYWRkSXRlbUNsaWNrKCkge1xuICAgIGlmICh0aGlzLl9oYXNPbkFkZEl0ZW0oKSkge1xuICAgICAgdGhpcy5vbkFkZEl0ZW0uZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0FkZEl0ZW1UZW1wbGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9wb3NpdGlvbkFkZEl0ZW1UZW1wbGF0ZSgpIHtcbiAgICAvLyBXYWl0IGZvciB0aGUgdGVtcGxhdGUgdG8gcmVuZGVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZm9vdGVyID0gdGhpcy5fbW9kYWxDb21wb25lbnQuX2VsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmlvbmljLXNlbGVjdGFibGUtYWRkLWl0ZW0tdGVtcGxhdGUgaW9uLWZvb3RlcicpO1xuXG4gICAgICB0aGlzLl9hZGRJdGVtVGVtcGxhdGVGb290ZXJIZWlnaHQgPSBmb290ZXIgPyBgY2FsYygxMDAlIC0gJHtmb290ZXIub2Zmc2V0SGVpZ2h0fXB4KWAgOiAnMTAwJSc7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIF9jbG9zZSgpIHtcbiAgICB0aGlzLmNsb3NlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuX2hhc09uU2VhcmNoKCkpIHtcbiAgICAgIHRoaXMuX3NlYXJjaFRleHQgPSAnJztcbiAgICAgIHRoaXMuX3NldEhhc1NlYXJjaFRleHQoKTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuX3NlbGVjdGVkSXRlbXM7XG5cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5fZW1pdFZhbHVlQ2hhbmdlKCk7XG4gICAgdGhpcy5fZW1pdE9uQ2xlYXIoc2VsZWN0ZWRJdGVtcyk7XG4gICAgdGhpcy5jbG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldE1vcmVJdGVtcygpIHtcbiAgICB0aGlzLm9uSW5maW5pdGVTY3JvbGwuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB0ZXh0OiB0aGlzLl9zZWFyY2hUZXh0XG4gICAgfSk7XG4gIH1cblxuICBfc2V0SXRlbXNUb0NvbmZpcm0oaXRlbXM6IGFueVtdKSB7XG4gICAgLy8gUmV0dXJuIGEgY29weSBvZiBvcmlnaW5hbCBhcnJheSwgc28gaXQgY291bGRuJ3QgYmUgY2hhbmdlZCBmcm9tIG91dHNpZGUuXG4gICAgdGhpcy5faXRlbXNUb0NvbmZpcm0gPSBbXS5jb25jYXQoaXRlbXMpO1xuICB9XG5cbiAgX2RvU2VsZWN0KHNlbGVjdGVkSXRlbTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkSXRlbTtcbiAgICB0aGlzLl9lbWl0VmFsdWVDaGFuZ2UoKTtcbiAgfVxuXG4gIF9zZWxlY3QoaXRlbTogYW55KSB7XG4gICAgY29uc3QgaXNJdGVtU2VsZWN0ZWQgPSB0aGlzLl9pc0l0ZW1TZWxlY3RlZChpdGVtKTtcblxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmIChpc0l0ZW1TZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9kZWxldGVTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldEl0ZW1zVG9Db25maXJtKHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xuXG4gICAgICAvLyBFbWl0IG9uU2VsZWN0IGV2ZW50IGFmdGVyIHNldHRpbmcgaXRlbXMgdG8gY29uZmlybSBzbyB0aGV5IGNvdWxkIGJlIHVzZWRcbiAgICAgIC8vIGluc2lkZSB0aGUgZXZlbnQuXG4gICAgICB0aGlzLl9lbWl0T25TZWxlY3QoaXRlbSwgIWlzSXRlbVNlbGVjdGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaGFzQ29uZmlybUJ1dHRvbiB8fCB0aGlzLmZvb3RlclRlbXBsYXRlKSB7XG4gICAgICAgIC8vIERvbid0IGNsb3NlIE1vZGFsIGFuZCBrZWVwIHRyYWNrIG9uIGl0ZW1zIHRvIGNvbmZpcm0uXG4gICAgICAgIC8vIFdoZW4gZm9vdGVyIHRlbXBsYXRlIGlzIHVzZWQgaXQncyB1cCB0byBkZXZlbG9wZXIgdG8gY2xvc2UgTW9kYWwuXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcblxuICAgICAgICBpZiAoaXNJdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLl9kZWxldGVTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0SXRlbXNUb0NvbmZpcm0odGhpcy5fc2VsZWN0ZWRJdGVtcyk7XG5cbiAgICAgICAgLy8gRW1pdCBvblNlbGVjdCBldmVudCBhZnRlciBzZXR0aW5nIGl0ZW1zIHRvIGNvbmZpcm0gc28gdGhleSBjb3VsZCBiZSB1c2VkXG4gICAgICAgIC8vIGluc2lkZSB0aGUgZXZlbnQuXG4gICAgICAgIHRoaXMuX2VtaXRPblNlbGVjdChpdGVtLCAhaXNJdGVtU2VsZWN0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFpc0l0ZW1TZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICB0aGlzLl9hZGRTZWxlY3RlZEl0ZW0oaXRlbSk7XG5cbiAgICAgICAgICAvLyBFbWl0IG9uU2VsZWN0IGJlZm9yZSBvbkNoYW5nZS5cbiAgICAgICAgICB0aGlzLl9lbWl0T25TZWxlY3QoaXRlbSwgdHJ1ZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0KGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NvbmZpcm0oKSB7XG4gICAgdGhpcy5jb25maXJtKCk7XG4gICAgdGhpcy5fY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldExhYmVsVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbEVsZW1lbnQgPyB0aGlzLl9pb25MYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXJlR3JvdXBzRW1wdHkoZ3JvdXBzOiBhbnkpIHtcbiAgICByZXR1cm4gZ3JvdXBzLmxlbmd0aCA9PT0gMCB8fCBncm91cHMuZXZlcnkoKGdyb3VwOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAhZ3JvdXAuaXRlbXM/Lmxlbmd0aDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvdW50Rm9vdGVyQnV0dG9ucygpIHtcbiAgICBsZXQgZm9vdGVyQnV0dG9uc0NvdW50ID0gMDtcblxuICAgIGlmICh0aGlzLmNhbkNsZWFyKSB7XG4gICAgICBmb290ZXJCdXR0b25zQ291bnQrKztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc011bHRpcGxlIHx8IHRoaXMuX2hhc0NvbmZpcm1CdXR0b24pIHtcbiAgICAgIGZvb3RlckJ1dHRvbnNDb3VudCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbkFkZEl0ZW0pIHtcbiAgICAgIGZvb3RlckJ1dHRvbnNDb3VudCsrO1xuICAgIH1cblxuICAgIHRoaXMuX2Zvb3RlckJ1dHRvbnNDb3VudCA9IGZvb3RlckJ1dHRvbnNDb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEl0ZW1zKGl0ZW1zOiBhbnlbXSkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGhhdmUgYW4gZW1wdHkgc3RhcnRpbmcgZ3JvdXAgd2l0aCBlbXB0eSBpdGVtcyAoZ3JvdXBzWzBdLml0ZW1zKSxcbiAgICAvLyBiZWNhdXNlIHdlIGJpbmQgdG8gaXQgd2hlbiB1c2luZyBWaXJ0dWFsU2Nyb2xsLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL2lzc3Vlcy83MC5cbiAgICBsZXQgZ3JvdXBzOiBhbnlbXSA9IFt7XG4gICAgICBpdGVtczogaXRlbXMgfHwgW11cbiAgICB9XTtcblxuICAgIGlmIChpdGVtcz8ubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5faGFzR3JvdXBzKSB7XG4gICAgICAgIGdyb3VwcyA9IFtdO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdXBWYWx1ZSA9IHRoaXMuX2dldFByb3BlcnR5VmFsdWUoaXRlbSwgdGhpcy5ncm91cFZhbHVlRmllbGQpLFxuICAgICAgICAgICAgZ3JvdXAgPSBncm91cHMuZmluZChfZ3JvdXAgPT4gX2dyb3VwLnZhbHVlID09PSBncm91cFZhbHVlKTtcblxuICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgZ3JvdXAuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JvdXBzLnB1c2goe1xuICAgICAgICAgICAgICB2YWx1ZTogZ3JvdXBWYWx1ZSxcbiAgICAgICAgICAgICAgdGV4dDogdGhpcy5fZ2V0UHJvcGVydHlWYWx1ZShpdGVtLCB0aGlzLmdyb3VwVGV4dEZpZWxkKSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtpdGVtXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gICAgdGhpcy5fZmlsdGVyZWRHcm91cHMgPSB0aGlzLl9ncm91cHM7XG4gICAgdGhpcy5faGFzRmlsdGVyZWRJdGVtcyA9ICF0aGlzLl9hcmVHcm91cHNFbXB0eSh0aGlzLl9maWx0ZXJlZEdyb3Vwcyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9wZXJ0eVZhbHVlKG9iamVjdDogYW55LCBwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoIXByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHkuc3BsaXQoJy4nKS5yZWR1Y2UoKF9vYmplY3QsIF9wcm9wZXJ0eSkgPT4ge1xuICAgICAgcmV0dXJuIF9vYmplY3QgPyBfb2JqZWN0W19wcm9wZXJ0eV0gOiBudWxsO1xuICAgIH0sIG9iamVjdCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJb25JdGVtSGFzRm9jdXMoaGFzRm9jdXM6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuaW9uSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZvY3VzIENTUyBjbGFzcyBmb3IgcHJvcGVyIHN0eWx5aW5nIG9mIGlvbi1pdGVtL2lvbi1sYWJlbC5cbiAgICB0aGlzLl9zZXRJb25JdGVtQ3NzQ2xhc3MoJ2l0ZW0taGFzLWZvY3VzJywgaGFzRm9jdXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW9uSXRlbUhhc1ZhbHVlKCkge1xuICAgIGlmICghdGhpcy5pb25JdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmFsdWUgQ1NTIGNsYXNzIGZvciBwcm9wZXIgc3R5bHlpbmcgb2YgaW9uLWl0ZW0vaW9uLWxhYmVsLlxuICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1oYXMtdmFsdWUnLCB0aGlzLmhhc1ZhbHVlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SGFzUGxhY2Vob2xkZXIoKSB7XG4gICAgdGhpcy5faGFzUGxhY2Vob2xkZXIgPSAhdGhpcy5oYXNWYWx1ZSgpICYmXG4gICAgICAoIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnBsYWNlaG9sZGVyKSB8fCB0aGlzLnBsYWNlaG9sZGVyVGVtcGxhdGUpID9cbiAgICAgIHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvcGFnYXRlT25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gIHByaXZhdGUgcHJvcGFnYXRlT25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gIHByaXZhdGUgX3NldElvbkl0ZW1Dc3NDbGFzcyhjc3NDbGFzczogc3RyaW5nLCBzaG91bGRBZGQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuX2lvbkl0ZW1FbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRvIFJlbmRlcmVyMlxuICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lvbkl0ZW1FbGVtZW50LCBjc3NDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2lvbkl0ZW1FbGVtZW50LCBjc3NDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlQWRkSXRlbVRlbXBsYXRlKGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgIC8vIEl0IHNob3VsZCBiZSBwb3NzaWJsZSB0byBzaG93L2hpZGUgdGhlIHRlbXBsYXRlIHJlZ2FyZGxlc3NcbiAgICAvLyBjYW5BZGRJdGVtIG9yIGNhblNhdmVJdGVtIHBhcmFtZXRlcnMsIHNvIHdlIGNvdWxkIGltcGxlbWVudCBzb21lXG4gICAgLy8gY3VzdG9tIGJlaGF2aW9yLiBFLmcuIGFkZGluZyBpdGVtIHdoZW4gc2VhcmNoIGZhaWxzIHVzaW5nIG9uU2VhcmNoRmFpbCBldmVudC5cbiAgICBpZiAoIXRoaXMuYWRkSXRlbVRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVG8gbWFrZSBTYXZlSXRlbVRlbXBsYXRlIHZpc2libGUgd2UganVzdCBwb3NpdGlvbiBpdCBvdmVyIGxpc3QgdXNpbmcgQ1NTLlxuICAgIC8vIFdlIGRvbid0IGhpZGUgbGlzdCB3aXRoICpuZ0lmIG9yIFtoaWRkZW5dIHRvIHByZXZlbnQgaXRzIHNjcm9sbCBwb3NpdGlvbi5cbiAgICB0aGlzLl9pc0FkZEl0ZW1UZW1wbGF0ZVZpc2libGUgPSBpc1Zpc2libGU7XG4gICAgdGhpcy5faXNGb290ZXJWaXNpYmxlID0gIWlzVmlzaWJsZTtcbiAgfVxuXG4gIC8qIENvbnRyb2xWYWx1ZUFjY2Vzc29yICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UobWV0aG9kOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZU9uQ2hhbmdlID0gbWV0aG9kO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQobWV0aG9kOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVPblRvdWNoZWQgPSBtZXRob2Q7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRW5hYmxlZCA9ICFpc0Rpc2FibGVkO1xuICB9XG4gIC8qIC5Db250cm9sVmFsdWVBY2Nlc3NvciAqL1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2lzSW9zID0gdGhpcy5fcGxhdGZvcm0uaXMoJ2lvcycpO1xuICAgIHRoaXMuX2lzTUQgPSAhdGhpcy5faXNJb3M7XG4gICAgdGhpcy5faGFzT2JqZWN0cyA9ICF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5pdGVtVmFsdWVGaWVsZCk7XG4gICAgLy8gR3JvdXBpbmcgaXMgc3VwcG9ydGVkIGZvciBvYmplY3RzIG9ubHkuXG4gICAgLy8gSW9uaWMgVmlydHVhbFNjcm9sbCBoYXMgaXQncyBvd24gaW1wbGVtZW50YXRpb24gb2YgZ3JvdXBpbmcuXG4gICAgdGhpcy5faGFzR3JvdXBzID0gQm9vbGVhbih0aGlzLl9oYXNPYmplY3RzICYmIHRoaXMuZ3JvdXBWYWx1ZUZpZWxkICYmICF0aGlzLmhhc1ZpcnR1YWxTY3JvbGwpO1xuXG4gICAgaWYgKHRoaXMuaW9uSXRlbSkge1xuICAgICAgdGhpcy5faW9uSXRlbUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnaW9uLWl0ZW0nKTtcbiAgICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1pbnRlcmFjdGl2ZScsIHRydWUpO1xuICAgICAgdGhpcy5fc2V0SW9uSXRlbUNzc0NsYXNzKCdpdGVtLWlvbmljLXNlbGVjdGFibGUnLCB0cnVlKTtcblxuICAgICAgaWYgKHRoaXMuX2lvbkl0ZW1FbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2lvbkxhYmVsRWxlbWVudCA9IHRoaXMuX2lvbkl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pb25MYWJlbEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYXNJb25MYWJlbCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9IHRoaXMuX2lvbkxhYmVsRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykgfHwgJ2RlZmF1bHQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbmFibGVJb25JdGVtKHRoaXMuaXNFbmFibGVkKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBjb25zdCBpdGVtc0NoYW5nZXMgPSB0aGlzLl9pdGVtc0RpZmZlci5kaWZmKHRoaXMuaXRlbXMpO1xuXG4gICAgaWYgKGl0ZW1zQ2hhbmdlcykge1xuICAgICAgdGhpcy5fc2V0SXRlbXModGhpcy5pdGVtcyk7XG5cbiAgICAgIHRoaXMub25JdGVtc0NoYW5nZS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBpdGVtLlxuICAgKiAqKk5vdGUqKjogSWYgeW91IHdhbnQgYW4gaXRlbSB0byBiZSBhZGRlZCB0byB0aGUgb3JpZ2luYWwgYXJyYXkgYXMgd2VsbCB1c2UgdHdvLXdheSBkYXRhIGJpbmRpbmcgc3ludGF4IG9uIGBbKGl0ZW1zKV1gIGZpZWxkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNhZGRpdGVtKS5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW0gSXRlbSB0byBhZGQuXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGl0ZW0gaGFzIGJlZW4gYWRkZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGFkZEl0ZW0oaXRlbTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIC8vIEFkZGluZyBpdGVtIHRyaWdnZXJzIG9uSXRlbXNDaGFuZ2UuXG4gICAgLy8gUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gb25JdGVtc0NoYW5nZSBmaW5pc2hlcy5cbiAgICAvLyBXZSBuZWVkIGEgcHJvbWlzZSBvciB1c2VyIGNvdWxkIGRvIHNvbWV0aGluZyBhZnRlciBpdGVtIGhhcyBiZWVuIGFkZGVkLFxuICAgIC8vIGUuZy4gdXNlIHNlYXJjaCgpIG1ldGhvZCB0byBmaW5kIHRoZSBhZGRlZCBpdGVtLlxuICAgIHRoaXMuaXRlbXMudW5zaGlmdChpdGVtKTtcblxuICAgIC8vIENsb3NlIGFueSBydW5uaW5nIHN1YnNjcmlwdGlvbi5cbiAgICBpZiAodGhpcy5fYWRkSXRlbU9ic2VydmFibGUpIHtcbiAgICAgIHRoaXMuX2FkZEl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIENvbXBsZXRlIGNhbGxiYWNrIGlzbid0IGZpcmVkIGZvciBzb21lIHJlYXNvbixcbiAgICAgIC8vIHNvIHVuc3Vic2NyaWJlIGluIGJvdGggc3VjY2VzcyBhbmQgZmFpbCBjYXNlcy5cbiAgICAgIHNlbGYuX2FkZEl0ZW1PYnNlcnZhYmxlID0gc2VsZi5vbkl0ZW1zQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNlbGYuX2FkZEl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHJlc29sdmUoJycpO1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBzZWxmLl9hZGRJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gKiBEZWxldGVzIGl0ZW0uXG4gKiAqKk5vdGUqKjogSWYgeW91IHdhbnQgYW4gaXRlbSB0byBiZSBkZWxldGVkIGZyb20gdGhlIG9yaWdpbmFsIGFycmF5IGFzIHdlbGwgdXNlIHR3by13YXkgZGF0YSBiaW5kaW5nIHN5bnRheCBvbiBgWyhpdGVtcyldYCBmaWVsZC5cbiAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2RlbGV0ZWl0ZW0pLlxuICpcbiAqIEBwYXJhbSBpdGVtIEl0ZW0gdG8gZGVsZXRlLlxuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gaXRlbSBoYXMgYmVlbiBkZWxldGVkLlxuICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICovXG4gIGRlbGV0ZUl0ZW0oaXRlbTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgaGFzVmFsdWVDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyBSZW1vdmUgZGVsZXRlZCBpdGVtIGZyb20gc2VsZWN0ZWQgaXRlbXMuXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSB0aGlzLl9zZWxlY3RlZEl0ZW1zLmZpbHRlcihfaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkgIT09IHRoaXMuX2dldFN0b3JlZEl0ZW1WYWx1ZShfaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZGVsZXRlZCBpdGVtIGZyb20gdmFsdWUuXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuaWQgIT09IGl0ZW0uaWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoICE9PSB0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZXM7XG4gICAgICAgICAgaGFzVmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICBoYXNWYWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbHVlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGRlbGV0ZWQgaXRlbSBmcm9tIGxpc3QuXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihfaXRlbSA9PiB7XG4gICAgICByZXR1cm4gX2l0ZW0uaWQgIT09IGl0ZW0uaWQ7XG4gICAgfSk7XG5cbiAgICAvLyBSZWZyZXNoIGl0ZW1zIG9uIHBhcmVudCBjb21wb25lbnQuXG4gICAgdGhpcy5pdGVtc0NoYW5nZS5lbWl0KGl0ZW1zKTtcblxuICAgIC8vIFJlZnJlc2ggbGlzdC5cbiAgICB0aGlzLl9zZXRJdGVtcyhpdGVtcyk7XG5cbiAgICB0aGlzLm9uSXRlbXNDaGFuZ2UuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICB9KTtcblxuICAgIC8vIENsb3NlIGFueSBydW5uaW5nIHN1YnNjcmlwdGlvbi5cbiAgICBpZiAodGhpcy5fZGVsZXRlSXRlbU9ic2VydmFibGUpIHtcbiAgICAgIHRoaXMuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIENvbXBsZXRlIGNhbGxiYWNrIGlzbid0IGZpcmVkIGZvciBzb21lIHJlYXNvbixcbiAgICAgIC8vIHNvIHVuc3Vic2NyaWJlIGluIGJvdGggc3VjY2VzcyBhbmQgZmFpbCBjYXNlcy5cbiAgICAgIHNlbGYuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlID0gc2VsZi5vbkl0ZW1zQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNlbGYuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHJlc29sdmUoJycpO1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBzZWxmLl9kZWxldGVJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhbnkgaXRlbSBoYXMgYmVlbiBzZWxlY3RlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGFzdmFsdWUpLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGJvb2xlYW4gZGV0ZXJtaW5pbmcgd2hldGhlciBhbnkgaXRlbSBoYXMgYmVlbiBzZWxlY3RlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlSXRlbXMubGVuZ3RoICE9PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWVJdGVtcy5sZW5ndGggIT09IDAgJiYgIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLl92YWx1ZUl0ZW1zWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgTW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29wZW4pLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBvcGVuZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKCFzZWxmLl9pc0VuYWJsZWQgfHwgc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgaXMgZGlzYWJsZWQgb3IgYWxyZWFkeSBvcGVuZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fZmlsdGVySXRlbXMoKTtcbiAgICAgIHNlbGYuX2lzT3BlbmVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgbW9kYWxPcHRpb25zOiBNb2RhbE9wdGlvbnMgPSB7XG4gICAgICAgIGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlTW9kYWxDb21wb25lbnQsXG4gICAgICAgIGNvbXBvbmVudFByb3BzOiB7IHNlbGVjdENvbXBvbmVudDogc2VsZiB9LFxuICAgICAgICBiYWNrZHJvcERpc21pc3M6IHNlbGYuX3Nob3VsZEJhY2tkcm9wQ2xvc2VcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZWxmLm1vZGFsQ3NzQ2xhc3MpIHtcbiAgICAgICAgbW9kYWxPcHRpb25zLmNzc0NsYXNzID0gc2VsZi5tb2RhbENzc0NsYXNzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5tb2RhbEVudGVyQW5pbWF0aW9uKSB7XG4gICAgICAgIG1vZGFsT3B0aW9ucy5lbnRlckFuaW1hdGlvbiA9IHNlbGYubW9kYWxFbnRlckFuaW1hdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYubW9kYWxMZWF2ZUFuaW1hdGlvbikge1xuICAgICAgICBtb2RhbE9wdGlvbnMubGVhdmVBbmltYXRpb24gPSBzZWxmLm1vZGFsTGVhdmVBbmltYXRpb247XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX21vZGFsQ29udHJvbGxlci5jcmVhdGUobW9kYWxPcHRpb25zKS50aGVuKG1vZGFsID0+IHtcbiAgICAgICAgc2VsZi5fbW9kYWwgPSBtb2RhbDtcbiAgICAgICAgbW9kYWwucHJlc2VudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIFNldCBmb2N1cyBhZnRlciBNb2RhbCBoYXMgb3BlbmVkIHRvIGF2b2lkIGZsaWNrZXJpbmcgb2YgZm9jdXMgaGlnaGxpZ2h0aW5nXG4gICAgICAgICAgLy8gYmVmb3JlIE1vZGFsIG9wZW5pbmcuXG4gICAgICAgICAgc2VsZi5fc2V0SW9uSXRlbUhhc0ZvY3VzKHRydWUpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWwub25XaWxsRGlzbWlzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNlbGYuX3NldElvbkl0ZW1IYXNGb2N1cyhmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsLm9uRGlkRGlzbWlzcygpLnRoZW4oZXZlbnQgPT4ge1xuICAgICAgICAgIHNlbGYuX2lzT3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5faXRlbXNUb0NvbmZpcm0gPSBbXTtcblxuICAgICAgICAgIC8vIENsb3NlZCBieSBjbGlja2luZyBvbiBiYWNrZHJvcCBvdXRzaWRlIG1vZGFsLlxuICAgICAgICAgIGlmIChldmVudC5yb2xlID09PSAnYmFja2Ryb3AnKSB7XG4gICAgICAgICAgICBzZWxmLm9uQ2xvc2UuZW1pdCh7XG4gICAgICAgICAgICAgIGNvbXBvbmVudDogc2VsZlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBNb2RhbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2xvc2UpLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghc2VsZi5faXNFbmFibGVkIHx8ICFzZWxmLl9pc09wZW5lZCkge1xuICAgICAgICByZWplY3QoJ0lvbmljU2VsZWN0YWJsZSBpcyBkaXNhYmxlZCBvciBhbHJlYWR5IGNsb3NlZC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnByb3BhZ2F0ZU9uVG91Y2hlZCgpO1xuICAgICAgc2VsZi5faXNPcGVuZWQgPSBmYWxzZTtcbiAgICAgIHNlbGYuX2l0ZW1Ub0FkZCA9IG51bGw7XG4gICAgICBzZWxmLl9tb2RhbC5kaXNtaXNzKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHNlbGYuX3NldElvbkl0ZW1IYXNGb2N1cyhmYWxzZSk7XG4gICAgICAgIHNlbGYuaGlkZUFkZEl0ZW1UZW1wbGF0ZSgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdmFsdWUuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NsZWFyKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaXNNdWx0aXBsZSA/IFtdIDogbnVsbDtcbiAgICB0aGlzLl9pdGVtc1RvQ29uZmlybSA9IFtdO1xuICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlybXMgc2VsZWN0ZWQgaXRlbXMgYnkgdXBkYXRpbmcgdmFsdWUuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NvbmZpcm0pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBjb25maXJtKCkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNDb25maXJtQnV0dG9uIHx8IHRoaXMuZm9vdGVyVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX3NlbGVjdGVkSXRlbXNbMF0gfHwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgb3IgZGVzZWxlY3RzIGFsbCBvciBzcGVjaWZpYyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jdG9nZ2xlaXRlbXMpLlxuICAgKlxuICAgKiBAcGFyYW0gaXNTZWxlY3QgRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNlbGVjdCBvciBkZXNlbGVjdCBpdGVtcy5cbiAgICogQHBhcmFtIFtpdGVtc10gSXRlbXMgdG8gdG9nZ2xlLiBJZiBpdGVtcyBhcmUgbm90IHNldCBhbGwgaXRlbXMgd2lsbCBiZSB0b2dnbGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICB0b2dnbGVJdGVtcyhpc1NlbGVjdDogYm9vbGVhbiwgaXRlbXM/OiBhbnlbXSkge1xuICAgIGlmIChpc1NlbGVjdCkge1xuICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcz8ubGVuZ3RoO1xuICAgICAgbGV0IGl0ZW1zVG9Ub2dnbGUgPSB0aGlzLl9ncm91cHMucmVkdWNlKChhbGxJdGVtcywgZ3JvdXApID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbEl0ZW1zLmNvbmNhdChncm91cC5pdGVtcyk7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIC8vIERvbid0IGFsbG93IHRvIHNlbGVjdCBhbGwgaXRlbXMgaW4gc2luZ2xlIG1vZGUuXG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSAmJiAhaGFzSXRlbXMpIHtcbiAgICAgICAgaXRlbXNUb1RvZ2dsZSA9IFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBUb2dnbGUgc3BlY2lmaWMgaXRlbXMuXG4gICAgICBpZiAoaGFzSXRlbXMpIHtcbiAgICAgICAgaXRlbXNUb1RvZ2dsZSA9IGl0ZW1zVG9Ub2dnbGUuZmlsdGVyKChpdGVtVG9Ub2dnbGU6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpdGVtcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtVG9Ub2dnbGUpID09PSB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSk7XG4gICAgICAgICAgfSkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGFrZSB0aGUgZmlyc3QgaXRlbSBmb3Igc2luZ2xlIG1vZGUuXG4gICAgICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgaXRlbXNUb1RvZ2dsZS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaXRlbXNUb1RvZ2dsZS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRJdGVtc1RvQ29uZmlybSh0aGlzLl9zZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgTW9kYWwgY29udGVudC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2Nyb2xsdG90b3ApLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzY3JvbGwgaGFzIGJlZW4gY29tcGxldGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzY3JvbGxUb1RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgY29udGVudCBjYW5ub3QgYmUgc2Nyb2xsZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fbW9kYWxDb21wb25lbnQuX2NvbnRlbnQuc2Nyb2xsVG9Ub3AoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgnJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBib3R0b20gb2YgTW9kYWwgY29udGVudC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2Nyb2xsdG9ib3R0b20pLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzY3JvbGwgaGFzIGJlZW4gY29tcGxldGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzY3JvbGxUb0JvdHRvbSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgY29udGVudCBjYW5ub3QgYmUgc2Nyb2xsZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fbW9kYWxDb21wb25lbnQuX2NvbnRlbnQuc2Nyb2xsVG9Cb3R0b20oKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgnJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgc2VhcmNoIHByb2Nlc3MgYnkgc2hvd2luZyBMb2FkaW5nIHNwaW5uZXIuXG4gICAqIFVzZSBpdCB0b2dldGhlciB3aXRoIGBvblNlYXJjaGAgZXZlbnQgdG8gaW5kaWNhdGUgc2VhcmNoIHN0YXJ0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzdGFydHNlYXJjaCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHN0YXJ0U2VhcmNoKCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuZHMgc2VhcmNoIHByb2Nlc3MgYnkgaGlkaW5nIExvYWRpbmcgc3Bpbm5lciBhbmQgcmVmcmVzaGluZyBpdGVtcy5cbiAgICogVXNlIGl0IHRvZ2V0aGVyIHdpdGggYG9uU2VhcmNoYCBldmVudCB0byBpbmRpY2F0ZSBzZWFyY2ggZW5kLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNlbmRzZWFyY2gpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBlbmRTZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICAvLyBXaGVuIGluc2lkZSBJb25pYyBNb2RhbCBhbmQgb25TZWFyY2ggZXZlbnQgaXMgdXNlZCxcbiAgICAvLyBuZ0RvQ2hlY2soKSBkb2Vzbid0IHdvcmsgYXMgX2l0ZW1zRGlmZmVyIGZhaWxzIHRvIGRldGVjdCBjaGFuZ2VzLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL2lzc3Vlcy80NC5cbiAgICAvLyBSZWZyZXNoIGl0ZW1zIG1hbnVhbGx5LlxuICAgIHRoaXMuX3NldEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgIHRoaXMuX2VtaXRPblNlYXJjaFN1Y2Nlc3NPckZhaWwodGhpcy5faGFzRmlsdGVyZWRJdGVtcyk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyBpbmZpbml0ZSBzY3JvbGwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2VuYWJsZWluZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZW5hYmxlSW5maW5pdGVTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGluZmluaXRlIHNjcm9sbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZGlzYWJsZWluZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZGlzYWJsZUluZmluaXRlU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5faGFzSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5faW5maW5pdGVTY3JvbGwuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuZHMgaW5maW5pdGUgc2Nyb2xsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNlbmRpbmZpbml0ZXNjcm9sbCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGVuZEluZmluaXRlU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5faGFzSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5faW5maW5pdGVTY3JvbGwuY29tcGxldGUoKTtcbiAgICB0aGlzLl9zZXRJdGVtcyh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBzZWFyY2ggb2YgaXRlbXMuXG4gICAqICoqTm90ZSoqOiBgY2FuU2VhcmNoYCBoYXMgdG8gYmUgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2VhcmNoKS5cbiAgICpcbiAgICogQHBhcmFtIHRleHQgVGV4dCB0byBzZWFyY2ggaXRlbXMgYnkuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHNlYXJjaCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCB8fCAhdGhpcy5faXNPcGVuZWQgfHwgIXRoaXMuY2FuU2VhcmNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2VhcmNoVGV4dCA9IHRleHQ7XG4gICAgdGhpcy5fc2V0SGFzU2VhcmNoVGV4dCgpO1xuICAgIHRoaXMuX2ZpbHRlckl0ZW1zKCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgTG9hZGluZyBzcGlubmVyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzaG93bG9hZGluZykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHNob3dMb2FkaW5nKCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNTZWFyY2hpbmcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIExvYWRpbmcgc3Bpbm5lci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGlkZWxvYWRpbmcpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBoaWRlTG9hZGluZygpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgYGlvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZWAuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Nob3dhZGRpdGVtdGVtcGxhdGUpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzaG93QWRkSXRlbVRlbXBsYXRlKCkge1xuICAgIHRoaXMuX3RvZ2dsZUFkZEl0ZW1UZW1wbGF0ZSh0cnVlKTtcblxuICAgIC8vIFBvc2l0aW9uIHRoZSB0ZW1wbGF0ZSBvbmx5IHdoZW4gaXQgc2hvdXMgdXAuXG4gICAgdGhpcy5fcG9zaXRpb25BZGRJdGVtVGVtcGxhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBgaW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlYC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGlkZWFkZGl0ZW10ZW1wbGF0ZSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGhpZGVBZGRJdGVtVGVtcGxhdGUoKSB7XG4gICAgLy8gQ2xlYW4gaXRlbSB0byBhZGQgYXMgaXQncyBubyBsb25nZXIgbmVlZGVkIG9uY2UgQWRkIEl0ZW0gTW9kYWwgaGFzIGJlZW4gY2xvc2VkLlxuICAgIHRoaXMuX2l0ZW1Ub0FkZCA9IG51bGw7XG4gICAgdGhpcy5fdG9nZ2xlQWRkSXRlbVRlbXBsYXRlKGZhbHNlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImlvbmljLXNlbGVjdGFibGUtaW5uZXJcIj5cbiAgPGRpdiBjbGFzcz1cImlvbmljLXNlbGVjdGFibGUtdmFsdWVcIj5cbiAgICA8ZGl2ICpuZ0lmPVwidmFsdWVUZW1wbGF0ZSAmJiBfdmFsdWVJdGVtcy5sZW5ndGggJiYgaXNNdWx0aXBsZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ2YWx1ZVRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IHZhbHVlOiBfdmFsdWVJdGVtcyB9XCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImlvbmljLXNlbGVjdGFibGUtdmFsdWUtaXRlbVwiXG4gICAgICAqbmdJZj1cInZhbHVlVGVtcGxhdGUgJiYgX3ZhbHVlSXRlbXMubGVuZ3RoICYmICFpc011bHRpcGxlXCI+XG4gICAgICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInZhbHVlVGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyB2YWx1ZTogX3ZhbHVlSXRlbXNbMF0gfVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHNwYW4gKm5nSWY9XCIhdmFsdWVUZW1wbGF0ZSAmJiBfdmFsdWVJdGVtcy5sZW5ndGhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpb25pYy1zZWxlY3RhYmxlLXZhbHVlLWl0ZW1cIlxuICAgICAgICAqbmdGb3I9XCJsZXQgdmFsdWVJdGVtIG9mIF92YWx1ZUl0ZW1zXCI+XG4gICAgICAgIHt7X2Zvcm1hdFZhbHVlSXRlbSh2YWx1ZUl0ZW0pfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc3Bhbj5cbiAgICA8ZGl2ICpuZ0lmPVwiX2hhc1BsYWNlaG9sZGVyICYmIHBsYWNlaG9sZGVyVGVtcGxhdGVcIlxuICAgICAgY2xhc3M9XCJpb25pYy1zZWxlY3RhYmxlLXZhbHVlLWl0ZW1cIj5cbiAgICAgIDxkaXYgW25nVGVtcGxhdGVPdXRsZXRdPVwicGxhY2Vob2xkZXJUZW1wbGF0ZVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImlvbmljLXNlbGVjdGFibGUtdmFsdWUtaXRlbVwiXG4gICAgICAqbmdJZj1cIl9oYXNQbGFjZWhvbGRlciAmJiAhcGxhY2Vob2xkZXJUZW1wbGF0ZVwiPlxuICAgICAge3twbGFjZWhvbGRlcn19XG4gICAgPC9kaXY+XG4gICAgPCEtLSBGaXggaWNvbiBhbGxpZ25tZW50IHdoZW4gdGhlcmUncyBubyB2YWx1ZSBvciBwbGFjZWhvbGRlci4gLS0+XG4gICAgPHNwYW4gKm5nSWY9XCIhX3ZhbHVlSXRlbXMubGVuZ3RoICYmICFfaGFzUGxhY2Vob2xkZXJcIj4mbmJzcDs8L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiaWNvblRlbXBsYXRlXCIgY2xhc3M9XCJpb25pYy1zZWxlY3RhYmxlLWljb24tdGVtcGxhdGVcIj5cbiAgICAgIDxkaXYgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblRlbXBsYXRlXCI+PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiIWljb25UZW1wbGF0ZVwiIGNsYXNzPVwiaW9uaWMtc2VsZWN0YWJsZS1pY29uXCI+XG4gICAgPGRpdiBjbGFzcz1cImlvbmljLXNlbGVjdGFibGUtaWNvbi1pbm5lclwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPCEtLSBOZWVkIHRvIGJlIHR5cGU9XCJidXR0b25cIiBvdGhlcndpc2UgY2xpY2sgZXZlbnQgdHJpZ2dlcnMgZm9ybSBuZ1N1Ym1pdC4gLS0+XG4gIDxidXR0b24gY2xhc3M9XCJpb25pYy1zZWxlY3RhYmxlLWNvdmVyXCIgW2Rpc2FibGVkXT1cIiFpc0VuYWJsZWRcIlxuICAgIChjbGljayk9XCJfY2xpY2soKVwiIHR5cGU9XCJidXR0b25cIj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==