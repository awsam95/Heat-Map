let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'

let req = new XMLHttpRequest();

let baseTemp
let values =[]

let xScale
let yScale

let xAxis
let yAxis

let width = 1200
let height = 600
let padding = 60