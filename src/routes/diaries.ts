import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitvieInfo())
})

router.post('/', (req, res) => {
  try {
    // const { date, weather, visibility, comment } = req.body
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDairy(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e) {
    // res.status(400).send(e.message)
    if (e instanceof Error) {
      // ? TypeScript knows err is Error
      res.status(400).send(e.message)
    }
  }
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary != null) ? res.send(diary) : res.sendStatus(404)
})

export default router
