import { Controller } from '../../../../presentation/protocols'
import { SignUpController } from '../../../../presentation/controller/signup/signup-controller'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '../../usercases/authentication/db-authentication-factory'
import { makeDbAddAccount } from '../../usercases/add-account/db-add-account-factory'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
