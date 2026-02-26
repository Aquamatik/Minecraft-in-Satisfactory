ServerEvents.recipes(e => {
    let rockgen = (adjacent, below, out) =>
        e.custom({
            type: 'thermal:rock_gen',
            adjacent: adjacent,
            below: below,
            result: {item: out}
        })
    rockgen('minecraft:water', 'minecraft:iron_ore', 'minecraft:iron_ore')
    rockgen('minecraft:water', 'minecraft:coal_ore', 'minecraft:coal_ore')
    rockgen('minecraft:water', 'minecraft:copper_ore', 'minecraft:copper_ore')
    rockgen('minecraft:water', 'minecraft:nether_quartz_ore', 'minecraft:nether_quartz_ore')
    rockgen('minecraft:water', 'create:limestone', 'kubejs:limestone_ore')
    rockgen('minecraft:water', 'minecraft:gold_ore', 'kubejs:caterium_ore')
    rockgen('minecraft:water', 'minecraft:end_stone', 'kubejs:sulfur_ore')
    rockgen('minecraft:water', 'minecraft:diorite', 'kubejs:bauxite_ore')
    rockgen('minecraft:water', 'minecraft:blackstone', 'kubejs:sam_ore')
    rockgen('minecraft:water', 'minecraft:emerald_block', 'kubejs:uranium_ore')
})