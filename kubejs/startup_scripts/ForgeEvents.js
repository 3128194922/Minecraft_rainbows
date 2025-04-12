//提尔锋伤害逻辑
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent",event=>{
        //获取被攻击者
        const victim = event.entity;
        //获取攻击者
        const attacker = event.source;
        
        try{
                //看看伤害是不是实体打的
                if(attacker.getActual() != null && attacker.getPlayer().getItemInHand("main_hand"))
                        {
                                //看看是不是提尔锋打的（这么看你要是快捷换主副手可以虚空伤害）
                                if(attacker.getPlayer().getItemInHand("main_hand").id == "rainbow:tyring" || attacker.getPlayer().getItemInHand("off_hand").id == "rainbow:tyring")
                                        {
                                                event.setAmount(event.getAmount()+event.getAmount()*victim.getArmorValue())
                                        }
                        }
                else
                {
                        return event.getAmount();
                }
        }catch(err){
                //console.error(err);
        }
})
//斩魔剑
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent",event=>{
        //获取攻击者
        const attacker = event.source;
        const damage = attacker.getPlayer().getItemInHand("main_hand").getDamageValue();
        try{
                //看看伤害是不是实体打的
                if(attacker.getActual() != null && attacker.getPlayer().getItemInHand("main_hand"))
                        {
                                //看看是不是提尔锋打的（这么看你要是快捷换主副手可以虚空伤害）
                                if(attacker.getPlayer().getItemInHand("main_hand").id == "fromtheshadows:devil_splitter" || attacker.getPlayer().getItemInHand("off_hand").id == "fromtheshadows:devil_splitter")
                                        {
                                                event.setAmount(event.getAmount()+damage/30.0)
                                        }
                        }
                else
                {
                        return event.getAmount();
                }
        }catch(err){
                //console.error(err);
        }
})
//重锤
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent",event=>{
        //获取攻击者
        const attacker = event.source;
        try{
                //看看伤害是不是实体打的
                if(attacker.getActual() != null && attacker.getPlayer().getItemInHand("main_hand"))
                        {
                                //看看是不是提尔锋打的（这么看你要是快捷换主副手可以虚空伤害）
                                if(attacker.getPlayer().getItemInHand("main_hand").id == "rainbow:heavy_axe" || attacker.getPlayer().getItemInHand("off_hand").id == "rainbow:heavy_axe")
                                        {
                                                event.setAmount(event.getAmount()+(Math.abs(attacker.actual.getDeltaMovement().y()).toFixed(1)-0.1)*40)
                                        }
                                        //重置玩家跌落高度
                                        attacker.player.fallDistance = 0;
                        }
                else
                {
                        return event.getAmount();
                }
        }catch(err){
                //console.error(err);
        }
})
//玩不动，先放着，现在的效果是民主保佑处死非玩家单位
// 监听 MobEffectEvent.Expired 事件（自定义效果结束）
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.MobEffectEvent$Expired", event => {
        const player = event.entity;
        // 获取效果实例
        const effectInstance = event.getEffectInstance();
        // 检查是否是 rainbow:democratic_save 效果
        const effectId = effectInstance.getEffect().getDescriptionId();
        if(effectId === "effect.rainbow.democratic_save")
                {
                        player.kill();
                }
    });

//玩不动，先放着，现在的效果是民主保佑处死非玩家单位
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.MobEffectEvent$Expired", event => {
        const player = event.entity;
        // 获取效果实例
        const effectInstance = event.getEffectInstance();
        // 检查是否是 rainbow:democratic_save 效果
        const effectId = effectInstance.getEffect().getDescriptionId();
        if(effectId === "effect.rainbow.democratic_save")
                {
                        player.kill();
                }
    });