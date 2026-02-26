PlayerEvents.tick(e => {
    if (e.level.time % 20 !== 0) { return }
    let has_item = e.player.inventory.find('kubejs:uranium');
    if (has_item >= 0) {
        e.player.potionEffects.add('minecraft:wither',40,1,false,false)
    }
    if (e.level.time % 20 !== 0) { return }
    if (e.player.getFeetArmorItem() =='kubejs:blade_runners')
        e.player.potionEffects.add('minecraft:speed',40,1,false,false),
        e.player.potionEffects.add('minecraft:jump_boost',40,1,false,false)
})