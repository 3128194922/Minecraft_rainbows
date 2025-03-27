//下界之星
StartupEvents.registry('item', event => {
    event.create('minecraft:nether_star')
        /**
         * 物品的使用动画（会根据使用动画的类型播放对应的声音）
         * |'spear'（三叉戟）|'crossbow'（弩）|'eat'（吃）|
         * |'spyglass'（望远镜）|'block'（方块）|'none'（无）|
         * |'bow'（弓）|'drink'（喝）|
         */
        .useAnimation('block')
        /**
         * 物品的最大使用刻（右键时间超过最大值时将执行.finishUsing()中的函数）
         * 返回值为0时物品将被标记为无法使用use
         * - 关联的函数：
         * > 玩家对象（$Player）的"useItemRemainingTicks"属性为玩家当前手持物品使用的剩余时间
         */
        .useDuration(itemstack => 10)
        /**
         * 是否可以使用
         * 当该值为true且useDuration>0时，该物品将被使用并播放对应的动画和声音
         */
        .use((level, player, hand) => true)
        /**
         * 当物品成功使用后（持续右键经过一个完整的useDuration）后的行为
         */
        .finishUsing((itemstack, level, entity) => {
            level.createExplosion(entity.x, entity.y-1, entity.z).explode()
        })
        /**
         * 当物品未完成useDuration的时间刻就被释放后的行为
         * tick为距离完整的使用刻还有多少刻
         */
        .releaseUsing((itemstack, level, entity, tick) => {
            //itemstack.shrink(1)
            level.createExplosion(entity.x, entity.y-1, entity.z).explode()
        })
})

//Libertea
StartupEvents.registry('item', event => {
    event.create('rainbow:libertea')
        /**
         * 物品的使用动画（会根据使用动画的类型播放对应的声音）
         * |'spear'（三叉戟）|'crossbow'（弩）|'eat'（吃）|
         * |'spyglass'（望远镜）|'block'（方块）|'none'（无）|
         * |'bow'（弓）|'drink'（喝）|
         */
        .useAnimation('drink')
        /**
         * 物品的最大使用刻（右键时间超过最大值时将执行.finishUsing()中的函数）
         * 返回值为0时物品将被标记为无法使用use
         * - 关联的函数：
         * > 玩家对象（$Player）的"useItemRemainingTicks"属性为玩家当前手持物品使用的剩余时间
         */
        .useDuration(itemstack => 60)
        /**
         * 是否可以使用
         * 当该值为true且useDuration>0时，该物品将被使用并播放对应的动画和声音
         */
        .use((level, player, hand) => true)
        /**
         * 当物品成功使用后（持续右键经过一个完整的useDuration）后的行为
         */
        .finishUsing((itemstack, level, entity) => {
            entity.potionEffects.add('rainbow:democratic_save', 20*3)
            itemstack.shrink(1)
        })
        .releaseUsing((itemstack, level, entity, tick) => {
            entity.potionEffects.add('rainbow:democratic_save', 20)
            itemstack.shrink(1)
        })
})