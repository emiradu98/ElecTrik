
 
 /**
 * @api {get} companies Get Companies
 * @apiName Get Companies
 * @apiGroup Companies
 *
 * @apiHeaderExample  {json} Request Header:
        {
              "Authorization": Bearer
        }
 *
 * @apiSuccess {json} message json  A JSON object containing all companies
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *              {
 *                  companies: []
 *              }
 *
 * @apiError Unauthorized The user is not authorized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "unauthorized"
 *     }
 */

 
 
 /**
 * @api {get} companies/${id} Get Company
 * @apiName Get Company
 * @apiGroup Companies
 *
 * @apiHeaderExample  {json} Request Header:
        {
        "Authorization": Bearer
        }
 *
 * @apiParamExample {json} ID:
 * {
 *        "id": companyID
 * }
 *
 * @apiSuccess {json} message json  A JSON object containing the selected company
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *              {
 *                  company: {}
 *              }
 *
 * @apiError Unauthorized The user is not authorized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 NOT FOUND
 *     {
 *       "error": "company not found"
 *     }
 */

 
 /**
 * @api {delete} companies/${id} Delete Company
 * @apiName Delete Company
 * @apiGroup Companies
 *
 * @apiHeaderExample  {json} Request Header:
        {
              "Authorization": Bearer
        }
 *
 * @apiParamExample {json} ID:
 * {
 *        "id": companyID,
 *        "user_id": userID
 * }
 *
 * @apiSuccess {json} message json  Confirmation Message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *              {
 *                  message: 'Successfully removed'
 *              }
 *
 * @apiError CompanyNotFound The company doesn't exist.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "company not found"
 *     }
 */

 
 
 /**
 * @api {post} companies Create Company
 * @apiName Create Company
 * @apiGroup Companies
 *
 * @apiHeaderExample  {json} Request Header:
        {
              "Authorization": Bearer
        }
 *
 * @apiParamExample {json} ID:
 * {
 *        "companyName": string,
 *        "company_locations: [],
 *        "address": string,
 *        "userID": string,
 *        "contactNumber": number,
 *        "email": string,
 *        "type": string
 * }
 *
 * @apiSuccess {json} message json  Confirmation Message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *              {
 *                  message: 'Successfully created'
 *              }
 *
 * @apiError ValidationError Invalid values.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 406 NOT ACCEPTABLE
 *     {
 *       "error": "companyName needs to be between 3 and 25 characters"
 *     }
 */

 /**
 * @api {put} companies/${id} Update Company
 * @apiName Update Company
 * @apiGroup Companies
 *
 * @apiHeaderExample  {json} Request Header:
        {
              "Authorization": Bearer
        }
 *
 * @apiParamExample {json} ID:
 * {
 *        "companyName": string,
 *        "company_locations: [],
 *        "address": string,
 *        "userID": string,
 *        "contactNumber": number,
 *        "email": string,
 *        "type": string
 * }
 *
 * @apiSuccess {json} message json  Confirmation Message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *              {
 *                  message: 'Successfully created'
 *              }
 *
 * @apiError ValidationError Invalid values.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 406 NOT ACCEPTABLE
 *     {
 *       "error": "companyName needs to be between 3 and 25 characters"
 *     }
 */
