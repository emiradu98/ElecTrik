
 /**
 * @api {get} orders/${companyID} Get Company Orders
 * @apiName Get Orders
 * @apiGroup Orders
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
 * @apiSuccess {json} message json  Orders List
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *              [
 *                  {
 *                      id: string,
 *                      client: string,
 *                      isDelivered: boolean,
 *                      location: string,
 *                      orderID: string
 *                  }
 *              ]
 *
 * @apiError Unauthorized 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "User is not authorized"
 *     }
 */




 /**
 * @api {put} orders/${orderID} Update Order
 * @apiName Update Order
 * @apiGroup Orders
 *
 * @apiHeaderExample  {json} Request Header:
        {
              "Authorization": Bearer
        }
 *
 * @apiParamExample {json} ID:
 * {
 *        "id": orderID
 * }
 *
 * @apiSuccess {json} message json  Update message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *                  {
 *                      id: string,
 *                      client: string,
 *                      isDelivered: boolean,
 *                      location: string,
 *                      orderID: string
 *                  }
 *
 * @apiError Unauthorized 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "User is not authorized"
 *     }
 */


 /**
 * @api {get} orders/my Get My Orders
 * @apiName Get My Orders
 * @apiGroup Orders
 *
 * @apiHeaderExample  {json} Request Header:
        {
              "Authorization": Bearer
        }
 *
 * @apiParamExample {json} ID:
 * {
 *        "id": userID
 * }
 *
 * @apiSuccess {json} message json  Orders List
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *              [
 *                  {
 *                      id: string,
 *                      client: string,
 *                      isDelivered: boolean,
 *                      location: string,
 *                      orderID: string
 *                  }
 *              ]
 *
 * @apiError Unauthorized 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "User is not authorized"
 *     }
 */
