Config = Config or {}

-- Open scoreboard key
Config.OpenKey = 'HOME' -- https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/

Config.Toggle = false -- If this is false the scoreboard stays open only when you hold the OpenKey button, if this is true the scoreboard will be openned and closed with the OpenKey button

-- Max Server Players
Config.MaxPlayers = GetConvarInt('sv_maxclients', 48) -- It returns 48 if it cant find the Convar Int

Config.availableJobs = {
    {
        name = "police",
        label = "Police",
        dutyRequired = true,
    },
    {
        name = "ambulance",
        label = "Ambulance",
        dutyRequired = true,
    },
    {
        name = "mechanic",
        label = "Machanic",
    },
}

-- Minimum Police for Actions
Config.IllegalActions = {
    {
        name = "CitizenKidnap",
        label = "Citizen kidnapping",
        minimumPolice = 4,
        busy = false,
    },
    {
        name = "storerobbery",
        label = "Store Robbery",
        minimumPolice = 4,
        busy = false,
    },
    {
        name = "Houserobbery",
        label = "House Robbery",
        minimumPolice = 4,
        busy = false,
    },
    {
        name = "atm",
        label = "ATM Robbery",
        minimumPolice = 4,
        busy = false,
    },
    {
        name = "jewellery",
        label = "Jewellery",
        minimumPolice = 6,
        busy = false,
    },
    {
        name = "fleeca",
        label = "Bank Robbery",
        minimumPolice = 6,
        busy = false,
    },
    {
        name = "paleto",
        label = "Paleto Bay Bank",
        minimumPolice = 7,
        busy = false,
    },
    {
        name = "art_rob",
        label = "ART Robbery",
        minimumPolice = 7,
        busy = false,
    },
    {
        name = "bobcat",
        label = "Bobcat Robbery",
        minimumPolice = 7,
        busy = false,
    },
    {
        name = "Humanlabs",
        label = "Humanlabs Robbery",
        minimumPolice = 10,
        busy = false,
    },
    {
        name = "Yachtrobbery",
        label = "Yacht Robbery",
        minimumPolice = 8,
        busy = false,
    },
    {
        name = "pacific",
        label = "Pacific Bank",
        minimumPolice = 10,
        busy = false,
    },
    {
        name = "PoliceKidnap",
        label = "Police kidnapping",
        minimumPolice = 15,
        busy = false,
    },
}

-- Show ID's for all players or Opted in Staff
Config.ShowIDforALL = false
