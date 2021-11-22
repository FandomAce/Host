const { Connect4 } = require('discord-gamecord')


const {
    MessageEmbed
  } = require(`discord.js`);

  module.exports = {
    name: `connect4`,
    aliases: [`connect`],
    category: `🎮 Fun`,
    description: `Play connect4 with your friends`,
    usage: `connect4 <@user>`,
    memberpermissions: [],
    type: "bot",
    run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
      if (!args[0])
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor).setFooter(es.footertext, es.footericon)
          .setTitle("❌Mention an opponoent ")
        ]
      });
        new Connect4({
            message: message,
            slash_command: false,
            opponent: message.mentions.users.first(),
            embed: {
              title: 'Connect 4',
              color: '#5865F2',
            },
            emojis: {
              player1: '🔵',
              player2: '🟡'
            },
            waitMessage: 'Waiting for the opponent...',
            turnMessage: '{emoji} | Its turn of player **{player}**.',
            winMessage: '{emoji} | **{winner}** won the game!',
            gameEndMessage: 'The game went unfinished :(',
            drawMessage: 'It was a draw!',
            othersMessage: 'You are not allowed to use buttons for this message!',
            askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Connect 4!',
            cancelMessage: 'Looks like they refused to have a game of Connect4. \:(',
            timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
          }).startGame()
  }};
