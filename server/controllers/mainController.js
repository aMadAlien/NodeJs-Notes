/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
    const locals = {
        title: "NodeJs Notes",
        description: "Free NodeJs Notes App"
    }

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    })
}


/**
 * GET /
 * Aboutpage
 */

exports.aboutpage = async (req, res) => {
    const locals = {
        title: "NodeJs Notes",
        description: "Free NodeJs Notes App"
    }

    res.render('index', locals)
}
