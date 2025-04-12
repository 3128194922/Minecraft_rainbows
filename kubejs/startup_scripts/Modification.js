//火盆匣挖掘速度修改
BlockEvents.modification(e => {
    e.modify('netherexp:brazier_chest', block => {
      block.destroySpeed = 0.1
      block.hasCollision = false
    })
})
//棒棒糖
ItemEvents.modification(event=>{
  event.modify('smc:lollipop_broccoli', item =>{
      item.maxDamage = 3
  })
})
//瑞士军刀
ItemEvents.modification(event=>{
  event.modify('smc:swiss_army_knife', item =>{
      item.setMaxDamage(-1);
  })
})
//瑞士军刀
ItemEvents.modification(event=>{
  event.modify('smc:diamond_swiss_army_knife', item =>{
      item.setMaxDamage(-1);
  })
})
//瑞士军刀
ItemEvents.modification(event=>{
  event.modify('smc:netherite_swiss_army_knife', item =>{
      item.setMaxDamage(-1);
  })
})