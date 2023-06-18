import { useRows } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import AvatarUploader from './AvatarUploader';

export const App = () => {
  const {
    systemCalls: { update },
    network: { storeCache },
  } = useMUD();

  const avatars = useRows(storeCache, {table: "Avatar"});
  console.log(avatars)

  return (
    <>
      <div>
        <h1>Upload Autonomous Worlds Avatar</h1>
        <AvatarUploader />
      {avatars.map(avatar=><img src={avatar.value.value} alt={avatar.key.owner} title={avatar.key.owner} width="200" height="200" />)}
      </div>
    </>
  );
};
