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
    //黏液棒
    event.create("rainbow:slime_rod","sword").unstackable().glow(true).attackDamageBonus(0.0).attackDamageBaseline(0.0)
    //提尔锋
    event.create("rainbow:tyring","sword").unstackable().attackDamageBonus(3.0).attackDamageBaseline(0.0).maxDamage(511)
    //重锤
    event.create("rainbow:heavy_axe","axe").unstackable().attackDamageBonus(3.0).attackDamageBaseline(0.0).maxDamage(501)
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
//实体注册
StartupEvents.registry('entity_type', event => {
    event.create('rainbow:diamond_arrow', 'entityjs:arrow')

        /**
         * One-Off values set at the startup of the game.
         */

        .setKnockback(5) // 击退
        .setBaseDamage(16) // 伤害
        .clientTrackingRange(8) // Set client tracking range to 8
        .isAttackable(true) // Make the arrow attackable
        .sized(1, 1) // Set size of arrow entity to 1x1
        .updateInterval(3) // Set update interval to 3 ticks
        //Setting .noItem() here will result in the builder skipping the item build altogether
        //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
        //.noItem()
        .defaultHitGroundSoundEvent("minecraft:entity.arrow.hit") // Set default hit ground sound event
        .setWaterInertia(1) // Set water inertia to 1
        .mobCategory('misc') // Set mob category to 'misc'
        .item(item => {
            item.maxStackSize(64); // Set maximum stack size of arrow item to 64
        })
        .setDamageFunction(entity => {
            // Custom damage function based off the arrow entity
            return true
        })
        .shouldRenderAtSqrDistance(context => {
            const { entity, distanceToPlayer } = context;
            // Custom logic to determine if the arrow should render based on distance, for example, rendering only if distance is less than 100 blocks
            return distanceToPlayer < 100;
        })
        .tryPickup(context => {
            // Custom logic to determine if a player can pick up the arrow, for example, allowing only non-creative mode players to pick it up
            return !context.player.isCreative();
        })
        .lerpTo(context => {
            const { entity, yaw, x, y, z, teleport, posRotationIncrements, pitch } = context;
            // Custom lerping behavior, for example, teleporting the arrow to a new position
            entity.teleportTo(x, y, z);
        })
        .move(context => {
            const { entity, moverType, position } = context;
            // Custom movement logic, for example, applying velocity to the arrow
            entity.setDeltaMovement(0, 0.1, 0);
        })
        .onHitBlock(context => {
            const { entity, result } = context;
            // Custom behavior when the arrow hits a block, for example, spawning particles
            entity.getLevel().addParticle('minecraft:campfire_cosy_smoke', entity.getX(), entity.getY(), entity.getZ(), 0, 0, 0);
        })
        .playerTouch(context => {
            const { player, entity } = context;
            // Custom behavior when a player touches the arrow, for example, giving the player the arrow
            if (!entity.getLevel().isClientSide() && (entity.onGround() || entity.noPhysics) && entity.shakeTime <= 0) {
                player.take(entity, 1);
                entity.discard();
            }
        })
        .tick(entity => {
            // Custom tick logic, for example, checking if the arrow is in lava and setting it on fire
            if (entity.getLevel().getBlockState(entity.blockPosition()).getBlock().id == "minecraft:lava") {
                entity.setSecondsOnFire(5);
            }
        })
        .tickDespawn(entity => {
            // Custom logic for arrow despawn, for example, checking if the arrow has traveled a certain distance and despawning it
            if (entity.getOwner() == null) return
            if (entity.distanceToEntity(entity.getOwner()) > 100) {
                entity.remove('discarded');
            }
        })
        .textureLocation(entity => {
            //Change texture resource location depending on certain information about the arrow entity.
            //Accepts both a new ResourceLocation or a String representation.
            //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
            return "rainbow:textures/entity/diamond_arrow.png"
        })
});