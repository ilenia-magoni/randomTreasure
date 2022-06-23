const cantrips =
  'Acid Splash, Blade Ward, Chill Touch, Dancing Lights, Druidcraft, Eldritich Blast, Fire Bolt, Friends, Guidance, Light, Magic Hand, Mending, Message, Minor Illusion, Poison Spray, Prestidigitation, Produce Flame, Ray of Frost, Resistance, Sacred Flame, Shillelagh, Shocking Grasp, Spare the Dying, Thaumaturgy, Thorn Whip, Vicious Mockery'.split(
    ', '
  );
const spells1 =
  "Alarm, Animal Friendship, Armor of Agathys, Arms of Hadar, Bane, Bless, Burning Hands, Charm Person, Chromatic Orb, Color Spray, Command, Compelled Duel, Comprehend Languages, Create or Destroy Water, Cure Wounds, Detect Evil and Good, Detect Magic, Detect Poison and Disease, Disguise Self, Dissonant Whispers, Divine Favor, Ensnaring Strike, Entangle, Expeditious Retreat, Faerie Fire, False Life, Ferather Fall, Find Familiar, Fog Cloud, Goodberry, Grease, Guiding Bolt, Hail of Thorns, Healing Word, Hellish Rebuke, Heroism, Hex, Hunter's Mark, Identify, Illusory Script, Inflict Wounds, Jump, Longstrider, Mage Armor, Magic Missile, Protection from Evil and Good, Purify Food and Drink, Ray of Sickness, Sanctuary, Searing Smite, Shield, Shield of Faith, Silent Image, Sleep, Speak with Animals, Tasha's Hideous Laughter, Tenser's Floating Disk, Thunderous Smite, Thunderwave, Unseen Servant, Witch Bolt, Wrathful Smite".split(
    ', '
  );
const spells2 =
  "Aid, Alter Self, Animal Messanger, Arcane Lock, Augury, Barkskin, Beast Sense, Blindness/Deafness, Blur, Branding Smite, Calm Emotions, Cloud of Daggers, Continual Flame, Cordon of Arrows, Crown of Madness, Darkness, Darkvision, Detect Thoughts, Enhance Ability, Enlarge/Reduce, Enthrall, Find Steed, Find Traps, Flame Blade, Flaming Sphere, Gentle Repose, Gust of Wind, Heat Metal, Hold Person, Invisibility, Knock, Lesser Restoration, Levitate, Locate Animals or Plants, Locate Object, Magic Mouth, Magic Weapon, Melf's Acid Arrow, Mirror Image, Misty Step, Moonbeam, Nystul's Magic Aura, Pass Wihtout Trace, Phantasmal Force, Prayer of Healing, Protection from Poison, Ray of Enfeeblement, Rope Trick, Scorching Ray, See Invisibility, Shatter, Silence, Spider Climb, Spike Growth, Spiritual Weapon, Suggestion, Warding Bond, Web, Zone of Truth, Animal Friendship, Armor of Agathys, Arms of Hadar, Bane, Bless, Burning Hands, Charm Person, Chromatic Orb, Color Spray, Command, Create or Destroy Water, Cure Wounds, Ensnaring Strike, False Life, Fog Cloud, Guiding Bolt, Hail of Thorns, Healing Word, Hellish Rebuke, Heroism, Inflict Wounds, Longstrider, Magic Missile, Ray of Sickness, Searing Smite, Sleep, Thunderwave, Witch Bolt".split(
    ', '
  );
const spells3 =
  "Animate Dead, Aura of Vitality, Beacon of Hope, Bestow Curse, Blinding Smite, Blink, Call Lightning, Clairvoyance, Conjure Animals, Conjure Barrage, Counterspell, Create Food and Water, Crusader's Mantle, Daylight, Dispel Magic, Elemental Weapon, Fear, Feign Death, Fireball, Fly, Glyph of Warding, Haste, Hunger of Hadar, Hypnotic Pattern, Leomund's Tiny Hut, Lightning Arrow, Lightning Bolt, Magic Circle, Major Image, Mass Healing Word, Meld Into Stone, Nondetection, Phantom Steed, Plant Growth, Protection from Energy, Remove Curse, Revivify, Sending, Sleet Storm, Slow, Speak with Dead, Speak with Plants, Spirit Guardians, Stinking Cloud, Tongues, Vampiric Touch, Water Breathing, Water Walk, Wind Wall, Aid, Animal Friendship, Animal Messenger, Armor of Agathys, Arms of Hadar, Bane, Bless, Blindness/Deafness, Branding Smite, Burning Hands, Charm Person, Chromatic Orb, Cloud of Daggers, Color Spray, Command, Cordon of Arrows, Create or Destroy Water, Cure Wounds, Enhance Ability, Ensnaring Strike, False Life, Flaming Sphere, Fog Cloud, Guiding Bolt, Hail of Thorns, Healing Word, Heat Metal, Hellish Rebuke, Heroism, Hex, Hold Person, Hunter's Mark, Inflict Wounds, Invisibility, Longstrider, Magic Missile, Melf's Acid Arrow, Moonbeam, Ray of Sickness, Scorching Ray, Searing Smite, Shatter, Sleep, Thunderwave, Witch Bolt".split(
    ', '
  );
