import { useEthers } from "@usedapp/core";
import Landing from "./Landing";
import Home from "./Home";


export default function Content() {

  const { account } = useEthers();

  return account ? (
    <Home />
    ) : (
    <Landing />
  )
}