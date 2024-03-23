import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("prodivde information about user"),
  async execute(interaction: any) {
    await interaction.reply(
      `${interaction.user.username}, he joinded on ${interaction.member.joignedAt}.`
    );
  },
};
