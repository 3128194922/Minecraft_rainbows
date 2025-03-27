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
})
//物品增加
StartupEvents.registry("item",event=>{
    //大肉面
    //敢删我大肉面？我肘亖你！    

    event.create("rainbow:tengzou_noodles","basic").maxStackSize(64).rarity("epic")
        .food(foodBuilder=>{
            foodBuilder
            .alwaysEdible()
            .meat()
            .hunger(20)
            .saturation(1.0)
            .effect("farmersdelight:nourishment",3600,1,1)
            .effect("farmersdelight:comfort",3600,1,1)
        })
    
    //玻璃刀
    event.create("rainbow:glass_sword","sword").maxDamage(1).attackDamageBonus(20).maxStackSize(64)
    
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