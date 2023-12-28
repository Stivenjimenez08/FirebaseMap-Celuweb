
import { EditProfile } from "../../Components/profile/EditProfile";
import { LayoutHome } from "../LayoutHome";
import React from "react";
import "../../style.css";

export const Profile = () => {

  return (
    <LayoutHome title={"Editar perfil"}>
      <EditProfile className='animate__animated animate__fadeIn animate__faster'/>
    </LayoutHome>
  );
};
