interface NodeRequireFunction {
    (id: string): any;
}

interface NodeRequire extends NodeRequireFunction {
    resolve(id:string): string;
    cache: any;
    extensions: any;
    main: any;
}

declare var require: NodeRequire;

interface ISearchItem {
    key: number,
    title: string,
    author: string,
    pubDate: Date
}

interface IComponenta {
    name: string;
    items: Array<string>;
}

interface IPlacedItem {
    id?: string;
    title: string;
}

interface IPlacedItemDropTarget {
    targetId: string;
}

interface IPlacedTargetPayload {
    targetId: string;
}

interface IPlacedTargetITemPayload extends IPlacedTargetPayload {
    item: ISearchItem;
}

interface IExchangeItemsPayload {
    sourceId: string;
    targetId: string;
}

interface IComponentaPayload{
    index: number;
}

interface ISearchResult {
    onSearchItemSelected: (val: ISearchItem) => void;
}

interface IStoreState {
    channel: Immutable.Map<string, any>;
}