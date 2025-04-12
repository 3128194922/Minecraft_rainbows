MoreJSEvents.updateVillagerOffers((event) => {
    /**
     * event.getEntity() // Returns the villager entity.
     * event.getVillagerData() // Returns the villager data.
     * event.isProfession(profession) // Returns true if the villager has the given profession.
     * event.getVillagerLevel() // Returns the villager level.
     * event.getProfession() // Returns the villager profession.
     * event.getOffers() // Returns the current offers the villager has.
     * event.getAddedOffers() // Returns the offers that were added to the villager.
     * event.getUsedTrades() // Returns the trades that were used to generate the new offers.
     * event.deleteAddedOffers() // Deletes all added offers.
     * event.addRandomOffer() // Adds a random offer to the villager. Can return null if no offer was added.
     * event.addRandomOffer(trades) // Adds a random offer to the villager by given trades. Can return null if no offer was added.
     * event.getVillagerTrades(profession) // Returns all trades for the given profession.
     * event.getVillagerTrades(profession, level) // Returns all trades for the given profession and level.
     * event.getWandererTrades() // Returns all trades for the wanderer.
     * event.getWandererTrades(level) // Returns all trades for the wanderer and level (1 or 2).
     */

    // Example: Add a random trade to the villager from another profession.
    event.getOffers().forEach(loots=>{
        loots.getFirstInput().setCount(Math.ceil(loots.getFirstInput().getCount() * 10));
    })
});