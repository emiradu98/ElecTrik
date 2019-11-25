
 
 /**
 * @api {get} companies Get Companies
 * @apiName Get Companies
 * @apiGroup Compnaies
 *
 * @apiHeaderExample  {json} Request Header:
        {
        "Authorization": Bearer
        }
 *
 * @apiSuccess {json} oauth2 token  A JSON object containing all companies
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *              {
 *                  companies: []
 *              }
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
 * @api {get} companies/${id} Get Company
 * @apiName Get Company
 * @apiGroup Compnaies
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
 * @apiSuccess {json} oauth2 token  A JSON object containing the selected company
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *              {
 *                  company: {}
 *              }
 *
 * @apiError UserNotFound The user is not authorized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "client not found"
 *     }
 */

 