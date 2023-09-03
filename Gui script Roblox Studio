script.Parent.MouseButton1Click:Connect(function(clicked)
    Gui:TweenPosition(UDim2.new(0,0,1,0), "InOut", "Sine",3.5)
    for i = 1,25 do
        wait (0.05)
        game.Lighting.Blur.Size = game.Lighting.Blur.Size - 3
    end
end)


Script 2 (Credits Button Script):

script.Parent.MouseButton1Click:Connect(function()
    script.Parent.Parent.Parent.CreditsFrame.Visible = not script.Parent.Parent.Parent.CreditsFrame.Visible

    if script.Parent.Parent.Parent.CreditsFrame.Visible then
        script.Parent.Parent.Visible = false
        else script.Parent.Parent.Visible = true 
    end
end)


Script 3 (Credits Close Script):

script.Parent.MouseButton1Click:Connect(function()
    script.Parent.Parent.Visible = false 

    if not script.Parent.Parent.Visible then
        script.Parent.Parent.Parent.MainFrame.Visible = true
    end
end)
