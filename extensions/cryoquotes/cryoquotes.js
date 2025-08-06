(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This extension must be run unsandboxed!');
  }

  class CryoQuotes {
    getInfo() {
      return {
        id: 'cryoquotes',
        name: 'CryoQuotes',
        color1: '#0084ffff',
        color2: '#0004ffff',
        color3: '#00a2ffff',
        blocks: [
          {
            opcode: 'breakquote',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get random breaking bad quote',
            disableMonitor: true
          },
          {
            opcode: 'thronequote',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get random game of thrones quote',
            disableMonitor: true
          },
          {
            opcode: 'strangerquote',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get random stranger things quote',
            disableMonitor: true
          }
        ]
      };
    }

    breakquote() {
        return fetch('https://api.breakingbadquotes.xyz/v1/quotes')
      .then((response) => {
        let text = response.text()
        console.log(text)
        return text;
      })
      .catch((error) => {
        console.error(error);
        return 'Not working as of now.';
      });
    }

    thronequote() {
        return fetch('https://api.gameofthronesquotes.xyz/v1/random')
      .then((response) => {
        let text = response.text()
        console.log(text)
        return text;
      })
      .catch((error) => {
        console.error(error);
        return 'Not working as of now.';
      });
    }

    strangerquote() {
        return fetch('https://strangerthingsquotes.shadowdev.xyz/api/quotes')
      .then((response) => {
        let text = response.text()
        console.log(text)
        return text;
      })
      .catch((error) => {
        console.error(error);
        return 'Not working as of now.';
      });
    }

  }
  Scratch.extensions.register(new CryoQuotes());
})(Scratch);