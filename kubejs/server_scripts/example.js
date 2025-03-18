//服务端后台输出，告诉你已经加载了
console.info('server_script Kubejs example.js已经成功加载')
//牢韩你在看吧，每一种语句各自的作用我会注释
//修改配方
ServerEvents.recipes(event=>{
    //永恒之门配方
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:basic/blaze"}')})//删除输出为指定物品和NBT的配方
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:basic/enderman"}')})
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:basic/slime"}')})
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:emerald_grove"}')})
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:endless/blaze"}')})
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:overworldian_nights"}')})
    event.remove({output:Item.of('gateways:gate_pearl', '{gateway:"gateways:hellish_fortress"}')})
    //CCK实验性物品配方
    event.remove({output:'environmental:cherry_pie'})//删除配方，通过物品ID
    event.remove({output:'environmental:truffle_pie'})
    //音乐播放器
    event.remove({output:'netmusic:music_player'})
    event.shaped('netmusic:music_player',[
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks'],
        ['#minecraft:planks','create:precision_mechanism','#minecraft:planks'],
        ['#minecraft:planks','create:precision_mechanism','#minecraft:planks'],
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks']])
    event.remove({output:'netmusic:cd_burner'})
    event.shaped('netmusic:cd_burner',[
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks'],
        ['#minecraft:planks','#forge:ingots/iron','#minecraft:planks'],
        ['#minecraft:planks','create:precision_mechanism','#minecraft:planks'],
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks']])
    event.remove({output:'netmusic:computer'})
    event.shaped('netmusic:computer',[
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks'],
        ['#minecraft:planks','#forge:ingots/gold','#minecraft:planks'],
        ['#minecraft:planks','create:precision_mechanism','#minecraft:planks'],
        ['#minecraft:planks','#minecraft:planks','#minecraft:planks']])
    //event.remove({output:'netmusic:music_player_backpack'})
    //飞机全部禁用
    event.remove({output:'immersive_aircraft:boiler'})//删除配方，通过mod筛选
    event.shaped('immersive_aircraft:boiler',[
        ['minecraft:copper_ingot','minecraft:copper_ingot','minecraft:copper_ingot'],
        ['minecraft:copper_ingot','rainbow:super_mechanism','minecraft:copper_ingot'],
        ['minecraft:copper_ingot','minecraft:furnace','minecraft:copper_ingot']])
    //特殊物品禁用
    //event.remove({output:'@smc'})
    //说明书配方
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:encyclopedia"}'),'minecraft:dirt')
    //传送石价格降低
    event.remove({output:Item.of('waystones:warp_stone', '{Damage:0}')})
    event.shapeless(Item.of('waystones:warp_stone', '{Damage:0}'),['minecraft:emerald','minecraft:ender_pearl'])
    //末影珍珠革新
    event.blasting('minecraft:ender_pearl','#endermanoverhaul:ender_pearls',5,2000)
    //下界箱子
    event.remove({output:'netherchested:nether_chest'})
    event.shaped('netherchested:nether_chest',[
        ["minecraft:chest","minecraft:chest","minecraft:chest"],
        ["minecraft:chest","minecraft:nether_bricks","minecraft:chest"],
        ["minecraft:chest","minecraft:chest","minecraft:chest"]])
    //冰弓配方修改
    event.remove({output:Item.of('smc:frostium_bow', '{Damage:0}')})
    event.shaped(Item.of('smc:frostium_bow', '{Damage:0}'),[
        ["",'smc:frostium_ingot','minecraft:string'],
        ['minecraft:netherite_ingot',"",'minecraft:string'],
        ["",'smc:frostium_ingot','minecraft:string']])
    //泥土配方
    event.recipes.create.crushing('minecraft:dirt', 'minecraft:flint').processingTime(500)//.withChance(0.12)
    //命名牌配方
    event.shapeless('minecraft:name_tag',['#forge:string','#minecraft:planks','minecraft:name_tag']).keepIngredient({item:'minecraft:name_tag'})
    //滑翔伞配方
    event.remove({output:'vc_gliders:reinforced_paper_netherite'})
    event.remove({output:'vc_gliders:reinforced_paper_iron'})
    event.remove({output:'vc_gliders:reinforced_paper_diamond'})
    event.remove({output:'vc_gliders:reinforced_paper_gold'})
    event.remove({output:'vc_gliders:reinforced_paper'})
    event.shapeless('3x vc_gliders:reinforced_paper_netherite',['3x vc_gliders:reinforced_paper','minecraft:netherite_scrap'])
    event.shapeless('3x vc_gliders:reinforced_paper_iron',['3x vc_gliders:reinforced_paper','minecraft:iron_ingot'])
    event.shapeless('3x vc_gliders:reinforced_paper_diamond',['3x vc_gliders:reinforced_paper','minecraft:diamond'])
    event.shapeless('3x vc_gliders:reinforced_paper_gold',['3x vc_gliders:reinforced_paper','minecraft:gold_ingot'])
    event.shapeless('3x vc_gliders:reinforced_paper',['minecraft:paper','farmersdelight:canvas'])
    //切石机加强
    event.stonecutting('3x minecraft:iron_bars','minecraft:iron_door')
    event.stonecutting('create:cogwheel','create:large_cogwheel')
    event.stonecutting('create:water_wheel','create:large_water_wheel')
    event.stonecutting('create:shaft','create:cogwheel')
    //光源方块合成
    event.shapeless('minecraft:light','minecraft:torch')
    //量天尺配方
    event.shapeless('atmospheric:dragon_roots',['atmospheric:dragon_fruit','minecraft:vine'])
    //冰红茶配方
    event.shaped('smc:ice_tea',[
        ['minecraft:phantom_membrane','youkaishomecoming:ice_cube','minecraft:phantom_membrane'],
        ['minecraft:phantom_membrane','youkaishomecoming:black_tea_leaves','minecraft:phantom_membrane'],
        ['minecraft:phantom_membrane','minecraft:phantom_membrane','minecraft:phantom_membrane']])
    //腐肉制作
    event.recipes.create.haunting('minecraft:rotten_flesh', '#mynethersdelight:curry_meats')
    //烈焰棒合成
    event.shapeless('minecraft:blaze_rod','6x minecraft:blaze_powder')
    //海晶砂砾合成
    event.recipes.create.crushing(['minecraft:prismarine_crystals',Item.of('2x minecraft:prismarine_crystals').withChance(0.12)],'minecraft:prismarine_shard').processingTime(100)//.withChance(0.12)
    //钻石合成
    event.shaped('minecraft:diamond',[
        ['minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block'],
        ['minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block'],
        ['minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block'],
        ['minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block'],
        ['minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block','minecraft:coal_block']])
    //煤炭合成
    event.recipes.create.haunting(Item.of('minecraft:coal').withChance(0.75),'minecraft:charcoal')
    //缠魂棒
    event.recipes.create.haunting(Item.of('netherexp:banshee_rod').withChance(0.75),'minecraft:blaze_rod')
    //青金石合成
    event.recipes.create.filling('minecraft:lapis_lazuli', [Fluid.of("create_enchantment_industry:experience",10),'minecraft:gold_ingot'])
    //皿煮合成
    event.recipes.create.filling('rainbow:libertea', [Fluid.of("rainbow:oil",250),'minecraft:glass_bottle'])
    //煤炭量产
    event.recipes.create.crushing(['minecraft:coal',Item.of('minecraft:netherite_scrap').withChance(0.0001)],'minecraft:blackstone').processingTime(150)//.withChance(0.12)
    //下界岩量产
    event.recipes.create.mixing("minecraft:netherrack",[Fluid.of("minecraft:lava",25), 'minecraft:cobblestone','create:cinder_flour'])
    //枪械禁用
    event.remove({output:'@tacz'})
    //雕刻南瓜
    event.stonecutting("minecraft:carved_pumpkin","minecraft:pumpkin");
    //凋零骷髅合成
    event.recipes.create.haunting('minecraft:wither_skeleton_skull','minecraft:player_head')
    //超精密构件
    event.recipes.create.sequenced_assembly(
        "rainbow:super_mechanism",'create:precision_mechanism',
        [event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism','minecraft:nether_star']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism','minecraft:echo_shard']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism','minecraft:heart_of_the_sea']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism','netherexp:shotgun_core']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism','rainbow:shit'])]
    ).transitionalItem('create:incomplete_precision_mechanism').loops(1)
    //南瓜灯
    event.recipes.create.sequenced_assembly(
        'minecraft:jack_o_lantern','minecraft:carved_pumpkin',
        [event.recipes.createDeploying('minecraft:carved_pumpkin', ['minecraft:carved_pumpkin','minecraft:torch'])]
    ).transitionalItem('minecraft:carved_pumpkin').loops(1)
    //灵魂南瓜灯
    event.recipes.create.sequenced_assembly(
        'netherexp:soul_jack_o_lantern','minecraft:carved_pumpkin',
        [event.recipes.createDeploying('minecraft:carved_pumpkin', ['minecraft:carved_pumpkin','minecraft:soul_torch'])]
    ).transitionalItem('minecraft:carved_pumpkin').loops(1)
    //创造马达
    event.shaped('create:creative_motor',[
        ['create:andesite_alloy_block','rainbow:super_mechanism','rainbow:super_mechanism','create:shaft','rainbow:super_mechanism','rainbow:super_mechanism','create:andesite_alloy_block'],
        ['rainbow:super_mechanism','create:cogwheel','create:cogwheel','create:flywheel','create:large_cogwheel','create:large_cogwheel','rainbow:super_mechanism'],
        ['rainbow:super_mechanism','create:deployer','create:stressometer','create:hand_crank','create:speedometer','create:deployer','rainbow:super_mechanism'],
        ['create:rotation_speed_controller','minecraft:water_bucket','create:large_water_wheel','create:flywheel','create:white_sail','create:windmill_bearing','create:rotation_speed_controller'],
        ['rainbow:super_mechanism','create:deployer','create:copper_valve_handle','create:flywheel','create:hand_crank','create:deployer','rainbow:super_mechanism'],
        ['rainbow:super_mechanism','create:blaze_burner','create:fluid_tank','create:steam_engine','create:fluid_tank','create:blaze_burner','rainbow:super_mechanism'],
        ['create:andesite_alloy_block','rainbow:super_mechanism','rainbow:super_mechanism','create:rotation_speed_controller','rainbow:super_mechanism','rainbow:super_mechanism','create:andesite_alloy_block']
    ])
    //生锈铜
    event.recipes.create.splashing('minecraft:weathered_copper','minecraft:copper_block')
    event.recipes.create.splashing('minecraft:waxed_weathered_copper','minecraft:waxed_copper_block')
    //TACZ火药配方删除
    event.remove({id:"tacz:gunpowder"})
    //子弹之注入
    event.recipes.create.filling('rainbow:zn_casings', [Fluid.of("rainbow:brass_fluid",10),'rainbow:casings_mode'])
    event.recipes.create.filling('rainbow:zn_shaped', [Fluid.of("rainbow:brass_fluid",15),'rainbow:shaped_mode'])
    event.recipes.create.filling('rainbow:bullet_casings', [Fluid.of("rainbow:copper_fluid",10),'rainbow:casings_mode'])
    event.recipes.create.filling('rainbow:bullet_shaped', [Fluid.of("rainbow:copper_fluid",15),'rainbow:shaped_mode'])
    //黄铜溶液
    event.recipes.create.mixing(Fluid.of("rainbow:brass_fluid",1000),["create:brass_block"]).heated()
    //铜溶液
    event.recipes.create.mixing(Fluid.of("rainbow:copper_fluid",1000),['minecraft:copper_block']).heated()
    //710元素
    event.recipes.create.mixing(Fluid.of("rainbow:oil",250),["10x rainbow:shit"]).heated()
    //黄铜块制作
    event.recipes.create.mixing("2x create:brass_block",["create:zinc_block","minecraft:copper_block"]).heated()
    //子弹模具制作
    event.shaped('2x rainbow:shaped_mode',[
        ['minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball'],
        ['minecraft:clay_ball','rainbow:shaped_mode','minecraft:clay_ball'],
        ['minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball']])
    event.shaped('2x rainbow:casings_mode',[
        ['minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball'],
        ['minecraft:clay_ball','rainbow:casings_mode','minecraft:clay_ball'],
        ['minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball']])
    //复合火药
    event.shapeless('rainbow:composite_gunpowder',['minecraft:gunpowder','minecraft:gunpowder','minecraft:gunpowder','minecraft:charcoal','minecraft:charcoal','minecraft:charcoal','minecraft:sugar','minecraft:sugar','minecraft:flint'])
    //子弹配方
    //12口径霰弹
    event.recipes.create.sequenced_assembly(
        'rainbow:shrapnel','rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:paper'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:12g"}'),'rainbow:shrapnel',
        [event.recipes.createDeploying('rainbow:shrapnel', ['rainbow:shrapnel','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:shrapnel', ['rainbow:shrapnel','minecraft:iron_nugget']),
        event.recipes.createDeploying('rainbow:shrapnel', ['rainbow:shrapnel','minecraft:iron_nugget']),
        event.recipes.createDeploying('rainbow:shrapnel', ['rainbow:shrapnel','minecraft:iron_nugget'])
    ]
    ).transitionalItem('rainbow:shrapnel').loops(1)
    //9mm
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:9mm"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:white_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //762x25
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:762x25"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:light_gray_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //.45
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:45acp"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gray_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //.357
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:357mag"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:black_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //.50
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:50ae"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:brown_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //6.8
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:68x51fury"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:orange_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //.308
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:308"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:yellow_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //30-06
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:30_06"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:green_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //5.56x45
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:556x45"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:cyan_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //5.8x42
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:58x42"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:light_blue_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //7.62x39
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:762x39"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:blue_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //7.62x54
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:762x54"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:purple_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //.338
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:338"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:pink_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //.50BMG
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:50bmg"}'),'rainbow:bullet_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','minecraft:magenta_dye']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:bullet_shaped'])
    ]
    ).transitionalItem('rainbow:bullet_casings').loops(1)
    //40mm
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:40mm"}'),'rainbow:zn_casings',
        [event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:zn_casings','minecraft:white_dye']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:bullet_casings', ['rainbow:bullet_casings','rainbow:zn_shaped'])
    ]
    ).transitionalItem('rainbow:zn_casings').loops(1)
    //RPG7
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:rpg_rocket"}'),'rainbow:zn_casings',
        [event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','minecraft:light_gray_dye']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','quark:gunpowder_sack']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','quark:gunpowder_sack']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','rainbow:composite_gunpowder']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','rainbow:zn_shaped'])
    ]
    ).transitionalItem('rainbow:zn_casings').loops(1)
    //5.7x28
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:57x28"}'),'rainbow:zn_casings',
        [event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','minecraft:gray_dye']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','rainbow:zn_shaped'])
    ]
    ).transitionalItem('rainbow:zn_casings').loops(1)
    //4.6x30
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:ammo', '{AmmoId:"tacz:46x30"}'),'rainbow:zn_casings',
        [event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','minecraft:black_dye']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','minecraft:gunpowder']),
        event.recipes.createDeploying('rainbow:zn_casings', ['rainbow:zn_casings','rainbow:zn_shaped'])
    ]
    ).transitionalItem('rainbow:zn_casings').loops(1)
    //枪械配方
    //M1911
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:7,GunFireMode:"SEMI",GunId:"tacz:m1911",HasBulletInBarrel:1b}'),'rainbow:pistol_blue',
        [
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:white_dye']),    
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','#minecraft:logs'])]
    ).transitionalItem('rainbow:pistol_blue').loops(1)
    //CZ95
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:16,GunFireMode:"AUTO",GunId:"tacz:cz75",HasBulletInBarrel:1b}'),'rainbow:pistol_blue',
        [
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:light_gray_dye']),    
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:iron_ingot'])]
    ).transitionalItem('rainbow:pistol_blue').loops(1)
    //格洛克
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:17,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:1b}'),'rainbow:pistol_blue',
        [
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:gray_dye']),    
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:iron_ingot'])]
    ).transitionalItem('rainbow:pistol_blue').loops(1)
    //P320
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:12,GunFireMode:"SEMI",GunId:"tacz:p320",HasBulletInBarrel:1b}'),'rainbow:pistol_blue',
        [
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:black_dye']),    
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:gold_ingot'])
    ]
    ).transitionalItem('rainbow:pistol_blue').loops(1)
    //沙鹰
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:7,GunFireMode:"SEMI",GunId:"tacz:deagle",HasBulletInBarrel:1b}'),'rainbow:pistol_blue',
        [
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:brown_dye']),    
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:iron_ingot'])
    ]
    ).transitionalItem('rainbow:pistol_blue').loops(1)
    //黄金沙鹰
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:9,GunFireMode:"SEMI",GunId:"tacz:deagle_golden",HasBulletInBarrel:1b}'),'rainbow:pistol_blue',
        [
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:red_dye']),    
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:pistol_blue', ['rainbow:pistol_blue','minecraft:gold_ingot'])
    ]
    ).transitionalItem('rainbow:pistol_blue').loops(1)
    //UMP45
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:9,GunFireMode:"SEMI",GunId:"tacz:deagle_golden",HasBulletInBarrel:1b}'),'rainbow:submachine_blue',
        [
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:white_dye']),    
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:iron_ingot'])
    ]
    ).transitionalItem('rainbow:submachine_blue').loops(1)
    //UZI
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"tacz:uzi",HasBulletInBarrel:1b}'),'rainbow:submachine_blue',
        [
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:light_gray_dye']),    
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:iron_ingot'])
    ]
    ).transitionalItem('rainbow:submachine_blue').loops(1)
    //MP5A5
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:hk_mp5a5",HasBulletInBarrel:1b}'),'rainbow:submachine_blue',
        [
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:gray_dye']),    
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:gold_ingot'])
    ]
    ).transitionalItem('rainbow:submachine_blue').loops(1)
    //Voc
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:19,GunFireMode:"AUTO",GunId:"tacz:vector45",HasBulletInBarrel:1b}'),'rainbow:submachine_blue',
        [
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:black_dye']),    
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:submachine_blue').loops(1)
    //P90
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:41,GunFireMode:"AUTO",GunId:"tacz:p90",HasBulletInBarrel:1b}'),'rainbow:submachine_blue',
        [
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:brown_dye']),    
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:submachine_blue', ['rainbow:submachine_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:submachine_blue').loops(1)
    //DB2
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:2,GunFireMode:"BURST",GunId:"tacz:db_short",HasBulletInBarrel:1b}'),'rainbow:shotgun',
        [
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','minecraft:white_dye']),    
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','#minecraft:logs'])
    ]
    ).transitionalItem('rainbow:shotgun').loops(1)
    //DB4
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:2,GunFireMode:"SEMI",GunId:"tacz:db_long",HasBulletInBarrel:1b}'),'rainbow:shotgun',
        [
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','minecraft:light_gray_dye']),    
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','#minecraft:logs'])
    ]
    ).transitionalItem('rainbow:shotgun').loops(1)
    //M870
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"tacz:m870",HasBulletInBarrel:1b}'),'rainbow:shotgun',
        [
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','minecraft:gray_dye']),    
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','#minecraft:logs'])
    ]
    ).transitionalItem('rainbow:shotgun').loops(1)
    //AA12
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:8,GunFireMode:"SEMI",GunId:"tacz:aa12",HasBulletInBarrel:1b}'),'rainbow:shotgun',
        [
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','minecraft:black_dye']),    
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:shotgun', ['rainbow:shotgun','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:shotgun').loops(1)
    //SKS
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:10,GunFireMode:"SEMI",GunId:"tacz:sks_tactical",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:white_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //81-1
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:type_81",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:light_gray_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //95
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:qbz_95",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gray_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //AKM
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:ak47",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:black_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //HK416D
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:hk416d",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:brown_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //M4A1
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:m4a1",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:red_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //M16A1
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"tacz:m16a1",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:orange_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //G3
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"AUTO",GunId:"tacz:hk_g3",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:yellow_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //M16A4
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"BURST",GunId:"tacz:m16a4",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:lime_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //MK14
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:9,GunFireMode:"AUTO",GunId:"tacz:mk14",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:green_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //SCAR-L
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:scar_l",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:cyan_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //SCAR-H
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:20,GunFireMode:"SEMI",GunId:"tacz:scar_h",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:light_blue_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //AUG
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:30,GunFireMode:"AUTO",GunId:"tacz:aug",HasBulletInBarrel:1b}'),'rainbow:rifle_blue',
        [
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:blue_dye']),    
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:rifle_blue', ['rainbow:rifle_blue','minecraft:amethyst_shard'])
    ]
    ).transitionalItem('rainbow:rifle_blue').loops(1)
    //M249
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:75,GunFireMode:"AUTO",GunId:"tacz:m249",HasBulletInBarrel:1b}'),'rainbow:mechine',
        [
        event.recipes.createDeploying('rainbow:mechine', ['rainbow:mechine','minecraft:white_dye']),    
        event.recipes.createDeploying('rainbow:mechine', ['rainbow:mechine','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:mechine', ['rainbow:mechine','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:mechine', ['rainbow:mechine','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:mechine', ['rainbow:mechine','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:mechine').loops(1)
    //PRK
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:40,GunFireMode:"AUTO",GunId:"tacz:rpk",HasBulletInBarrel:1b}'),'rainbow:mechine',
        [
        event.recipes.createDeploying('rainbow:mechine', ['rainbow:mechine','minecraft:light_gray_dye']),    
        event.recipes.createDeploying('rainbow:mechine', ['rainbow:mechine','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:mechine', ['rainbow:mechine','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:mechine', ['rainbow:mechine','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:mechine', ['rainbow:mechine','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:mechine').loops(1)
    //M320榴弹
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"tacz:m320",HasBulletInBarrel:1b}'),'rainbow:heavy',
        [
        event.recipes.createDeploying('rainbow:heavy', ['rainbow:heavy','minecraft:white_dye']),    
        event.recipes.createDeploying('rainbow:heavy', ['rainbow:heavy','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:heavy', ['rainbow:heavy','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:heavy', ['rainbow:heavy','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:heavy', ['rainbow:heavy','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:heavy').loops(1)
    //RPG
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"tacz:rpg7",HasBulletInBarrel:1b}'),'rainbow:heavy',
        [
        event.recipes.createDeploying('rainbow:heavy', ['rainbow:heavy','minecraft:light_gray_dye']),    
        event.recipes.createDeploying('rainbow:heavy', ['rainbow:heavy','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:heavy', ['rainbow:heavy','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:heavy', ['rainbow:heavy','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:heavy', ['rainbow:heavy','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:heavy').loops(1)
    //M700
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"tacz:m700",HasBulletInBarrel:1b}'),'rainbow:sniper_blue',
        [
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:white_dye']),    
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:sniper_blue').loops(1)
    //M107
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:10,GunFireMode:"SEMI",GunId:"tacz:m107",HasBulletInBarrel:1b}'),'rainbow:sniper_blue',
        [
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:light_gray_dye']),    
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:sniper_blue').loops(1)
    //M95
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"tacz:m95",HasBulletInBarrel:1b}'),'rainbow:sniper_blue',
        [
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:gray_dye']),    
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:sniper_blue').loops(1)
    //AWM
    event.recipes.create.sequenced_assembly(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:5,GunFireMode:"SEMI",GunId:"tacz:ai_awp",HasBulletInBarrel:1b}'),'rainbow:sniper_blue',
        [
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:black_dye']),    
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','rainbow:super_mechanism']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:iron_ingot']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:gold_ingot']),
        event.recipes.createDeploying('rainbow:sniper_blue', ['rainbow:sniper_blue','minecraft:diamond'])
    ]
    ).transitionalItem('rainbow:sniper_blue').loops(1)
})
//覆盖生物战利品
/*ServerEvents.entityLootTables(event=>{
    event.addEntity('minecraft:hoglin',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('netherexp:hogham')
        })
    })
})*/
//添加生物战利品
ServerEvents.entityLootTables(event=>{
    //疣猪掉mod火腿
    event.modifyEntity('minecraft:hoglin',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('netherexp:hogham')
        })
    })
    //流浪商人掉绿宝石
    event.modifyEntity('minecraft:wandering_trader',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('minecraft:emerald').weight(1).count([1,2])
        })
    })
    //蟑螂710元素
    event.modifyEntity('alexsmobs:cockroach',Loot=>{
        Loot.addPool(pool=>{
            pool.addItem('rainbow:shit').weight(1).count([0,1])
        })
    })
})
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
MoreJSEvents.villagerTrades((event) => {
    //弹夹
    event.addTrade("armorer",1,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_1"}'));
    event.addTrade("armorer",1,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_1"}'));
    event.addTrade("armorer",1,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:sniper_extended_mag_1"}'));

    event.addTrade("armorer",2,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_2"}'));
    event.addTrade("armorer",2,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_2"}'));
    event.addTrade("armorer",2,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:sniper_extended_mag_2"}'));

    event.addTrade("armorer",3,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_3"}'));
    event.addTrade("armorer",3,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_3"}'));
    event.addTrade("armorer",3,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:sniper_extended_mag_3"}'));

    event.addTrade("armorer",4,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_i"}'));
    event.addTrade("armorer",4,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_hp"}'));

    event.addTrade("armorer",5,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_he"}'));
    event.addTrade("armorer",5,'rainbow:magazine',Item.of('tacz:attachment', '{AttachmentId:"tacz:ammo_mod_fmj"}'));

    //瞄具
    event.addTrade("cartographer",1,'rainbow:sight',Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_sro_dot"}'));
    event.addTrade("cartographer",1,'rainbow:sight',Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_rmr_dot"}'));
    event.addTrade("cartographer",1,'rainbow:sight',Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_t1"}'));

    event.addTrade("cartographer",2,'rainbow:sight',Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_uh1"}'));
    event.addTrade("cartographer",2,'rainbow:sight',Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_retro_2x"}'));
    event.addTrade("cartographer",2,'rainbow:sight',Item.of('tacz:attachment', '{AttachmentId:"tacz:sight_552"}'));

    event.addTrade("cartographer",3,'rainbow:sight',Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_acog_ta31"}'));

    event.addTrade("cartographer",4,'rainbow:sight',Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_elcan_4x"}'));
    event.addTrade("cartographer",4,'rainbow:sight',Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_lpvo_1_6"}'));

    event.addTrade("cartographer",5,'rainbow:sight',Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_standard_8x"}'));

    //枪托
    event.addTrade("leatherworker",1,'rainbow:buttstock',Item.of('tacz:attachment', '{AttachmentId:"tacz:oem_stock_heavy"}'));

    event.addTrade("leatherworker",2,'rainbow:buttstock',Item.of('tacz:attachment', '{AttachmentId:"tacz:oem_stock_light"}'));

    event.addTrade("leatherworker",3,'rainbow:buttstock',Item.of('tacz:attachment', '{AttachmentId:"tacz:oem_stock_tactical"}'));

    event.addTrade("leatherworker",4,'rainbow:buttstock',Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_tactical_ar"}'));
    event.addTrade("leatherworker",4,'rainbow:buttstock',Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_militech_b5"}'));

    event.addTrade("leatherworker",5,'rainbow:buttstock',Item.of('tacz:attachment', '{AttachmentId:"tacz:stock_carbon_bone_c5"}'));
    //握把
    event.addTrade("toolsmith",5,'rainbow:grip',Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_vertical_talon"}'));
    event.addTrade("toolsmith",5,'rainbow:grip',Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_vertical_military"}'));
    event.addTrade("toolsmith",5,'rainbow:grip',Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_vertical_ranger"}'));
    event.addTrade("toolsmith",5,'rainbow:grip',Item.of('tacz:attachment', '{AttachmentId:"tacz:grip_magpul_afg_2"}'));
    //枪口组件
    event.addTrade("weaponsmith",1,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:bayonet_6h3"}'));
    event.addTrade("weaponsmith",1,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:bayonet_m9"}'));
    event.addTrade("weaponsmith",1,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:deagle_golden_long_barrel"}'));

    event.addTrade("weaponsmith",2,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_ptilopsis"}'));
    event.addTrade("weaponsmith",2,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_mirage"}'));

    event.addTrade("weaponsmith",3,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_phantom_s1"}'));
    event.addTrade("weaponsmith",3,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_cthulhu"}'));
    event.addTrade("weaponsmith",3,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_pioneer"}'));
    event.addTrade("weaponsmith",3,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_cyclone_d2"}'));
    event.addTrade("weaponsmith",3,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_brake_trex"}'));
    event.addTrade("weaponsmith",3,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_compensator_trident"}'));
    event.addTrade("weaponsmith",3,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_knight_qd"}'));

    event.addTrade("weaponsmith",4,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_vulture"}'));

    event.addTrade("weaponsmith",5,'rainbow:muzzle',Item.of('tacz:attachment', '{AttachmentId:"tacz:muzzle_silencer_ursus"}'));
    //子弹模板
    event.addTrade("mason",5,'64x minecraft:emerald',"rainbow:shaped_mode");

    event.addTrade("mason",5,'64x minecraft:emerald',"rainbow:casings_mode");
});
// 监听伤害事件，实现免疫伤害
EntityEvents.hurt("player", event => {
    const player = event.entity;
    if (player.hasEffect("rainbow:democratic_save")) {
        event.cancel(); // 取消伤害
    }
});