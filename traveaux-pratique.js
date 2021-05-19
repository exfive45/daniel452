const fs = require('fs')

fs.readFile('./contain/subfolder/first.txt', 'utf8', (err, result) =>{
    if (err){
        console.log(err);
        return
    }
    const first = result
    fs.readFile('./contain/subfolder/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err);
            return
        }

        const second = result
        fs.writeFile('./contain/subfolder/famine', ` bonjour mon frère j'ai faim : ${first} ${second}`, (err, result) => {
            if (err){
                console.log(err);
                return
            }
            console.log(result);
        })

    })

})