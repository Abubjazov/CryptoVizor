import { useContext } from "react";

import { RootContext } from "./RootStore";

const useStores = () => useContext(RootContext);

export default useStores;
