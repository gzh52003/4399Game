const {
	Router,
	urlencoded,
	json
} = require('express')

const router = Router()
const session = require('express-session')
const token = require('../utils/token')
const {formatData} = require('../utils/tools')

const userRouter = require('./user')
const goodsRouter = require('./goods')
const regRouter = require('./reg')
const cors =require('../filter/cors')
const vcodeRouter = require('./vcode')
const loginRouter = require('./login')
const uploadRouter = require('./upload.js')
const orderRouter = require('./order')
const cartRouter = require('./cart.js')
const mygameRouter = require('./mygame')

router.use(cors)

//数据格式化中间件
router.use(urlencoded({extended: false}), json())

router.use(session({
    secret: 'hzl',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        // 设置cookie有效期
        maxAge: 1000*60*60*2
    }
}))

// /api/user
//用户操作接口
router.use('/user', userRouter)
//
router.use('/goods', goodsRouter)

router.use('/reg', regRouter)
router.use('/login', loginRouter)
router.use('/upload', uploadRouter)
router.use('/order', orderRouter)
router.use('/cart', cartRouter)
router.use('/mygame',mygameRouter)
//校验token
router.get('/jwtverify', (req, res) => {
	const {authorization} = req.query
	
	if (token.verify(authorization)) {
		res.send(formatData())
	} else {
		res.send(formatData({
			code: 0
		}))
	}
})

//
router.use('/vcode',vcodeRouter)
module.exports = router
