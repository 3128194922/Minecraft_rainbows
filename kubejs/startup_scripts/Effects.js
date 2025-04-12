const $EffectClass = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

//民主庇佑
StartupEvents.registry("mob_effect", event => {
    event.create("rainbow:democratic_save")
        .beneficial() // 标记为有益效果
        .color(0xFFFF00) // 设置颜色为黄色
});
//不祥之瓶
StartupEvents.registry("potion", event => {
    event.create("omen")
    .addEffect($EffectClass("bad_omen",60))
});