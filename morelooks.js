class MoreLooks {
    // Initialize the extension with a name and category
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
                    func: 'nextCostumes'
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
                    func: 'previousCostumes'
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
                    func: 'nextBackdrops'
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
                    func: 'previousBackdrops'
                }
            ]
        };
    }

    // Function to switch to the previous costume
    previousCostume(args, util) {
        const sprite = util.target;
        const costumeCount = sprite.getCostumes().length;
        sprite.setCostume((sprite.currentCostume - 1 + costumeCount) % costumeCount);
    }

    // Function to switch to the previous backdrop
    previousBackdrop(args, util) {
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.getCostumes().length;
        stage.setCostume((stage.currentCostume - 1 + backdropCount) % backdropCount);
    }

    // Function to switch to the next N costumes
    nextCostumes(args, util) {
        const sprite = util.target;
        const costumeCount = sprite.getCostumes().length;
        sprite.setCostume((sprite.currentCostume + Number(args.n)) % costumeCount);
    }

    // Function to switch to the previous N costumes
    previousCostumes(args, util) {
        const sprite = util.target;
        const costumeCount = sprite.getCostumes().length;
        sprite.setCostume((sprite.currentCostume - Number(args.n) + costumeCount) % costumeCount);
    }

    // Function to switch to the next N backdrops
    nextBackdrops(args, util) {
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.getCostumes().length;
        stage.setCostume((stage.currentCostume + Number(args.n)) % backdropCount);
    }

    // Function to switch to the previous N backdrops
    previousBackdrops(args, util) {
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.getCostumes().length;
        stage.setCostume((stage.currentCostume - Number(args.n) + backdropCount) % backdropCount);
    }
}

// Register the extension in Turbowarp
Scratch.extensions.register(new MoreLooks());
