// 监听伤害事件，实现免疫伤害
EntityEvents.hurt("player", event => {
    const player = event.entity;
    if (player.hasEffect("rainbow:democratic_save")) {
        event.cancel(); // 取消伤害
    }
});

//监听是否被黏液棒打
EntityEvents.hurt(event => {
    //获取被攻击者
    const victim = event.entity; 
    //获取攻击者
    const attacker = event.source;
    //判断是否正确获取对象
    if(attacker.player != null)
        {
            if(attacker.player.getMainHandItem() != null && attacker && victim)
                {//判断是不是被黏液棒打
                    if(attacker.player.getItemBySlot("mainhand").id == "rainbow:slime_rod")
                        {
                            var armor = new Array("chest","feet","head","legs")
                            for(var item=0;item<armor.length;item++)
                            {
                                victim.block.popItem(victim.getItemBySlot(armor[item]).id)
                                victim.getItemBySlot(armor[item]).shrink(1)
                            }
                            attacker.player.getItemBySlot("mainhand").shrink(1)
                        }
                }
        }
  })
