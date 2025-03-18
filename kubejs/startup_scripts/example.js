// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')
//超级方块
StartupEvents.registry("block", event => {
    //event.create(方块id, 方块类型)
    event.create("rainbow:superblock", "basic").requiresTool(true).grassSoundType().tagBlock("minecraft:mineable/shovel")
})
StartupEvents.registry("fluid",event =>{
//黄铜液体
    event.create("rainbow:brass_fluid").thickTexture(0xF3E03B).noBucket().noBlock()
//铜液体
    event.create("rainbow:copper_fluid").thickTexture(0xFA842B).noBucket().noBlock()
//710元素
    event.create("rainbow:oil").thickTexture(0x010101).noBlock()
})
//物品增加
StartupEvents.registry("item",event=>{
    //子弹壳
    event.create("rainbow:bullet_casings","basic")
    //锌子弹壳
    event.create("rainbow:zn_casings","basic")
    //子弹头
    event.create("rainbow:bullet_shaped","basic")
    //锌子弹壳
    event.create("rainbow:zn_shaped","basic")
    //复合火药
    event.create("rainbow:composite_gunpowder","basic")
    //霰弹
    event.create("rainbow:shrapnel","basic")
    //弹头模具
    event.create("rainbow:shaped_mode","basic")
    //蛋壳模具
    event.create("rainbow:casings_mode","basic")
    //超精密构件
    event.create("rainbow:super_mechanism","basic")
    //手枪蓝图
    event.create("rainbow:pistol_blue","basic")
    //步枪蓝图
    event.create("rainbow:rifle_blue","basic")
    //冲锋枪蓝图
    event.create("rainbow:submachine_blue","basic")
    //狙击枪蓝图
    event.create("rainbow:sniper_blue","basic")
    //霰弹枪
    event.create("rainbow:shotgun","basic")
    //重武器蓝图
    event.create("rainbow:heavy","basic")
    //机枪蓝图
    event.create("rainbow:mechine","basic")
    //弹夹蓝图
    event.create("rainbow:magazine","basic")
    //瞄具蓝图
    event.create("rainbow:sight","basic")
    //枪口蓝图
    event.create("rainbow:muzzle","basic")
    //枪托组件
    event.create("rainbow:buttstock","basic")
    //握把组件
    event.create("rainbow:grip","basic")
    //屎
    event.create("rainbow:shit","basic").food(foodBuilder=>{foodBuilder.meat().hunger(-1).saturation(2.0).alwaysEdible().fastToEat().effect("minecraft:nausea",300,5,0.99)})
})
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
//民主庇佑
StartupEvents.registry("mob_effect", event => {
    event.create("rainbow:democratic_save")
        .beneficial() // 标记为有益效果
        .color(0xFFFF00) // 设置颜色为黄色
});
//710元素燃烧
ItemEvents.modification(event => {
    event.modify('rainbow:oil_bucket', item => {
        item.burnTime = 30000
    })
})