const spells4 =
  "Arcane Eye, Aura of Life, Aura of Purity, Banishment, Blight, Compulsion, Confusion, Conjure Minor Elemental, Conjure Woodland Beings, Control Water, Death Ward, Dimension Door, Divination, Dominate Beast, Evard's Black Tentacles, Fabricate, Fire Shield, Freedom of Movement, Giant Insect, Grasping Vine, Greater Invisibility, Guardian of Faith, Hallucinatory Terrain, Ice Storm, Leomund's Secret Chest, Locate Creature, Mordenkainen's Faithful Hound, Mordenkainen's Private Sanctum, Otiluke's Resilient Sphere, Phantasmal Killer, Polymorph, Staggering Smite, Wall of Fire, Aid, Animal Friendship, Animal Messenger, Amimate Dead, Armor of Agathys, Arms of Hadar, Bane, Bestow Curse, Bless, Blindness/Deafness, Branding Smite, Burning Hands, Call Lightning, Charm Person, Chromatic Orb, Cloud of Daggers, Color Spray, Command, Cordon of Arrows, Counterspell, Create or Destroy Water, Cure Wounds, Dispel Magic, Enhance Ability, Ensnaring Strike, False Life, Fireball, Flame Blade, Flaming Sphere, Fly, Fog Cloud, Glyph of Warding, Guiding Bolt, Hail of Thorns, Healing Word, Heat Metal, Hellish Rebuke, Heroism, Hold Person, Inflict Wounds, Invisibility, Lightning Arrow, Lightning Bolt, Longstrider, Magic Circle, Magic Missile, Magic Weapon, Mass Healing Word, Melf's Acid Arrow, Moonbeam, Ray of Sickness, Scorching Ray, Searing Smite, Shatter, Sleep, Spirit Guardians, Spiritual Weapon, Thunderwave, Vampiric Touch, Witch Bolt".split(
    ', '
  );
const spells5 =
  "Animate Object, Antilife Shield, Awaken, Banishing Smite, Bigby's Hand, Circle of Power, Cloudkill, Commune, Commune with Nature, Cone of Cold, Conjure Elemental, Conjure Volley, Contact Other Plane, Contagion, Destructive Wave, Dispel Evil and Good, Dominate Person, Dream, Flame Strike, Geas, Greater Restoration, Hallow, Hold Monster, Insect Plague, Legend Lore, Mass Cure Wounds, Mislead, Modify Memory, Passwall, Planar Binding, Raise Dead, Rary's Telepathic Bond, Reincarnate, Scrying, Seeming, Swift Quiver, Telekinesis, Teleportation Circle, Tree Strider, Wall of Force, Wall of Stone, Aid, Animal Friendship, Animal Messenger, Amimate Dead, Armor of Agathys, Arms of Hadar, Bane, Banishment, Bestow Curse, Bless, Blight, Blindness/Deafness, Branding Smite, Burning Hands, Call Lightning, Charm Person, Chromatic Orb, Cloud of Daggers, Color Spray, Command, Confusion, Conjure Animals, Cordon of Arrows, Counterspell, Create or Destroy Water, Cure Wounds, Dispel Magic, Dominate Beast, Elemental Weapon, Enhance Ability, Ensnaring Strike, False Life, Fireball, Flaming Sphere, Fly, Fog Cloud, Glyph of Warding, Guiding Bolt, Hail of Thorns, Healing Word, Heat Metal, Hellish Rebuke, Heroism, Hex, Hold Person, Hunter's Mark, Ice Storm, Inflict Wounds, Invisibility, Lightning Arrow, Lightning Bolt, Longstrider, Magic Circle, Magic Missile, Mass Healing Word, Melf's Acid Arrow, Moonbeam, Mordenkainen's Private Sanctum, Phantasmal Killer, Ray of Sickness, Scorching Ray, Searing Smite, Shatter, Sleep, Spirit Guardians, Thunderwave, Vampiric Touch, Wall of Fire, Witch Bolt".split(
    ', '
  );
