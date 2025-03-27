// 监听伤害事件，实现免疫伤害
EntityEvents.hurt("player", event => {
    const player = event.entity;
    if (player.hasEffect("rainbow:democratic_save")) {
        event.cancel(); // 取消伤害
    }
});