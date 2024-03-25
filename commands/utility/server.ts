import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("provide information about the current server"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply(
      `this server is ${interaction.guild?.name} and has ${interaction.guild?.memberCount} members.`
    );
  },
};
