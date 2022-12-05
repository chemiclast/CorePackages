import { RootType } from "../../ReactRoblox-9c8468d8-8a7220fd/src/client/ReactRobloxRoot";

export interface Element {
    component?: defined;
    props: defined;
    source?: string;
}

export type RoactHandle = {
    root: RootType,
    key: string | number,
    parent: Instance,
}

export interface RoactTree {
    mount(element: Element, parent?: Instance, key?: string): RoactHandle;
    update(handle: RoactHandle, element: Element): RoactHandle;
    unmount(handle: RoactHandle): void;
}