const { askQuestions } = require('./input');
const { AppID } = require('../properties.json');
const client = require('discord-rich-presence')(AppID)

console.log("\nDiscord Rich Presence Manager");
console.log("Made by DemirK2");
console.log("https://github.com/DemirK2/Discord-Rich-Presence-Manager");
console.log("\nLoading...");

// Inputs
askQuestions([
    '\nEnter the "State"...\n',
    '\nEnter the "Details"...\n',
    '\nEnter the "LargeImageKey"...\n',
    '\nEnter the "LargeImageText"...\n'
])
.then (answer => {
    console.log("Connecting...");
    if (answer.length !== 4) {
        // Error
        console.log("Something went wrong!");
        setTimeout(() => {
            process.exit(1);
        }, 15000);
    } else {
        // Presence Manager
        client.updatePresence({
            state: answer[0],
            details: answer[1],
            startTimestamp: Date.now(),
            largeImageKey: answer[2],
            largeImageText: answer[3],
            instance: true
        });
        console.log("Connected!");
    }
});