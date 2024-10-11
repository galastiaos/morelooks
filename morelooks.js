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

    // Switch to the previous costume
    previousCostume(args, util) {
        if (!util.target) {
            console.error("No target found for previous costume");
            return;
        }
        const sprite = util.target;
        const costumeCount = sprite.getCostumes().length;
        const currentIndex = sprite.getCostumeIndex(); // Get current costume index
        sprite.setCostume((currentIndex - 1 + costumeCount) % costumeCount);
    }

    // Switch to the previous backdrop
    previousBackdrop(args, util) {
        if (!util.runtime) {
            console.error("No runtime found for previous backdrop");
            return;
        }
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.getCostumes().length;
        const currentIndex = stage.getCostumeIndex();
        stage.setCostume((currentIndex - 1 + backdropCount) % backdropCount);
    }

    // Switch to the next N costumes
    nextCostumes(args, util) {
        if (!util.target) {
            console.error("No target found for next costumes");
            return;
        }
        const sprite = util.target;
        const costumeCount = sprite.getCostumes().length;
        const currentIndex = sprite.getCostumeIndex();
        sprite.setCostume((currentIndex + Number(args.n)) % costumeCount);
    }

    // Switch to the previous N costumes
    previousCostumes(args, util) {
        if (!util.target) {
            console.error("No target found for previous costumes");
            return;
        }
        const sprite = util.target;
        const costumeCount = sprite.getCostumes().length;
        const currentIndex = sprite.getCostumeIndex();
        sprite.setCostume((currentIndex - Number(args.n) + costumeCount) % costumeCount);
    }

    // Switch to the next N backdrops
    nextBackdrops(args, util) {
        if (!util.runtime) {
            console.error("No runtime found for next backdrops");
            return;
        }
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.getCostumes().length;
        const currentIndex = stage.getCostumeIndex();
        stage.setCostume((currentIndex + Number(args.n)) % backdropCount);
    }

    // Switch to the previous N backdrops
    previousBackdrops(args, util) {
        if (!util.runtime) {
            console.error("No runtime found for previous backdrops");
            return;
        }
        const stage = util.runtime.getTargetForStage();
        const backdropCount = stage.getCostumes().length;
        const currentIndex = stage.getCostumeIndex();
        stage.setCostume((currentIndex - Number(args.n) + backdropCount) % backdropCount);
    }
}

// Register the extension in TurboWarp
Scratch.extensions.register(new MoreLooks());
