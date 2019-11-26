
 /**
 * @api {get} statistics/${companyID} Get Company Statistics
 * @apiName Get Statistics
 * @apiGroup Statistics
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": companyID
 *     }
 *
 * @apiSuccess {List} Statistics  List of company statistics
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *           "statistics": []
 *         }
 *
 * @apiError Statistics No statistics available.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 NOT FOUND
 *     {
 *       "error": "No statistics available"
 *     }
 */
