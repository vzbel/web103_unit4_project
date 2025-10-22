export const classes = [
  {
    name: "wizard",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67ac9192-773b-4a2c-86a5-22816e03bb10/d7ksr69-fd6af9f7-39e8-4a3b-9f96-1c5d6557e875.png/v1/fill/w_1280,h_1494,q_80,strp/16x16_wizard_sprite_by_obinsun_d7ksr69-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NCIsInBhdGgiOiIvZi82N2FjOTE5Mi03NzNiLTRhMmMtODZhNS0yMjgxNmUwM2JiMTAvZDdrc3I2OS1mZDZhZjlmNy0zOWU4LTRhM2ItOWY5Ni0xYzVkNjU1N2U4NzUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.miW8aNRZq7IBiRwDecM9osSvNYfdViVh-q26VLKwNeU",
    coinPrice: 40,
    color: "bg-blue-200",
  },
  {
    name: "elf",
    img: "https://files.d20.io/marketplace/2043157/CMkzuyigwYQhU73ugnfpMQ/med.png?1632862655580",
    coinPrice: 20,
    color: "bg-red-100",
  },
  {
    name: "warrior",
    img: "https://img.itch.zone/aW1hZ2UvNjcyNzAyLzM2NzM1MDAuZ2lm/347x500/DW4pW7.gif",
    coinPrice: 10,
    color: "bg-yellow-200",
  },
  {
    name: "healer",
    img: "https://imgcdn.stablediffusionweb.com/2025/8/27/54119e3f-aee6-4c15-9e3e-b55a5a171a72.jpg",
    coinPrice: 40,
    color: "bg-green-100",
  },
];

export const weapons = [
  {
    name: "staff",
    img: "https://static.vecteezy.com/system/resources/thumbnails/029/722/732/small_2x/pixelated-magic-staff-game-equipment-png.png",
    coinPrice: 10,
  },
  {
    name: "bow",
    img: "https://forums.terraria.org/index.php?attachments/pixil-frame-0-png.301944/",
    coinPrice: 30,
  },
  {
    name: "sword",
    img: "https://art.pixilart.com/e37e525c4bf9d0b.png",
    coinPrice: 20,
  },
  {
    name: "healing staff",
    img: "https://pg3d.wiki.gg/images/Healingstaffnew.png?480406",
    coinPrice: 40,
  },
];

export const abilities = [
  {
    name: "blue fire",
    img: "https://wallpapers.com/images/hd/blue-fire-magic-spell-png-bwi41-gxqx1fyaalhtlufc.jpg",
    coinPrice: 10,
  },
  {
    name: "heal",
    img: "https://bg3.wiki/w/images/thumb/3/36/Heal.webp/300px-Heal.webp.png",
    coinPrice: 20,
  },
  {
    name: "invisibility",
    img: "https://bg3.wiki/w/images/thumb/1/19/Invisibility_spell.webp/300px-Invisibility_spell.webp.png",
    coinPrice: 100,
  },
  {
    name: "scratch",
    img: "https://cdn1.iconfinder.com/data/icons/classes-and-magic-abilities-fantasy-game/600/skill_ability_action_effect_spell_attack_wave_strike-512.png",
    coinPrice: 10,
  },
];

export const getImage = (fromList, name) => {
  if (fromList === "classes") {
    return classes.find((item) => item.name === name).img;
  } else if (fromList === "weapons") {
    return weapons.find((item) => item.name === name).img;
  } else if (fromList === "abilities") {
    return abilities.find((item) => item.name === name).img;
  }
};

export const invalidCombinations = [
  {class: "wizard", weapon: "sword", ability: "heal"},
  {class: "healer", weapon: "bow", ability: "scratch"} 
];

export const isInvalidCombination = (charClass, weapon, ability) => {
  return invalidCombinations.some(
    combo =>
      combo.class === charClass &&
      combo.weapon === weapon && 
      combo.ability === ability
  );
}
