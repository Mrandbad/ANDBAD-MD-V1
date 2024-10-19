const axios = require("axios");
const {
  king
} = require("../framework/zokou");
const fs = require('fs-extra');
const child_process = require("child_process");
const {
  unlink
} = require('fs').promises;
const sleep = _0x121748 => {
  return new Promise(_0x1b6494 => {
    setTimeout(_0x1b6494, _0x121748);
  });
};
const GIFBufferToVideoBuffer = async _0x4bfe41 => {
  const _0x15e7b2 = '' + Math.random().toString(0x24);
  await fs.writeFileSync('./' + _0x15e7b2 + ".gif", _0x4bfe41);
  child_process.exec("ffmpeg -i ./" + _0x15e7b2 + ".gif -movflags faststart -pix_fmt yuv420p -vf \"scale=trunc(iw/2)*2:trunc(ih/2)*2\" ./" + _0x15e7b2 + '.mp4');
  await sleep(0xfa0);
  var _0x2119ac = await fs.readFileSync('./' + _0x15e7b2 + '.mp4');
  Promise.all([unlink('./' + _0x15e7b2 + ".mp4"), unlink('./' + _0x15e7b2 + '.gif')]);
  return _0x2119ac;
};
const generateReactionCommand = (_0x26a037, _0x1e9ba0) => {
  zokou({
    'nomCom': _0x26a037,
    'categorie': "Reaction",
    'reaction': _0x1e9ba0
  }, async (_0x9cf2f4, _0xfa0ad4, _0x4c7d5a) => {
    const {
      auteurMessage: _0x6586d4,
      auteurMsgRepondu: _0x2c23b4,
      repondre: _0x3b810c,
      ms: _0x514cf0,
      msgRepondu: _0x5b7454
    } = _0x4c7d5a;
    const _0x377f7d = "https://api.waifu.pics/sfw/" + _0x26a037;
    try {
      const _0x3b0791 = await axios.get(_0x377f7d);
      const _0x3b9d50 = _0x3b0791.data.url;
      const _0x2d69af = await axios.get(_0x3b9d50, {
        'responseType': "arraybuffer"
      });
      const _0x55e228 = await _0x2d69af.data;
      const _0xa24899 = await GIFBufferToVideoBuffer(_0x55e228);
      if (_0x5b7454) {
        var _0x4a5bd4 = " @" + _0x6586d4.split('@')[0x0] + "  " + _0x26a037 + " @" + _0x2c23b4.split('@')[0x0];
        _0xfa0ad4.sendMessage(_0x9cf2f4, {
          'video': _0xa24899,
          'gifPlayback': true,
          'caption': _0x4a5bd4,
          'mentions': [_0x6586d4, _0x2c23b4]
        }, {
          'quoted': _0x514cf0
        });
      } else {
        const _0xfa8962 = {
          'video': _0xa24899,
          'gifPlayback': true,
          'caption': '@' + _0x6586d4.split('@')[0x0] + " " + _0x26a037 + " everyone",
          'mentions': [_0x6586d4]
        };
        _0xfa0ad4.sendMessage(_0x9cf2f4, _0xfa8962, {
          'quoted': _0x514cf0
        });
      }
    } catch (_0x957e11) {
      _0x3b810c("Error occurred while retrieving data:" + _0x957e11);
      console.log(_0x957e11);
    }
  });
};
generateReactionCommand('bully', '👊');
generateReactionCommand("cuddle", '🤗');
generateReactionCommand("cry", '😢');
generateReactionCommand("hug", '😊');
generateReactionCommand("awoo", '🐺');
generateReactionCommand("kiss", '😘');
generateReactionCommand('lick', '👅');
generateReactionCommand("pat", '👋');
generateReactionCommand('smug', '😏');
generateReactionCommand("bonk", '🔨');
generateReactionCommand('yeet', '🚀');
generateReactionCommand('blush', '😊');
generateReactionCommand("smile", '😄');
generateReactionCommand("wave", '👋');
generateReactionCommand("highfive");
generateReactionCommand("handhold");
generateReactionCommand('nom', '👅');
generateReactionCommand("bite", '🦷');
generateReactionCommand('glomp', '🤗');
generateReactionCommand("slap", '👋');
generateReactionCommand('kill', '💀');
generateReactionCommand("kick", '🦵');
generateReactionCommand('happy', '😄');
generateReactionCommand('wink', '😉');
generateReactionCommand("poke", '👉');
generateReactionCommand("dance", '💃');
generateReactionCommand("cringe", '😬');