const {Router} = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')
const { getAlluser, authDelete, updateUser, getUserId, getContect, ContectDelete,getAllblogs,blogsDelete } = require('../Controllers/admin-controller')
const router = Router()

//blog

router.route('/users').get(authMiddleware,adminMiddleware, getAlluser)
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,authDelete)
router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,updateUser)
router.route('/user/:id').get(authMiddleware,adminMiddleware,getUserId)
///contect
router.route('/contect').get(authMiddleware,adminMiddleware,getContect)
router.route('/contect/delete/:id').delete(authMiddleware,adminMiddleware,ContectDelete)
//blog
router.route('/blogs').get(authMiddleware,adminMiddleware,getAllblogs)
router.route('/blogs/delete/:id').delete(authMiddleware,adminMiddleware,blogsDelete)
module.exports = router

