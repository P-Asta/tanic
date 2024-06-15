import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import History from "./History";

export default function SideBar() {
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  }

  return <aside>
    <h1>
        <img src="history.svg" alt="" />
        History
    </h1>
    <div class="histories">
      <History type="UDP" addr="hs.5-23.dev:5050"/>
      <History type="TCP" addr="hs.5-23.dev:5050"/>
      <History type="UDP" addr="hs.5-23.dev:5050"/>
      <History type="UDP" addr="hs.5-23.dev:5050"/>
      <History type="UDP" addr="hs.5-23.dev:5050"/>
    </div>
  </aside>
}