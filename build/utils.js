'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const enums_1 = require('./enums')
const parseCommnet = (commnetFromRequest) => {
  if (!isString(commnetFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commnetFromRequest
}
const parseDate = (dateFromRequest) => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}
const parseWeather = (weatherFromRequest) => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing Weather')
  }
  return weatherFromRequest
}
const paserVisibility = (visibilityFromRequest) => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}
const isWeather = (string) => {
  return Object.values(enums_1.Weather).includes(string)
}
const isVisibility = (string) => {
  return Object.values(enums_1.Visibility).includes(string)
}
const isString = (string) => {
  return typeof string === 'string'
}
const isDate = (date) => {
  return Boolean(Date.parse(date))
}
const toNewDiaryEntry = (object) => {
  const newEntry = {
    comment: parseCommnet(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: paserVisibility(object.visibility)
  }
  return newEntry
}
exports.default = toNewDiaryEntry
