import * as fs from "fs";
import * as path from "path";
import { REST, Routes } from "discord.js";

const TOKEN = process.env.DISCORD_TOKEN as string;
const CLIENT_ID = process.env.CLIENT_ID as string;
const commands: JSON[] = [];

const folderPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(folderPath);
for (const folder of commandFolders) {
  const commandsPath = path.join(folderPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".ts"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = await import(filePath);
    if (command.default.data && command.default.execute) {
      commands.push(command.default.data.toJSON());
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

const register = async (token: string, clientId: string, command: JSON[]) => {
  try {
    const rest = new REST().setToken(token);
    console.log(
      `Started refreshing ${command.length} application (/) commands.`
    );
    const data = (await rest.put(Routes.applicationCommands(clientId), {
      body: command,
    })) as JSON[];

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
};

register(TOKEN, CLIENT_ID, commands);

