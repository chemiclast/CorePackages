import { Container } from "./ReactRoblox";
import { ReactNode } from "../../../React-9c8468d8-8a7220fd";
import { MutableSource } from "../../../Shared-9c8468d8-8a7220fd/src/ReactTypes";

type key = string | number | symbol;

export type RootType = {
    render(self: RootType, children: ReactNode[]): void,
    unmount(self: RootType): void,
    _internalRoot: unknown,
    [key: key]: unknown,
};

export type RootOptions = {
    hydrate?: boolean,
    hydrationOptions?: {
        onHydrated(suspenseNode: any): void,
        onDeleted(suspenseNode: any): void,
        mutableSources?: Array<MutableSource<any>>,
        [key: key]: unknown,
    },
    [key: key]: unknown,
};

export interface ReactRobloxRoot {
    createRoot(
      container: Container,
      options?: RootOptions
    ): RootType,

    createBlockingRoot(
      container: Container,
      options?: RootOptions
    ): RootType,

    createLegacyRoot(
      container: Container,
      options?: RootOptions
    ): RootType

    isValidContainer(container: unknown): boolean
}