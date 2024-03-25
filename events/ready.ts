import { Events } from "discord.js";
import type { ExtendClient } from "..";

export default {
  name: Events.ClientReady,
  once: true,
  execute(client: ExtendClient) {
    console.log(`Ready! Logged in as ${client.user?.tag}`);
  },
};
