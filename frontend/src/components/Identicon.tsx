import Davatar from '@davatar/react';
import { useEthers } from "@usedapp/core";

export default function Identicon() {
  const { account } = useEthers();


  return account ? (
    <Davatar
      size={16}
      address={account}
      generatedAvatarType='jazzicon'
    />
  ) : (<></>);

}