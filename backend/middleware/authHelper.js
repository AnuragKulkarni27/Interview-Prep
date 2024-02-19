import JWT from 'jsonwebtoken'

export const requireSignIn = async(req,res,next) => {
    try {
        if(req.headers.authorization) {
            const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
            req.user = decode // for including user data
            next() // will continue the next processes
        }
    }
    catch(err) {
        console.log(err);
    }
}