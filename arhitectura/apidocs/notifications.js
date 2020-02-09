
 /**
 * @api {get} notifications Get Notifications
 * @apiName Get Notifications
 * @apiGroup Notifications
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
 * @apiSuccess {json} message json  Notifications Company
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *              [
 *                  {
 *                      id: string,
 *                      name: string,
 *                      isRead: boolean,
 *                      text: string,
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
 * @api {post} notifications Create Notification
 * @apiName Create Notifications
 * @apiGroup Notifications
 *
 * @apiHeaderExample  {json} Request Header:
        {
              "Authorization": Bearer
        }
 *
 *
 * @apiParamExample {json} Body:
 *          {
 *              "orderID": string,
 *              "message": string,
 *              "isImportant": boolean
 *          }
 * @apiSuccess {json} message json  Message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *         {
 *              "message": "success!"
 *         }
 *
 *
 *
 * @apiError Unauthorized
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "User is not authorized"
 *     }
 */

