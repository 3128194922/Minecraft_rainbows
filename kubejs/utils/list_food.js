Ingredient.all.itemIds.forEach(itemId=>{
    if(Item.of(itemId).item.foodProperties)
    console.log(Item.of(itemId).item.foodProperties.getNutrition().toString()+"#"+itemId)
    })