const spells6 =
  "Arcane Gate, Blade Barrier, Chain Lightning, Circle of Death, Conjure Fey, Create Undead, Disintegrate, Eyebite, Flesh to Stone, Forbiddance, Globe of Invulnerability, Guards and Wards, Harm, Heal, Heroes' Feast, Mass Suggestion, Move Earth, Otiluke's Freezing Sphere, Planar Ally, Programmed Illusion, Sunbeam, Transport via Plants, True Seeing, Wall of Ice, Wall of Thorns, Wind Walk, Aid, Animal Friendship, Animal Messenger, Amimate Dead, Animate Object, Armor of Agathys, Arms of Hadar, Bane, Banishment, Bestow Curse, Bigby's Hand, Bless, Blight, Blindness/Deafness, Branding Smite, Burning Hands, Call Lightning, Charm Person, Chromatic Orb, Cloud of Daggers, Cloudkill, Color Spray, Command, Cone of Cold, Confusion, Conjure Elemental, Conjure Minor Elemental, Conjure Woodland Beings, Cordon of Arrows, Counterspell, Create or Destroy Water, Cure Wounds, Dispel Magic, Dominate Beast, Dominate Person, Enhance Ability, Ensnaring Strike, False Life, Fireball, Flame Blade, Flame Strike, Flaming Sphere, Fly, Fog Cloud, Glyph of Warding, Guiding Bolt, Hail of Thorns, Healing Word, Heat Metal, Hellish Rebuke, Heroism, Hold Monster, Hold Person, Ice Storm, Inflict Wounds, Insect Plague, Invisibility, Lightning Arrow, Lightning Bolt, Longstrider, Magic Circle, Magic Missile, Magic Weapon, Major Image, Mass Cure Wounds, Mass Healing Word, Mass Suggestion, Melf's Acid Arrow, Modify Memory, Moonbeam, Mordenkainen's Private Sanctum, Phantasmal Killer, Planar Binding, Ray of Sickness, Scorching Ray, Searing Smite, Shatter, Sleep, Spirit Guardians, Spiritual Weapon, Thunderwave, Vampiric Touch, Wall of Fire, Witch Bolt".split(
    ', '
  );
const spells7 =
  "Conjure Celestial, Delayed Blast Fireball, Divine Word, Etherealness, Finger of Death, Fire Storm, Forcecage, Mirage Arcane, Mordenkainen's Magnificent Mansion, Mordenkainen's Sword, Prismatic Spray, Regenerate, Resurrection, Reverse Gravity, Sequester, Symbol, Teleport, Aid, Animal Friendship, Animal Messenger, Amimate Dead, Animate Object, Armor of Agathys, Arms of Hadar, Bane, Banishment, Bestow Curse, Bigby's Hand, Bless, Blight, Blindness/Deafness, Branding Smite, Burning Hands, Call Lightning, Chain Lightning, Charm Person, Chromatic Orb, Circle of Death, Cloud of Daggers, Cloudkill, Color Spray, Command, Cone of Cold, Confusion, Conjure Animals, Conjure Elemental, Conjure Fey, Cordon of Arrows, Counterspell, Create or Destroy Water, Create Undead, Cure Wounds, Disintegrate, Dispel Magic, Dominate Beast, Dominate Person, Elemental Weapon, Enhance Ability, Ensnaring Strike, False Life, Fireball, Flame Strike, Flaming Sphere, Fly, Fog Cloud, Geas, Globe of Invulnerability, Glyph of Warding, Guiding Bolt, Heal, Healing Word, Heat Metal, Hellish Rebuke, Heroism, Hold Monster, Hold Person, Ice Storm, Inflict Wounds, Insect Plague, Invisibility, Lightning Arrow, Lightning Bolt, Longstrider, Magic Circle, Magic Missile, Mass Cure Wounds, Mass Healing Word, Melf's Acid Arrow, Modify Memory, Moonbeam, Mordenkainen's Private Sanctum, Otiluke's Freezing Sphere, Phantasmal Killer, Planar Binding, Ray of Sickness, Scorching Ray, Searing Smite, Shatter, Sleep, Spirit Guardians, Thunderwave, Vampiric Touch, Wall of Fire, Wall of Ice, Wall of Thorns, Witch Bolt".split(
    ', '
  );
