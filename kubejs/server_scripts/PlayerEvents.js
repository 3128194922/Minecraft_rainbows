// 监听玩家每刻(tick)事件(每秒约20次触发)
/*PlayerEvents.tick((event) => {
  // 从事件对象中解构出玩家对象
  const { player } = event;

  // 检查玩家是否正在潜行(按住Shift键)并且脚下的方块是高草丛
  if (player.shiftKeyDown && player.block.id === "minecraft:tall_grass") {
    // 如果玩家当前没有隐身效果
    if (!player.hasEffect("invisibility")) {
      // 给玩家添加无限时间的隐身效果
      // 参数解释: 
      // "invisibility" - 效果类型(隐身)
      // -1 - 持续时间(刻)，-1表示无限
      // 0 - 效果等级(0为I级)
      // false - 是否显示粒子效果
      // false - 是否显示图标
      player.potionEffects.add("invisibility", -1, 0, false, false);
    }
  } else {
    // 如果不满足条件(不潜行或不在高草上)，移除隐身效果
    player.removeEffect("invisibility");
  }
});*/

//高草隐身优化算法，执行的代码块变少
let lastState = false;

PlayerEvents.tick((event) => {
  const { player } = event;
  const currentState = player.shiftKeyDown && player.block.id === "minecraft:tall_grass";
  
  // 只有当状态改变时才执行操作
  if (currentState !== lastState) {
    if (currentState) {
      if (!player.hasEffect("invisibility")) {
        player.potionEffects.add("invisibility", -1, 0, false, false);
      }
    } else {
      player.removeEffect("invisibility");
    }
    lastState = currentState;
  }
});
//粘液块平台
ItemEvents.rightClicked(event => {
  var the_player = event.getPlayer()
  var player_name = the_player.getName().getString()
  var the_server = event.getServer()
  
  if (event.getItem().getId() == "rainbow:slime_rod"&&event.getPlayer().shiftKeyDown) {

      the_server.runCommandSilent(`/execute at ${player_name} run fill ~-2 ~-1 ~-2 ~2 ~3 ~2 minecraft:slime_block replace air`)
      the_server.runCommandSilent(`/execute at ${player_name} run fill ~-1 ~0 ~-1 ~1 ~2 ~1 minecraft:air replace slime_block`)

      // 为右键的玩家发送信息
      the_player.setStatusMessage('救命之恩！')

      the_player.setItemInHand("main_hand",'minecraft:air')
  }
  else if(event.getItem().getId() == "rainbow:slime_rod")
    {
      the_server.runCommandSilent(`/execute as ${player_name} at @s run fill ~-1 ~-3 ~-1 ~1 ~-3 ~1 minecraft:slime_block replace air`)

      the_player.setStatusMessage('救命之恩！')

      the_player.setItemInHand("main_hand",'minecraft:air')
    }
})
//爆破之星
ItemEvents.rightClicked(event => {
  if (event.getItem().getId() == "minecraft:nether_star") {
      // 获取重要参数
      var the_player = event.getPlayer()
      event.level.createExplosion(the_player.x, the_player.y-1, the_player.z).explode()
  }
})
//拉屎行为
ItemEvents.rightClicked(event => {
  const { player, hand } = event;
  const heldItem = player.getHeldItem(hand);
  
  if (event.getItem().getId() == "minecraft:paper"&&player.shiftKeyDown) {
      // 获取重要参数
      
      heldItem.shrink(1); // 数量减1（如果为0则自动删除）
      player.setHeldItem(hand, heldItem); // 更新物品
      player.addItem("rainbow:shit")
      player.setStatusMessage('你拉屎了')
  }
})
//太刀冲刺
ItemEvents.rightClicked(event => {
  const player = event.player;

  // 检查玩家是否持有特定物品
  if (player.getMainHandItem().id === "smc:katana") {
      const lookVec = player.getLookAngle();
      const speed = 3; // 较慢的持续速度
      player.deltaMovement = lookVec.scale(speed);
      player.hurtMarked = true;
  }
});
//闹钟右键
ItemEvents.rightClicked(event => {
  const the_player = event.player;
  var player_name = the_player.getName().getString();
  var the_server = event.getServer();
  var time = event.level.dayTime();

  // 检查玩家是否持有特定物品
  if (the_player.getMainHandItem().id === 'minecraft:clock') {
    if(time <= 13000.0)
    {
      the_server.runCommandSilent(`/time set night`)
      the_server.tell(`${player_name} 通过时钟将时间调整到傍晚`)
    }
    else
    {
      the_server.runCommandSilent(`/time set day`)
      the_server.tell(`${player_name} 通过时钟将时间调整到清晨`)
    }
  }
});
//指南针右键
ItemEvents.rightClicked(event => {
  const moonPhaseList = ["满", "亏凸", "下弦", "残", "新", "峨嵋", "满", "满"];

  const { moonPhase } = event.level;

  const the_player = event.player;

  // 检查玩家是否持有特定物品
  if (the_player.getMainHandItem().id === 'minecraft:compass') {
    the_player.setStatusMessage(`今天的月像是${moonPhaseList[moonPhase]}月`)
  }
});
//传送门挑战
/*ItemEvents.rightClicked(event => {
  const player = event.player;
  const heldItem = player.getMainHandItem();
  const server = event.server;

  // 检查玩家是否持有传送门珍珠
  if (heldItem.id === 'gateways:gate_pearl') {
      // 获取玩家所在维度
      const dimension = player.level.dimension;
      if(dimension.toString() == "minecraft:the_end")
        {
          
        }
      else
      {
      // 向玩家发送反馈消息
      player.tell(`你当前位于维度 ${dimension} 不符合开启要求`);
      return;
      }
      server.runCommandSilent(`/say 玩家 ${player.name} 在维度 ${dimension} 使用了传送门珍珠`);

  }
});*/