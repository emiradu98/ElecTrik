
 /**
 * @api {post} payment/${userID}  Buy Product
 * @apiName Buy Product
 * @apiGroup Payments
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *     {
 *       "productID": string
 *     }
 *
 * @apiSuccess {Object} OrderInformation  Informations of the order
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *           "id": "orderID",
 *           "price": number,
 *           "productID": id
 *           "discount": number,
 *           "arriveDate": date,
 *         }
 *
 * @apiError Product The product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 NOT FOUND
 *     {
 *       "error": "Product not found"
 *     }
 */