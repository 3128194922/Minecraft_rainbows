//火盆匣挖掘速度修改
BlockEvents.modification(e => {
    e.modify('netherexp:brazier_chest', block => {
      block.destroySpeed = 0.1
      block.hasCollision = false
    })
})