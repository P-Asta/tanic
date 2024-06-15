import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function History({type, addr}) {
  return <div class="history">
    <div id="info">
      <p id={type}>{type}</p>
      {addr}
    </div>
    <div></div>

    <div id="gradient"></div>
  </div>
}