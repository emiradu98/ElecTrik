
 /**
 * @api {post} product Create Product
 * @apiName Create Product
 * @apiGroup Products
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *     {
 *       "productName": string,
 *       "price": number,
 *       "type": string,
 *       "stock": number,
 *       "discount": number,
 *       "description": string,
 *       "pictures": array
 *     }
 *
 * @apiSuccess {object} ProductInformation  Informations of the product
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *           "id": "productID",
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