var fs = require('fs');

var result = fs.readFileSync('adventOfCode/day4.txt','utf8')

var sleepMinutes = {}
var logs = result.split('\r\n')

// Part 1
logs = logs.sort()
let guardId = 0;
let startSleepMinute = 0
let endSleepMinute = 0

for (let log of logs){
    let [year ,timestamp, comment, id] = log.split(" ")
    if (comment.toLowerCase() === "guard") {
        guardId = parseInt(id.slice(1)) 

        if (sleepMinutes[guardId] == undefined) {
            sleepMinutes[guardId] = {}
            for (let i = 0; i < 60; i++){
                sleepMinutes[guardId][i] = 0
            }
        }
    }

    if (comment.toLowerCase() === "falls") {
        startSleepMinute = parseInt(timestamp.split(":")[1].slice(0,2));  
    }

    if (comment.toLowerCase() === "wakes") {
        endSleepMinute = parseInt(timestamp.split(":")[1].slice(0,2));
        for (let i = startSleepMinute; i < endSleepMinute; i++){
            sleepMinutes[guardId][i]++
        }
    }
}

const mostAsleepGuard = Object.keys(sleepMinutes).map(guardSleepKey => {
    const guardSleep = sleepMinutes[guardSleepKey];
    const totalSleep = Object.values(guardSleep).reduce((prev, curr) => prev + curr, 0);

    return {
        guardId: guardSleepKey,
        totalSleep: totalSleep
    };
}).sort((a, b) => b.totalSleep - a.totalSleep)[0].guardId;

let mostAsleepMinute;
let currentMostAsleepMinute = 0;

Object.keys((sleepMinutes[mostAsleepGuard])).map(minute => {
    if (sleepMinutes[mostAsleepGuard][minute] > currentMostAsleepMinute) {
        currentMostAsleepMinute = sleepMinutes[mostAsleepGuard][minute];
        mostAsleepMinute = minute;
    }
});

console.log(mostAsleepGuard * mostAsleepMinute)


// Part2

let mostFrequentSleepMinute
let guardSleepID
let mostSleepCount = 0

Object.keys(sleepMinutes).map(guard => {
   let guardSleep = sleepMinutes[guard]
   Object.keys(guardSleep).map(minute => {
        if (mostSleepCount < guardSleep[minute]){
            guardSleepID = guard;
            mostFrequentSleepMinute = minute;
            mostSleepCount = guardSleep[minute];
        }
   });
});

console.log(mostFrequentSleepMinute * guardSleepID)