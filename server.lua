local QBCore = exports['qb-core']:GetCoreObject()

QBCore.Functions.CreateCallback('qb-scoreboard:server:GetScoreboardData', function(_, cb)
    local totalPlayers = 0
    local policeCount = 1
    local jobsCount = {}
    local players = {}
    local src = source

    for _, v in pairs(QBCore.Functions.GetQBPlayers()) do
        if v then
            totalPlayers += 1

            if (v.PlayerData.job.name == "police" or v.PlayerData.job.name == "sheriff") and v.PlayerData.job.onduty then
                policeCount += 1
            end

			for _, b in pairs(Config.availableJobs) do
                if not jobsCount[b.name] then jobsCount[b.name] = {} jobsCount[b.name] = 0 end
				if (v.PlayerData.job.name == b.name) and ((not b.dutyRequired) or v.PlayerData.job.onduty) then
					jobsCount[b.name] += 1
					break
				end
			end

            players[v.PlayerData.source] = {}
            players[v.PlayerData.source].optin = QBCore.Functions.IsOptin(v.PlayerData.source)
        end
    end
    cb(totalPlayers, policeCount, jobsCount, players)
end)
