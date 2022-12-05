import Tag from "./PropMarkers/Tag";
import Event from "./PropMarkers/Event";
import Change from "./PropMarkers/Change";
import { checkPropTypes } from "./checkPropTypes";

declare namespace Shared {
    export {
        Tag,
        Event,
        Change,
        checkPropTypes,
    };
}