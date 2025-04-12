//Libertea
StartupEvents.registry('item', event => {
    event.create('rainbow:libertea')
        .useAnimation('drink')
        .useDuration(itemstack => 60)
        .use((level, player, hand) => true)
        .releaseUsing((itemstack, entity) => {
            entity.potionEffects.add('rainbow:democratic_save', 20)
            itemstack.shrink(1)
        })
})
