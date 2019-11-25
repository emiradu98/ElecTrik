/**
 * @api {get} users/me  User information
 * @apiName Get User
 * @apiGroup Users
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }
 *
 * @apiSuccess {String} id Unique ID of the User.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} role  Role of the User.
 * @apiSuccess {Array} companies  List of User companies.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "userID"
 *       "firstname": "John",
 *       "lastname": "Doe",
 *       "role": "supplier",
 *       "companies": [
 *          {
 *           "id": "companyID",
 *           "name": "companyName"
 *           "locations": [
 *                  {
 *                      "id": "subsidiaryID",
 *                      "address": "address",
 *                      "subsidiaryName": "Name of the subsidiary"
 *                  },
 *                  {
 *                      "id": "subsidiaryID",
 *                      "address": "address",
 *                      "subsidiaryName": "Name of the subsidiary"
 *                  }
 *              ]
 *           }
 *        ]
 *     }
 *
 * @apiError UserNotFound The user is not authorized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized"
 *     }
 */

 /**
 * @api {get} users/${userID}/companies  User Companies
 * @apiName Get User Companies
 * @apiGroup Users
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": userID
 *     }
 *
 * @apiSuccess {Array} companies  List of User companies.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "companies": [
 *          {
 *           "id": "companyID",
 *           "name": "companyName"
 *           "locations": [
 *                  {
 *                      "id": "subsidiaryID",
 *                      "address": "address",
 *                      "subsidiaryName": "Name of the subsidiary"
 *                  },
 *                  {
 *                      "id": "subsidiaryID",
 *                      "address": "address",
 *                      "subsidiaryName": "Name of the subsidiary"
 *                  }
 *              ]
 *           }
 *        ]
 *     }
 *
 * @apiError UserNotFound The user is not authorized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized"
 *     }
 */


  /**
 * @api {put} users/${userID} Update user
 * @apiName Update User
 * @apiGroup Users
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": userID,
 *       "role": role
 *     }
 *
 * @apiSuccess {Object} user  Updated user details.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "userID"
 *       "firstname": "John",
 *       "lastname": "Doe",
 *       "role": newRole,
 *       "companies": [
 *          {
 *           "id": "companyID",
 *           "name": "companyName"
 *           "locations": [
 *                  {
 *                      "id": "subsidiaryID",
 *                      "address": "address",
 *                      "subsidiaryName": "Name of the subsidiary"
 *                  },
 *                  {
 *                      "id": "subsidiaryID",
 *                      "address": "address",
 *                      "subsidiaryName": "Name of the subsidiary"
 *                  }
 *              ]
 *           }
 *        ]
 *     }
 *
 * @apiError UserNotFound The user is not authorized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized"
 *     }
 */


   /**
 * @api {delete} users/${userID} Delete user
 * @apiName Delete User
 * @apiGroup Users
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": userID,
 *     }
 *
 * @apiSuccess {json} message  Deleted user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": message
 *     }
 *
 * @apiError UserNotFound The user is not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Not found"
 *     }
 */



   /**
 * @api {get} users Get users
 * @apiName Get Users
 * @apiGroup Users
 *
 * @apiHeaderExample  {json} Header:
                 { "Authorization": "Bearer" }


 * @apiParamExample {json} Request-Example:
 *          {
 *              "id": userID,
 *          }
 *
 * @apiSuccess {Array} user  Shows all users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "id": "userID"
 *              "firstname": "John",
 *              "lastname": "Doe",
 *              "role": newRole,
 *              "companies": [
 *                  {
 *                      "id": "companyID",
 *                      "name": "companyName"
 *                      "locations": [
 *                          {
 *                              "id": "subsidiaryID",
 *                              "address": "address",
 *                              "subsidiaryName": "Name of the subsidiary"
 *                          },
 *                          {
 *                              "id": "subsidiaryID",
 *                              "address": "address",
 *                              "subsidiaryName": "Name of the subsidiary"
 *                           }
 *                      ]
 *                  }
 *              ]
 *          }
 *     ]
 *
 * @apiError UserNotFound The user is not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Not found"
 *     }
 */
