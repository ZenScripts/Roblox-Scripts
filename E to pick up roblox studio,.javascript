
Script 1 :

local ProximityPrompt = script.Parent
local Item = game.ServerStorage.Tools:FindFirstChild("ClassicSword") -- Change YourToolName to whatever your tool is called
ProximityPrompt.Triggered:Connect(function(player)
    Item.Parent = player.Backpack
end)


Script 2: 

local toolsFolder = game:GetService("ServerStorage"):FindFirstChild("Tools") -- Change "Tools" to whatever your folder is called which has your tools in
local dataStoreService = game:GetService("DataStoreService")
local dataStore = dataStoreService:GetDataStore("backpacks")

game.Players.PlayerAdded:Connect(function(plr)
    local backpackData = dataStore:GetAsync(plr.UserId)

    local backpack = plr:WaitForChild("Backpack")
    local startgear = plr:WaitForChild("StarterGear")

    if backpackData ~= nil then
        for i, v in pairs(backpackData) do
            if toolsFolder:FindFirstChild(v) and backpack:FindFirstChild(v) == nil and startgear:FindFirstChild(v) == nil then
                toolsFolder[v]:Clone().Parent = backpack
                toolsFolder[v]:Clone().Parent = startgear
            end
        end
    end

    plr.CharacterRemoving:Connect(function(char)
        char:WaitForChild("Humanoid"):UnequipTools()
    end)
end)

game.Players.PlayerRemoving:Connect(function(plr)
    local backpackTable = {}

    for i, v in pairs(plr.Backpack:GetChildren()) do
        table.insert(backpackTable, v.Name)
    end

    if backpackTable ~= nil then
        dataStore:SetAsync(plr.UserId, backpackTable)
    end
end)
