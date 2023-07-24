import { dayConversion, monthConversion } from "./converting"

function progress() {
  const current = new Date()
	const currentTime: number = current.getTime()
	const year: number = current.getFullYear()

	const startDate = `Jan 1 ${year}`
	const endDate = `Jan 1 ${year + 1}`

	const total: number = new Date(endDate).getTime() - new Date(startDate).getTime() // Weight as 100%
	const time: number = currentTime - new Date(startDate).getTime() // Current time in this year!

	const calculation = (time / total) * 100

	const percent: number = Math.floor(calculation * 100) / 100
  const date = `${dayConversion(current.getDay())} ${current.getDate()} ${monthConversion(current.getMonth())} ${year}`

  const returnData = {
    percent: percent,
    date: date
  }

	return returnData
}

export default progress
