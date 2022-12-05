import { ReactNode, ReactPortal } from "../../../React-9c8468d8-8a7220fd";
import { ReactRobloxRoot } from "./ReactRobloxRoot";
import { Shared } from "../../../Shared-9c8468d8-8a7220fd/src";

export type Container = Instance;

declare namespace ReactRoblox {
    export function createPortal(children: ReactNode[],
                                 container: Container,
                                 key?: string): ReactPortal;

    export const createRoot: ReactRobloxRoot["createRoot"];
    export const createBlockingRoot: ReactRobloxRoot["createBlockingRoot"];
    export const createLegacyRoot: ReactRobloxRoot["createLegacyRoot"];
    export const Event: Shared.Event;
    export const Change: Shared.Change;
    export const Tag: symbol;
}