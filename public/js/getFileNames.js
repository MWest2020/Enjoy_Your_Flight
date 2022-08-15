const fs = require('fs')

exports.getFileNames = (type, dir) => {
    const arr = []

    const files = fs.readdirSync(dir)
    for (const file of files) {
        if (file.includes(type)) {
            let slicedName;
            slicedName = file.slice(0, -4)
            arr.push(slicedName)
        }
    }
    return arr;
}

exports.getPathNames = (type, dir) => {
    const arr = []

    const files = fs.readdirSync(dir)
    for (const file of files) {
        if (file.includes(type)) {
            arr.push(file)
        }
    }
    return arr;
}
