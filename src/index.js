
const express = require('express')

const mongoose = require('mongoose')
const programRouter = require('./routes/program')
const enrollmentDataRouter = require('./routes/enrollmentData')
const paymentRouter = require('./routes/payment')
const questionnaireSetRouter = require('./routes/questionnaireSet')
const testRouter = require('./routes/test')
const testQuestionRouter = require('./routes/testQuestion')
const userRouter = require('./routes/user')
const userQuestionnaireRouter = require('./routes/userQuestionnaire')
const userTestRouter = require('./routes/userTest')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(programRouter)
app.use(enrollmentDataRouter)
app.use(paymentRouter)
app.use(questionnaireSetRouter)
app.use(testRouter)
app.use(testQuestionRouter)
app.use(userRouter)
app.use(userQuestionnaireRouter)
app.use(userTestRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
})