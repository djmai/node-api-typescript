import { NewDiaryEntry } from './types'
import { Visibility, Weather } from './enums'

const parseCommnet = (commnetFromRequest: any): string => {
  if (!isString(commnetFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commnetFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing Weather')
  }
  return weatherFromRequest
}

const paserVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

const isWeather = (string: any): boolean => {
  return Object.values(Weather).includes(string)
}

const isVisibility = (string: any): boolean => {
  return Object.values(Visibility).includes(string)
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseCommnet(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: paserVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
