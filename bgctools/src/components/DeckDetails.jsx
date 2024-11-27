import DeckMain from "./DeckMain";

const DECKDETAILS = [
  {
    deckID: "owhite",
    deckColour: "White",
    isOathsworn: true,
    deck: [
      {
        cardID: "owhite0",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite1",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite2",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite3",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite4",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite5",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite6",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite7",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite8",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite9",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite10",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite11",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite12",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite13",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite14",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite15",
        value: 2,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite16",
        value: 2,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "owhite17",
        value: 2,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
    ],
  },
  {
    deckID: "oyellow",
    deckColour: "Yellow",
    isOathsworn: true,
    deck: [
      {
        cardID: "oyellow0",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow1",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow2",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow3",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow4",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow5",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow6",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow7",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow8",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow9",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow10",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow11",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow12",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow13",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow14",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow15",
        value: 3,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow16",
        value: 3,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oyellow17",
        value: 3,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
    ],
  },
  {
    deckID: "ored",
    deckColour: "Red",
    isOathsworn: true,
    deck: [
      {
        cardID: "ored0",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored1",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored2",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored3",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored4",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored5",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored6",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored7",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored8",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored9",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored10",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored11",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored12",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored13",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored14",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored15",
        value: 4,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored16",
        value: 4,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ored17",
        value: 4,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
    ],
  },
  {
    deckID: "oblack",
    deckColour: "Black",
    isOathsworn: true,
    deck: [
      {
        cardID: "oblack0",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack1",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack2",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack3",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack4",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack5",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack6",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack7",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack8",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack9",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack10",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack11",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack12",
        value: 4,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack13",
        value: 4,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack14",
        value: 4,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack15",
        value: 5,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack16",
        value: 5,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "oblack17",
        value: 5,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
    ],
  },
  {
    deckID: "ewhite",
    deckColour: "White",
    isOathsworn: false,
    deck: [
      {
        cardID: "ewhite0",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite1",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite2",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite3",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite4",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite5",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite6",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite7",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite8",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite9",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite10",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite11",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite12",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite13",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite14",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite15",
        value: 2,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite16",
        value: 2,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ewhite17",
        value: 2,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
    ],
  },
  {
    deckID: "eyellow",
    deckColour: "Yellow",
    isOathsworn: false,
    deck: [
      {
        cardID: "eyellow0",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow1",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow2",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow3",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow4",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow5",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow6",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow7",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow8",
        value: 1,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow9",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow10",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow11",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow12",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow13",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow14",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow15",
        value: 3,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow16",
        value: 3,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eyellow17",
        value: 3,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
    ],
  },
  {
    deckID: "ered",
    deckColour: "Red",
    isOathsworn: false,
    deck: [
      {
        cardID: "ered0",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered1",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered2",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered3",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered4",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered5",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered6",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered7",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered8",
        value: 2,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered9",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered10",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered11",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered12",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered13",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered14",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered15",
        value: 4,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered16",
        value: 4,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "ered17",
        value: 4,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
    ],
  },
  {
    deckID: "eblack",
    deckColour: "Black",
    isOathsworn: false,
    deck: [
      {
        cardID: "eblack0",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack1",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack2",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack3",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack4",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack5",
        value: 0,
        description: "miss",
        isCrit: false,
        isMiss: true,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack6",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack7",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack8",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack9",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack10",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack11",
        value: 3,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack12",
        value: 4,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack13",
        value: 4,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack14",
        value: 4,
        description: "hit",
        isCrit: false,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack15",
        value: 5,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack16",
        value: 5,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
      {
        cardID: "eblack17",
        value: 5,
        description: "hit",
        isCrit: true,
        isMiss: false,
        isDealt: false,
        isActive: false,
        isSelected: false, drawOrder: 0
      },
    ],
  },
];

export default function DeckDetails() {
  return <DeckMain DECKS={DECKDETAILS} />;
}
