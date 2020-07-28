import React from "react";
import ProfileCode from "./ProfileCode";
import {YOUR_PROFILE_CODE} from "../YOUR_CODE"
import "./index.css"

export default class ProfileCodeWrapper extends React.Component{

  render() {
    return(
      <ProfileCode personaProfileCode={YOUR_PROFILE_CODE()} />
    )
 }
}