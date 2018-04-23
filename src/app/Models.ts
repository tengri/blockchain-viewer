
export interface IBlockListItem {
    hash: string;
    time: number;
    height: number;
}


export interface IBlockDetails extends IBlockListItem {
    txIndexes: number[];
    n_tx: number;
    out: IBlockOut[];
    size: number;
    fee: number;
    tx: ITXListItem[];
}

interface ITXParticipant {
    addr: string;
    value: number;
}

interface IBlockOut extends ITXParticipant {

}

interface ITXOut extends ITXParticipant {
}

export interface ITXInput extends ITXParticipant {
}

export interface ITXListItem {
    out: ITXOut[];
    hash: string;
}


export interface ITXDetails extends ITXListItem {
    inputs: ITXInput[];
    size: number;
    time: number;
}

export interface ITXDetails extends ITXListItem {
    block_height: number;
    weight: number;
}

/**
 * Общий формат статуса процесса.
 *
 * 0 (IDLE) - Инициализационное состояние, ничего не делается.
 * 1 (RUNNING) - Идет процесс...
 * 2 (SUCCESS) - Успешное завершение процесса.
 * 3 (FAIL) - Процесс завершен с ошибкой.
 * 4 (CANCELED) - Процесс отменен.
 */
export enum EProcessStatus {
    IDLE,
    RUNNING,
    SUCCESS,
    FAILURE,
    CANCELED
}

/**
 * Интерфейс-generic, описывающий общий формат ошибки, принятый в проекте.
 *
 * Параметр интерфейса - TErrorCode - должен представлять из себя enum с перечнем типов ошибок,
 * либо string (для произвольного набора ошибок).
 *
 * sbrf.ErrorResult
 */
export interface IErrorsResult {
    /** название ошибки. */
    name: string;
    /** сообщение об ошибке. */
    message?: string;
    /** HTTP код ошибки. */
    statusCode: number;
}

/**
 * Интерфейс контейнера блока данных, подгружаемого асинхронно.
 *
 * @prop {EProcessStatus} status Статус процесса загрузки данных.
 * @prop {T} [data] Загруженные данные.
 * @prop {IErrorsResult<string>} [errors] Ошибка или ошибки.
 */
export interface IAsyncData<T> {
    status: EProcessStatus;
    data?: T;
    errors?: IErrorsResult;
}

export interface IChartPoint {
    x: number;
    y: number;
}

export interface IChart {
    name: string;
    values: IChartPoint[];
}

export interface ISearchResult {
    block?: IBlockDetails;
    tx?: ITXDetails;
}

export type IBlockListBranch = IAsyncData<IBlockListItem[]>;
export type IBlockDetailsBranch = IAsyncData<IBlockDetails>;
export type ITXDetailsBranch = IAsyncData<ITXDetails>;

export type ILatestBlockListMainBranch = IAsyncData<IBlockListItem[]>;
export type ILatestTXListMainBranch = IAsyncData<ITXListItem[]>;
export type IChartBranch = IAsyncData<IChart>;
export type ISearchBranch = IAsyncData<ISearchResult>;

export interface IMainBranch {
    latestBlockList: ILatestBlockListMainBranch;
    latestTXList: ILatestTXListMainBranch;
    chart: IChartBranch;
    search: ISearchBranch;
}

export interface IAppState {
    blockList: IBlockListBranch;
    blockDetails?: IBlockDetailsBranch;
    txDetails?: ITXDetailsBranch;
    main: IMainBranch;
}