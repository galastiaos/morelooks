class MoreLooks {
    getInfo() {
        return {
            id: 'morelooks',
            name: 'More Looks',
            blocks: [
                {
                    opcode: 'previousCostume',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'previous costume',
                    function: 'previousCostume'
                },
                {
                    opcode: 'previousBackdrop',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'previous backdrop',
                    function: 'previousBackdrop'
                },
                {
                    opcode: 'nextCostumes',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'next [n] costumes',
                    arguments: {
                        n: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    },
                    function: 'nextCostumes'
                },
                {
                    opcode: 'previousCostumes',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'previous [n] costumes',
                    arguments: {
                        n: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    },
                    function: 'previousCostumes'
                },
                {
                    opcode: 'nextBackdrops',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'next [n] backdrops',
                    arguments: {
                        n: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    },
                    function: 'nextBackdrops'
                },
                {
                    opcode: 'previousBackdrops',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'previous [n] backdrops',
                    arguments: {
                        n: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    },
                    function: 'previousBackdrops'
                }
            ]
        };
    }

    // Switch to the previous costume
    previousCostume(args, util) {
        console.log("previousCostume called");
        const sprite = util.target;
        const costumeCount = sprite.getCostumes().length;
        const currentIndex = sprite.getCostumeIndex(); // Get current costume index
        sprite.setCostume((currentIndex - 1 + costumeCount) % costumeCount);
    }

    // Switch to the previous backdrop
    previousBackdrop(args, util) {
        console.log("previousBackdrop called");
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.getCostumes().length;
        const currentIndex = stage.getCostumeIndex();
        stage.setCostume((currentIndex - 1 + backdropCount) % backdropCount);
    }

    // Switch to the next N costumes
    nextCostumes(args, util) {
        console.log("nextCostumes called with n =", args.n);
        const sprite = util.target;
        const costumeCount = sprite.getCostumes().length;
        const currentIndex = sprite.getCostumeIndex();
        sprite.setCostume((currentIndex + Number(args.n)) % costumeCount);
    }

    // Switch to the previous N costumes
    previousCostumes(args, util) {
        console.log("previousCostumes called with n =", args.n);
        const sprite = util.target;
        const costumeCount = sprite.getCostumes().length;
        const currentIndex = sprite.getCostumeIndex();
        sprite.setCostume((currentIndex - Number(args.n) + costumeCount) % costumeCount);
    }

    // Switch to the next N backdrops
    nextBackdrops(args, util) {
        console.log("nextBackdrops called with n =", args.n);
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.getCostumes().length;
        const currentIndex = stage.getCostumeIndex();
        stage.setCostume((currentIndex + Number(args.n)) % backdropCount);
    }

    // Switch to the previous N backdrops
    previousBackdrops(args, util) {
        console.log("previousBackdrops called with n =", args.n);
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.getCostumes().length;
        const currentIndex = stage.getCostumeIndex();
        stage.setCostume((currentIndex - Number(args.n) + backdropCount) % backdropCount);
    }
}

// Register the extension in TurboWarp
Scratch.extensions.register(new MoreLooks());