const spells8 =
  "Animal Shapes, Antimagic Field, Antipathy, Sympathy, Control Weather, Counterspell, Demiplane, Dominate Monster, Earthquake, Feeblemind, Glibness, Holy Aura, Incendiary Cloud, Maze, Mind Blank, Power Word Stun, Sunburst, Telepathy, Tsunami, Aid, Animal Friendship, Animal Messenger, Amimate Dead, Animate Object, Armor of Agathys, Arms of Hadar, Bane, Banishment, Bestow Curse, Bigby's Hand, Bless, Blight, Blindness/Deafness, Branding Smite, Burning Hands, Call Lightning, Chain Lightning, Charm Person, Chromatic Orb, Circle of Death, Cloud of Daggers, Cloudkill, Color Spray, Command, Cone of Cold, Confusion, Conjure Elemental, Conjure Fey, Conjure Minor Elemental, Conjure Woodland Beings, Cordon of Arrows, Counterspell, Create or Destroy Water, Create Undead, Cure Wounds, Delayed Blast Fireball, Disintegrate, Dispel Magic, Dominate Person, Enhance Ability, Ensnaring Strike, Etherealness, False Life, Fireball, Flame Blade, Flame Strike, Flaming Sphere, Fly, Fog Cloud, Globe of Invulnerability, Glyph of Warding, Guiding Bolt, Heal, Healing Word, Heat Metal, Hellish Rebuke, Heroism, Hold Monster, Hold Person, Ice Storm, Inflict Wounds, Insect Plague, Invisibility, Lightning Arrow, Lightning Bolt, Longstrider, Magic Circle, Magic Missile, Mass Cure Wounds, Mass Healing Word, Mass Suggestion, Melf's Acid Arrow, Modify Memory, Moonbeam, Mordenkainen's Private Sanctum, Otiluke's Freezing Sphere, Phantasmal Killer, Planar Binding, Ray of Sickness, Scorching Ray, Searing Smite, Shatter, Sleep, Spirit Guardians, Spiritual Weapon, Thunderwave, Vampiric Touch, Wall of Fire, Wall of Ice, Wall of Thorns, Witch Bolt".split(
    ', '
  );
const spells9 =
  "Astral projection, Foresight, Gate, Mass Heal, Meteor Swarm, Power Word Heal, Power Word Kill, Prismatic Wall, Storm of Vengeance, Time Stop, True Polymorph, True Resurrection, Weird, Aid, Animal Friendship, Animal Messenger, Amimate Dead, Animate Object, Armor of Agathys, Arms of Hadar, Bane, Banishment, Bestow Curse, Bigby's Hand, Bless, Blight, Blindness/Deafness, Branding Smite, Burning Hands, Call Lightning, Chain Lightning, Charm Person, Chromatic Orb, Circle of Death, Cloud of Daggers, Cloudkill, Color Spray, Command, Cone of Cold, Confusion, Conjure Animals, Conjure Celestial, Conjure Elemental, Conjure Fey, Cordon of Arrows, Counterspell, Create or Destroy Water, Create Undead, Cure Wounds, Delayed Blast Fireball, Disintegrate, Dispel Magic, Dominate Monster, Enhance Ability, Ensnaring Strike, False Life, Fireball, Flame Strike, Flaming Sphere, Fly, Fog Cloud, Geas, Globe of Invulnerability, Glyph of Warding, Guiding Bolt, Heal, Healing Word, Heat Metal, Hellish Rebuke, Heroism, Hold Monster, Hold Person, Ice Storm, Inflict Wounds, Insect Plague, Invisibility, Lightning Arrow, Lightning Bolt, Longstrider, Magic Circle, Magic Missile, Mass Cure Wounds, Mass Healing Word, Mass Suggestion, Melf's Acid Arrow, Modify Memory, Moonbeam, Mordenkainen's Private Sanctum, Otiluke's Freezing Sphere, Phantasmal Killer, Planar Binding, Ray of Sickness, Scorching Ray, Searing Smite, Shatter, Sleep, Spirit Guardians, Thunderwave, Vampiric Touch, Wall of Fire, Wall of Ice, Wall of Thorns, Witch Bolt".split(
    ', '
  );

export {
  spells1,
  spells2,
  spells3,
  spells4,
  spells5,
  spells6,
  spells7,
  spells8,
  spells9,
  cantrips,
};
