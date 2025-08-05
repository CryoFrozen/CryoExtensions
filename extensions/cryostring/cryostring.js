(function(Scratch){
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
      throw new Error('This extension must run unsandboxed');
    }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  const blocksIcon = "data:image/png;base64,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"
  const dangoIcon = "data:image/png;base64,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"
  class FrostedStrings {
    getInfo() {
      return {
        id: 'frostedstring',
        name: 'CryoStrings',
        color1: '#0291aaff',
        color2: '#b5b5b5ff',
        color3: '#4bbdffff',
        menuIconURI: blocksIcon,
        blockIconURI: dangoIcon,
        blocks: [
          {
            opcode: 'reversetext',
            blockType: Scratch.BlockType.REPORTER,
            text: 'reverse text [text]',
            disableMoniter: true,
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello!'
              }
            }
          },
          {
            opcode: 'replacefind',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace [find] with [replace] in [text]',
            disableMoniter: true,
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hey! It's me!"
              },
              find: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'me'
              },
              replace: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'you'
              }
            }
          },
          {
            opcode: 'randomcharacter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'random character in [text]',
            disableMoniter: true,
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1234567890'
              }
            }
          },
          {
            opcode: 'turnstring',
            blockType: Scratch.BlockType.REPORTER,
            text: 'stringify [text] with delimiter [delimiter]',
            disableMoniter: true,
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '10,20,30'
              },
              delimiter: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ','
              }
            }
          },
          {
            opcode: 'joinitem',
            blockType: Scratch.BlockType.REPORTER,
            text: 'join [text] with [seperator]',
            disableMoniter: true,
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["10","20","30"]'
              },
              seperator: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '_'
              }
            }
          },
          {
            opcode: 'splititem',
            blockType: Scratch.BlockType.REPORTER,
            text: 'item [number] of [text] split with [delimiter]',
            disableMoniter: true,
            arguments: {
              number: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '10_20_30'
              },
              delimiter: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '_'
              }
            }
          },
          '---',
          {
            opcode: 'startprefix',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'starts with [prefix] in [text]?',
            disableMoniter: true,
            arguments: {
              prefix: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'cat'
              },
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'catapult'
              }
            }
          },
          '---',
          {
            opcode: 'newline',
            blockType: Scratch.BlockType.REPORTER,
            text: 'newline character',
            disableMoniter: true
          }
        ]
      };
    }

    reversetext(args) {
      let text = args.text
      let txt = "";
      let x;
      for (x in text) {
        txt = text[x] + txt;
      }
      return txt
    }

    replacefind(args) {
      return args.text.replace(args.find, args.replace);
    }

    randomcharacter(args) {
      let str = String(args.text)
      let rnd = getRndInteger(0, str.length - 1)
      return str[rnd];
    }

    startprefix(args) {
      return args.text.startsWith(args.prefix);
    }

    turnstring(args) {
      let del = args.text.split(args.delimiter);
      return JSON.stringify(del)
    }

    splititem(args) {
      let number = Number(args.number) - 1;
      let part = String(args.text).split(args.delimiter);

      if (number < 0 || number >= part.length) {
        return '';
      }

      return part[number];
    }

    joinitem(args) {
      let parsed;
      try {
        parsed = JSON.parse(args.text); // Convert string into actual array
      } catch {
        return 'Invalid array';
      }

      if (!Array.isArray(parsed)) return 'Not an array';

      return parsed.join(args.seperator);
    }


    newline() {
      return "\n";
    }
  }
  Scratch.extensions.register(new FrostedStrings());
})(Scratch)