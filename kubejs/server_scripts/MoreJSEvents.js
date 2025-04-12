//村民交易
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
    //牧师
    event.addTrade("cleric",5,'minecraft:emerald',Item.of('minecraft:splash_potion', '{Potion:"goblintraders:powerful_instant_health"}'));
    event.addTrade("cleric",5,'minecraft:emerald',Item.of('minecraft:splash_potion', '{Potion:"minecraft:strong_harming"}'));
    //屠夫
    event.addTrade("butcher",5,'minecraft:emerald','youkaishomecoming:flesh');
    //渔夫
    event.addTrade("fisherman",5,'32x minecraft:emerald','netherexp:brazier_chest');
    //农民
    event.addTrade("butcher",5,'minecraft:emerald','collectorsreap:land_and_sea_burger');
    //牧羊人
    event.addTrade("shepherd",5,'64x minecraft:emerald','minecraft:chicken_spawn_egg');
    event.addTrade("shepherd",5,'64x minecraft:emerald','minecraft:cow_spawn_egg');
    event.addTrade("shepherd",5,'64x minecraft:emerald','minecraft:sheep_spawn_egg');
    event.addTrade("shepherd",5,'64x minecraft:emerald','minecraft:pig_spawn_egg');
});