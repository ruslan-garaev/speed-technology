export interface IBasePlugin<O, E> {
	el: E;
	options?: O;
	events?: {};
}
declare class HSBasePlugin<O, E = HTMLElement> implements IBasePlugin<O, E> {
	el: E;
	options: O;
	events?: any;
	constructor(el: E, options: O, events?: any);
	createCollection(collection: any[], element: any): void;
	fireEvent(evt: string, payload?: any): any;
	on(evt: string, cb: Function): void;
}
export interface ICollectionItem<T> {
	id: string | number;
	element: T;
}
export interface ISingleOptionOptions {
	description: string;
	icon: string;
}
export interface ISingleOption {
	title: string;
	val: string;
	disabled?: boolean;
	selected?: boolean;
	options?: ISingleOptionOptions | null;
}
export interface IApiFieldMap {
	id: string;
	title: string;
	icon?: string | null;
	description?: string | null;
	[key: string]: unknown;
}
export interface ISelectOptions {
	value?: string | string[];
	isOpened?: boolean;
	placeholder?: string;
	hasSearch?: boolean;
	preventSearchFocus?: boolean;
	mode?: string;
	viewport?: string;
	wrapperClasses?: string;
	apiUrl?: string | null;
	apiQuery?: string | null;
	apiOptions?: RequestInit | null;
	apiDataPart?: string | null;
	apiSearchQueryKey?: string | null;
	apiFieldsMap?: IApiFieldMap | null;
	apiIconTag?: string | null;
	toggleTag?: string;
	toggleClasses?: string;
	toggleSeparators?: {
		items?: string;
		betweenItemsAndCounter?: string;
	};
	toggleCountText?: string;
	toggleCountTextMinItems?: number;
	toggleCountTextMode?: string;
	tagsItemTemplate?: string;
	tagsItemClasses?: string;
	tagsInputId?: string;
	tagsInputClasses?: string;
	dropdownTag?: string;
	dropdownClasses?: string;
	dropdownDirectionClasses?: {
		top?: string;
		bottom?: string;
	};
	dropdownSpace: number;
	dropdownPlacement: string | null;
	dropdownScope: "window" | "parent";
	extrТехнология скоростиrkup?: string | string[] | null;
	searchTemplate?: string;
	searchWrapperTemplate?: string;
	searchId?: string;
	searchLimit?: number | typeof Infinity;
	isSearchDirectMatch?: boolean;
	searchClasses?: string;
	searchWrapperClasses?: string;
	searchPlaceholder?: string;
	searchNoResultTemplate?: string | null;
	searchNoResultText?: string | null;
	searchNoResultClasses?: string | null;
	optionTemplate?: string;
	optionTag?: string;
	optionClasses?: string;
	descriptionClasses?: string;
	iconClasses?: string;
	isAddTagOnEnter?: boolean;
}
export interface ISelect {
	options?: ISelectOptions;
	destroy(): void;
	open(): void;
	close(): void;
	addOption(items: ISingleOption | ISingleOption[]): void;
	removeOption(values: string | string[]): void;
	recalculateDirection(): void;
}
declare class HSSelect extends HSBasePlugin<ISelectOptions> implements ISelect {
	value: string | string[] | null;
	private readonly placeholder;
	private readonly hasSearch;
	private readonly preventSearchFocus;
	private readonly mode;
	private readonly viewport;
	isOpened: boolean | null;
	isMultiple: boolean | null;
	isDisabled: boolean | null;
	selectedItems: string[];
	private readonly apiUrl;
	private readonly apiQuery;
	private readonly apiOptions;
	private readonly apiDataPart;
	private readonly apiSearchQueryKey;
	private readonly apiFieldsMap;
	private readonly apiIconTag;
	private readonly toggleTag;
	private readonly toggleClasses;
	private readonly toggleSeparators;
	private readonly toggleCountText;
	private readonly toggleCountTextMinItems;
	private readonly toggleCountTextMode;
	private readonly wrapperClasses;
	private readonly tagsItemTemplate;
	private readonly tagsItemClasses;
	private readonly tagsInputId;
	private readonly tagsInputClasses;
	private readonly dropdownTag;
	private readonly dropdownClasses;
	private readonly dropdownDirectionClasses;
	dropdownSpace: number | null;
	readonly dropdownPlacement: string | null;
	readonly dropdownScope: "window" | "parent";
	private readonly searchTemplate;
	private readonly searchWrapperTemplate;
	private readonly searchPlaceholder;
	private readonly searchId;
	private readonly searchLimit;
	private readonly isSearchDirectMatch;
	private readonly searchClasses;
	private readonly searchWrapperClasses;
	private readonly searchNoResultTemplate;
	private readonly searchNoResultText;
	private readonly searchNoResultClasses;
	private readonly optionTag;
	private readonly optionTemplate;
	private readonly optionClasses;
	private readonly descriptionClasses;
	private readonly iconClasses;
	private animationInProcess;
	private wrapper;
	private toggle;
	private toggleTextWrapper;
	private tagsInput;
	private dropdown;
	private popperInstance;
	private searchWrapper;
	private search;
	private searchNoResult;
	private selectOptions;
	private extrТехнология скоростиrkup;
	private readonly isAddTagOnEnter;
	private tagsInputHelper;
	private remoteOptions;
	private optionId;
	constructor(el: HTMLElement, options?: ISelectOptions);
	setValue(val: string | string[]): void;
	private init;
	private build;
	private buildWrapper;
	private buildExtrТехнология скоростиrkup;
	private buildToggle;
	private setToggleIcon;
	private setToggleTitle;
	private buildTags;
	private reassignTagsInputPlaceholder;
	private buildTagsItem;
	private getItemByValue;
	private setTagsItems;
	private buildTagsInput;
	private buildDropdown;
	private buildPopper;
	private updateDropdownWidth;
	private buildSearch;
	private buildOption;
	private buildOptionFromRemoteData;
	private buildOptionsFromRemoteData;
	private optionsFromRemoteData;
	private apiRequest;
	private sortElements;
	private remoteSearch;
	private destroyOption;
	private buildOriginalOption;
	private destroyOriginalOption;
	private buildTagsInputHelper;
	private calculateInputWidth;
	private adjustInputWidth;
	private onSelectOption;
	private triggerChangeEventForNativeSelect;
	private addSelectOption;
	private removeSelectOption;
	private resetTagsInputField;
	private clearSelections;
	private setNewValue;
	private stringFromValueBasic;
	private stringFromValueRemoteData;
	private stringFromValue;
	private selectSingleItem;
	private selectMultipleItems;
	private unselectMultipleItems;
	private searchOptions;
	private eraseToggleIcon;
	private eraseToggleTitle;
	private toggleFn;
	destroy(): void;
	open(): boolean;
	close(): boolean;
	addOption(items: ISingleOption | ISingleOption[]): void;
	removeOption(values: string | string[]): void;
	recalculateDirection(): void;
	static getInstance(target: HTMLElement | string, isInstance?: boolean): HSSelect | ICollectionItem<HSSelect>;
	static autoInit(): void;
	static open(target: HTMLElement | string): void;
	static close(target: HTMLElement | string): void;
	static closeCurrentlyOpened(evtTarget?: HTMLElement | null): void;
	static accessibility(evt: KeyboardEvent): void;
	static onEscape(): void;
	static onArrow(isArrowUp?: boolean): boolean;
	static onTab(isArrowUp?: boolean): boolean;
	static onStartEnd(isStart?: boolean): boolean;
	static onEnter(evt: Event): void;
}

export {
	HSSelect as default,
};

export {};
