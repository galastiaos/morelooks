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
                    func: 'previousCostume'
                },
                {
                    opcode: 'previousBackdrop',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'previous backdrop',
                    func: 'previousBackdrop'
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
        const sprite = util.target;
        const costumeCount = sprite.costumes.length;
        sprite.currentCostumeIndex = (sprite.currentCostumeIndex - 1 + costumeCount) % costumeCount;
    }

    // Switch to the previous backdrop
    previousBackdrop(args, util) {
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.costumes.length;
        stage.currentCostumeIndex = (stage.currentCostumeIndex - 1 + backdropCount) % backdropCount;
    }

    // Switch to the next N costumes
    nextCostumes(args, util) {
        const sprite = util.target;
        const costumeCount = sprite.costumes.length;
        sprite.currentCostumeIndex = (sprite.currentCostumeIndex + Number(args.n)) % costumeCount;
    }

    // Switch to the previous N costumes
    previousCostumes(args, util) {
        const sprite = util.target;
        const costumeCount = sprite.costumes.length;
        sprite.currentCostumeIndex = (sprite.currentCostumeIndex - Number(args.n) + costumeCount) % costumeCount;
    }

    // Switch to the next N backdrops
    nextBackdrops(args, util) {
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.costumes.length;
        stage.currentCostumeIndex = (stage.currentCostumeIndex + Number(args.n)) % backdropCount;
    }

    // Switch to the previous N backdrops
    previousBackdrops(args, util) {
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.costumes.length;
        stage.currentCostumeIndex = (stage.currentCostumeIndex - Number(args.n) + backdropCount) % backdropCount;
    }
}

// Register the extension in TurboWarp
Scratch.extensions.register(new MoreLooks());
