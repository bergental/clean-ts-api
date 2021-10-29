import {
  badRequestComponent,
  serverErrorComponent,
  unauthorizedComponent,
  notFoundComponent,
  forbiddenComponent
} from './components/'
import { apiKeyAuthSchema } from './schemas/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest: badRequestComponent,
  serverError: serverErrorComponent,
  unauthorized: unauthorizedComponent,
  notFound: notFoundComponent,
  forbidden: forbiddenComponent
}
