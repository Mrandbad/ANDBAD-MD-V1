const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "play",
  'categorie': "Search",
  'reaction': '💿'
}, async (_0x208fbe, _0x5e783c, _0x6c2a22) => {
  const {
    ms: _0x37be60,
    repondre: _0x3460c8,
    arg: _0x11ce6f
  } = _0x6c2a22;
  if (!_0x11ce6f[0x0]) {
    _0x3460c8("Please insert a song name.");
    return;
  }
  try {
    let _0x51244b = _0x11ce6f.join(" ");
    let _0x5a2825 = [];
    const _0x41e6c5 = await yts(_0x51244b);
    _0x5a2825 = _0x41e6c5.videos;
    if (_0x5a2825 && _0x5a2825.length > 0x0) {
      const _0x50cb1f = _0x5a2825[0x0].url;
      const _0x4727f9 = await fetch("https://api.giftedtechnexus.co.ke/api/download/ytmp3?url=" + encodeURIComponent(_0x50cb1f) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0x58c224 = await _0x4727f9.json();
      if (_0x58c224.status === 0xc8 && _0x58c224.success) {
        const _0x484b86 = _0x58c224.result.download_url;
        const _0x190f0d = {
          'image': {
            'url': _0x5a2825[0x0].thumbnail
          },
          'caption': "*ANDBAD-MD SONG DOWNLOADING*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x58c224.result.title + "\n│⿻ *Quality:* " + _0x58c224.result.type + "\n│⿻ *Duration:* " + _0x5a2825[0x0].timestamp + "\n│⿻ *Viewers:* " + _0x5a2825[0x0].views + "\n│⿻ *Uploaded:* " + _0x5a2825[0x0].ago + "\n│⿻ *Artist:* " + _0x5a2825[0x0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x50cb1f + "\n\n╭────────────────◆\n│ *_Powered by ANDBAD MD._*\n╰─────────────────◆"
        };
        await _0x5e783c.sendMessage(_0x208fbe, _0x190f0d, {
          'quoted': _0x37be60
        });
        await _0x5e783c.sendMessage(_0x208fbe, {
          'audio': {
            'url': _0x484b86
          },
          'mimetype': 'audio/mp4'
        }, {
          'quoted': _0x37be60
        });
        _0x3460c8("Download Success...");
      } else {
        _0x3460c8("Failed to download audio. Please try again later.");
      }
    } else {
      _0x3460c8("No audio found.");
    }
  } catch (_0x555cd0) {
    console.error("Error from API:", _0x555cd0);
    _0x3460c8("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Search",
  'reaction': '💿'
}, async (_0x491dd9, _0x10a442, _0x5ceb5f) => {
  const {
    ms: _0x44ac2e,
    repondre: _0x11d0e0,
    arg: _0x12c8f5
  } = _0x5ceb5f;
  if (!_0x12c8f5[0x0]) {
    _0x11d0e0("Please insert a song name.");
    return;
  }
  try {
    let _0x41f177 = _0x12c8f5.join(" ");
    let _0x3f4e2c = [];
    const _0x1961ce = await yts(_0x41f177);
    _0x3f4e2c = _0x1961ce.videos;
    if (_0x3f4e2c && _0x3f4e2c.length > 0x0) {
      const _0x13523a = _0x3f4e2c[0x0].url;
      const _0xfef402 = await fetch("https://api.giftedtechnexus.co.ke/api/download/ytmp3?url=" + encodeURIComponent(_0x13523a) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0x417aee = await _0xfef402.json();
      if (_0x417aee.status === 0xc8 && _0x417aee.success) {
        const _0x4c3690 = _0x417aee.result.download_url;
        const _0x28f427 = {
          'image': {
            'url': _0x3f4e2c[0x0].thumbnail
          },
          'caption': "*ANDBAD-MD SONG DOWNLOADING*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x417aee.result.title + "\n│⿻ *Quality:* " + _0x417aee.result.type + "\n│⿻ *Duration:* " + _0x3f4e2c[0x0].timestamp + "\n│⿻ *Viewers:* " + _0x3f4e2c[0x0].views + "\n│⿻ *Uploaded:* " + _0x3f4e2c[0x0].ago + "\n│⿻ *Artist:* " + _0x3f4e2c[0x0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x13523a + "\n\n╭────────────────◆\n│ *_Powered by ANDBAD-MD._*\n╰─────────────────◆"
        };
        await _0x10a442.sendMessage(_0x491dd9, _0x28f427, {
          'quoted': _0x44ac2e
        });
        await _0x10a442.sendMessage(_0x491dd9, {
          'document': {
            'url': _0x4c3690
          },
          'mimetype': 'audio/mp4'
        }, {
          'quoted': _0x44ac2e
        });
        _0x11d0e0("Download Success...");
      } else {
        _0x11d0e0("Failed to download audio. Please try again later.");
      }
    } else {
      _0x11d0e0("No audio found.");
    }
  } catch (_0x4d41a0) {
    console.error("Error from API:", _0x4d41a0);
    _0x11d0e0("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x1dd452, _0x42b08b, _0x888060) => {
  const {
    ms: _0x3567c8,
    repondre: _0x5851cf,
    arg: _0x37a16d
  } = _0x888060;
  if (!_0x37a16d[0x0]) {
    _0x5851cf("Please insert a song/video name.");
    return;
  }
  try {
    let _0xf42932 = _0x37a16d.join(" ");
    let _0x14ddfc = [];
    const _0x152718 = await yts(_0xf42932);
    _0x14ddfc = _0x152718.videos;
    if (_0x14ddfc && _0x14ddfc.length > 0x0) {
      const _0x1b41fa = _0x14ddfc[0x0].url;
      const _0x5734dd = await fetch("https://api.giftedtechnexus.co.ke/api/download/ytmp4?url=" + encodeURIComponent(_0x1b41fa) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0x52a93e = await _0x5734dd.json();
      if (_0x52a93e.status === 0xc8 && _0x52a93e.success) {
        const _0x514b03 = _0x52a93e.result.download_url;
        const _0x3ac450 = {
          'image': {
            'url': _0x14ddfc[0x0].thumbnail
          },
          'caption': "*ANDBAD-MD VIDEO DOWNLOAD*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x52a93e.result.title + "\n│⿻ *Quality:* " + _0x52a93e.result.type + "\n│⿻ *Duration:* " + _0x14ddfc[0x0].timestamp + "\n│⿻ *Viewers:* " + _0x14ddfc[0x0].views + "\n│⿻ *Uploaded:* " + _0x14ddfc[0x0].ago + "\n│⿻ *Artist:* " + _0x14ddfc[0x0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x1b41fa + "\n\n╭────────────────◆\n│ *_Powered by ANDBAD-MD._*\n╰─────────────────◆"
        };
        await _0x42b08b.sendMessage(_0x1dd452, _0x3ac450, {
          'quoted': _0x3567c8
        });
        await _0x42b08b.sendMessage(_0x1dd452, {
          'video': {
            'url': _0x514b03
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x3567c8
        });
        _0x5851cf("Download Success...");
      } else {
        _0x5851cf("Failed to download the video. Please try again later.");
      }
    } else {
      _0x5851cf("No videos found.");
    }
  } catch (_0x51a66f) {
    console.error("Error from API:", _0x51a66f);
    _0x5851cf("An error occurred while searching or downloading the video.");
  }
});
zokou({
  'nomCom': "videodoc",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x801348, _0x304721, _0x3ceb00) => {
  const {
    ms: _0x478cdd,
    repondre: _0x44cc12,
    arg: _0x35f838
  } = _0x3ceb00;
  if (!_0x35f838[0x0]) {
    _0x44cc12("Please insert a song/video name.");
    return;
  }
  try {
    let _0x1182fb = _0x35f838.join(" ");
    let _0x5914b4 = [];
    const _0x1f4904 = await yts(_0x1182fb);
    _0x5914b4 = _0x1f4904.videos;
    if (_0x5914b4 && _0x5914b4.length > 0x0) {
      const _0x5225ee = _0x5914b4[0x0].url;
      const _0x1ee242 = await fetch("https://api.giftedtechnexus.co.ke/api/download/ytmp4?url=" + encodeURIComponent(_0x5225ee) + '&apikey=' + "gifted_api_kt5gd63gjd8");
      const _0x2a2489 = await _0x1ee242.json();
      if (_0x2a2489.status === 0xc8 && _0x2a2489.success) {
        const _0x540a3e = _0x2a2489.result.download_url;
        const _0x21fe97 = {
          'image': {
            'url': _0x5914b4[0x0].thumbnail
          },
          'caption': "*ANDBAD MD VIDEO DOWNLOAD*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x2a2489.result.title + "\n│⿻ *Quality:* " + _0x2a2489.result.type + "\n│⿻ *Duration:* " + _0x5914b4[0x0].timestamp + "\n│⿻ *Viewers:* " + _0x5914b4[0x0].views + "\n│⿻ *Uploaded:* " + _0x5914b4[0x0].ago + "\n│⿻ *Artist:* " + _0x5914b4[0x0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x5225ee + "\n\n╭────────────────◆\n│ *_Powered by ANDBAD MD._*\n╰─────────────────◆"
        };
        await _0x304721.sendMessage(_0x801348, _0x21fe97, {
          'quoted': _0x478cdd
        });
        await _0x304721.sendMessage(_0x801348, {
          'document': {
            'url': _0x540a3e
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x478cdd
        });
        _0x44cc12("Download Success...");
      } else {
        _0x44cc12("Failed to download the video. Please try again later.");
      }
    } else {
      _0x44cc12("No videos found.");
    }
  } catch (_0x2f997a) {
    console.error("Error from API:", _0x2f997a);
    _0x44cc12("An error occurred while searching or downloading the video.");
  }
});
