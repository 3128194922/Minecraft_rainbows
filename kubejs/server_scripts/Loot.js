//钓鱼修改
ServerEvents.genericLootTables(e=>{
    e.modify("netherdepthsupgrade:gameplay/nether_fishing/treasure",loot=>{
        let json = [{
            "type":"minecraft:item",
            "name":"netherexp:brazier_chest",
            "weight":1
        }]
        let poolArr = loot.pools.get(0).asJsonObject.get("entries").asJsonArray
        poolArr.addAll(json)
    })
})
//猫礼物
ServerEvents.genericLootTables(e=>{
    e.modify("minecraft:gameplay/cat_morning_gift",loot=>{
        let json = [{
            "type":"minecraft:item",
            "name":"rainbow:shit",
            "weight":10
        }]
        let poolArr = loot.pools.get(0).asJsonObject.get("entries").asJsonArray
        poolArr.addAll(json)
    })
})
//修改堆肥
ServerEvents.compostableRecipes((e) => {
    const recipes = [
      {
        input: 'smc:broccoli_seeds',
        chance: 0.65,
      },
      {
        input: 'smc:broccoli',
        chance: 0.65,
      },
      {
        input: 'rainbow:shit',
        chance: 1.0,
      }
    ];
   
    recipes.forEach((recipe) => {
      e.add(recipe.input, recipe.chance);
    });
  });
//闰土战利品表
ServerEvents.blockLootTables(e=>{
    e.modifyBlock('rainbow:superblock',loot=>{
        let pool = [{
            "type":"minecraft:item",
            "name":"rainbow:pistol_blue"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:rifle_blue"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:submachine_blue"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:sniper_blue"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:shotgun"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:heavy"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:mechine"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:sight"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:muzzle"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:buttstock"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:grip"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:shit"
            
        },
        {
            "type":"minecraft:item",
            "name":"rainbow:superblock"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:stick"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:bone"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:string"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:feather"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:flint"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:gunpowder"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:clay_ball"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:ink_sac"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:bone_meal"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:spider_eye"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:fermented_spider_eye"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:blaze_powder"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:magma_cream"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:nether_wart"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:prismarine_shard"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:rabbit_foot"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:honeycomb"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:moss_block"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:moss_carpet"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:vine"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:lily_pad"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:seagrass"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:kelp"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:dandelion"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:poppy"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:blue_orchid"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:allium"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:azure_bluet"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:red_tulip"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:orange_tulip"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:white_tulip"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:pink_tulip"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:oxeye_daisy"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:cornflower"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:lily_of_the_valley"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:wheat_seeds"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:pumpkin_seeds"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:melon_seeds"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:beetroot_seeds"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:cocoa_beans"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:sugar_cane"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:cactus"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:bamboo"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:dead_bush"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:fern"
        },
        {
            "type": "minecraft:item",
            "name": "minecraft:large_fern"
        },
        {
            "type": "minecraft:item",
            "name": "tacz:target"
        },
        {
            "type": "minecraft:item",
            "name": "tacz:target_minecart"
        },
        {
            "type": "minecraft:item",
            "name": "tacz:statue"
        }
    ]
        let arr = loot.pools.get(0).asJsonObject.get("entries").asJsonArray
        arr.addAll(pool)
    })
})
//村民礼物
ServerEvents.genericLootTables(event => {
    // 覆盖战利品表event.addGeneric(战利品表id, loot => {})
    event.addGeneric('minecraft:gameplay/hero_of_the_village/fletcher_gift', loot => {
        loot.addPool(pool => {
            pool.addItem('alexsmobs:shark_tooth_arrow')
        })
    })
    event.addGeneric('minecraft:gameplay/hero_of_the_village/butcher_gift', loot => {
        loot.addPool(pool => {
            pool.addItem('youkaishomecoming:flesh_chocolate_mousse')
        })
    })
    event.addGeneric('minecraft:gameplay/hero_of_the_village/cleric_gift', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:enchanted_golden_apple')
        })
    })
    event.addGeneric('minecraft:gameplay/hero_of_the_village/farmer_gift', loot => {
        loot.addPool(pool => {
            pool.addItem("rainbow:tengzou_noodles")
        })
    })
    event.addGeneric('minecraft:gameplay/hero_of_the_village/fisherman_gift', loot => {
        loot.addPool(pool => {
            pool.addItem('minecraft:scute')
        })
    })
    event.addGeneric('minecraft:gameplay/hero_of_the_village/leatherworker_gift', loot => {
        loot.addPool(pool => {
            pool.addItem('alexsmobs:bear_fur')
        })
    })
    event.addGeneric('minecraft:gameplay/hero_of_the_village/librarian_gift', loot => {
        loot.addPool(pool => {
            pool.addItem(Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1))
        })
    })
    event.addGeneric('minecraft:gameplay/hero_of_the_village/mason_gift', loot => {
        loot.addPool(pool => {
            pool.addItem('tacz:statue')
        })
    })
    event.addGeneric('minecraft:gameplay/hero_of_the_village/weaponsmith_gift', loot => {
        loot.addPool(pool => {
            pool.addItem('rainbow:glass_sword')
        })
    })
    event.addGeneric('minecraft:gameplay/hero_of_the_village/toolsmith_gift', loot => {
        loot.addPool(pool => {
            pool.addItem('rainbow:slime_rod')
        })
    })
})
//添加生物战利品
ServerEvents.entityLootTables(event=>{
    //疣猪掉mod火腿
    event.modifyEntity('minecraft:hoglin',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('netherexp:hogham').lootingEnchant(1,2)
        })
    })
    //流浪商人掉绿宝石
    event.modifyEntity('minecraft:wandering_trader',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('minecraft:emerald').weight(1).count([1,2]).lootingEnchant(1,5)
        })
    })
    //卫道不祥瓶子
    event.modifyEntity('minecraft:vindicator',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('rainbow:pobo')
            .weight(1) // 基础掉落权重
            .count([0, 1]) // 基础掉落数量范围
        })
    })
    //蟑螂710元素
    event.modifyEntity('alexsmobs:cockroach',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('rainbow:shit')
            .weight(1) // 基础掉落权重
            .count([0, 1]) // 基础掉落数量范围
            .lootingEnchant(1,5)
        })
    })
    //机器人掉材料
    event.modifyEntity('infinitygolem:infinity_golem',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem(Item.of('tacz:ammo', '{AmmoId:"cyber_armorer:material_1"}'))
            .weight(4) // 基础掉落权重
            .count([0, 10]) // 基础掉落数量范围
            .lootingEnchant(1,5)
            pool.addItem(Item.of('tacz:ammo', '{AmmoId:"cyber_armorer:material_2"}'))
            .weight(3) // 基础掉落权重
            .count([0, 5]) // 基础掉落数量范围
            .lootingEnchant(1,5)
            pool.addItem(Item.of('tacz:ammo', '{AmmoId:"cyber_armorer:material_3"}'))
            .weight(2) // 基础掉落权重
            .count([0, 2]) // 基础掉落数量范围
            .lootingEnchant(1,5)
            pool.addItem(Item.of('tacz:ammo', '{AmmoId:"cyber_armorer:material_4"}'))
            .weight(1) // 基础掉落权重
            .count([0, 1]) // 基础掉落数量范围
            .lootingEnchant(1,5)
        })
    })
})