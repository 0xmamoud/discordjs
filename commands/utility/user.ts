import {
  SlashCommandBuilder,
  CommandInteraction,
  GuildMember,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("prodivde information about user"),
  async execute(interaction: CommandInteraction) {
    if (interaction.member instanceof GuildMember) {
      await interaction.reply(
        `${interaction.user.username}, he joinded on ${interaction.member?.joinedAt}.`
      );
    } else {
      await interaction.reply(`Server information not available.`);
    }
  },
};
