
 
 /**
 * @api {post} oauth2/token Auth Details
 * @apiName Token
 * @apiGroup Auth
 *
 * @apiHeaderExample  {json} Request Body:
{
  "client_id": "string",
  "client_secret": "string",
  "grant_type": "password",
  "username": "string",
  "password": "string",
  "refresh_token": "string",
  "code": "string"
}
 *
 * @apiSuccess {json} oauth2 token  A JSON object containing authentication details
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      create token
 *
 * @apiError UserNotFound The user is not authorized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "client not found"
 *     }
 */

 
 /**
 * @api {post} oauth2/token Forgot Password
 * @apiName Forgot Password
 * @apiGroup Auth
 *
 * @apiHeaderExample  {json} Request Body:
                {
                    "client_id": "string",
                    "client_secret": "string",
                    "grant_type": "password",
                    "username": "string",
                }
 *
 * @apiSuccess {json} oauth2 token  A JSON object containing forgot password request details.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *          forgot password
 *
 * @apiError UserNotFound The user is not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "client not found"
 *     }
 */



/**
 * @api {post} oauth2/reset-password Reset Password
 * @apiName Reset Password
 * @apiGroup Auth
 *
 * @apiHeaderExample  {json} Request Body:
{
  "client_id": "string",
  "client_secret": "string",
  "grant_type": "client_credentials",
  "email": "string",
  "resetPasswordToken": "string",
  "newPassword": "string"
}
 *
 * @apiSuccess {json} oauth2 token  A JSON object containing reset password request details.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *           reset password
 *
 * @apiError UserNotFound The user is not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
        {
            "error": true,
            "errorType": "other",
            "lang": "en",
            "errors": {
                "message": "Client not found"
            }
        }
 */



/**
 * @api {post} oauth2/logout Logout User
 * @apiName Logout
 * @apiGroup Auth
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      delete user tokens
 *
 * @apiError UserNotFound The user is not authorized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *          
 */


