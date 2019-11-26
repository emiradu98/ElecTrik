
 /**
 * @api {post} products Create Product
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
 *           "orderID": "orderID"
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



 /**
 * @api {delete} products/${productID} Delete Product
 * @apiName Delete Product
 * @apiGroup Products
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": string
 *     }
 *
 * @apiSuccess {object} Message  API Response message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *           "message": "Product was deleted successfully"
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


 

  /**
 * @api {put} products/${productID} Update Product
 * @apiName Update Product
 * @apiGroup Products
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": string,
 *       "price": number
 *     }
 *
 * @apiSuccess {object} Message  API Response message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *           "message": "Product was updated successfully"
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


   /**
 * @api {get} products/latest Get Latest Products
 * @apiName Get Latest Products
 * @apiGroup Products
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *     {
 *       "location": string,
 *     }
 *
 * @apiSuccess {object} Message  List of Products around my location
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *           "products": []
 *         }
 *
 * @apiError Product No products around.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 NOT FOUND
 *     {
 *       "error": "No products around"
 *     }
 */


   /**
 * @api {get} products/my Get My Products
 * @apiName Get My Products
 * @apiGroup Products
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": string,
 *     }
 *
 * @apiSuccess {object} Message  List of My Products
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *           "products": []
 *         }
 *
 * @apiError Product No products.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 NOT FOUND
 *     {
 *       "error": "No products"
 *     }
 */