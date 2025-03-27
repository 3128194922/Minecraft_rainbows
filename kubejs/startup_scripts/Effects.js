//民主庇佑
StartupEvents.registry("mob_effect", event => {
    event.create("rainbow:democratic_save")
        .beneficial() // 标记为有益效果
        .color(0xFFFF00) // 设置颜色为黄色
});