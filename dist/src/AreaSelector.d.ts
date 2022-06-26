interface IClientPosition {
    clientX: number;
    clientY: number;
}
interface IAreaInfo {
    leftTop: IClientPosition;
    rightBottom: IClientPosition;
}
declare class AreaSelector {
    static instance: AreaSelector | null;
    startPosition: IClientPosition;
    isSelecting: boolean;
    selectedAreaInfo: IAreaInfo;
    promiseResolve: (area: IAreaInfo) => void;
    static getInstance: () => AreaSelector;
    init: () => Promise<IAreaInfo>;
    getPoint(first: IClientPosition, second: IClientPosition): {
        leftTop: {
            clientX: number;
            clientY: number;
        };
        rightBottom: {
            clientX: number;
            clientY: number;
        };
    };
    getOrCreateElementById(id: string): HTMLDivElement;
    mousedownEvent: any;
    mousemoveEvent: any;
    mouseupEvent: any;
    stop(): void;
}
export default AreaSelector;
