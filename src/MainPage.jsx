import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import History from "./History";

export default function MainPage() {
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  }

  return <main>
    <article id="input">
        <select name="" id="">
            <option value="tcp">TCP</option>
            <option value="udp">UDP</option>
        </select>
    </article>
  </main>
}