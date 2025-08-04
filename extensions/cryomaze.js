(function(Scratch){
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
      throw new Error('This Turbo Mode example must run unsandboxed');
    }
    const vm = Scratch.vm;

  let grid = 0;

  const blocksIcon = "data:image/png;base64,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"
  const dangoIcon = "data:image/png;base64,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"
  class FrostedMaze {
    getInfo() {
      return {
        id: 'frostedmaze',
        name: 'CryoMaze',
        color1: '#00d9ffff',
        color2: '#ffffffff',
        color3: '#85d2ffff',
        menuIconURI: blocksIcon,
        blockIconURI: dangoIcon,
        blocks: [
          {
            opcode: 'generatemaze',
            blockType: Scratch.BlockType.COMMAND,
            text: 'generate maze with width [ONE] and height [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'getmaze',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get maze',
          },
          {
            opcode: 'getvaluecell',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get value of cell [ONE],[TWO]',
            disableMonitor: true,
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
        ]
      };
    }

    generatemaze(args) {
	    let w = args.ONE % 2 === 0 ? args.ONE + 1 : args.ONE;
	    let h = args.TWO % 2 === 0 ? args.TWO + 1 : args.TWO;

	    grid = Array(h).fill().map(() => Array(w).fill(1));

	    function shuffle(arr) {
		    for (let i = arr.length - 1; i > 0; i--) {
			    let j = Math.floor(Math.random() * (i + 1));
			    [arr[i], arr[j]] = [arr[j], arr[i]];
		    }
		    return arr;
	    }

	    function carve(x, y) {
		    grid[y][x] = 0;
		    let dirs = shuffle([[0,1],[0,-1],[1,0],[-1,0]]);
		    for (let [dx, dy] of dirs) {
			    let nx = x + dx * 2;
			    let ny = y + dy * 2;
			    if (ny > 0 && ny < h-1 && nx > 0 && nx < w-1 && grid[ny][nx] === 1) {
				    grid[y + dy][x + dx] = 0;
				    carve(nx, ny);
			    }
		    }
	    }

	    carve(1, 1);
    }


    getmaze() {
	    if (!grid || !Array.isArray(grid)) return 'No Maze Found.';
	    return grid.map(row => `[${row.join(',')}]`).join(',\n');
    }



    getvaluecell(args) {
      if (grid == 0) {
        return 'No Maze Found.';
      } else {
        return (grid[args.ONE][args.TWO]);
      }
    }
  }
  Scratch.extensions.register(new FrostedMaze());
})(Scratch)