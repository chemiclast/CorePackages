import { RootType } from "../../ReactRoblox-9c8468d8-8a7220fd/src/client/ReactRobloxRoot";
import { ReactElement } from "../../React-9c8468d8-8a7220fd";

export type RoactHandle = {
    root: RootType,
    key: string | number,
    parent: Instance,
}

export interface RoactTree {
    mount(element: ReactElement, parent?: Instance, key?: string): RoactHandle;
    update(handle: RoactHandle, element: ReactElement): RoactHandle;
    unmount(handle: RoactHandle): void;
}