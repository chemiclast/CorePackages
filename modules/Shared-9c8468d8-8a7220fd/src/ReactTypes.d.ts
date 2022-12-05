import { PropTypes } from "./checkPropTypes";
import ReactNodeLike = PropTypes.ReactNodeLike;

export type ReactPortal = {
    ["$$typeof"]: number,
    key?: string,
    containerInfo: any,
    children: undefined | boolean | ReactNodeLike,
    implementation: any,
}

export type ReactBinding<T> = {
    getValue(self: ReactBinding<T>): T,
    map<U>(self: ReactBinding<T>, callback: (arg0: T) => U): unknown,
    _source?: string,
}

export type ReactBindingUpdater<T> = (arg0: T) => void;

export interface MutableSource<T> {
}

export function MutableSourceGetVersionFn(
  _source: defined
): defined

export function MutableSourceGetSnapshotFn<Source, Snapshot>(source: Source): Snapshot

export function MutableSourceSubscribeFn<Source, Snapshot>(
  source: Source,
  callback: (snapshot: Snapshot) => void
): () => void