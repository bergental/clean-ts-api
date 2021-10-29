import {
  accountSchema,
  errorSchema,
  loginParamsSchema,
  addSurveyParamsSchema,
  saveSurveyResultParamsSchema,
  surveySchema,
  surveyAnswerSchema,
  surveysSchema,
  signupParamsSchema,
  surveyResultSchema
} from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signupParams: signupParamsSchema,
  addSurveyParams: addSurveyParamsSchema,
  saveSurveyResultParams: saveSurveyResultParamsSchema,
  error: errorSchema,
  survey: surveySchema,
  surveyAnswer: surveyAnswerSchema,
  surveys: surveysSchema,
  surveyResult: surveyResultSchema
}
